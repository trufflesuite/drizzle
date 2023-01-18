<template>
  <div v-if="isDrizzleInitialized" role="status" aria-live="polite">
    <div v-bind:aria-label="activeAccountAriaLabel">{{ activeAccount }}</div>
    <div v-bind:aria-label="convertedBalanceAriaLabel">
      Balance: {{ convertedBalance }} {{ units }}
    </div>
  </div>
  <div v-else role="alert" aria-busy="true" aria-live="polite">Loading...</div>
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
    },

    convertedBalanceAriaLabel() {
      const units = capitalize(this.units)
      const balance = precisionRound(
        this.drizzleInstance.web3.utils.fromWei(this.activeBalance, units),
        this.precision
      )
      return `${units} Balance: ${balance}`
    },

    activeAccountAriaLabel() {
      const units = capitalize(this.units)
      return `${units} Address: ${this.activeAccount}`
    }
  }
}
</script>
<style scoped></style>
