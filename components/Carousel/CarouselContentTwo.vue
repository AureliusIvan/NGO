<script setup>
import Image from '@/assets/image/carousel2.png';
</script>
<template>
    <div class="carousel_content">
        <div class="left">
            <img :src="Image" alt="carousel2">
        </div>
        <div class="round">
        </div>
        <div class="right">
            <div class="content">

                <h1>
                    Temukan bengkel yang dapat diandalkan
                </h1>
                <p>
                    dengan pelayanan yang ramah
                    dan profesional disini.
                </p>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.carousel_content {
    $size : 100%;
    $left_size : 0;
    width: $size;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: white;


    .round {
        height: 120vh;
        aspect-ratio: 1/1;
        border-radius: 50%;
        background-color: #274DA0;
        position: absolute;
        top: 0%;
        bottom: 0;
        left: 35%;
        margin: auto;
        z-index: 1;
    }

    .left {
        background-color: transparent;
        $left_size : 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: $left_size;
        padding-inline: 5%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scale(1.4);
        }
    }

    .right {
        height: 100%;
        background-color: #274DA0;
        width: calc($size - $left_size);
        padding-inline: 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;

        .content {
            position: absolute;
            top: 0;
            bottom: 0;
            left: -15%;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
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
}
</style>