<script lang="ts" setup>

import {ref} from "vue";
import {useRouter} from "vue-router";
import PrimaryButton from "@/components/PrimaryButton.vue";
import HeadingComponent from "@/components/HeadingComponent.vue";

const typedPassword = ref<string>("")
const passwordIsWrong = ref<boolean>(false)
// Don't look at the source code for the password >:(
const correctPassword = '100523'
const router = useRouter()
const showCorrect = ref(false)
const image = ref('@/assets/home/1.jpeg');

function submit() {
  if (correctPassword !== typedPassword.value) {
    passwordIsWrong.value = true
    image.value = '@/assets/home/crying.jpeg'
    return
  }
  passwordIsWrong.value = false
  showCorrect.value = true
  setTimeout(() => {
    router.push({name: 'question'})
  }, 5000)
}

</script>


<template>
  <div v-if="!showCorrect" class="pt-10">
    <div class="flex justify-center flex-col items-center">
      <img :src="image" alt=""
           class="mb-3 max-w-[150px] max-h-[150px] min-w-[150px] min-h-[150px]">
    </div>
    <!-- TODO: Add more error messages -->
    <div class="flex flex-col items-center">
      <HeadingComponent>Top Secret</HeadingComponent>
      <div class="flex-col flex mb-3">
        <label for="password">Whats our anniversary day?</label>
        <input id="password" v-model="typedPassword" class=" rounded-md  p-2.5" type="password"
               @keydown.enter="submit">
      </div>
      <PrimaryButton @emit-click="submit">Confirm</PrimaryButton>
      <p v-if="passwordIsWrong" class="mt-3">How could you get our date wrong? 🥺</p>
    </div>
  </div>
  <div v-if="showCorrect" class="h-full flex flex-col justify-center items-center">
    <HeadingComponent class="text-2xl">That was correct</HeadingComponent>
    <div class="flex items-center justify-center">
      <img v-if="true" alt="" src="/assets/home/cat-dance.gif">
    </div>
    <HeadingComponent class="text-2xl">You may pass</HeadingComponent>
  </div>
</template>
