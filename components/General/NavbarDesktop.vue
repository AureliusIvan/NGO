<script setup lang="ts">

import { ref, onMounted, computed } from 'vue';

const route = useRoute().path;

const hasOffsetHeight = ref(false);

const updateOffsetHeight = () => {
    hasOffsetHeight.value = window.pageYOffset > 400;
};

onMounted(() => {
    window.addEventListener('scroll', updateOffsetHeight);
});

const computedHasOffsetHeight = computed(() => hasOffsetHeight.value);
</script>

<template>
    <div id="Navbar" :class="computedHasOffsetHeight ? 'offset' : ''">
        <DevOnly>
            <div :class="computedHasOffsetHeight ? 'bg-green-500' : 'bg-red-500'"
                class="fixed top-0 left-0 z-50  text-white text-xl font-bold p-2">
                {{ computedHasOffsetHeight }}</div>
        </DevOnly>
        <div id="Logo" class="w-[162px] h-[72px] relative">
            <div class="left-0 top-0 absolute text-zinc-700 text-2xl font-bold leading-[58px]">Christamelon</div>
            <div class="left-0 top-[27px] absolute text-orange-400 text-2xl font-light leading-[45px] tracking-[4px]">
                Foundation</div>
        </div>

        <div id="icon_list">
            <NuxtLink to="/" class="icon text-gray-700 text-base font-normal"
                :class="computedHasOffsetHeight === true ? 'active' : ''">Home
            </NuxtLink>
            <!-- <NuxtLink to="/about" class="icon text-gray-700 text-base font-normal"
                :class="computedHasOffsetHeight === true ? 'active' : ''">About us</NuxtLink>
            <NuxtLink to="/whatwedo" class="icon text-gray-700 text-base font-normal"
                :class="computedHasOffsetHeight === true ? 'active' : ''">What We Do</NuxtLink>
            <NuxtLink to="/media" class="icon text-gray-700 text-base font-normal"
                :class="computedHasOffsetHeight === true ? 'active' : ''">Media</NuxtLink>
            <NuxtLink to="/contact" class="icon text-gray-700 text-base font-normal"
                :class="computedHasOffsetHeight === true ? 'active' : ''">Contact</NuxtLink> -->
        </div>
        <NuxtLink to="/donate" id="donate" class="px-8 py-3 bg-teal-800 rounded justify-start items-start gap-2.5 flex">
            <div class="text-right text-white text-base font-bold">Donate</div>
        </NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
#Navbar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
    transition: background-color 0.2s ease-in-out;

    &.offset {
        background-color: white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }


    #icon_list {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;

        .icon {
            color: white;
            width: max-content;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.5rem;
            transition: background-color 0.2s ease-in-out;
            border-radius: 10px;

            &:hover {
                background-color: rgb(0, 0, 0, 0.2);
            }

            &.active {
                color: black;
            }
        }

    }

    #donate {
        &:hover {
            opacity: 0.8;
        }
    }
}

#Logo {
    font-family: 'Open Sans', sans-serif;
}
</style>