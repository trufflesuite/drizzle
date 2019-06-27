<template>
  <section></section>
</template>

<script>
import Toasted from 'vue-toasted'
import Vue from 'vue'
Vue.use(Toasted)

export default {
  mounted() {
    // See docs: https://github.com/shakee93/vue-toasted#options

    const subOptions = { duration: 3000 } // 3 seconds

    const contractEventHandler = ({ contractName, eventName, data }) => {
      console.group('contractEventHandler')
      console.log('contractName', contractName)
      console.log('eventName', eventName)
      console.log('data', data)
      console.groupEnd()

      const { _message, _value } = data
      const display = `${contractName}(${eventName}): ${_message}(${_value})`
      this.$toasted.show(display, subOptions)
    }

    this.$drizzleEvents.$on('drizzle/contractEvent', payload => {
      contractEventHandler(payload)
    })
  }
}
</script>
