<template>
  <div v-if="isDrizzleInitialized">
    <p>string1 and string2 are converted from bytes to UTF-8</p>
    <drizzle-contract
      contractName="ComplexStorage"
      method="string1"
      label="First"
      toUtf8
    />

    <p>
      Utf-8 data
    <drizzle-contract
      contractName="ComplexStorage"
      method="string2"
      label="Last (w/o toUtf8 attribute)"
    />
    <drizzle-contract
      contractName="ComplexStorage"
      method="string2"
      label="Last (w toUtf8)"
      toUtf8
    />
    </p>
    <p>drizzle-contract Storage object</p>
    <p>
      <h3>An Object</h3>
      <drizzle-contract contractName="ComplexStorage" method="singleDD" />
    </p>

    <p>
      <h3>An Array</h3>
      <drizzle-contract contractName="ComplexStorage" method="get_uintarray" />
    </p>
  </div>

  <div v-else>Loading...</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ComplexStorage',
  computed: mapGetters('drizzle', ['isDrizzleInitialized'])
}
</script>

<style></style>
