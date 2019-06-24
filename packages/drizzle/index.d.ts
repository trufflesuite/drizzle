declare module drizzle {
  export class Drizzle {
    constructor(options: any, store: any);

    addContract(contractConfig: any, ...args: any[]): void;

    deleteContract(contractName: any): void;

    findContractByAddress(address: any): any;

    generateStore(options: any): any;
  }

  export const EventActions: {
    EVENT_CHANGED: string;
    EVENT_ERROR: string;
    EVENT_FIRED: string;
  };

  export const drizzleSagas: any[];

  export function generateContractsInitialState(options: any): any;

  export function generateStore(_ref: any): any;

  export namespace drizzleReducers {
    function accountBalances(...args: any[]): any;

    function accounts(...args: any[]): any;

    function contracts(...args: any[]): any;

    function currentBlock(...args: any[]): any;

    function drizzleStatus(...args: any[]): any;

    function transactionStack(...args: any[]): any;

    function transactions(...args: any[]): any;

    function web3(...args: any[]): any;
  }
}
