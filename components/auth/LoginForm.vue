<template>
  <form
    @submit.prevent="login"
    @keydown="form.onKeydown($event)"
  >
    <t-input-group
      label="Email"
      :status="form.errors.has('email') ? false : null"
      :feedback="form.errors.get('email')"
      :variant="{
        'error': form.errors.has('email')
      }"
    >
      <t-input
        v-model="form.email"
        :disabled="form.busy"
        :variant="{
          'error': form.errors.has('email')
        }"
        type="email"
        name="email"
        class="w-full"
      />
    </t-input-group>

    <t-input-group
      label="Password"
      :feedback="form.errors.get('password')"
      :variant="{
        'error': form.errors.has('password')
      }"
    >
      <t-input
        v-model="form.password"
        :disabled="form.busy"
        :variant="{
          'error': form.errors.has('password')
        }"
        type="password"
        name="password"
        class="w-full"
      />
    </t-input-group>

    <div class="flex justify-between text-sm">
      <label
        for="remember"
        class="flex py-1 items-center text-orange-500  "
      >
        <t-checkbox
          id="remember"
          v-model="form.remember"
          :disabled="form.busy"
          name="remember"
        />
        <span class="ml-3">Remember me</span>
      </label>

      <nuxt-link
        class="hover:underline text-orange-500  text-right py-1"
        :to="{ name: 'password.request' }"
      >
        Forgot your password?
      </nuxt-link>
    </div>

    <t-input-group
      v-if="showSubmitButon"
      class="text-center mt-5"
    >
      <t-button
        :disabled="form.busy"
        type="submit"
        class="d-block w-full"
      >
        <template v-if="form.busy">
          ...
        </template>
        <template v-else>
          Sign in
        </template>
      </t-button>
    </t-input-group>
  </form>
</template>

<script>
import Vue from 'vue'
import Form from 'vform'
import { mapGetters } from 'vuex'

export default Vue.extend({
  props: {
    showSubmitButon: {
      type: Boolean,
      default: true
    },
    redirect: {
      type: Boolean,
      default: true
    },
    returnTo: {
      type: String,
      default: '/'
    }
  },

  data: () => ({
    form: new Form({
      email: '',
      password: '',
      remember: false
    })
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  methods: {
    login () {
      this.form.post('/login')
        .then(this.handleLogin)
        .catch(this.$handleException)
        .then(() => this.$emit('end'))
    },

    async handleLogin () {
      // Keep busy status
      this.form.busy = true

      const user = await this.$store.dispatch('auth/fetchUser')

      // this.$success(this.$t('auth.notifications.login_success', { name: user.just_name }))

      this.$router.push(this.returnTo)
    }
  }
})
</script>
