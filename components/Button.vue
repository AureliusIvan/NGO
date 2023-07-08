<template :="children">
    <button class="btn btn-primary bg-green-500 rounded">
        {{ foo }}
    </button>
    <br>
    <dev-only>
        <button class="btn btn-primary bg-green-500 rounded">
            {{ foo }}
        </button>
    </dev-only>
</template>


<script setup lang="ts">
const props = defineProps({
    foo: {
        type: undefined,
        required: true,
    },
});
</script>