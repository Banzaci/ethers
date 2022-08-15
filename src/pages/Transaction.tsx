
import {useEffect, useState} from 'react';
import { ethers, Wallet } from 'ethers';
import { Wrapper} from '../components/Components';

const ID = '39625d42c4da40a9b8e572e29d93d14c'

const INFURA_ID = '';

const ACC_1 = '0x9c345fd63B1f6Dcd9cA97e3620fC10dC16A16f1D';
const TO_ACCOUNT = '0xd83d054484400e237e66abdf1f910b30e8387e5b';
const PRIVATE_KEY = ''

function Transaction() {
  const [balanceFrom, setBalanceFrom] = useState<string>();
  const [balanceTo, setBalanceTo] = useState<string>();
  useEffect(() => {
    (async () => {
      const provider = new ethers.providers.JsonRpcBatchProvider(
        `https://mainnet.infura.io/v3/${ID}`
      );

      const senderBalanceFrom = await provider.getBalance('0x9c345fd63B1f6Dcd9cA97e3620fC10dC16A16f1D');
      const senderBalanceTo = await provider.getBalance('0xb36ddb55a227376b83e618832f0cc9c7ef547ecb');
      
      setBalanceFrom(ethers.utils.formatEther(senderBalanceFrom));
      setBalanceTo(ethers.utils.formatEther(senderBalanceTo));

      const wallet = new Wallet(
        PRIVATE_KEY,
        provider
      );
      const tx = await wallet.sendTransaction({
        to: TO_ACCOUNT,
        value: ethers.utils.parseEther('0.025'),
      });

      await tx.wait();
      console.log(tx);

    })()
  }, [])
  return (
    <Wrapper>
      <p>From {balanceFrom}</p>
      <p>To {balanceTo}</p>
    </Wrapper>
  );
}
export default Transaction;

// fake money: https://faucets.chain.link
