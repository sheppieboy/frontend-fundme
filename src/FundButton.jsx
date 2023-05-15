import { ethers } from 'ethers';

const FundButton = () => {
  const fund = async () => {
    if (typeof window.ethereum !== 'undefined') {
      //provider .connection to blockchain
      const provider = new ethers.BrowserProvider(window.ethereum);
      //signer / wallet
      const signer = await provider.getSigner();
      //contract that we are interacting with, need ABI and Address
      console.log(signer);
    } else {
      console.log('please install metamask');
    }
  };

  return <button onClick={fund}>Fund</button>;
};

export default FundButton;
