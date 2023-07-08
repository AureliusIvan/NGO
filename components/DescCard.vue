<template>
    <div id="DescCard">
        <h1>{{ title }}</h1>
        <p>
            {{ desc }}
        </p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: "Cendana Motor"
    },
    desc: {
        type: String,
        default: "Cendana Motor"
    }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

#DescCard {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: start;
    padding: 20px;
    height: inherit;
}

h1 {
    color: var(--primary);
    font-size: 1.5rem;
    font-weight: 700;
    text-align: left;
    line-height: 1.5;
    margin-bottom: 10px;
}

p {
    color: var(--primary);
    font-size: 1.2rem;
    font-weight: 300 !important;
    text-align: left;
    line-height: 1.5;
}
</style>