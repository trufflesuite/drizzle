<template>
  <div v-if="isDrizzleInitialized">
    <div>{{ account }}</div>
    <div>Balance: {{ balance }} {{ units }}</div>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import { mapGetters } from 'vuex'

const capitalize = ws => ws[0].toUpperCase() + ws.slice(1).toLowerCase()

const precisionRound = (number, precision) => {
  const factor = Math.pow(10, precision)
  return Math.round(number * factor) / factor
}

export default {
  name: 'Accounts',
  props: {
    units: {
      type: String,
      default: 'Wei'
    },
    precision: {
      type: Number,
      default: 2
    }
  },

  computed: {
    ...mapGetters('account', ['getAccount']),
    ...mapGetters('drizzle', ['drizzleInstance', 'isDrizzleInitialized']),

    balance() {
      const wei = this.getAccount.balance
      const units = capitalize(this.units)
      return precisionRound(
        this.drizzleInstance.web3.utils.fromWei(wei, units),
        this.precision
      )
    },

    account() {
      return this.getAccount.account
    }
  }
}
</script>
<style scoped></style>
