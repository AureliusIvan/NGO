<script setup>
import json from '@/content.json';

const reviews = json.review;
</script>


<template>
    <div id="Review">
        <Content>
            <h1>Apa kata <br>
                Customer kami?</h1>
            <div class="list">
                <ReviewCard v-for="(item, index) in reviews" :key="index" :name="item.name" :review="item.content" />
            </div>
        </Content>
    </div>
</template>


<style scoped>
#Review {
    z-index: -1;
    position: relative;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    min-height: 100vh;
    width: 100%;
    background-color: rgb(49, 14, 79);
    color: white;
}

h1 {
    font-size: 70px;
    margin-bottom: 2rem;
    font-weight: 700;
    text-align: center;

    @media screen and (max-width: 1000px) {
        font-size: 30px;
    }
}

.list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        gap: 10px;
        margin-inline: 10px;
    }
}
</style>