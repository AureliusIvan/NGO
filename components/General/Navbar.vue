<!-- ivan | 11 Agustus 2023
<script setup>
import { useMediaQuery, useEventListener } from '@vueuse/core';

const mediaQuery = ref(useMediaQuery('(min-width: 1000px)').value);
</script>

<template>
    <div v-if="mediaQuery === true">
        <GeneralNavbarDesktop />
    </div>
    <div v-else-if="mediaQuery === false">
        <GeneralNavbarMobile />
    </div>
</template> -->


<template>
    <div v-if="showNavbar === true">
        <GeneralNavbarDesktop />
    </div>
    <div v-else-if="showNavbar === false">
        <GeneralNavbarMobile />
    </div>
</template>
  
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const showNavbar = ref(true);

const handleResize = () => {
    showNavbar.value = window.innerWidth > 768; // Adjust the breakpoint as needed
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
});
</script>
  