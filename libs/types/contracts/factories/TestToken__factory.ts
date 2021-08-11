/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestToken, TestTokenInterface } from "../TestToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200196d3803806200196d8339818101604052810190620000379190620001b9565b818181600390805190602001906200005192919062000091565b5080600490805190602001906200006a92919062000091565b506012600560006101000a81548160ff021916908360ff16021790555050505050620002cb565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620000c9576000855562000115565b82601f10620000e457805160ff191683800117855562000115565b8280016001018555821562000115579182015b8281111562000114578251825591602001919060010190620000f7565b5b50905062000124919062000128565b5090565b5b808211156200014357600081600090555060010162000129565b5090565b60006200015e620001588462000260565b6200022c565b9050828152602081018484840111156200017757600080fd5b6200018484828562000293565b509392505050565b600082601f8301126200019e57600080fd5b8151620001b084826020860162000147565b91505092915050565b60008060408385031215620001cd57600080fd5b600083015167ffffffffffffffff811115620001e857600080fd5b620001f6858286016200018c565b925050602083015167ffffffffffffffff8111156200021457600080fd5b62000222858286016200018c565b9150509250929050565b6000604051905081810181811067ffffffffffffffff82111715620002565762000255620002c9565b5b8060405250919050565b600067ffffffffffffffff8211156200027e576200027d620002c9565b5b601f19601f8301169050602081019050919050565b60005b83811015620002b357808201518184015260208101905062000296565b83811115620002c3576000848401525b50505050565bfe5b61169280620002db6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806370a082311161008c578063a457c2d711610066578063a457c2d71461023c578063a9059cbb1461026c578063dd62ed3e1461029c578063fcd3533c146102cc576100cf565b806370a08231146101be57806394bf804d146101ee57806395d89b411461021e576100cf565b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461012257806323b872dd14610140578063313ce56714610170578063395093511461018e575b600080fd5b6100dc6102fc565b6040516100e991906113dd565b60405180910390f35b61010c600480360381019061010791906112e4565b61039e565b60405161011991906113c2565b60405180910390f35b61012a6103bc565b60405161013791906113ff565b60405180910390f35b61015a60048036038101906101559190611295565b6103c6565b60405161016791906113c2565b60405180910390f35b61017861049f565b604051610185919061141a565b60405180910390f35b6101a860048036038101906101a391906112e4565b6104b6565b6040516101b591906113c2565b60405180910390f35b6101d860048036038101906101d39190611230565b610569565b6040516101e591906113ff565b60405180910390f35b61020860048036038101906102039190611320565b6105b1565b60405161021591906113c2565b60405180910390f35b6102266105c7565b60405161023391906113dd565b60405180910390f35b610256600480360381019061025191906112e4565b610669565b60405161026391906113c2565b60405180910390f35b610286600480360381019061028191906112e4565b610736565b60405161029391906113c2565b60405180910390f35b6102b660048036038101906102b19190611259565b610754565b6040516102c391906113ff565b60405180910390f35b6102e660048036038101906102e19190611320565b6107db565b6040516102f391906113c2565b60405180910390f35b606060038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103945780601f1061036957610100808354040283529160200191610394565b820191906000526020600020905b81548152906001019060200180831161037757829003601f168201915b5050505050905090565b60006103b26103ab6107f1565b84846107f9565b6001905092915050565b6000600254905090565b60006103d38484846109f0565b610494846103df6107f1565b61048f856040518060600160405280602881526020016115a660289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006104456107f1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610cb19092919063ffffffff16565b6107f9565b600190509392505050565b6000600560009054906101000a900460ff16905090565b600061055f6104c36107f1565b8461055a85600160006104d46107f1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d6b90919063ffffffff16565b6107f9565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006105bd8284610df3565b6001905092915050565b606060048054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561065f5780601f106106345761010080835404028352916020019161065f565b820191906000526020600020905b81548152906001019060200180831161064257829003601f168201915b5050505050905090565b600061072c6106766107f1565b846107278560405180606001604052806025815260200161163860259139600160006106a06107f1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610cb19092919063ffffffff16565b6107f9565b6001905092915050565b600061074a6107436107f1565b84846109f0565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60006107e78284610fba565b6001905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561087f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806116146024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610905576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061155e6022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a76576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806115ef6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610afc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806115196023913960400191505060405180910390fd5b610b0783838361117e565b610b7281604051806060016040528060268152602001611580602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610cb19092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610c05816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d6b90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000838311158290610d5e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610d23578082015181840152602081019050610d08565b50505050905090810190601f168015610d505780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5082840390509392505050565b600080828401905083811015610de9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e96576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b610ea26000838361117e565b610eb781600254610d6b90919063ffffffff16565b600281905550610f0e816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d6b90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611040576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806115ce6021913960400191505060405180910390fd5b61104c8260008361117e565b6110b78160405180606001604052806022815260200161153c602291396000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610cb19092919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061110e8160025461118390919063ffffffff16565b600281905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b505050565b6000828211156111fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b818303905092915050565b600081359050611215816114ea565b92915050565b60008135905061122a81611501565b92915050565b60006020828403121561124257600080fd5b600061125084828501611206565b91505092915050565b6000806040838503121561126c57600080fd5b600061127a85828601611206565b925050602061128b85828601611206565b9150509250929050565b6000806000606084860312156112aa57600080fd5b60006112b886828701611206565b93505060206112c986828701611206565b92505060406112da8682870161121b565b9150509250925092565b600080604083850312156112f757600080fd5b600061130585828601611206565b92505060206113168582860161121b565b9150509250929050565b6000806040838503121561133357600080fd5b60006113418582860161121b565b925050602061135285828601611206565b9150509250929050565b61136581611463565b82525050565b600061137682611435565b6113808185611440565b93506113908185602086016114a6565b611399816114d9565b840191505092915050565b6113ad8161148f565b82525050565b6113bc81611499565b82525050565b60006020820190506113d7600083018461135c565b92915050565b600060208201905081810360008301526113f7818461136b565b905092915050565b600060208201905061141460008301846113a4565b92915050565b600060208201905061142f60008301846113b3565b92915050565b600081519050919050565b600082825260208201905092915050565b600061145c8261146f565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156114c45780820151818401526020810190506114a9565b838111156114d3576000848401525b50505050565b6000601f19601f8301169050919050565b6114f381611451565b81146114fe57600080fd5b50565b61150a8161148f565b811461151557600080fd5b5056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122009144a219df60bd338f01bba3ecffa08af8ca93b7dfbcc8fb9b68328fdebc3a064736f6c63430007060033";

export class TestToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestToken> {
    return super.deploy(name, symbol, overrides || {}) as Promise<TestToken>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): TestToken {
    return super.attach(address) as TestToken;
  }
  connect(signer: Signer): TestToken__factory {
    return super.connect(signer) as TestToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestTokenInterface {
    return new utils.Interface(_abi) as TestTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestToken {
    return new Contract(address, _abi, signerOrProvider) as TestToken;
  }
}