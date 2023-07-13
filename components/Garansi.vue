<script setup lang="ts">

</script>
<template>
    <section id="garansi">
        <div class="svg">
            <div class="main_svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="346" height="960" viewBox="0 0 346 960" fill="none">
                    <path d="M-1629 7.57525e-05L150.999 0L345.5 960L-1629 960L-1629 7.57525e-05Z" fill="#274DA0" />
                </svg>
            </div>
            <div class="first_line">
                <svg xmlns="http://www.w3.org/2000/svg" width="227" height="766" viewBox="0 0 227 766" fill="none">
                    <path d="M31 31L196 735" stroke="#F84B64" stroke-width="60" stroke-linecap="round" />
                </svg>
            </div>
            <div class="second_line">
                <svg xmlns="http://www.w3.org/2000/svg" width="227" height="766" viewBox="0 0 227 766" fill="none">
                    <path d="M31 31L196 735" stroke="#F84B64" stroke-width="60" stroke-linecap="round" />
                </svg>
            </div>
        </div>
        <div class="content">
            <h1>Garansi jika ada kerusakan setelah perbaikan</h1>
            <p>Kami sangat percaya pada kualitas kerja &amp; sparepart original yang kami sediakan. Oleh karena itu,
                setiap perbaikan kendaraan di Cendana Motor Graha Raya
                dilengkapi dengan garansi. Jika ada kerusakan setelah perbaikan,
                Anda dapat mengandalkan kami untuk memperbaikinya
                tanpa biaya tambahan.
            </p>
        </div>
    </section>
</template>

<style scoped lang="scss">
#garansi {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: white;
    overflow: hidden;

    .svg {
        position: relative;
        height: 100%;

        .main_svg {
            height: 100%;
            overflow: hidden;
            transform: translateX(-52px);
        }

        .first_line {
            position: absolute;
            top: -20em;
            left: -0.5em;
            transform: rotate(1.181deg);
        }

        .second_line {
            position: absolute;
            bottom: -20em;
            left: 20em;
            transform: rotate(1.181deg);
        }
    }

    .content {
        color: #274DA0;
        width: 70%;
        text-align: right;
        padding-inline: 7%;

        h1 {
            font-size: 32px;
            font-weight: 700;
        }

        p {
            font-size: 24px;
            font-weight: 400;
        }
    }
}
</style>