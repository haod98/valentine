<script lang="ts" setup>
import {onMounted, ref} from "vue";

enum Axis {
  "x",
  "y"
}

const noInput = ref<HTMLDivElement | null>();
const content = ref<HTMLDivElement | null>(null);
const container = ref<HTMLDivElement | null>(null)
const bodyWidth = ref<number>(0)
const bodyHeight = ref<number>(0)
const noClickCount = ref<number>(0)
const yesScale = ref(100);
const yesText = ref(1);
const safeMargin = 80
const currentImage = ref('/assets/cat-giving-rose.jpeg')
const lastRandomIndex = ref(0);
const totalImages = 10

function handleNoInputClick(event: Event) {
  event.stopPropagation();
  if (noInput.value) {
    noClickCount.value++
    chooseRandomImage()
    increaseYesScale()
    const randomXCoordination = preventCoordinatesOverflow(generateRandomCoordinates(Axis.x), Axis.x)
    const randomYCoordination = preventCoordinatesOverflow(generateRandomCoordinates(Axis.y), Axis.y)
    noInput.value.style.transform = `translate(${randomXCoordination}px, ${randomYCoordination}px)`
  }
}

function increaseYesScale() {
  if (yesScale.value === 200) {
    return
  }
  yesScale.value += 10

  if (yesText.value === 6) {
    return;
  }
  yesText.value += 0.5
}

function chooseRandomImage() {
  let currentRandomIndex = generateRandomImageNumber(totalImages)
  while (currentRandomIndex === lastRandomIndex.value) {
    currentRandomIndex = generateRandomImageNumber(totalImages)
  }
  lastRandomIndex.value = currentRandomIndex
  currentImage.value = `/assets/${currentRandomIndex}.jpeg`
}

function generateRandomImageNumber(length: number) {
  return Math.floor(Math.random() * length)
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
  if (content.value && container.value) {
    const client = content.value.getBoundingClientRect()
    const _container = container.value.getBoundingClientRect()
    bodyHeight.value = client.height - _container.height - safeMargin
    bodyWidth.value = client.width
  }

})
</script>

<template>
  <div ref="content" class="h-full overflow-hidden">
    <div>
      <div ref="container">
        <div class="flex-col flex items-center">
          <h1>Do you want to be my valentine?</h1>
          <img :src="currentImage" alt="A cat holding a rose"
               class="max-w-[150px] max-h-[150px] min-w-[150px] min-h-[150px]">
        </div>
      </div>
      <div>
        <button :class="`text-[${yesText}rem]`">Yes</button>
        <div ref="noInput" class="transition-all flex" @click="handleNoInputClick">
          <button>No</button>
        </div>
      </div>
    </div>
    <!--  <button @click="">Submit</button>-->
  </div>
</template>

<style scoped>

</style>
