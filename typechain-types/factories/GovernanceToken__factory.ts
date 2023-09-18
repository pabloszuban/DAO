/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GovernanceToken,
  GovernanceTokenInterface,
} from "../GovernanceToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "StringTooLong",
    type: "error",
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
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
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
    inputs: [],
    name: "CLOCK_MODE",
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
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "pos",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "fromBlock",
            type: "uint32",
          },
          {
            internalType: "uint224",
            name: "votes",
            type: "uint224",
          },
        ],
        internalType: "struct ERC20Votes.Checkpoint",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "clock",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
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
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
    outputs: [],
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
    name: "delegates",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timepoint",
        type: "uint256",
      },
    ],
    name: "getPastTotalSupply",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timepoint",
        type: "uint256",
      },
    ],
    name: "getPastVotes",
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
        name: "account",
        type: "address",
      },
    ],
    name: "getVotes",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
        name: "account",
        type: "address",
      },
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
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
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "s_maxSupply",
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
        name: "to",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
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
  "0x61016060405269d3c21bcecceda1000000600c553480156200002057600080fd5b506040518060400160405280600f81526020016e23b7bb32b93730b731b2aa37b5b2b760891b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600f81526020016e23b7bb32b93730b731b2aa37b5b2b760891b8152506040518060400160405280600281526020016111d560f21b8152508160039080519060200190620000bf929190620008ce565b508051620000d5906004906020840190620008ce565b505050620000f3600583620001be60201b62000bd61790919060201c565b6101205262000110816006620001be602090811b62000bd617901c565b61014052815160208084019190912060e052815190820120610100524660a0526200019e60e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c05250600c54620001b890339062000212565b62000a6c565b6000602083511015620001de57620001d6836200022d565b90506200020c565b82620001f5836200027960201b62000c0d1760201c565b8151620002069260200190620008ce565b5060ff90505b92915050565b6200022982826200027c60201b62000c101760201c565b5050565b600080829050601f8151111562000264578260405163305a27a960e01b81526004016200025b91906200096a565b60405180910390fd5b80516200027182620009c2565b179392505050565b90565b6200029382826200032f60201b62000ca01760201c565b6001600160e01b03620002a7620003fc8216565b1115620003105760405162461bcd60e51b815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201526f766572666c6f77696e6720766f74657360801b60648201526084016200025b565b62000329600b62000d6b6200040260201b178362000417565b50505050565b6001600160a01b038216620003875760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016200025b565b80600260008282546200039b919062000a00565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a36200022960008383620005c5565b60025490565b600062000410828462000a00565b9392505050565b82546000908190818115620004665760008781526020902082016000190160408051808201909152905463ffffffff8116825264010000000090046001600160e01b031660208201526200047b565b60408051808201909152600080825260208201525b905080602001516001600160e01b031693506200049984868860201c565b9250600082118015620004c65750620004b1620005dd565b65ffffffffffff16816000015163ffffffff16145b156200051a57620004e283620005fa60201b62000d771760201c565b60008881526020902083016000190180546001600160e01b03929092166401000000000263ffffffff909216919091179055620005b6565b866040518060400160405280620005536200053a620005dd60201b60201c565b65ffffffffffff166200066960201b62000de41760201c565b63ffffffff1681526020016200057486620005fa60201b62000d771760201c565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b5050935093915050565b505050565b620005c0838383620006d060201b62000e491760201c565b6000620005f5436200071c60201b62000e801760201c565b905090565b60006001600160e01b03821115620006655760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b60648201526084016200025b565b5090565b600063ffffffff821115620006655760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b60648201526084016200025b565b620006e8838383620005c060201b62000e7b1760201c565b6001600160a01b03838116600090815260096020526040808220548584168352912054620005c09291821691168362000785565b600065ffffffffffff821115620006655760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203460448201526538206269747360d01b60648201526084016200025b565b816001600160a01b0316836001600160a01b031614158015620007a85750600081115b15620005c0576001600160a01b0383161562000835576001600160a01b0383166000908152600a6020908152604082208291620007f29190620008c0901b62000ee7178562000417565b91509150846001600160a01b031660008051602062002c8283398151915283836040516200082a929190918252602082015260400190565b60405180910390a250505b6001600160a01b03821615620005c0576001600160a01b0382166000908152600a602090815260408220829162000879919062000402901b62000d6b178562000417565b91509150836001600160a01b031660008051602062002c828339815191528383604051620008b1929190918252602082015260400190565b60405180910390a25050505050565b600062000410828462000a1b565b828054620008dc9062000a35565b90600052602060002090601f0160209004810192826200090057600085556200094b565b82601f106200091b57805160ff19168380011785556200094b565b828001600101855582156200094b579182015b828111156200094b5782518255916020019190600101906200092e565b50620006659291505b8082111562000665576000815560010162000954565b600060208083528351808285015260005b8181101562000999578581018301518582016040015282016200097b565b81811115620009ac576000604083870101525b50601f01601f1916929092016040019392505050565b80516020808301519190811015620009e4576000198160200360031b1b821691505b50919050565b634e487b7160e01b600052601160045260246000fd5b6000821982111562000a165762000a16620009ea565b500190565b60008282101562000a305762000a30620009ea565b500390565b600181811c9082168062000a4a57607f821691505b60208210811415620009e457634e487b7160e01b600052602260045260246000fd5b60805160a05160c05160e0516101005161012051610140516121bb62000ac760003960006106b1015260006106860152600061130f015260006112e7015260006112420152600061126c0152600061129601526121bb6000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c806370a08231116100de5780639ab24eb011610097578063c3cda52011610071578063c3cda52014610392578063d505accf146103a5578063dd62ed3e146103b8578063f1127ed8146103cb57600080fd5b80639ab24eb014610359578063a457c2d71461036c578063a9059cbb1461037f57600080fd5b806370a08231146102c85780637ecebe00146102f157806384b0196e146103045780638e539e8c1461031f57806391ddadf41461033257806395d89b411461035157600080fd5b8063395093511161014b578063587cde1e11610125578063587cde1e1461023e5780635c19a95c146102825780635d641847146102975780636fcfff45146102a057600080fd5b806339509351146102105780633a46b1a8146102235780634bf5d7e91461023657600080fd5b806306fdde0314610193578063095ea7b3146101b157806318160ddd146101d457806323b872dd146101e6578063313ce567146101f95780633644e51514610208575b600080fd5b61019b610408565b6040516101a89190611dde565b60405180910390f35b6101c46101bf366004611e0d565b61049a565b60405190151581526020016101a8565b6002545b6040519081526020016101a8565b6101c46101f4366004611e37565b6104b4565b604051601281526020016101a8565b6101d86104d8565b6101c461021e366004611e0d565b6104e7565b6101d8610231366004611e0d565b610509565b61019b610593565b61026a61024c366004611e73565b6001600160a01b039081166000908152600960205260409020541690565b6040516001600160a01b0390911681526020016101a8565b610295610290366004611e73565b61062b565b005b6101d8600c5481565b6102b36102ae366004611e73565b610638565b60405163ffffffff90911681526020016101a8565b6101d86102d6366004611e73565b6001600160a01b031660009081526020819052604090205490565b6101d86102ff366004611e73565b61065a565b61030c610678565b6040516101a89796959493929190611e8e565b6101d861032d366004611f24565b610701565b61033a610768565b60405165ffffffffffff90911681526020016101a8565b61019b610773565b6101d8610367366004611e73565b610782565b6101c461037a366004611e0d565b610804565b6101c461038d366004611e0d565b61087f565b6102956103a0366004611f4e565b61088d565b6102956103b3366004611fa6565b6109c3565b6101d86103c6366004612010565b610b27565b6103de6103d9366004612043565b610b52565b60408051825163ffffffff1681526020928301516001600160e01b031692810192909252016101a8565b60606003805461041790612083565b80601f016020809104026020016040519081016040528092919081815260200182805461044390612083565b80156104905780601f1061046557610100808354040283529160200191610490565b820191906000526020600020905b81548152906001019060200180831161047357829003601f168201915b5050505050905090565b6000336104a8818585610ef3565b60019150505b92915050565b6000336104c2858285611017565b6104cd85858561108b565b506001949350505050565b60006104e2611235565b905090565b6000336104a88185856104fa8383610b27565b61050491906120ce565b610ef3565b6000610513610768565b65ffffffffffff16821061056a5760405162461bcd60e51b815260206004820152601960248201527804552433230566f7465733a20667574757265206c6f6f6b757603c1b60448201526064015b60405180910390fd5b6001600160a01b0383166000908152600a6020526040902061058c9083611360565b9392505050565b60604361059e610768565b65ffffffffffff16146105f35760405162461bcd60e51b815260206004820152601d60248201527f4552433230566f7465733a2062726f6b656e20636c6f636b206d6f64650000006044820152606401610561565b5060408051808201909152601d81527f6d6f64653d626c6f636b6e756d6265722666726f6d3d64656661756c74000000602082015290565b6106353382611449565b50565b6001600160a01b0381166000908152600a60205260408120546104ae90610de4565b6001600160a01b0381166000908152600760205260408120546104ae565b6000606080828080836106ac7f000000000000000000000000000000000000000000000000000000000000000060056114c2565b6106d77f000000000000000000000000000000000000000000000000000000000000000060066114c2565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b600061070b610768565b65ffffffffffff16821061075d5760405162461bcd60e51b815260206004820152601960248201527804552433230566f7465733a20667574757265206c6f6f6b757603c1b6044820152606401610561565b6104ae600b83611360565b60006104e243610e80565b60606004805461041790612083565b6001600160a01b0381166000908152600a602052604081205480156107f1576001600160a01b0383166000908152600a60205260409020805460001983019081106107cf576107cf6120e6565b60009182526020909120015464010000000090046001600160e01b03166107f4565b60005b6001600160e01b03169392505050565b600033816108128286610b27565b9050838110156108725760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610561565b6104cd8286868403610ef3565b6000336104a881858561108b565b834211156108dd5760405162461bcd60e51b815260206004820152601d60248201527f4552433230566f7465733a207369676e617475726520657870697265640000006044820152606401610561565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b0388169181019190915260608101869052608081018590526000906109579061094f9060a00160405160208183030381529060405280519060200120611566565b858585611593565b9050610962816115bb565b86146109b05760405162461bcd60e51b815260206004820152601960248201527f4552433230566f7465733a20696e76616c6964206e6f6e6365000000000000006044820152606401610561565b6109ba8188611449565b50505050505050565b83421115610a135760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606401610561565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610a428c6115bb565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610a9d82611566565b90506000610aad82878787611593565b9050896001600160a01b0316816001600160a01b031614610b105760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610561565b610b1b8a8a8a610ef3565b50505050505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60408051808201909152600080825260208201526001600160a01b0383166000908152600a60205260409020805463ffffffff8416908110610b9657610b966120e6565b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090046001600160e01b0316918101919091529392505050565b6000602083511015610bf257610beb836115e3565b90506104ae565b82828151610c039260200190611d01565b5060ff90506104ae565b90565b610c1a8282610ca0565b6002546001600160e01b031015610c8c5760405162461bcd60e51b815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201526f766572666c6f77696e6720766f74657360801b6064820152608401610561565b610c9a600b610d6b83611621565b50505050565b6001600160a01b038216610cf65760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610561565b8060026000828254610d0891906120ce565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610d6760008383611796565b5050565b600061058c82846120ce565b60006001600160e01b03821115610de05760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b6064820152608401610561565b5090565b600063ffffffff821115610de05760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b6064820152608401610561565b6001600160a01b03838116600090815260096020526040808220548584168352912054610e7b929182169116836117a1565b505050565b600065ffffffffffff821115610de05760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203460448201526538206269747360d01b6064820152608401610561565b600061058c82846120fc565b6001600160a01b038316610f555760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610561565b6001600160a01b038216610fb65760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610561565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006110238484610b27565b90506000198114610c9a578181101561107e5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610561565b610c9a8484848403610ef3565b6001600160a01b0383166110ef5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610561565b6001600160a01b0382166111515760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610561565b6001600160a01b038316600090815260208190526040902054818110156111c95760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610561565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610c9a848484611796565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561128e57507f000000000000000000000000000000000000000000000000000000000000000046145b156112b857507f000000000000000000000000000000000000000000000000000000000000000090565b6104e2604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b8154600090818160058111156113ba57600061137b846118de565b61138590856120fc565b600088815260209020909150869082015463ffffffff1611156113aa578091506113b8565b6113b58160016120ce565b92505b505b808210156114075760006113ce83836119c3565b600088815260209020909150869082015463ffffffff1611156113f357809150611401565b6113fe8160016120ce565b92505b506113ba565b8015611433576000868152602090208101600019015464010000000090046001600160e01b0316611436565b60005b6001600160e01b03169695505050505050565b6001600160a01b038281166000818152600960208181526040808420805485845282862054949093528787166001600160a01b03198416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4610c9a8284836117a1565b606060ff83146114d557610beb836119de565b8180546114e190612083565b80601f016020809104026020016040519081016040528092919081815260200182805461150d90612083565b801561155a5780601f1061152f5761010080835404028352916020019161155a565b820191906000526020600020905b81548152906001019060200180831161153d57829003601f168201915b505050505090506104ae565b60006104ae611573611235565b8360405161190160f01b8152600281019290925260228201526042902090565b60008060006115a487878787611a1d565b915091506115b181611ae1565b5095945050505050565b6001600160a01b03811660009081526007602052604090208054600181018255905b50919050565b600080829050601f8151111561160e578260405163305a27a960e01b81526004016105619190611dde565b805161161982612113565b179392505050565b8254600090819081811561166e5760008781526020902082016000190160408051808201909152905463ffffffff8116825264010000000090046001600160e01b03166020820152611683565b60408051808201909152600080825260208201525b905080602001516001600160e01b031693506116a384868863ffffffff16565b92506000821180156116cd57506116b8610768565b65ffffffffffff16816000015163ffffffff16145b15611712576116db83610d77565b60008881526020902083016000190180546001600160e01b03929092166401000000000263ffffffff90921691909117905561178c565b866040518060400160405280611736611729610768565b65ffffffffffff16610de4565b63ffffffff16815260200161174a86610d77565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b5050935093915050565b610e7b838383610e49565b816001600160a01b0316836001600160a01b0316141580156117c35750600081115b15610e7b576001600160a01b03831615611851576001600160a01b0383166000908152600a6020526040812081906117fe90610ee785611621565b91509150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611846929190918252602082015260400190565b60405180910390a250505b6001600160a01b03821615610e7b576001600160a01b0382166000908152600a60205260408120819061188790610d6b85611621565b91509150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72483836040516118cf929190918252602082015260400190565b60405180910390a25050505050565b6000816118ed57506000919050565b600060016118fa84611c2f565b901c6001901b9050600181848161191357611913612137565b048201901c9050600181848161192b5761192b612137565b048201901c9050600181848161194357611943612137565b048201901c9050600181848161195b5761195b612137565b048201901c9050600181848161197357611973612137565b048201901c9050600181848161198b5761198b612137565b048201901c905060018184816119a3576119a3612137565b048201901c905061058c818285816119bd576119bd612137565b04611cc3565b60006119d2600284841861214d565b61058c908484166120ce565b606060006119eb83611cd9565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611a545750600090506003611ad8565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611aa8573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611ad157600060019250925050611ad8565b9150600090505b94509492505050565b6000816004811115611af557611af561216f565b1415611afe5750565b6001816004811115611b1257611b1261216f565b1415611b605760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610561565b6002816004811115611b7457611b7461216f565b1415611bc25760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610561565b6003816004811115611bd657611bd661216f565b14156106355760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610561565b600080608083901c15611c4457608092831c92015b604083901c15611c5657604092831c92015b602083901c15611c6857602092831c92015b601083901c15611c7a57601092831c92015b600883901c15611c8c57600892831c92015b600483901c15611c9e57600492831c92015b600283901c15611cb057600292831c92015b600183901c156104ae5760010192915050565b6000818310611cd2578161058c565b5090919050565b600060ff8216601f8111156104ae57604051632cd44ac360e21b815260040160405180910390fd5b828054611d0d90612083565b90600052602060002090601f016020900481019282611d2f5760008555611d75565b82601f10611d4857805160ff1916838001178555611d75565b82800160010185558215611d75579182015b82811115611d75578251825591602001919060010190611d5a565b50610de09291505b80821115610de05760008155600101611d7d565b6000815180845260005b81811015611db757602081850181015186830182015201611d9b565b81811115611dc9576000602083870101525b50601f01601f19169290920160200192915050565b60208152600061058c6020830184611d91565b80356001600160a01b0381168114611e0857600080fd5b919050565b60008060408385031215611e2057600080fd5b611e2983611df1565b946020939093013593505050565b600080600060608486031215611e4c57600080fd5b611e5584611df1565b9250611e6360208501611df1565b9150604084013590509250925092565b600060208284031215611e8557600080fd5b61058c82611df1565b60ff60f81b881681526000602060e081840152611eae60e084018a611d91565b8381036040850152611ec0818a611d91565b606085018990526001600160a01b038816608086015260a0850187905284810360c0860152855180825283870192509083019060005b81811015611f1257835183529284019291840191600101611ef6565b50909c9b505050505050505050505050565b600060208284031215611f3657600080fd5b5035919050565b803560ff81168114611e0857600080fd5b60008060008060008060c08789031215611f6757600080fd5b611f7087611df1565b95506020870135945060408701359350611f8c60608801611f3d565b92506080870135915060a087013590509295509295509295565b600080600080600080600060e0888a031215611fc157600080fd5b611fca88611df1565b9650611fd860208901611df1565b95506040880135945060608801359350611ff460808901611f3d565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561202357600080fd5b61202c83611df1565b915061203a60208401611df1565b90509250929050565b6000806040838503121561205657600080fd5b61205f83611df1565b9150602083013563ffffffff8116811461207857600080fd5b809150509250929050565b600181811c9082168061209757607f821691505b602082108114156115dd57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156120e1576120e16120b8565b500190565b634e487b7160e01b600052603260045260246000fd5b60008282101561210e5761210e6120b8565b500390565b805160208083015191908110156115dd5760001960209190910360031b1b16919050565b634e487b7160e01b600052601260045260246000fd5b60008261216a57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220c8bbf2d8bc3cb2bad207d99f0e472657dd1019d6203067f05163d43c5099cabb64736f6c63430008090033dec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724";

type GovernanceTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GovernanceTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GovernanceToken__factory extends ContractFactory {
  constructor(...args: GovernanceTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "GovernanceToken";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GovernanceToken> {
    return super.deploy(overrides || {}) as Promise<GovernanceToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GovernanceToken {
    return super.attach(address) as GovernanceToken;
  }
  connect(signer: Signer): GovernanceToken__factory {
    return super.connect(signer) as GovernanceToken__factory;
  }
  static readonly contractName: "GovernanceToken";
  public readonly contractName: "GovernanceToken";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GovernanceTokenInterface {
    return new utils.Interface(_abi) as GovernanceTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GovernanceToken {
    return new Contract(address, _abi, signerOrProvider) as GovernanceToken;
  }
}
