<template>
  <div v-if="isDrizzleInitialized">
    <div>
      <drizzle-contract
        contractName="SimpleStorage"
        method="storedData"
        label="Value"
      />
      <drizzle-contract-form
        contractName="SimpleStorage"
        method="set"
        :placeholders="['Value']"
      />
    </div>
  </div>

  <div v-else>Loading...</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SimpleStorage',

  computed: mapGetters('drizzle', ['isDrizzleInitialized'])
}
</script>

<style></style>
