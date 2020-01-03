import { ABI } from "./IContract";

export interface IContractConfig {
  contractName: string;
  web3Contract?: {
    options: {
      jsonInterface: ABI;
    }
  };
  abi?: ABI;
}

export interface IContractInitialState {
  [key: string]: {};
  initialized: boolean;
  synced: boolean;
}

export interface IContractOptions {
  contracts?: IContractConfig[];
}

export function generateContractInitialState(contractConfig: IContractConfig): IContractInitialState;

export function generateContractsInitialState(options: IContractOptions): IContractInitialState[];
