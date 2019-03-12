<template>
  <div v-if="isDrizzleInitialized">
    <div>{{ activeAccount }}</div>
    <div>Balance: {{ convertedBalance }} {{ units }}</div>
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
    ...mapGetters('accounts', ['activeAccount', 'activeBalance']),
    ...mapGetters('drizzle', ['drizzleInstance', 'isDrizzleInitialized']),

    convertedBalance() {
      const wei = this.activeBalance
      const units = capitalize(this.units)
      return precisionRound(
        this.drizzleInstance.web3.utils.fromWei(wei, units),
        this.precision
      )
    }
  }
}
</script>
<style scoped></style>
