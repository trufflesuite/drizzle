<template functional>
  <div>
    <div class="flex-container">
      <div v-for="(val, index) in parent.contractData.data" :key="index">
        <div>
          <strong>{{ val.key }}</strong>
        </div>
        <div>{{ val.value }}</div>
      </div>
    </div>
  </div>
</template>

<style>
div.flex-container {
  display: flex;
  border-left: 2px solid white;
}

div.flex-container > div {
  flex: 1;
}
</style>
