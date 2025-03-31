<template>
  <div
    :class="[
      'min-h-screen',
      'centered-box',
      'aspect-1/1',
      { 'bg-black text-white': isDark },
    ]"
    @click="isDark = !isDark"
  >
    <div>{{ config.public.appName }}</div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
console.log(config);
const isDark = ref(false);
</script>

<style lang="postcss" scoped>
.centered-box {
  @apply flex items-center justify-center;
}
</style>
