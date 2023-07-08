<template>
    <div class="Layout">
        <Navbar />
        <slot />
        <Footer />
    </div>
</template>


<style scoped>
.Layout {
    position: relative;
}
</style>