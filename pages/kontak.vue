<script setup lang="ts">
import json from '@/content.json';
const socialmedia = json.socialmedia;
</script>

<template>
    <div id="Kontak">
        <Content>
            <div>
                <h1>Kontak</h1>
                <p>Hubungi kami melalui kontak berikut:</p>
                <p>Telepon: 08123456789</p>
            </div>
            <Contact v-for="item in socialmedia" :name="item.name" src="test" :href="item.link" />
        </Content>
    </div>
</template>

<style scoped>
#Kontak {
    min-height: 100vh;
    width: 100%;
    background-color: rgb(248, 248, 248);
    color: white;
}
</style>
