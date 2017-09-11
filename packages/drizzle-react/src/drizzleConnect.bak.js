import { connect } from 'react-redux'

export default function drizzleConnect(
  Component,
  Contract,
  stateForProps = {},
  dispatchForProps = {},
  mergeProps
) {
  const mapStateToProps = (state, stateForProps) => {
    console.log(state.contracts)

    var contractToConnect = {
      [Contract]: state.contracts[Contract]
    }

    return Object.assign(contractToConnect, stateForProps)
  }

  const mapDispatchToProps = (dispatch, dispatchForProps) => {
    return dispatchForProps
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
    { storeKey: 'drizzle' }
  )(Component)
}
