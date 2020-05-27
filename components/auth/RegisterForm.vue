<template>
  <form
    @submit.prevent="submitForm"
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
      v-if="!hideSubmitButton"
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
  props: {
    hideSubmitButton: {
      type: Boolean,
      default: false
    },
    redirectTo: {
      type: String,
      default: '/',
      required: false
    }
  },
  data: () => ({
    form: new Form({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    })
  }),
  methods: {
    async submitForm () {
      try {
        // Register the user.
        await this.form.post('/register')

        // Update the user.
        await this.$auth.fetchUser()

        if (this.redirectTo) {
          this.$router.push(this.redirectTo)
        }
        this.$emit('success')
      } catch (e) {
        this.$emit('error')
        this.$handleException(e)
      }
    }
  }
}
</script>
