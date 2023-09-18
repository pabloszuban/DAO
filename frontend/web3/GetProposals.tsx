import { useEffect, useState } from "react";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import useGovernorEvents from "../web3/useGovernorEvents";
import ProposalCard from "../web3/ProposalCard";
import getProposalState from "../web3/getProposalState";

export default function GetProposals() {
  const { events: proposals, getEvents: getProposals } =
    useGovernorEvents("ProposalCreated");
  useEffect(() => {
    getProposals();
  }, []);

  const { events: votes, getEvents: getVotes } = useGovernorEvents("VoteCast");
  useEffect(() => {
    getVotes();
  }, []);

  //console.log("proposaaaaaaaaaaals:")
  //console.log(proposals);

  const [showSucceededProposals, setShowSucceededProposals] = useState(false);
  const [showDefeatedProposals, setShowDefeatedProposals] = useState(false);
  const [showPendingProposals, setShowPendingProposals] = useState(false);
  const [showActiveProposals, setShowActiveProposals] = useState(false);
  const [showCanceledProposals, setShowCanceledProposals] = useState(false);
  const [showQueuedProposals, setShowQueuedProposals] = useState(false);
  const [showExpiredProposals, setShowExpiredProposals] = useState(false);
  const [showExecutedProposals, setShowExecutedProposals] = useState(false);

  const [SucceededProposals, setSucceededProposals] = useState([]);
  const [DefeatedProposals, setDefeatedProposals] = useState([]);
  const [PendingProposals, setPendingProposals] = useState([]);
  const [ActiveProposals, setActiveProposals] = useState([]);
  const [CanceledProposals, setCanceledProposals] = useState([]);
  const [QueuedProposals, setQueuedProposals] = useState([]);
  const [ExpiredProposals, setExpiredProposals] = useState([]);
  const [ExecutedProposals, setExecutedProposals] = useState([]);

  // Obtén el estado de todas las propuestas cuando se monta el componente
  useEffect(() => {
    proposals.forEach((proposal) => {
      getProposalState(proposal.data.proposalId).then((state) => {
        switch (state) {
          case "Succeeded":
            setSucceededProposals((prevProposals) => [...prevProposals, proposal]);
            break;
          case "Defeated":
            setDefeatedProposals((prevProposals) => [...prevProposals, proposal]);
            break;
          case "Pending":
            setPendingProposals((prevProposals) => [...prevProposals, proposal]);
            break;
          case "Active":
            setActiveProposals((prevProposals) => [...prevProposals, proposal]);
            break;
          case "Canceled":
            setCanceledProposals((prevProposals) => [...prevProposals, proposal]);
            break;
          case "Queued":
            setQueuedProposals((prevProposals) => [...prevProposals, proposal]);
            break;
          case "Expired":
            setExpiredProposals((prevProposals) => [...prevProposals, proposal]);
            break;
          case "Executed":
            setExecutedProposals((prevProposals) => [...prevProposals, proposal]);
            break;
          default:
            break;
        }
      });
    });
  }, [proposals]);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        style={{ backgroundColor: '#4CAF50' }}
        onClick={() => setShowSucceededProposals(!showSucceededProposals)}
      >
        Succeeded
      </Button>
      {showSucceededProposals && (
        <List>
          {SucceededProposals.map((proposal) => (
            <ProposalCard
              key={proposal.data.proposalId}
              proposal={proposal}
              proposalVotes={votes.filter(
                (vote) => vote.data.proposalId === proposal.data.proposalId
              )}
            />
          ))}
        </List>
      )}
      <Button
        variant="contained"
        color="primary"
        style={{ backgroundColor: '#4CAF50' }}
        onClick={() => setShowDefeatedProposals(!showDefeatedProposals)}
      >
        Defeated
      </Button>
      {showDefeatedProposals && (
        <List>
          {DefeatedProposals.map((proposal) => (
            <ProposalCard
              key={proposal.data.proposalId}
              proposal={proposal}
              proposalVotes={votes.filter(
                (vote) => vote.data.proposalId === proposal.data.proposalId
              )}
            />
          ))}
        </List>
      )}
      <Button
        variant="contained"
        color="primary"
        style={{ backgroundColor: '#4CAF50' }}
        onClick={() => setShowPendingProposals(!showPendingProposals)}
      >
        Pending
      </Button>
      {showPendingProposals && (
        <List>
          {PendingProposals.map((proposal) => (
            <ProposalCard
              key={proposal.data.proposalId}
              proposal={proposal}
              proposalVotes={votes.filter(
                (vote) => vote.data.proposalId === proposal.data.proposalId
              )}
            />
          ))}
        </List>
      )}
      <Button
        variant="contained"
        color="primary"
        style={{ backgroundColor: '#4CAF50' }}
        onClick={() => setShowActiveProposals(!showActiveProposals)}
      >
        Active 
      </Button>
      {showActiveProposals && (
        <List>
          {ActiveProposals.map((proposal) => (
            <ProposalCard
              key={proposal.data.proposalId}
              proposal={proposal}
              proposalVotes={votes.filter(
                (vote) => vote.data.proposalId === proposal.data.proposalId
              )}
            />
          ))}
        </List>
      )}
      <Button
        variant="contained"
        color="primary"
        style={{ backgroundColor: '#4CAF50' }}
        onClick={() => setShowCanceledProposals(!showCanceledProposals)}
      >
        Canceled
      </Button>
      {showCanceledProposals && (
        <List>
          {CanceledProposals.map((proposal) => (
            <ProposalCard
              key={proposal.data.proposalId}
              proposal={proposal}
              proposalVotes={votes.filter(
                (vote) => vote.data.proposalId === proposal.data.proposalId
              )}
            />
          ))}
        </List>
      )}
      <Button
        variant="contained"
        color="primary"
        style={{ backgroundColor: '#4CAF50' }}
        onClick={() => setShowQueuedProposals(!showQueuedProposals)}
      >
        Queued
      </Button>
      {showQueuedProposals && (
        <List>
          {QueuedProposals.map((proposal) => (
            <ProposalCard
              key={proposal.data.proposalId}
              proposal={proposal}
              proposalVotes={votes.filter(
                (vote) => vote.data.proposalId === proposal.data.proposalId
              )}
            />
          ))}
        </List>
      )}
      <Button
        variant="contained"
        color="primary"
        style={{ backgroundColor: '#4CAF50' }}
        onClick={() => setShowExpiredProposals(!showExpiredProposals)}
      >
        Expired
      </Button>
      {showExpiredProposals && (
        <List>
          {ExpiredProposals.map((proposal) => (
            <ProposalCard
              key={proposal.data.proposalId}
              proposal={proposal}
              proposalVotes={votes.filter(
                (vote) => vote.data.proposalId === proposal.data.proposalId
              )}
            />
          ))}
        </List>
      )}
      <Button
        variant="contained"
        color="primary"
        style={{ backgroundColor: '#4CAF50' }}
        onClick={() => setShowExecutedProposals(!showExecutedProposals)}
      >
        Executed
      </Button>
      {showExecutedProposals && (
        <List>
          {ExecutedProposals.map((proposal) => (
            <ProposalCard
              key={proposal.data.proposalId}
              proposal={proposal}
              proposalVotes={votes.filter(
                (vote) => vote.data.proposalId === proposal.data.proposalId
              )}
            />
          ))}
        </List>
      )}
    </div>
  );
}

