const ethers = require("ethers");
const express = require("express");
const router = express.Router();
// Import Moralis
const Moralis = require("moralis").default;
// Import the EvmChain dataType
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const chain = EvmChain.MUMBAI;

const governorInfo = require("../deployments/mumbai/GovernorContract.json");

const abi = governorInfo.abi.filter((x) => x.type === "event");// filtramos el abi para que solo nos devuelva los eventos
const address = governorInfo.address;

// query to moralis to get all the events of a certain type (e.g. ProposalCreated)

// Creamos la función getEvents que recibe como parámetros el nombre del evento y el topic, donde el topic es una encodificación del nombre del evento. Tambien necesita el address del contrato y el abi del contrato (sacado de governorInfo), pero solo la parte correspondiente al evento que queremos obtener. Como resultado nos da todos los eventos con cierto nombre que se han producido en el contrato.
async function getEvents(topic, abi) {
  data = await Moralis.EvmApi.events.getContractEvents({
    chain, // La chain en la que estamos trabajando
    topic: topic,
    address: address,// la dirección del contrato
    abi: abi,
  });
  return data;
}

router.get("/events/:name/:topic", async (req, res) => {
  try {
    eventABI = abi.filter((x) => x.name === req.params.name)[0];// filtramos el abi para que solo nos devuelva el evento que queremos dado su nombre
    const data = await getEvents(req.params.topic, eventABI);// le pasamos a getEvents el topic y el abi del evento que queremos
    res.status(200);
    res.json(data);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;

//Luego este módulo es llamado en index.js, y luego se hace una petición a este módulo desde el frontend en useGovernorEvents.js