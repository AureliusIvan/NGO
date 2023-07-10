<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    icon: {
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
            <img :src="icon" alt="icon" />
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
    width: 100%;
    aspect-ratio: 1/1;
    height: 100%;
    transition: 0.3s;

    @media screen and (max-width: 1000px) {
        width: calc(40% - 20px);
    }
}

.container:hover {
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
}


h1 {
    font-size: 70%;
    font-weight: 700;
    text-align: center;
    margin: 0;
    padding: 0;
    color: rgb(79, 79, 79);
}

img {
    width: 100%;
    aspect-ratio: 1/1;
}

i {
    font-size: 40px;
    color: rgb(79, 79, 79);
}
</style>