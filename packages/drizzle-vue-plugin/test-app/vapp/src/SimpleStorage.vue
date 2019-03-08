<template>
  <div v-if="isDrizzleInitialized">
    <div>
      <drizzle-contract contractName="SimpleStorage" method="storedData" />
      <drizzle-contract-form contractName="SimpleStorage" method="set" />
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
