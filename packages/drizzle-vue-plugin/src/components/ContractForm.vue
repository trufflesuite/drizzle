<template>
  <form v-if="isDrizzleInitialized">
    <input
      v-for="(param, i) in displayInputs"
      v-model="ethData[i]"
      :key="i"
      :type="param.type"
      :placeholder="param.name"
    />
    <button @click.prevent="onSubmit">Submit</button>
  </form>
</template>

<script>
import { mapGetters } from 'vuex'

const translateType = type => {
  switch (true) {
    case /^uint/.test(type):
      return 'number'
    case /^string/.test(type) || /^bytes/.test(type):
      return 'text'
    case /^bool/.test(type):
      return 'checkbox'
    default:
      return 'text'
  }
}

export default {
  name: 'ContractForm',
  props: {
    contractName: {
      type: String,
      required: true
    },
    method: {
      type: String,
      required: true
    },
    methodArgs: {
      type: Array,
      default: () => []
    },

    placeholders: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    ...mapGetters('drizzle', ['drizzleInstance', 'isDrizzleInitialized']),

    abi() {
      const di = this.drizzleInstance
      return di.contracts[this.contractName].abi.find(
        item => item.name === this.method
      )
    },

    abiInputs() {
      return this.abi.inputs
    },

    displayInputs() {
      return this.abi.inputs.map((x, i) => ({
        name: this.placeholders[i] ? this.placeholders[i] : x.name,
        type: translateType(x.type)
      }))
    },

    utils() {
      return this.drizzleInstance.web3.utils
    }
  },

  data() {
    return {
      ethData: {}
    }
  },

  methods: {
    onSubmit() {
      const convertedInputs = this.abiInputs.map((input, i) =>
        input.type === 'bytes32'
          ? (this.ethData[i] = this.utils.toHex(this.ethData[i]))
          : this.ethData[i]
      )
      const sendArgs = this.methodArgs.length
        ? [...convertedInputs, this.methodArgs]
        : convertedInputs

      this.drizzleInstance.contracts[this.contractName].methods[
        this.method
      ].cacheSend(...sendArgs)
    }
  }
}
</script>

<style></style>
