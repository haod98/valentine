<script lang="ts" setup>

import {ref} from "vue";
import {useRouter} from "vue-router";
import PrimaryButton from "@/components/PrimaryButton.vue";

const typedPassword = ref<string>("")
const passwordIsWrong = ref<boolean>(false)
// Don't look at the source code for the password >:(
const correctPassword = '100523'
const router = useRouter()

function submit() {
  if (correctPassword !== typedPassword.value) {
    passwordIsWrong.value = true
    return
  }
  passwordIsWrong.value = false
  router.push({name: 'question'})
}

</script>


<template>
  <div class="pt-10">
    <div class="flex justify-center flex-col items-center">
      <img alt="" class="mb-3 max-w-[150px] max-h-[150px] min-w-[150px] min-h-[150px]"
           src="/assets/home/1.jpeg">
      <p v-if="passwordIsWrong">Wrong. How could you get our date wrong? 🥺</p>
    </div>
    <!-- TODO: Add more error messages -->
    <div class="flex flex-col items-center">
      <h1 class="font-secondary uppercase font-bold text-5xl text-[#fb8ba2]">Top Secret</h1>
      <div class="flex-col flex mb-3">
        <label for="password">Whats our anniversary day?</label>
        <input id="password" v-model="typedPassword" class=" rounded-md  p-2.5" type="password"
               @keydown.enter="submit">
      </div>
      <PrimaryButton @emit-click="submit">Confirm</PrimaryButton>
      <!--      <button @click="submit">Confirm</button>-->
      <!--      <div class="mt-3">-->
      <!--        <img alt="" src="/assets/home/cat-dance.gif">-->
      <!--      </div>-->
    </div>
  </div>
  <p>{{ typedPassword }}</p>
</template>
