import { governorContract } from "../web3/loadContract";
// the Proposal State is an enum data type, defined in the IGovernor contract.
// 0:Pending, 1:Active, 2:Canceled, 3:Defeated, 4:Succeeded, 5:Queued, 6:Expired, 7:Executed
export default async function getProposalState(proposalId) {
  let state = await governorContract.methods.state(proposalId).call();
  const stateNames = [
    "Pending",
    "Active",
    "Canceled",
    "Defeated",
    "Succeeded",
    "Queued",
    "Expired",
    "Executed",
  ];
  //console.log("state");
  //console.log(stateNames[state]);

  return stateNames[state];
}