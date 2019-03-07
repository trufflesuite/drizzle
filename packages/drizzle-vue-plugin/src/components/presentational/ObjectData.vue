<template functional>
  <div>
    <ul>
      <li>{{ parent.contractName }}: {{ parent.method }}</li>
      <li v-for="(val, index) in parent.contractData.data" :key="index">
        <strong>{{ val.key }}</strong> {{ val.value }}
      </li>
    </ul>
  </div>
</template>
