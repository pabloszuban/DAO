import axios from "axios";
import { useState } from "react";
const governorContractInfo = require("../../deployments/mumbai/GovernorContract.json");
import { ethers } from "ethers";

// this funtion gets the emit of the event by its name (eventName)
export default function useGovernorEvents(eventName: string) {
  //console.log(governorContractInfo.abi)
  // we make the topic, which is an id for the event that the api requires
  // its the sha3 of eventName(arguments types)
  let topic = eventName + "(";
  governorContractInfo.abi
    .find((x) => x.name === eventName)
    ?.inputs?.map((y) => (topic = topic + y.internalType + ",")); //in the ABI of the event we have the type of the inputs
  topic = topic.replace(/,*$/, ""); //get rid of the last extra comma
  topic += ")";
  topic = ethers.id(topic);
  //console.log("topic");
  //console.log(topic);
  // we make state to keep the events
  const [events, setEvents] = useState([]);

  // and make a function to get the list of events from the backend
  async function getEvents() {
    try {
      await axios
        .get(`http://localhost:4000/events/${eventName}/${topic}`)
        .then((res) => {
          setEvents(res.data.result);
        });
    } catch (err) {
      console.log(err);
    }
  }

  return { events, getEvents };
}