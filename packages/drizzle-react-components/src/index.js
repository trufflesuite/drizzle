import AccountData from './AccountData.js'
import ContractData from './ContractData.js'
import ContractForm from './ContractForm.js'
import LoadingContainer from './LoadingContainer.js'
import AccountDataNew from './react-16.3/AccountData'
import ContractDataNew from './react-16.3/ContractData'

const newContextComponents = {
  AccountData: AccountDataNew,
  ContractData: ContractDataNew
}

export {
  AccountData,
  ContractData,
  ContractForm,
  LoadingContainer,
  newContextComponents
}
