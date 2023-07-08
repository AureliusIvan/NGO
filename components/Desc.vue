<script setup lang="ts">
const data = [
    {
        title: "Kualitas Terjamin",
        desc: "Kami menyediakan produk dengan kualitas terjamin dan terbaik di kelasnya."
    },
    {
        title: "Harga Terjangkau",
        desc: "Kami menyediakan produk dengan harga terjangkau dan terbaik di kelasnya."
    },
    {
        title: "Pelayanan Terbaik",
        desc: "Kami menyediakan pelayanan terbaik untuk anda."
    }
]
</script>
<template>
    <div id="Desc">
        <Content>

            <h1>Keunggulan Kami!</h1>
            <div id="Desc_content" class="flex gap-5">
                <DescCard v-for="item in data" :title="item.title" :desc="item.desc" />
            </div>
        </Content>
    </div>
</template>

<style scoped>
#Desc {
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    min-height: 100vh;
    background-color: rgb(56, 72, 156);
    color: white;
}


#Desc_content {
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        gap: 10px;
        margin-inline: 10px;
    }
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
</style>