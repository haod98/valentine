<script lang="ts" setup>

import HeadingComponent from "@/components/HeadingComponent.vue";
import {useRoute} from "vue-router";

const route = useRoute()
const tries = route.query?.tries
const showTries = tries !== '0' && tries !== '1'
console.log(tries)
</script>

<template>
  <div class="mt-10 flex flex-col justify-center items-center overflow-hidden">
    <HeadingComponent>Hooray I knew you would say yes</HeadingComponent>
    <img alt="" class="my-5" src="/assets/home/jump.gif">
    <p v-if="showTries" class="text-[8px]">You pressed no {{ tries }} times ... </p>
  </div>
</template>

<style scoped>

</style>
