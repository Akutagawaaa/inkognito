import { ethers } from "ethers";
import identiFi from "./IdentiFi.json";

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;
  if (ethereum) {
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract(
      "0x265D2beA3705af20d88E6c2cDAe35aeB5fb04918",
      identiFi.abi,
      signer
    );

    return contractReader;
  }
};
