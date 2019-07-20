<template functional>
  <div>
    <strong>{{ parent.label }}</strong
    >:
    <span :class="{ stale: parent.isStale }">{{
      parent.contractData.data
    }}</span>
  </div>
</template>
