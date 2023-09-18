import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PieController,
  ArcElement,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PieController,
  ArcElement
);

export default function VotesPieChart({ votes }: { votes: number[] }) {
  let totalVotes = 0;
  votes.forEach((optionVotes) => (totalVotes += optionVotes));

  const data = {
    labels: ["Against", "For", "Abstain"],
    datasets: [
      {
        data: votes,
        backgroundColor: ["rgb(255, 0, 0)", "rgb(0, 0, 255)", "rgb(0, 128, 0)"], // Rojo, Azul, Verde
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
      title: {
        display: true,
        text: `Total Votes: ${totalVotes}`,
      },
    },
  };

  return (
    <Box margin={1}>
      <div style={{ width: "900px", height: "200px" }}>
        <Pie data={data} options={options} />
      </div>
    </Box>
  );
}
