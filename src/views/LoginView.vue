<script lang="ts" setup>

import {ref} from "vue";
import {useRouter} from "vue-router";

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
  <div>
    <!-- TODO: Add more error messages -->
    <p v-if="passwordIsWrong">Wrong. How could you get our date wrong? 🥺</p>
    <label for="password">Whats our anniversary day?</label>
    <input id="password" v-model="typedPassword" class="border-2" type="password" @keydown.enter="submit">
    <button @click="submit">Confirm</button>
  </div>
  <p>{{ typedPassword }}</p>
</template>
