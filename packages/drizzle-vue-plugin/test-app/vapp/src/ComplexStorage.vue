<template>
  <div v-if="isDrizzleInitialized">
    <p>string1 and string2 are converted from bytes to UTF-8</p>
    <Contract contractName="ComplexStorage" method="string1" toUtf8 />
    <Contract contractName="ComplexStorage" method="string2" toUtf8 />
    <p>Complex Storage object</p>
    <Contract contractName="ComplexStorage" method="singleDD" />
  </div>

  <div v-else>Loading...</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: mapGetters('drizzle', ['isDrizzleInitialized'])
}
</script>

<style></style>
