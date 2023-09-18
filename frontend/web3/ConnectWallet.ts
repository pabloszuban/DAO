import { ethers } from "ethers";
import { useState, createContext } from "react";

type metaMaskStateType = {
  isConnected: boolean;
  account: string;
};

export const metaMaskContext = createContext<metaMaskStateType | null>(null);

// we need the context of the metamask account for every transaction
export default function useMetaMaskState() {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState("");

  // connect the account and set the relevant states
  async function connectToMetaMask() {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);

      setIsConnected(true);
      setAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  }
  return { isConnected, account, connectToMetaMask };
}