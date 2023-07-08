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
        <div class="topbar">
            <div>

            </div>
        </div>
        <Content>
            <div id="navbar_content" class="flex justify-between align-middle">
                <Logo :isDesktop="isDesktop" />
                <NuxtLink class="Kontak" :to="path">{{ route.path === '/' ? 'contact' : 'home' }}</NuxtLink>
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
    box-shadow: 0px 4px 5px 3px rgb(0, 0, 0, 0.1);
}

#navbar_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.Kontak {
    box-shadow: 0px 2px 10px 1px rgb(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: calc(var(--NavbarSize) - 5px);
    height: calc(var(--NavbarSize) - 5px);
    border-radius: 40px;
    height: 40px;
    width: 100px;
    padding-inline: 20px;
    color: #393939;
    pointer-events: all;
    cursor: pointer;
    outline: none !important;
    color: rgb(110, 110, 110);
    font-weight: 700;
    transition: all 0.2s ease-in-out
}

.Kontak:hover {
    background-color: rgb(110, 110, 110);
    color: white;
}
</style>