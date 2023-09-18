import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { metaMaskContext } from "../web3/ConnectWallet";

export default function Header({
  connectToMetaMask,
}: {
  connectToMetaMask: () => void;
}) {
  const { isConnected, account } = React.useContext(metaMaskContext);

  // Estilo personalizado para el botón
  const buttonStyle = {
    backgroundColor: isConnected ? "#4CAF50" : "transparent", // Color de fondo verde cuando está conectado
    color: isConnected ? "#FFF" : "#000", // Texto blanco cuando está conectado
    border: isConnected ? "none" : "1px solid #000", // Borde cuando no está conectado
    borderRadius: "4px", // Bordes redondeados
    padding: "10px 20px", // Espaciado interno
  };

  // Estilo para el ícono de verificación
  const checkIconStyle = {
    color: "white", // Color blanco para el ícono de verificación
    marginRight: "8px", // Espacio entre el ícono y el texto
  };

  // Componente que muestra el botón de conexión o el mensaje conectado
  let connectButton;
  if (!isConnected) {
    connectButton = (
      <Button
        color="inherit"
        onClick={connectToMetaMask}
        style={buttonStyle}
      >
        Connect MetaMask
      </Button>
    );
  } else {
    connectButton = (
      <Stack align="center">
    <div style={{ display: "flex", alignItems: "center" }}>
      <Typography>Connected successfully!</Typography>
      <CheckCircleOutlineIcon style={checkIconStyle} />
    </div>
  </Stack>
    );
  }

  return (
    <Box position="sticky" sx={{ flexGrow: 1, backgroundColor: "#8bc34a" }}>
      <AppBar position="static" sx={{ backgroundColor: '#4CAF50' }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            DAO app
          </Typography>
          {connectButton}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
