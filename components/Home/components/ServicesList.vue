<script setup>
const props = defineProps({
    title: {
        type: String,
        default: "Title"
    }
})
</script>
<template>
    <div id="ServicesList">
        <div id="left">
            <img src="" alt="">
        </div>
        <div id="right">
            <h2>{{ title }}</h2>
            <p>
                <slot />
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss">
#ServicesList {
    display: flex;
    flex-direction: row;
    margin-block: 1rem;

    #left {
        margin-inline: 1rem;

        img {
            object-fit: cover;
            background-color: #22495F;
            width: 1.75rem;
            height: 1.75rem;
            flex-shrink: 0;
            border-radius: 4px;
        }
    }

    #right {
        h2 {
            color: var(--title-color, #22495F);
            font-family: Roboto;
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }

        p {
            color: var(--text-color, #374151);

            /* Paragraph */
            font-family: Roboto;
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;
            /* 1.6rem */
        }
    }
}
</style>