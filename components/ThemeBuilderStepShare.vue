<template>
  <div>
    <h2 class="text-2xl font-medium text-gray-900">
      Do you want to share your theme?
    </h2>
    <p>Give it a name a good description and we will generate a permanent link for you.</p>

    <hr class="border-t my-4">

    <div class="max-w-sm mx-auto">
      <form action="" method="post" @submit.prevent="storeTheme">
        <t-input-group
          label="Theme name"
          :status="form.errors.has('name') ? false : null"
          :feedback="form.errors.get('name')"
          :variant="{
            'error': form.errors.has('name')
          }"
        >
          <t-input
            v-model="form.name"
            :disabled="form.busy"
            :variant="{
              'error': form.errors.has('name')
            }"
            maxlength="40"
            name="name"
            class="w-full"
          />
        </t-input-group>
        <t-input-group
          label="Theme decription"
          :status="form.errors.has('description') ? false : null"
          :feedback="form.errors.get('description')"
          :variant="{
            'error': form.errors.has('description')
          }"
        >
          <t-textarea
            v-model="form.description"
            :disabled="form.busy"
            :variant="{
              'error': form.errors.has('description')
            }"
            rows="3"
            name="description"
            class="w-full"
          />
        </t-input-group>
      </form>
      <template v-if="!$auth.loggedIn">
        <div v-if="signIn">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Sign in
          </h3>
          <p class="text-sm text-gray-600">
            Do not have an account? <a class="text-orange-500 hover:underline" href="#" @click.prevent="signIn = false">Sign up</a>
          </p>
          <hr class="border-t my-4">
          <login-form ref="authForm" hide-submit-button @error="authNotReady" />
        </div>
        <div v-else>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Sign up
          </h3>
          <p class="leading-tight text-sm text-gray-600">
            To share your theme you need to sign up so you can manage your theme in the future. Already member? <a class="text-orange-500 hover:underline" href="#" @click.prevent="signIn =true">Sign in</a>
          </p>
          <hr class="border-t my-4">
          <register-form ref="authForm" hide-submit-button @error="authNotReady" />
        </div>
      </template>

      <t-input-group>
        <t-button
          :disabled="form.busy"
          type="button"
          class="d-block w-full"
          @click.prevent="storeTheme"
        >
          <template v-if="form.busy">
            ...
          </template>
          <template v-else>
            Share my theme
          </template>
        </t-button>
      </t-input-group>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Form from 'vform'
import RegisterForm from '@/components/auth/RegisterForm.vue'
import LoginForm from '@/components/auth/LoginForm.vue'

export default Vue.extend({
  components: {
    RegisterForm,
    LoginForm
  },
  props: {
    theme: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      signIn: false,
      authSubmitted: false,
      form: new Form({
        name: '',
        description: '',
        settings: this.theme
      })
    }
  },
  watch: {
    '$auth.loggedIn' (loggedIn) {
      if (loggedIn && this.authSubmitted) {
        this.storeTheme()
      }
    }
  },
  methods: {
    authNotReady () {
      this.authSubmitted = false
      this.form.busy = false
    },
    storeTheme () {
      this.form.busy = true
      if (!this.$auth.loggedIn) {
        this.authSubmitted = true
        this.$refs.authForm.submitForm()
      }

      this.form.post('/themes')
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          this.$handleException(error)
        })
    }
  }
})
</script>
