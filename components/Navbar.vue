<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useMediaQuery } from '@vueuse/core';

const route = useRoute()
const isDesktop = useMediaQuery('(min-width: 1000px)');
// Use a computed property to dynamically update the path
const path = computed(() => {
    if (route.path === '/') {
        return '/kontak'
    } else {
        return '/'
    }
})
</script>

<template>
    <nav id="navbar" class="h-24 w-full">
        <Content>
            <div id="navbar_content" class="flex justify-between align-middle">
                <Logo :isDesktop="isDesktop" />
                <NuxtLink class="Kontak" :to="path">{{ route.path === '/' ? 'Kontak' : 'Home' }}</NuxtLink>
            </div>
        </Content>
    </nav>
</template>


<style scoped>
#navbar {
    position: -webkit-sticky;
    /* Safari */
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--NavbarSize);
    background-color: var(--primary);
    color: black;
}

#navbar_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.Kontak {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: calc(var(--NavbarSize) - 5px);
    height: calc(var(--NavbarSize) - 5px);
    border-radius: 50%;
    color: #393939;
    pointer-events: all;
    cursor: pointer;
}
</style>