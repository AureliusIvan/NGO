<script setup lang="ts">
</script>

<template>
    <div id="FloatingIcon">
        <img src="../assets/image/whatsapp.svg" alt="whatsapp" />
    </div>
</template>


<style>
#FloatingIcon {
    box-shadow: 0px 0px 10px 0px rgb(0, 0, 0, 0.2);
    position: fixed;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    background-color: #07cb42;
    bottom: 10vh;
    right: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

#FloatingIcon:hover {
    cursor: pointer;
    opacity: 0.8;
}

#FloatingIcon img {
    width: 35px;
    height: 35px;
}
</style>