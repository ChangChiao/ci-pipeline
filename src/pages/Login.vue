<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const error = ref(false);

const router = useRouter();
const handleSubmit = async (event: SubmitEvent) => {
  const formEl = event.target as HTMLFormElement;
  const data = new FormData(formEl);
  error.value = false;
  try {
    const response = await fetch("/login", { method: "POST", body: data });
    const statusCode = response.status;
    const result = await response.json();
    console.log("login-result", result);
    if (statusCode === 200) {
      router.push("/member");
    } else {
      error.value = true;
    }
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div class="w-[250px] mx-auto">
    <h1 class="text-center pb-2">Welcome</h1>
    <form
      class="flex flex-col items-center"
      id="form"
      @submit.prevent="handleSubmit"
    >
      <input class="input-style" type="text" name="account" required />
      <input class="input-style" type="password" name="password" required />
      <p v-if="error" class="text-red-500">incorrect account or password</p>
      <button class="bg-gray-800 rounded-md text-white w-20 p-2" type="submit">
        submit
      </button>
    </form>
  </div>
</template>

<style>
.input-style {
  @apply rounded-md border border-gray-200 p-2 mb-2;
}
</style>
