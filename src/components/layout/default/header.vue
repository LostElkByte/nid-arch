<template>
  <template>
    <header class="flex justify-between py-3 px-4 w-full">
      <AppLogo to="/" height="h-12" />
      <div class="flex gap-4">
        <button @click="colorMode.preference = 'light'">亮色</button>
        <button @click="colorMode.preference = 'dark'">暗色</button>
        <button @click="colorMode.preference = 'system'">系统</button>
      </div>
    </header>
  </template>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
console.log(colorMode);
</script>
