<script setup lang="ts">
import Image2 from '../assets/image/content_berpengalmaan.png'


const date = new Date();
const tahunberdiri = 2007;
const year = date.getFullYear();
const umur = year - tahunberdiri;
</script>
<template>
    <div id="Desc">
        <section id="keunggulan" class="kenapa_pilih_kami">
            <h2> Kenapa pilih kami?</h2>
            <p>Kami menawarkan sejumlah manfaat bagi anda,</p>
        </section>
        <section class="paragraf_full">
            <div class="background">
                <svg xmlns="http://www.w3.org/2000/svg" width="1108" height="960" viewBox="0 0 1108 960" fill="none">
                    <path d="M0 0H913.5L1108 960L0 960V0Z" fill="#274DA0" />
                </svg>
            </div>
            <div class="paragraf_content">
                <h2 class="text-black"> Mekanik &amp; owner yang ramah</h2>
                <p class="text-black align-left">
                    Kami memiliki tim mekanik yang tidak hanya
                    ahli dalam bidangnya, tetapi juga ramah
                    dan berpengalaman dalam melayani
                    pelanggan dengan baik. Kami percaya
                    bahwa kepuasan pelanggan bukan hanya
                    tentang perbaikan kendaraan, tetapi juga
                    tentang pengalaman yang menyenangkan
                    dan pelayanan yang ramah.
                </p>
            </div>
        </section>
        <div class="paragraf_full">
            <div class="background">
                <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="960" viewBox="0 0 1920 960" fill="none">
                    <path d="M1919.5 960L139.501 960L-54.9999 -5.0546e-05L1919.5 0.000183105L1919.5 960Z" fill="#274DA0" />
                </svg>
            </div>
            <div class="paragraf_content">
                <h2 class="text-black align-right"> Berpengalaman lebih dari {{ umur }} tahun</h2>
                <p class="align-right"> Dengan pengalaman selama lebih dari {{ umur }} tahun
                    dalam industri ini, kami telah memperoleh
                    pengetahuan dan keterampilan yang
                    mendalam dalam perbaikan kendaraan.
                    Kami terus mengikuti perkembangan terbaru
                    dalam teknologi otomotif untuk memberikan
                    layanan terbaik kepada pelanggan kami.</p>
            </div>
            <img :src="Image2" alt="content_berpengalmaan" class="image_2">
        </div>
        <Garansi />
    </div>
</template>

<style lang="scss" scoped>
.border {
    border: 2px solid red;
}

#Desc {
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    height: fit-content;
    min-height: 100vh;
    width: 100%;
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

.paragraf_full {
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;


    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }


    .paragraf_content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: baseline;
        height: 100%;
        width: 55%;
        padding-left: 5%;

        &.right {
            align-items: flex-end;
            padding-right: 5%;
            padding-left: 0;
        }

        h2 {
            width: 100%;
            color: #FFF;
            font-family: Poppins;
            font-size: 38px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;

            &.align-right {
                text-align: right;
            }

            &.align-left {
                text-align: left;
            }
        }

        p {
            color: #FFF;
            font-family: Poppins;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;

            &.align-right {
                text-align: right;
            }

            &.align-left {
                text-align: left;
            }
        }
    }

    .image_2 {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 40%;
        object-fit: cover;
    }
}

.kenapa_pilih_kami {
    background: #F1F6FF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 70px;

    $size: 70%;

    h2 {
        width: $size;
        text-align: left;
        color: #274DA0;
        font-family: Poppins;
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    p {
        width: $size;
        text-align: left;
        color: #274DA0;
        font-family: Poppins;
        font-size: 36px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

}
</style>