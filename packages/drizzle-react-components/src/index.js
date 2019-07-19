import AccountData from "./AccountData.js";
import ContractData from "./ContractData.js";
import ContractForm from "./ContractForm.js";
import LoadingContainer from "./LoadingContainer.js";
import AccountDataNew from "./new-context-api/AccountData";
import ContractDataNew from "./new-context-api/ContractData";
import ContractFormNew from "./new-context-api/ContractForm";

const newContextComponents = {
  AccountData: AccountDataNew,
  ContractData: ContractDataNew,
  ContractForm: ContractFormNew,
};

export {
  AccountData,
  ContractData,
  ContractForm,
  LoadingContainer,
  newContextComponents,
};
