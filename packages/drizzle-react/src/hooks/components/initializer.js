import PropTypes from 'prop-types'
import { useDrizzleState } from '..'

const Initializer = ({
  children,
  error,
  loadingContractsAndAccounts,
  loadingWeb3
}) => {
  const drizzleState = useDrizzleState(drizzleState => ({
    drizzleStatusInitialized: drizzleState.drizzleStatus.initialized,
    web3Status: drizzleState.web3.status
  }))
  if (drizzleState.drizzleStatusInitialized) return children
  if (drizzleState.web3Status === 'initialized')
    return loadingContractsAndAccounts
  if (drizzleState.web3Status === 'failed') return error
  return loadingWeb3
}

Initializer.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.node,
  loadingContractsAndAccounts: PropTypes.node,
  loadingWeb3: PropTypes.node
}

Initializer.defaultProps = {
  error: 'Error.',
  loadingContractsAndAccounts: 'Loading contracts and accounts.',
  loadingWeb3: 'Loading web3.'
}

export default Initializer
