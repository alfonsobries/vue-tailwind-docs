<template>
  <div class="bg-gray-100 py-16 shadow-inner">
    <h1 class="max-w-md text-center mx-auto mb-8 text-3xl font-bold">
      <img class="h-12 mx-auto" src="@/assets/img/logo.svg" alt="Login">
      Sign in to your account
    </h1>
    <t-card class="max-w-md mx-auto">
      <login-form />
    </t-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LoginForm from '@/components/auth/LoginForm.vue'

export default Vue.extend({
  components: {
    LoginForm
  }
})
</script>
