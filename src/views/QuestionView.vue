<script lang="ts" setup>
import {ref} from "vue";

const noInput = ref<HTMLDivElement | null>();

function moveInput(event: Event) {
  if (noInput.value) {
    const randomXCoordination = generateRandomCoordination()
    const randomYCoordination = generateRandomCoordination()
    console.log(randomXCoordination, randomXCoordination)
    noInput.value.style.transform = `translate(${randomXCoordination}px, ${randomYCoordination}px)`
  }
}

function randomMultiplier(): number {
  return Math.floor(Math.random() * 10000) + 1;
}

function generateRandomCoordination() {
  return Math.floor(Math.random() * randomMultiplier()) + 1
}
</script>

<template>
  <h1>Do you want to be my valentine?</h1>
  <img alt="A cat holding a rose" src="../assets/images/cat-giving-rose.jpeg">

  <div>
    <input id="yes" class="scale-150" name="valentine" type="radio">
    <label class="text-5xl" for="yes">Yes</label>
  </div>
  <div ref="noInput" @click="moveInput">
    <input id="no" name="valentine" type="radio">
    <label for="no">No</label>
  </div>

  <button>Submit</button>
</template>

<style scoped>

</style>
