import { Store } from 'redux';
import { IDrizzleOptions } from './Drizzle';

export interface IStoreConfig {
  [key: string]: any;
  drizzleOptions: IDrizzleOptions;
  reducers?: any;
  appSagas?: any[];
  appMiddlewares?: any[];
  disableReduxDevTools?: boolean;
}

export function generateStore(config: IStoreConfig): Store;