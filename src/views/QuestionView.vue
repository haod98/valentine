<script lang="ts" setup>
import {onMounted, ref} from "vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import HeadingComponent from "@/components/HeadingComponent.vue";
import router from "@/router";

enum Axis {
  "x",
  "y"
}

const htmlNoButtonContainer = ref<HTMLDivElement | null>();
const content = ref<HTMLDivElement | null>(null);
const container = ref<HTMLDivElement | null>(null)
const bodyWidth = ref<number>(0)
const bodyHeight = ref<number>(0)
const noClickCount = ref<number>(0)
const yesText = ref(1);
const currentImage = ref(`${import.meta.env.BASE_URL}/assets/cat-giving-rose.jpeg`)
const lastRandomIndex = ref(0);
const totalImages = 10
const boundingClientButton = ref<DOMRect>()
const noButtonSize = ref<number>(0)
const noButtonScale = ref<number>(1);
const maxRightCoordinates = ref<number>(0)
const maxLeftCoordinates = ref<number>(0)

function handleNoInputClick(event: Event) {
  event.stopPropagation();
  if (htmlNoButtonContainer.value) {
    noClickCount.value++
    chooseRandomImage()
    increaseYesButtonSize()
    const xCoordinates = generateRandomCoordinate(Axis.x);
    const yCoordinates = generateRandomCoordinate(Axis.y);
    const randomXCoordination = preventCoordinatesOverflow(xCoordinates, Axis.x)
    const randomYCoordination = preventCoordinatesOverflow(yCoordinates, Axis.y)
    htmlNoButtonContainer.value.style.transform = `translate(${randomXCoordination}px, ${randomYCoordination}px)`
  }
}

function increaseYesButtonSize() {
  if (yesText.value < 2) {
    yesText.value = parseFloat((yesText.value + 0.1).toFixed(1))
  }
  if (noButtonScale.value > 0) {
    noButtonScale.value -= 0.03;
  }
}

function chooseRandomImage() {
  let currentRandomIndex = generateRandomImageNumber(totalImages)
  while (currentRandomIndex === lastRandomIndex.value) {
    currentRandomIndex = generateRandomImageNumber(totalImages)
  }
  lastRandomIndex.value = currentRandomIndex
  currentImage.value = `${import.meta.env.BASE_URL}/assets/${currentRandomIndex}.jpeg`
}

function generateRandomImageNumber(length: number) {
  return Math.floor(Math.random() * length)
}


function generateRandomCoordinate(axis: Axis): number {
  let multiplier;
  if (axis === Axis.x) {
    if (boundingClientButton.value) {
      let min = maxLeftCoordinates.value
      let max = maxRightCoordinates.value
      let randomNumber = Math.random() * (max - min) + min;
      randomNumber = Math.floor(randomNumber);
      return randomNumber
    }
  } else {
    multiplier = bodyHeight.value;
    return Math.floor(Math.random() * multiplier) + 1
  }
  return 0
}


function preventCoordinatesOverflow(coordinates: number, axis: Axis): number {
  if (axis === Axis.x) {
    if (coordinates > maxRightCoordinates.value) {
      return maxRightCoordinates.value
    }
    if (maxLeftCoordinates.value > coordinates) {
      return maxLeftCoordinates.value
    }
    return coordinates
  }

  if (coordinates > bodyHeight.value) {
    return bodyHeight.value
  }
  return coordinates
}


onMounted(() => {
  if (content.value && container.value && htmlNoButtonContainer.value) {
    const client = content.value.getBoundingClientRect()
    const _container = container.value.getBoundingClientRect()
    bodyHeight.value = client.height - _container.height - 70
    bodyWidth.value = client.width
    boundingClientButton.value = htmlNoButtonContainer.value.getBoundingClientRect()
    noButtonSize.value = boundingClientButton.value.width
    maxRightCoordinates.value = bodyWidth.value - boundingClientButton.value.right
    maxLeftCoordinates.value = boundingClientButton.value.left - bodyWidth.value
  }

})
</script>

<template>
  <div ref="content" class="h-full overflow-hidden">
    <div>
      <div ref="container" class="mb-8">
        <div class="flex-col flex items-center gap-2">
          <HeadingComponent class="text-2xl">Do you want to be my valentine?</HeadingComponent>
          <img :src="currentImage" alt="A cat holding a rose"
               class="max-w-[200px] max-h-[200px] min-w-[200px] min-h-[200px]">
        </div>
      </div>
      <div class="flex justify-center">
        <PrimaryButton :style="`scale:${yesText}`" class="px-6 mr-5"
                       @emit-click="() => router.push({name: 'success', query: {tries: noClickCount}})">
          Yes
        </PrimaryButton>
        <div ref="htmlNoButtonContainer" class="transition-all flex" @click="handleNoInputClick">
          <PrimaryButton :style="`scale:${noButtonScale}`" class="px-6">No</PrimaryButton>
        </div>
      </div>
    </div>
    <!--  <button @click="">Submit</button>-->
  </div>
</template>

<style scoped>

</style>
