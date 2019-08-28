<template>
  <component v-bind:is="contractData.component" :label="label" />
</template>

<script>
import { mapGetters } from 'vuex'
import ContractData from './presentational/Data'
import ContractArrayData from './presentational/ArrayData'
import ContractObjectData from './presentational/ObjectData'

export default {
  props: {
    contractName: {
      type: String,
      required: true
    },
    method: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    toUtf8: {
      type: Boolean,
      default: false
    },
    toAscii: {
      type: Boolean,
      default: false
    },
    methodArgs: {
      type: Array,
      default: () => []
    }
  },

  components: {
    ContractData,
    ContractArrayData,
    ContractObjectData
  },

  computed: {
    ...mapGetters('contracts', ['getContractData', 'contractInstances']),

    isStale() {
      return !this.contractInstances[this.contractName].synced
    },

    contractData() {
      const arg = {
        contract: this.contractName,
        method: this.method,
        toUtf8: this.toUtf8,
        toAscii: this.toAscii
      }
      let component = 'ContractData'
      let contractData = this.getContractData(arg)

      if (Array.isArray(contractData)) {
        component = 'ContractArrayData'
      } else if (typeof contractData === 'object') {
        component = 'ContractObjectData'
        // Todo: document in => out example to explain this transformation
        contractData = Object.entries(contractData)
          .filter(([key]) => /^\D/.test(key))
          .map(([key, value]) => ({ key, value }))
      }

      return {
        data: contractData,
        component
      }
    }
  },

  created() {
    const { contractName, method, methodArgs } = this

    this.$store.dispatch('drizzle/REGISTER_CONTRACT', {
      contractName,
      method,
      methodArgs
    })
  }
}
</script>
<style scoped>
.stale {
  /* Release the inner Jackson Pollock */
  border: 1px solid red;
  background-color: yellow;
}
</style>
