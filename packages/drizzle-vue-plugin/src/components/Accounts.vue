<template>
  <div>{{ getAccount }}</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Accounts',
  computed: mapGetters('account', ['getAccount'])
}
</script>
<style scoped></style>
