const express = require("express");
// Import Moralis
const Moralis = require("moralis").default;

// all queries in this routes use moralis
// all queries are made to the deployment in sepolia of our DAO

require("dotenv").config(); // for using the env variables

const app = express();
const port = 4000;

// we allow the frontend to get data from our backend
cors = require("cors");

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

// we begin to define the routes

app.get("/", (req, res) => {
  res.send(`HOME`);
});

//native balance (the amount of ETH in the wallet)
//just to test the conection to the wallet
//demoRouter = require("./getDemoData");
//app.use("/", demoRouter);

//Token Balance of Governnace Token
//tokenBRouter = require("./getTokenBalance");
//app.use("/", tokenBRouter);

// Events that have been emited by the Governor Contract
proposalsRouter = require("./getGovernorEvents");
app.use("/", proposalsRouter);

// Add this a startServer function that initialises Moralis
const startServer = async () => {
  await Moralis.start({
    apiKey: "AMVIYMOu64Q9WERJojTWwNqg1uwblPIkK4m77T4uWPz2cUSjOGWtyUkSBaUkGFk3",
  });

  app.listen(port, () => {
    console.log(`server listening on http://localhost:${port}`);
  });
};

// Call startServer()
startServer();