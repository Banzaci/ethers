
import {useEffect, useState} from 'react';
import { ethers } from 'ethers';
import { Wrapper} from '../components/Components';
import abi from './abi.json';

const MAINNET_ID = '39625d42c4da40a9b8e572e29d93d14c'
const ADDRESS = '0x6B175474E89094C44Da98b954EedeAC495271d0F';

const ERC20_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function totalSupply() view returns (uint256)',
  'function balanceOf(address) view returns (unit)',
]

type SupplyType = {
  type:number;
  hex: string;
}

function Contract() {
  const [name, setName] = useState<string>('');
  const [symbol, setSymbol] = useState<string>('');
  const [supply, setSupply] = useState<string>();
  const [balance, setBalanceOf] = useState<string>();

  useEffect(() => {
    (async () => {
      const provider = new ethers.providers.JsonRpcBatchProvider(
        `https://mainnet.infura.io/v3/${MAINNET_ID}`
      );
      const contract = new ethers.Contract(
        ADDRESS,
        ERC20_ABI,
        provider
      );
      
      setName(await contract.name())
      setSymbol(await contract.symbol())
      setSupply(ethers.utils.formatEther(await contract.totalSupply()))
      // setBalanceOf(await contract.balanceOf('0xd50afa0adb69af25eb66625ce9d842855d6c4072'));
    })()
  }, [])
  return (
    <Wrapper>
      <p>{name}</p>
      <p>{symbol}</p>
      <p>{supply}</p>
    </Wrapper>
  );
}
export default Contract;
