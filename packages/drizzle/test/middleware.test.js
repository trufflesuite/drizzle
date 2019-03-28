import { getWeb3Assets } from './utils/helpers'
import { drizzleMiddleware } from '../src/drizzle-middleware'

const mockDrizzle = (defaultAccount, numContracts = 1) => ({
  contractList: Array.from({length: numContracts}, () => ({options: {from: defaultAccount}}))
})

describe('Drizzle Middleware', () => {
  let web3, truffleArtifact, accounts
  let dmw, drizzle
  let next
  beforeEach(async () => {
    ;({ web3, accounts, truffleArtifact } = await getWeb3Assets())
    drizzle = mockDrizzle(accounts[0], 10)
    next = jest.fn()
    dmw = drizzleMiddleware({contractList: []})
  })

  test('it passes action to the rest of middleware Pipeline', () => {
    dmw()(next)({}) // call with undefined action
    expect(next).toHaveBeenCalledTimes(1)
  })

  test('accounts are changed', () => {
    const selectedAccount = accounts[2]
    dmw()(next)({type: 'DRIZZLE_INITIALIZING', drizzle})
    dmw()(next)({type: 'ACCOUNTS_FETCHED', accounts: [selectedAccount]})

    // All contract options should have from address set to selectedAccount
    const froms = drizzle.contractList.map(x => x.options.from)
    expect(froms).toHaveLength(10)
    const fromSet = new Set(froms)
    expect(fromSet.size).toBe(1)
    expect(fromSet.has(selectedAccount)).toBe(true)
    expect(next).toHaveBeenCalledTimes(2)
  })
})
