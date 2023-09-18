import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

import getProposalState from "../web3/getProposalState";
import VoteButtons from "./VoteButtons";
import { useState } from "react";
import VotesBar from "@/components/VotesBar";

export default function ProposalCard({ proposal, proposalVotes }) {
  /* we get the state of the proposal and put it on a react state
   because we want to (re)render the proposal according to its current state*/
  const [proposalState, setProposalState] = useState("");
  //console.log(proposal.data.proposalId)
  getProposalState(proposal.data.proposalId).then((state) =>
    setProposalState(state)
  );
  const [reason, setReason] = useState("");

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  }

  // Usar una expresión regular para extraer el título, la descripción y el valor
  const matches1 = proposal.data.description.match(/^(.*?) (\d+) Testing vote proposal$/);
  const matches2 = proposal.data.description.match(/^(.*?) (\d+) in the Box!$/);
  
  let title = "";
  let description = "";
  let value = 0;

  if (matches1) {
    // El título es el primer grupo capturado
    title = matches1[1];
    // La descripción es la cadena completa
    description = proposal.data.description;
    // El valor es el segundo grupo capturado, convertido a número
    value = parseInt(matches1[2], 10);
  }
  if (matches2) {
    // El título es el primer grupo capturado
    title = matches2[1];
    // La descripción es la cadena completa
    description = proposal.data.description;
    // El valor es el segundo grupo capturado, convertido a número
    value = parseInt(matches2[2], 10);
  }

  // count the votes in each option
  const voteCount = [0, 0, 0];
  proposalVotes?.map((vote) => {
    voteCount[vote.data.support] += 1;
  });

  return (
    <ListItem>
      <Card sx={{ width: 650, maxHeight: 300}}>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <CardHeader title={title} subheader={`State: ${proposalState}`} />
            <CardContent>
              <Typography variant="body2" style={{ fontSize: "18px" }}> 
                Description: {description}
              </Typography>
              <Typography variant="body2" style={{ fontSize: "18px" }}>
                Value: {value}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={5}>
            {proposalVotes.length >= 1 && <VotesBar votes={voteCount} />}
          </Grid>
          <Grid item xs={12}>
            <CardActions>
              {proposalState === "Active" && (
                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Escribe tu razón"
                    value={reason}
                    onChange={handleReasonChange}
                  />
                  <VoteButtons proposalId={proposal.data.proposalId} reason={reason} /> 
                </form>
              )}
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </ListItem>
  );
}