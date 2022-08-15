
import {useEffect, useState} from 'react';
import { ethers } from 'ethers';
import { Wrapper} from '../components/Components';

const ID = '39625d42c4da40a9b8e572e29d93d14c'
function Main() {
  const [p, setP] = useState<{}>();

  useEffect(() => {
    (async () => {
      const provider = new ethers.providers.JsonRpcBatchProvider(
        `https://mainnet.infura.io/v3/${ID}`
      );
      const balance = await provider.getBalance('0x0021e909ac45a92524b6b2a67e8a050ce1ed9935');
      console.log(ethers.utils.formatEther(balance))
    })()
  }, [])
  return (
    <Wrapper>
      Main
    </Wrapper>
  );
}
export default Main;
