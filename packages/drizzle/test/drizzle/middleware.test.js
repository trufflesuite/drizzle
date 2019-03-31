import { drizzleMiddleware } from '../../src/drizzle-middleware'

const mockDrizzleInstance = (defaultAccount, numContracts = 1) => ({
  contractList: Array.from({length: numContracts}, () => ({options: {from: defaultAccount}}))
})

describe('Drizzle Middleware', () => {
  const accounts = global.accounts
  let dmw, mockedDrizzleInstance
  let next
  beforeEach(() => {
    mockedDrizzleInstance = mockDrizzleInstance(accounts[0], 10)
    next = jest.fn()
    dmw = drizzleMiddleware({contractList: []})
  })

  test('it passes action to the rest of middleware Pipeline', () => {
    dmw()(next)({}) // call with undefined action
    expect(next).toHaveBeenCalledTimes(1)
  })

  test('default sendFrom changes when wallet provider changes selectedAccount', () => {
    const selectedAccount = accounts[2]
    dmw()(next)({type: 'DRIZZLE_INITIALIZING', drizzle: mockedDrizzleInstance})
    dmw()(next)({type: 'ACCOUNTS_FETCHED', accounts: [selectedAccount]})

    // All contract options should have from address set to selectedAccount
    const froms = mockedDrizzleInstance.contractList.map(x => x.options.from)
    expect(froms).toHaveLength(10)
    const fromSet = new Set(froms)
    expect(fromSet.size).toBe(1)
    expect(fromSet.has(selectedAccount)).toBe(true)
    expect(next).toHaveBeenCalledTimes(2)
  })

  test('default sendFrom does not change unnecessarily', () => {
    dmw()(next)({type: 'DRIZZLE_INITIALIZING', drizzle: mockedDrizzleInstance})

    // choose 1st account to indicate no change
    const selectedAccount = accounts[0]

    // Sentinel remains IFF no account change is detected
    const sentinel = {}
    mockedDrizzleInstance.contractList.push({options: {from: sentinel}})

    dmw()(next)({type: 'ACCOUNTS_FETCHED', accounts: [selectedAccount]})

    const froms = mockedDrizzleInstance.contractList.map(x => x.options.from)
    expect(froms).toHaveLength(11)

    const fromSet = new Set(froms)
    expect(fromSet.size).toBe(2)
    expect(fromSet.has(selectedAccount)).toBe(true)
    expect(fromSet.has(sentinel)).toBe(true)
    expect(next).toHaveBeenCalledTimes(2)
  })
})
