import {
  Drizzle,
  IDrizzleOptions,
  generateStore,
  IStoreConfig,
  generateContractsInitialState,
} from './types';

export {
  Drizzle,
  IDrizzleOptions,
  generateStore,
  IStoreConfig,
  generateContractsInitialState,
};

export enum EventActions {
  EVENT_FIRED = 'EVENT_FIRED',
  EVENT_CHANGED = 'EVENT_CHANGED',
  EVENT_ERROR = 'EVENT_ERROR',
}

export namespace drizzleReducers {
  export interface IAction {
    [key: string]: any;
    type: string;
  }

  export function accounts(state: any | undefined | null, action: IAction): any;
  export function accountBalances(state: any | undefined | null, action: IAction): any;
  export function contracts(state: any | undefined | null, action: IAction): any;
  export function currentBlock(state: any | undefined | null, action: IAction): any;
  export function drizzleStatus(state: any | undefined | null, action: IAction): any;
  export function transactions(state: any | undefined | null, action: IAction): any;
  export function transactionStack(state: any | undefined | null, action: IAction): any;
  export function web3(state: any | undefined | null, action: IAction): any;
}

export namespace drizzleSagas {
  export function accountSaga(): any;
  export function accountBalancesSaga(): any;
  export function blocksSaga(): any;
  export function contractsSaga(): any;
  export function drizzleStatusSaga(): any;
}
