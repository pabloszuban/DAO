import { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { metaMaskContext } from "./ConnectWallet";
import { governorContract } from "./loadContract";
import governorContractInfo from "../../deployments/mumbai/GovernorContract.json";

export default function VoteButtons({ proposalId, reason }) {
  // we get the metamask state because we need to be connected to vote
  const { isConnected, account } = useContext(metaMaskContext);
  console.log("Connected: ", isConnected);
  const [voted, setVoted] = useState([false, -1]);
  useEffect(() => {
    if (voted[0]) {
      const transact = async () => {
        try {
          console.log("Voting...", voted[1]);
          //const voteTx = await governorContract.methods.castVote(
          //  proposalId,
          //  voted[1]
          //);
          const voteTx = await governorContract.methods.castVoteWithReason(proposalId, voted[1], reason)
          //set up transaction parameters
          const transactionParameters = {
            to: governorContractInfo.address, // Required except during contract publications.
            from: account, // must match user's active address.
            data: voteTx.encodeABI(),
          };
          const txHash = await window.ethereum.request({
            method: "eth_sendTransaction",
            params: [transactionParameters],
          });
          console.log(txHash);
        } catch (err) {
          console.log(err);
        }
      };
      transact();
    }
  }, [voted]);
  // 0 = Against, 1 = For, 2 = Abstain for this example

  if (isConnected) {
    return (
      <>
        <Button onClick={() => setVoted([true, 1])}>For</Button>
        <Button onClick={() => setVoted([true, 2])}>Abstain</Button>
        <Button onClick={() => setVoted([true, 0])}>Against</Button>
      </>
    );
  }
  return <div>Connect your wallet to vote</div>;
}