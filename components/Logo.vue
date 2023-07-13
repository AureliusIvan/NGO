<script setup>
const props = defineProps({
    isDesktop: {
        type: Boolean,
        required: true,
    },
});
</script>

<template>
    <span>
        <img class="logo" src="../assets/image/logo.png" alt="logo" border="0">
        <!-- <span class="logo_name">{{
            isDesktop ?
            "Cendana Motor Graha Raya" : ""
        }}</span> -->
    </span>
    <!-- <span class="logo_name">{{
        isDesktop ?
        "Cendana Motor Graha Raya" : ""
    }}</span> -->
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

span {
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
}


.logo_name {
    font-family: 'Poppins', sans-serif;
    margin-top: 6px;
    color: rgb(39, 77, 160);
    font-weight: 400;
}

.logo {
    width: calc(var(--NavbarSize) - 5px);
    height: calc(var(--NavbarSize) - 5px);
    border-radius: 50%;
}
</style>