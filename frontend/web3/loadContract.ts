//require("dotenv").config();
const alchemyKey = "https://polygon-mumbai.g.alchemy.com/v2/9eaTlfTLUUmjta4WrsZBi5S8ibk5-Wal";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

const governorContractInfo = require("../../deployments/mumbai/GovernorContract.json");

export const governorContract = new web3.eth.Contract(
  governorContractInfo.abi,
  governorContractInfo.address
  );