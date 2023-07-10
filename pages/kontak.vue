<script setup lang="ts">
import json from '@/content.json';
import Instagram from '@/assets/image/instagram.svg';
import Facebook from '@/assets/image/facebook.svg';
import Whatsapp from '@/assets/image/whatsapp.svg';
import Google from '@/assets/image/google.svg';
import Maps from '@/assets/image/google-maps.svg';
const socialmedia = [
    {
        "name": "Instagram",
        "link": "https://www.instagram.com/cendanamotor/",
        "icon": Instagram
    },
    {
        "name": "Facebook",
        "link": "https://www.facebook.com/cendanamotor/",
        "icon": Facebook
    },
    {
        "name": "Whatsapp",
        "link": "https://wa.me/6281280000000",
        "icon": Whatsapp
    },
    {
        "name": "Google",
        "link": "https://wa.me/6281280000000",
        "icon": Google
    },
    {
        "name": "Maps",
        "link": "https://goo.gl/maps/5bT3mGaNmFmHAJtFA",
        "icon": Maps
    }
]
</script>

<template>
    <div id="Kontak">
        <Content>
            <div class="Box">
                <h1>Temukan kami!</h1>
            </div>
            <div class="Container">
                <Contact v-for="item in socialmedia" :name="item.name" :icon="item.icon" :href="item.link" />
            </div>
        </Content>
    </div>
</template>

<style scoped>
#Kontak {
    min-height: 100vh;
    width: 100%;
    background-color: rgb(248, 248, 248);
    color: rgb(78, 78, 78);
    padding-top: 30px;
}

h1 {
    font-size: 40px;
    margin-bottom: 2rem;
    font-weight: 700;
    text-align: center;

    @media screen and (max-width: 1000px) {
        font-size: 28px;
    }
}

.Container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row !important;

    @media screen and (max-width: 1000px) {
        flex-direction: unset !important;
        justify-content: center;
        gap: 20px;
        margin-inline: 10px;
        flex-wrap: wrap;
    }
}
</style>
