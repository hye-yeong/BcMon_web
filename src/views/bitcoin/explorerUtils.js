/*
const Client = require('bitcoin-core');
const client = new Client({
  network: 'mainnet',
  username: '',
  password: '',
  host: '127.0.0.1',
  port: '8332',
});
*/

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

export function makeBlockData(blockHeight = 0) {
  return range(blockHeight).map(d => {
    return {
      height: d,
      timestamp: "time",
      age: "age",
      miner: "miner",
      transactions: "transactions",
      averageFee: "time",
      size: "time",
      weight: "time"
    };
  });
}
