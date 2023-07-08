<template>
    <div class="content">
        <slot />
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.content {
    width: var(--DesktopSize);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    @media screen and (max-width: 1000px) {
        padding: 20px;
        width: 100%;
    }
}
</style>