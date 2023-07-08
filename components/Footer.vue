<script setup>
import json from '@/content.json';
const credit = json.credit;
</script>

<template>
    <Content>
        <footer>
            <div class="top">
                <div class="left">
                </div>
                <div class="right">
                </div>
            </div>
            <div class="bottom">
                &copy; {{ credit.name }} | Managed by&nbsp;<a class="creator_link" :href="credit.link">@{{
                    credit.creator }}</a>
            </div>
        </footer>
    </Content>
</template>

<style>
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
    border: 1px solid red;
    padding: 10px;
}

footer .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50%;
}

footer .top .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 100%;
}

footer .top .left img {
    width: 50px;
    height: 50px;
}

footer .top .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 100%;
}

footer .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 50%;
    color: rgb(0, 0, 0, 0.5);
}

.creator_link {
    color: rgb(41, 0, 41);
    text-decoration: none;
    font-weight: bold;
}

.creator_link:hover {
    color: rgb(192, 140, 192);
    text-decoration: underline;
}
</style>
