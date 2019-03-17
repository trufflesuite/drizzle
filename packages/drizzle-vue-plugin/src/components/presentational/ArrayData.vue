<template functional>
  <div>
    <ul>
      <li>{{ parent.contractName }}: {{ parent.method }}</li>
      <li v-for="(row, index) in parent.contractData.data" :key="index">
        <strong>{{ row }}</strong>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
}
</style>
