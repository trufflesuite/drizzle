<template functional>
  <div>
    <ul>
      <li>{{ parent.contractName }}: {{ parent.method }}</li>
      <li v-for="(row, index) in parent.contractData" :key="index">
        <strong>{{ row }}</strong>
      </li>
    </ul>
  </div>
</template>
