const ConnectButton = () => {
  const connect = async () => {
    if (typeof window.ethereum !== 'undefined') {
      console.log('LETS GOOO');
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    } else {
      console.log('No MetaMask installed');
    }
  };

  return <button onClick={connect}>CONNNECTTTTTTTTT</button>;
};

export default ConnectButton;
