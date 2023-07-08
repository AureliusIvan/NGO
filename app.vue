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
    { name: 'description', content: 'Cendana Motor.' },
    // <meta name="google-site-verification" content="iyly3wk2prm0hRXMjHMiR1Ok8Ow1gUXWyZX8v9Hrft8" />
    { name: 'google-site-verification', content: 'iyly3wk2prm0hRXMjHMiR1Ok8Ow1gUXWyZX8v9Hrft8' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  // script: [{ innerHTML: 'console.log(\'Hello world\')' }]
})
</script>