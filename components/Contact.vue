<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    src: {
        type: string,
        // required: true,
    },
    href: {
        type: string,
        // required: true,
    }
});
</script>

<template>
    <a :href=href>
        <div>
            <img :src="src">
        </div>
        <div>
            <h1>{{ name }}</h1>
        </div>
    </a>
</template>


<style scoped></style>