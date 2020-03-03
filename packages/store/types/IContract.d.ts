export interface ABI {
  constant?: boolean;
  inputs: {
    name: string;
    type: string;
    indexed?: boolean;
  }[];
  name?: string;
  outputs?: {
    name: string;
    type: string;
  }[];
  payable: boolean;
  stateMutability: string;
  type: string;
  anonymous?: boolean;
}

export interface AST {
  absolutePath: string;
  exportedSymbols: {
    [name: string]: number[];
  };
  id: number;
  nodeType: string;
  nodes: INode[];
  src: string;
}

export interface INetwork {
  events: any;
  links: any;
  address: string;
  transactionHash: string;
}

export interface INetworks {
  [key: number]: INetwork;
  [key: string]: INetwork;
}

export interface INode {
  id: number;
  literals: string[];
  nodeType: string;
  src: string;
  baseContracts: any[];
  contractDependencies: any[];
  contractKind: string;
  documentation?: any;
  fullyImplemented?: boolean;
  linearizedBaseContracts: number[];
  name: string;
  nodes: any[];
  scope?: number;
}

export interface IContract {
  contractName: string;
  abi: ABI[];
  metadata: string;
  bytecode: string;
  deployedBytecode: string;
  sourceMap: string;
  deployedSourceMap: string;
  source: string;
  sourcePath: string;
  ast: AST;
  legacyAST: AST;
  compiler: {
    name: string;
    version: string;
  };
  networks: INetworks;
  schemaVersion: string;
  updatedAt: Date;
  devdoc: {
    methods: any;
  };
  userdoc: {
    methods: any;
  };
}