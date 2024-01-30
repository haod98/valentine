<script lang="ts" setup>
import {onMounted, ref} from "vue";

enum Axis {
  "x",
  "y"
}

const noInput = ref<HTMLDivElement | null>();
const content = ref<HTMLDivElement | null>(null);
const bodyWidth = ref<number>(0)
const bodyHeight = ref<number>(0)
const safeMargin = 50


function moveInput(event: Event) {
  if (noInput.value) {
    const randomXCoordination = preventCoordinatesOverflow(generateRandomCoordinates(Axis.x), Axis.x)
    const randomYCoordination = preventCoordinatesOverflow(generateRandomCoordinates(Axis.y), Axis.y)
    console.log(`x: ${randomXCoordination}, y: ${randomYCoordination}`)
    noInput.value.style.transform = `translate(${randomXCoordination}px, ${randomYCoordination}px)`
  }
}

function randomMultiplier(axis: Axis): number {
  if (axis === Axis.x) {
    return Math.floor(Math.random() * bodyWidth.value);
  }
  return Math.floor(Math.random() * bodyHeight.value);
}

function generateRandomCoordinates(axis: Axis) {
  return Math.floor(Math.random() * randomMultiplier(axis)) + 1
}

function preventCoordinatesOverflow(coordinates: number, axis: Axis): number {
  if (axis === Axis.x) {
    if (coordinates > bodyWidth.value) {
      return bodyWidth.value
    }
    return coordinates
  }

  if (coordinates > bodyHeight.value) {
    return bodyHeight.value
  }
  return coordinates
}

onMounted(() => {
  if (content.value) {
    const client = content.value.getBoundingClientRect()
    bodyHeight.value = client.height - safeMargin
    bodyWidth.value = client.width - safeMargin
  }

})
</script>

<template>
  <div ref="content" class="h-full">
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

    <!--  <button @click="">Submit</button>-->
  </div>
</template>

<style scoped>

</style>
