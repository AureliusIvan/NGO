<script setup>
import Image from "@/assets/image/carousel1.png"
</script>
<template>
    <div class="carousel_content">
        <div class="left">
            <h1>Selamat datang di Cendana Motor Graha Raya</h1>
            <p>
                bengkel terpercaya untuk kebutuhan
                perawatan kendaraan Anda!
            </p>
        </div>
        <div class="right">
            <img :src="Image" alt="carousel1">
        </div>
    </div>
</template>

<style scoped lang="scss">
.carousel_content {
    $size: 100%;
    $left_size: 0;
    width: $size;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        $left_size : 60%;
        padding-inline: 10%;
        width: $left_size;
        height: 100%;
        background-color: #274DA0;

        h1 {
            color: #FFF;
            font-family: Poppins;
            font-size: 38px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
        }

        p {
            color: #FFF;
            font-family: Poppins;
            font-size: 28px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }

    .right {
        width: calc($size - $left_size);

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }


}
</style>