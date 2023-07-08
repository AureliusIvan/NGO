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
        <span class="logo_name">{{
            isDesktop ?
            "Cendana Motor" : ""
        }}</span>
    </span>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

span {
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
}


.logo_name {
    margin-top: 6px;
}

.logo {
    width: calc(var(--NavbarSize) - 5px);
    height: calc(var(--NavbarSize) - 5px);
    border-radius: 50%;
}
</style>