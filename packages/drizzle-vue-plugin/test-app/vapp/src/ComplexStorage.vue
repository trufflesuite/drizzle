<template>
  <div v-if="isDrizzleInitialized">
    <p>
      <drizzle-contract
        contractName="ComplexStorage"
        method="string1"
        label="bytes string1"
        toUtf8
      />
      <drizzle-contract
        contractName="ComplexStorage"
        method="string2"
        label="bytes32 string2"
      />
      <drizzle-contract
        contractName="ComplexStorage"
        method="string2"
        label="bytes32 string2 toUtf8"
        toUtf8
      />
    </p>

    <h3>An Object</h3>
    <p>
      <drizzle-contract contractName="ComplexStorage" method="singleDD" />
    </p>

    <h3>An Array</h3>
    <p>
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

<style>
ul {
  list-style-type: none;
}
</style>
