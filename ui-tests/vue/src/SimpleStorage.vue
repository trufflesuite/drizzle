<template>
  <div>
    <h2>
      Use drizzle-contract and drizzle-contract-form to display and annotate
      storedData
    </h2>

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

    <h2>Use methodArgs to pass single params to a constant function:</h2>
    <drizzle-contract
      contractName="SimpleStorage"
      method="getValueWithOffset"
      :methodArgs="[5]"
      label="Value + 5"
    />

    <h2>Use methodArgs to pass multiple params to a constant function:</h2>
    <drizzle-contract
      contractName="SimpleStorage"
      method="getValueWithOffsetAndMultiplier"
      :methodArgs="[5, 2]"
      label="(Value + 5) * 2"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SimpleStorage',
  computed: mapGetters('drizzle', ['isDrizzleInitialized'])
}
</script>

<style></style>
