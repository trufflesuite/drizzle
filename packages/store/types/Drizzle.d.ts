import { Store } from 'redux';
import { IStoreConfig } from './generateStore';
import { IContract } from './IContract';
import { IContractConfig } from './contractStateUtils';

export interface IDrizzleOptions {
  contracts: IContract[];
  events?: {
    [contractName: string]: any;
  };
  polls?: any;
  syncAlways?: any;
  web3?: {
    customProvider?: any;
    fallback?: {
      type: string;
      url: string;
    }
  },
  networkWhitelist?: any[];
}

export class Drizzle {
  constructor(options?: IDrizzleOptions, store?: Store);

  addContract(contractConfig: IContractConfig, events: any[]): void;

  deleteContract(contractName: string): void;

  findContractByAddress(address: string): IContract;

  generateStore(options: IStoreConfig): Store;
}