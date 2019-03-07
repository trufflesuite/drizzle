<template functional>
  <div>
    <strong>{{ parent.method }}</strong
    >: <span :class="{ stale: parent.isStale }">{{ parent.contractData.data }}</span>
  </div>
</template>
