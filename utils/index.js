import { ethers } from "ethers";
import identiFi from "./inKognito.json";

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;
  if (ethereum) {
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract(
      "0xB5f1a8a8F8824A99C26644C7d6C4F911C2038136",
      identiFi.abi,
      signer
    );

    return contractReader;
  }
};
