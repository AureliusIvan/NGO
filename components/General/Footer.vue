<template>
    <div id="Footer">
        <div id="top">
            <h2>
                Christamelon Foundation
            </h2>
        </div>
        <div id="center">
            <div id="home" class="item_list">
                <NuxtLink class="item" to="/">Home</NuxtLink>
                <NuxtLink class="item" to="/">About us</NuxtLink>
                <NuxtLink class="item" to="/">What We Do</NuxtLink>
                <NuxtLink class="item" to="/">Media</NuxtLink>
                <NuxtLink class="item" to="/">Contact</NuxtLink>
            </div>
            <div id="more" class="item_list">
                <NuxtLink class="item" to="/">More</NuxtLink>
                <NuxtLink class="item" to="/">Projects</NuxtLink>
                <NuxtLink class="item" to="/">Events</NuxtLink>
                <NuxtLink class="item" to="/">Donate</NuxtLink>
                <NuxtLink class="item" to="/">Blog</NuxtLink>
            </div>
            <div id="connect" class="item_list">
                <NuxtLink class="item" to="/">Connect</NuxtLink>
                <NuxtLink class="item" to="/">Facebook</NuxtLink>
                <NuxtLink class="item" to="/">Instagram</NuxtLink>
                <NuxtLink class="item" to="/">Twitter</NuxtLink>
                <NuxtLink class="item" to="/">Linkdin</NuxtLink>
            </div>
        </div>

        <div id="bottom">
            <h2>
                Subscribe to get latest updates
            </h2>
            <div id="news_letter">
                <input type="text" placeholder="Your Email" />
                <button class="Subscribe_cta">Subscribe</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#Footer {
    width: 100%;
    height: fit-content;
    min-height: 25rem;
    background-color: var(--black, #0B0706);
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5%;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        min-height: fit-content;
        gap: 10px;
    }


    #top {
        h2 {
            color: var(--bg-color, #E8EBF0);
            font-family: Courgette;
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 400;
            line-height: 2.75rem;
            /* 183.333% */
        }
    }

    #center {
        display: flex;
        flex-direction: row;
        gap: 1.5rem;
        justify-content: space-between;
        align-items: center;
        width: max-content;

        @media screen and (max-width: 1000px) {
            flex-direction: column;
            width: 100%;
            justify-content: center;
            align-items: center;
        }

        .item_list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            text-align: left;
            width: max-content;

            @media screen and (max-width: 1000px) {
                flex-direction: column;
                width: 100%;
                justify-content: center;
                align-items: center;
            }

            .item {
                color: #FFF;
                font-family: Nunito Sans;
                font-style: normal;
                font-weight: 300 !important;
                line-height: 160%;
                opacity: 0.7;
                /* 1.4rem */

                &:nth-child(1) {
                    font-weight: 700 !important;
                    opacity: 1;
                }
            }

        }
    }

    #bottom {
        display: flex;
        flex-direction: column;

        @media screen and (max-width: 1000px) {
            padding-block: 20px;
            flex-direction: column;
            width: 100%;
            justify-content: center;
            align-items: center;
        }

        h2 {
            color: var(--bg-color, #E8EBF0);
            font-family: Nunito Sans;
            font-size: 2rem;
            font-style: normal;
            font-weight: 700;
            line-height: 140%;
            width: 50%;
            margin-bottom: 30px;
            /* 2.8rem */

            @media screen and (max-width: 1000px) {
                flex-direction: column;
                width: 100%;
                justify-content: center;
                align-items: center;
            }
        }

        #news_letter {
            $padding: 0.5rem;

            input {
                border-radius: 0.3125rem;
                border: 1px solid rgba(235, 240, 249, 0.30);
                background-color: transparent;
                border-bottom-right-radius: 0%;
                border-top-right-radius: 0%;

                color: rgba(235, 240, 249, 0.30);
                font-family: Nunito Sans;
                font-size: 1rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                padding: $padding;
            }

            button {
                border-radius: 0.25rem;
                background: var(--bg-color, #E8EBF0);
                backdrop-filter: blur(40px);
                padding: calc(#{$padding} + 0.04rem);
                border-top-left-radius: 0%;
                border-bottom-left-radius: 0%;

                color: var(--primary-text, #1D2130);
                text-align: right;
                font-family: Nunito Sans;
                font-size: 1rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;


                &:hover {
                    opacity: 0.8;
                }
            }
        }
    }
}
</style>