## sample

[![smple](./sample.gif)]()

## 仕様コマンド

await router.buyTokenRouter(tA.address, "100","1000000000000000000000" , {from:accounts[0] , value:"100"})
await router.sellTokenRouter(tA.address, "100","100000000000000000000" , {from:accounts[0] , value:"100"})
`buyTokenRouter`コントラクトメソッド
`tA.address`トークンコントラクト
`100`
`1000000000000000000000`売買数量
`{from:accounts[0] ` 送信先のアドレス
`, value:"100"}`

#### Ganache

`truffle-config.js`を読み取る
network が立ち上がる

---

#### Truffle

```

truffle migrate --network development

```

migrate のネットワークを指定する

```

truffle console

```

対話

```

const Contract = await Contract.deployed();

```

コントラクト初期化

```

const Contract = await Contract.at(コントラクトアドレス)

```

コントラクト本人の初期化

> 注意

<!-- :::note warn -->

コントラクトアドレスのコントラクト初期化と、
コントラクトの初期化は別物です！

<!-- ::: -->

## MEMO

#### truffle-config.js

```
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
```

## web3 commands

https://web3js.readthedocs.io/en/v1.2.11/web3-eth.html

### 確認用

私はこれでなんとなく動きを理解しました。

```

web3.eth.getBlockNumber()

```

```
//1eth
web3.eth.sendTransaction({from: accounts[1] , to: accounts[2] , value:"1000000000000000000"})
```

response

```

{
  transactionHash: 'ADDRESS',
  transactionIndex: 0,
  blockHash: 'ADDRESS',
  blockNumber: 12,
  from: 'ADDRESS',
  to: 'ADDRESS',
  gasUsed: 21000,
  cumulativeGasUsed: 21000,
  contractAddress: null,
  logs: [],
  status: true,
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
}

```

```

web3.eth.getBalance(accounts[1])
web3.eth.getBalance(accounts[2])

```

```
web3.currentProvider
```

現在のフロバイダー情報
response

```
HttpProvider {
  withCredentials: false,
  timeout: 0,
  headers: undefined,
  agent: undefined,
  connected: true,
  host: 'http://127.0.0.1:7545',
  httpAgent: Agent {
    _events: [Object: null prototype] {
      free: [Function (anonymous)],
      newListener: [Function: maybeEnableKeylog]
    },
    _eventsCount: 2,
    _maxListeners: undefined,
    defaultPort: 80,
    protocol: 'http:',
    options: [Object: null prototype] { keepAlive: false, path: null },
    requests: [Object: null prototype] {},
    sockets: [Object: null prototype] {},
    freeSockets: [Object: null prototype] {},
    keepAliveMsecs: 1000,
    keepAlive: false,
    maxSockets: Infinity,
    maxFreeSockets: 256,
    scheduling: 'lifo',
    maxTotalSockets: Infinity,
    totalSocketCount: 0,
    [Symbol(kCapture)]: false
  },
  send: [Function (anonymous)],
  _alreadyWrapped: true
}

```

デフォルトのアカウント確認・セット

```

web3.eth.defaultAccount;
> undefined

web3.eth.defaultAccount = 'address';

web3.eth.defaultAccount = 'address';
'address'

web3.eth.defaultAccount;
'address'


```

getProtocolVersion

```

web3.eth.getProtocolVersion()

```

### 出現率高そう

getTransaction
指定されたトランザクションハッシュに一致するトランザクションを返します。
このあたりはよく使いそう

```
web3.eth.getTransaction('transactionHash').then(console.log);
```

```
web3.eth.getTransactionReceipt('transactionHash').then(console.log);

```

signTransaction
web3.eth.accounts.signTransaction を使用して生成された、すでに署名されたトランザクションを送信します。

```

web3.eth.sendSignedTransaction(signedTransactionData [, callback])

```

EstimateGas
メッセージ呼び出しまたはトランザクションを実行し、使用されたガスの量を返します。

```

web3.eth.estimateGas(callObject [, callback])

```

getProof
マークルプルーフを含む、指定されたアカウントのアカウントとストレージ値を返します。

```

web3.eth.estimateGas(callObject [, callback])

```

### 実装では必要そう

BatchRequest
バッチリクエストを作成して実行するクラス。

```
var contract = new web3.eth.Contract(abi, address);

var batch = new web3.BatchRequest();
batch.add(web3.eth.getBalance.request('0x0000000000000000000000000000000000000000', 'latest', callback));
batch.add(contract.methods.balance(address).call.request({from: '0x0000000000000000000000000000000000000000'}, callback2));
batch.execute();
```

handleRevert
多分トランザクション中のエラー処理で使用しそう

```

web3.eth.handlRevert;
> false

// turn revert handling on
web3.eth.handleRevert = true;

```

getStorageAt

```
web3.eth.getStorageAt("CONTRACT_ADDRESS", 0)

```

ビルドパスを指定

## ropsten deploy

１ニーモニックに対して、
１０のアカウントが生成されている
test 用の Wallet を作成した場合は、
そのアカウントに ETH を移動しないといけない

```

npx truffle console --network ropsten

```
