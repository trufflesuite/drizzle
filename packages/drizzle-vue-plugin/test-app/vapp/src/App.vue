<template>
  <div v-if="isDrizzleInitialized" id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <h2>Show the Accounts</h2>
    <drizzle-account units="Ether" :precision="2" />

    <h2>Tutorial Token</h2>
    <TutorialToken />

    <h2>Simple Storage</h2>
    <SimpleStorage />

    <h2>Complex Storage</h2>
    <ComplexStorage />
  </div>

  <div v-else>Loading...</div>
</template>

<script>
import TutorialToken from './TutorialToken'
import SimpleStorage from './SimpleStorage'
import ComplexStorage from './ComplexStorage'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    ComplexStorage,
    TutorialToken,
    SimpleStorage
  },

  computed: mapGetters('drizzle', ['isDrizzleInitialized'])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
