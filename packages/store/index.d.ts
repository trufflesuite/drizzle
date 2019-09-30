import {
  Drizzle,
  IDrizzleOptions,
  generateStore,
  IStoreConfig,
  generateContractsInitialState,
} from './types';

type drizzleSagas = any[];

export {
  Drizzle,
  IDrizzleOptions,
  generateStore,
  IStoreConfig,
  generateContractsInitialState,
  drizzleSagas,
};

export enum EventActions {
  EVENT_FIRED = 'EVENT_FIRED',
  EVENT_CHANGED = 'EVENT_CHANGED',
  EVENT_ERROR = 'EVENT_ERROR',
}

export namespace drizzleReducers {
  type state = any | undefined | null;

  export interface IAction {
    [key: string]: any;
    type: string;
  }

  export function accounts(state: state, action: IAction): any;
  export function accountBalances(state: state, action: IAction): any;
  export function contracts(state: state, action: IAction): any;
  export function currentBlock(state: state, action: IAction): any;
  export function drizzleStatus(state: state, action: IAction): any;
  export function transactions(state: state, action: IAction): any;
  export function transactionStack(state: state, action: IAction): any;
  export function web3(state: state, action: IAction): any;
}
