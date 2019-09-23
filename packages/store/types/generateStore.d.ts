import { Store } from 'redux';

export interface IStoreConfig {
  [key: string]: any;
  drizzleOptions: any;
  reducers?: any;
  appSagas?: any[];
  appMiddlewares?: any[];
  disableReduxDevTools?: boolean;
}

export function generateStore(config: IStoreConfig): Store;