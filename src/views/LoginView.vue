<script lang="ts" setup>

import {ref} from "vue";
import {useRouter} from "vue-router";

const typedPassword = ref<string>("")
// Don't look at the source code for the password >:(
const correctPassword = '100523'
const router = useRouter()

function submit() {
  console.log(typedPassword.value)
  console.log(correctPassword)
  if (correctPassword !== typedPassword.value) {
    return
  }
  router.push({name: 'question'})
}

</script>


<template>
  <div>
    <label for="password">Whats our anniversary day?</label>
    <input id="password" v-model="typedPassword" class="border-2" type="password" @keydown.enter="submit">
    <button @click="submit">Confirm</button>
  </div>
  <p>{{ typedPassword }}</p>
</template>
