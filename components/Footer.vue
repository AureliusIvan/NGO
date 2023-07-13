<script setup>
import json from '@/content.json';
const credit = json.credit;
</script>

<template>
    <footer>
        <div class="bottom">
            &copy; {{ credit.name }} | Managed by&nbsp;<a class="creator_link" :href="credit.link">@{{
                credit.creator }}</a>
        </div>
    </footer>
</template>

<style scoped lang="scss">
footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: fit-content;
    width: 100%;
    background-color: var(--primary);
    color: #fff;
    padding: 10px;

    .bottom {

        align-items: center;
        text-align: center;
        width: 100%;
        height: 50%;
        color: rgb(0, 0, 0, 0.5);

        @media screen and (max-width: 1000px) {
            font-size: 12px;
        }

        .creator_link {
            color: rgb(41, 0, 41);
            text-decoration: none;
            font-weight: bold;

            &:hover {
                color: rgb(192, 140, 192);
                text-decoration: underline;
            }
        }

    }
}
</style>
