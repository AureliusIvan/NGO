<script setup lang="ts">
import Star from '@/assets/image/star.svg';
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        // required: true,
    }
});
</script>

<template>
    <div class="Card">
        <div class="Name">{{ name }}</div>
        <div class="Star">
            <img :src="Star" v-for="index of 6" class="Star_item">
        </div>
        <div class="Review">{{ review }}</div>
    </div>
</template>

<style scoped lang="scss">
.Card {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    margin-inline: 10px;
    background-color: white;
    width: 100%;
    height: inherit;
    border-radius: 10px;
    color: black;
    padding-block: 10px;

    @media screen and (max-width: 1000px) {
        width: auto;
    }

    .Star {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .Star_item {
        display: flex;
        width: 15px;
        height: 15px;
        margin: 2px;
    }

    .Name {
        text-align: center;
        margin: 10px;
        font-size: 20px;
        font-weight: 700;
    }

    .Review {
        text-align: center;
        margin: 10px;
        font-size: 15px;
        font-weight: 100;
    }
}
</style>