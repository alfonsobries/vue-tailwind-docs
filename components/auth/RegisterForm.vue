<template>
  <form
    class="max-w-lg w-full mx-auto"
    @submit.prevent="register"
    @keydown="form.onKeydown($event)"
  >
    <t-input-group
      label="Your full name"
      :variant="{
        'error': form.errors.has('name')
      }"
      :feedback="form.errors.get('name')"
    >
      <t-input
        v-model="form.name"
        :disabled="form.busy"
        :variant="{
          'error': form.errors.has('name')
        }"
        name="name"
        class="w-full"
      />
    </t-input-group>
    <t-input-group
      label="Your email"
      :variant="{
        'error': form.errors.has('email')
      }"
      :feedback="form.errors.get('email')"
    >
      <t-input
        v-model="form.email"
        :disabled="form.busy"
        :variant="{
          'error': form.errors.has('email')
        }"
        type="email"
        name="email"
        autocomplete="username"
        class="w-full"
      />
    </t-input-group>

    <t-input-group
      label="Your password"
      :variant="{
        'error': form.errors.has('password')
      }"
      :feedback="form.errors.get('password')"
    >
      <t-input
        v-model="form.password"
        :disabled="form.busy"
        :variant="{
          'error': form.errors.has('password')
        }"
        type="password"
        name="password"
        autocomplete="new-password"
        class="w-full"
      />
    </t-input-group>
    <t-input-group
      label="Confirm password"
      :variant="{
        'error': form.errors.has('password_confirmation')
      }"
      :feedback="form.errors.get('password_confirmation')"
    >
      <t-input
        v-model="form.password_confirmation"
        :disabled="form.busy"
        :variant="{
          'error': form.errors.has('password_confirmation')
        }"
        type="password"
        name="password_confirmation"
        autocomplete="new-password"
        class="w-full"
      />
    </t-input-group>

    <t-input-group
      class="text-center"
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
          Sign up
        </template>
      </t-button>
    </t-input-group>
  </form>
</template>

<script>
import Form from 'vform'

export default {

  data: () => ({
    form: new Form({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    })
  }),
  methods: {
    async register () {
      try {
        // Register the user.
        await this.form.post('/register')

        // Update the user.
        await this.$auth.fetchUser()

        this.$router.push('/')
      } catch (e) {
        this.$handleException(e)
      }
    }
  }
}
</script>
