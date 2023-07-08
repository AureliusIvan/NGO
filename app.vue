<template>
  <div>
    <NuxtLayout name="default">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'Cendana Motor',
  meta: [
    { name: 'description', content: 'Cendana Motor.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  // script: [{ innerHTML: 'console.log(\'Hello world\')' }]
})
</script>