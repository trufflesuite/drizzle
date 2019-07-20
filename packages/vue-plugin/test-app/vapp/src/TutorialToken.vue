<template>
  <div>
    <drizzle-contract
      contractName="TutorialToken"
      method="totalSupply"
      label="Total"
    />
    <drizzle-contract
      contractName="TutorialToken"
      method="symbol"
      label="Symbol"
    />
    <drizzle-contract
      contractName="TutorialToken"
      method="balanceOf"
      label="Your Balance"
      :methodArgs="accounts"
    />

    <drizzle-contract-form
      contractName="TutorialToken"
      method="transfer"
      :placeholders="placeholders"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TutorialToken',
  computed: {
    ...mapGetters('accounts', ['activeAccount', 'activeBalance']),
    ...mapGetters('drizzle', ['isDrizzleInitialized']),

    accounts() {
      return [this.activeAccount]
    },

    placeholders() {
      return ['To Address', 'Amount to Send']
    }
  }
}
</script>

<style></style>
