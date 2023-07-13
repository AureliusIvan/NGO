<script setup>
import Image from "@/assets/image/carousel1.png"
</script>
<template>
    <div class="carousel_content">
        <div class="left">
            <div class="content">
                <h1>
                    Di Cendana Motor Graha Raya
                </h1>
                <p>
                    kami mengutamakan perbaikan
                    kendaraan terbaik yang sesuai dengan
                    kebutuhan Anda.
                </p>
            </div>
        </div>
        <div class="center">
            <svg xmlns="http://www.w3.org/2000/svg" width="971" height="817" viewBox="0 0 971 817" fill="none">
                <path d="M423.5 0.5L970.907 817H0.0927734L423.5 0.5Z" fill="#274DA0" />
            </svg>
        </div>
        <div class="right">
            <img :src="Image" alt="content_berpengalmaan">
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
        $left_size : 45%;
        padding-inline: 5%;
        width: $left_size;
        height: 100%;
        background-color: #274DA0;
        position: relative;

        .content {
            position: absolute;
            width: 120%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10%;
            left: 0%;
            z-index: 2;

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

    }


    .center {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .right {
        width: calc($size - $left_size);

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>