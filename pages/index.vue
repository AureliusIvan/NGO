<script setup lang="ts">
// import { getShopItems } from 'composables/useShopItems';
// import { useCounter } from 'composables/useStates';

// import { useGoogleapis } from 'composables/useGoogleapis';
// const { getSheetData } = useGoogleapis();
// console.log('useGoogleapis', getSheetData());
// console.log(useNuxtApp());
//@plugins
// const { $sayHello } = useNuxtApp();
// $sayHello("tsest");
// const counter = ref(0);
// @state
const counter = useCounter();
const color = useColor();
// const api = await getShopItems().then((res) => {
//   console.log(res);
// });

</script>

<template>
  <div>
    <FloatingIcon />
    <!-- <h1>This is Index Page!</h1> -->
    <Carousel />
    <Desc />
    <!-- <Brand /> -->
    <Review />
    <!-- <Button :foo="32" /> -->
  </div>
</template>