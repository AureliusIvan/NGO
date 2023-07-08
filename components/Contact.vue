<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    src: {
        type: String,
        // required: true,
    },
    href: {
        type: String,
        // required: true,
    }
});
</script>

<template>
    <a class="container" :href=href>
        <div>
            <img :src="src">
        </div>
        <div>
            <h1>{{ name }}</h1>
        </div>
    </a>
</template>


<style scoped>
.container {
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
    margin: 10px;
    border-radius: 10px;
    padding: 10px;
    width: 80px;
    height: 80px;
}


h1 {
    font-size: 10px;
    font-weight: 700;
    text-align: center;
    margin: 0;
    padding: 0;
    color: rgb(79, 79, 79);
}

img {
    width: 20px;
    height: 20px;
}
</style>