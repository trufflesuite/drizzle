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

    <h3>Display an Object</h3>
    <div class="flex-container">
      <div class="code">{{ sample.singleDD.html }}</div>
      <drizzle-contract contractName="ComplexStorage" method="singleDD" />
    </div>

    <h3>Display an Array</h3>
    <div class="flex-container">
      <div class="code">{{ sample.get_uintarray.html }}</div>
      <drizzle-contract contractName="ComplexStorage" method="get_uintarray" />
    </div>
  </div>

  <div v-else>Loading...</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ComplexStorage',
  computed: {
    ...mapGetters('contracts', ['getContractData']),
    ...mapGetters('drizzle', ['isDrizzleInitialized']),
    get_uintarray() {
      return this.getContractData({
        contract: 'ComplexStorage',
        method: 'get_uintarray'
      })
    },
    singleDD() {
      return this.getContractData({
        contract: 'ComplexStorage',
        method: 'singleDD'
      })
    }
  },
  data() {
    return {
      sample: {
        get_uintarray: {
          html:
            '<drizzle-contract contractName="ComplexStorage" method="get_uintarray" />'
        },
        singleDD: {
          html:
            '<drizzle-contract contractName="ComplexStorage" method="singleDD" />'
        }
      }
    }
  }
}
</script>

<style scoped>
div.code {
  align-self: center;
}

div.flex-container {
  background-color: #efefef;
  display: flex;
}

div.flex-container > div {
  flex: 1;
}
</style>
