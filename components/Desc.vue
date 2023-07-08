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
            <div>
                <h1>Keunggulan Kami!</h1>
                <div class="flex gap-5">
                    <DescCard v-for="item in data" :title="item.title" :desc="item.desc" />
                </div>
            </div>
        </Content>
    </div>
</template>

<style scoped>
#Desc {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: rgb(56, 72, 156);
    color: white;
}

h1 {
    font-size: 50px;
    font-weight: 700;
    text-align: center;
    margin: 0;
    padding: 0;
}
</style>