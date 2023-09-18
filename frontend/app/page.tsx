"use client";
import Grid from "@mui/material/Grid";
import useMetaMaskState, { metaMaskContext} from "../web3/ConnectWallet";
import Header from "../components/Header";
//import GetTokenBalance from "@/web3/GetMyTokensBalance";
//import BoxValue from "@/web3/BoxValue";
import GetProposals from "../web3/GetProposals";



function HomePage() {
  const { isConnected, account, connectToMetaMask } = useMetaMaskState();

  const gridStyle = {
    backgroundColor: "#DFF0D8", // Cambia el color de fondo según tus preferencias
    minHeight: "100vh", // Asegura que el Grid tenga al menos la altura de la ventana
  };

  return (
    <metaMaskContext.Provider value={{ isConnected, account }}>
      <Grid style={gridStyle}>
        <Header connectToMetaMask={connectToMetaMask} />
        <Grid margin={2}>
          <GetProposals />
        </Grid>
      </Grid>
    </metaMaskContext.Provider>
  );
}

export default HomePage;