import { Store } from 'redux';
import { IStoreConfig } from './generateStore';
import { IContract } from './IContract';
import { IContractConfig } from './contractStateUtils';

export interface IDrizzleOptions {
  contracts: IContract[];
  events?: {
    [contractName: string]: any;
  };
  polls?: {
    accounts?: number;
    blocks?: number;
  };
  syncAlways?: any;
  web3?: {
    customProvider?: any;
    fallback?: {
      type: string;
      url: string;
    }
  },
  networkWhitelist?: number[];
}

export class Drizzle {
  constructor(options?: IDrizzleOptions, store?: Store);

  addContract(contractConfig: IContractConfig, events: any[]): void;

  deleteContract(contractName: string): void;

  findContractByAddress(address: string): IContract;

  generateStore(options: IStoreConfig): Store;
}