<template>
  <div>
    <h2 class="text-2xl font-medium text-gray-900">
      Do you want to share your theme?
    </h2>

    <p>Give it a name a good description and we will generate a permanent link for you.</p>

    <hr class="border-t my-4">

    <p class="my-4 italic max-w-md mx-auto">
      This feature is not ready yet but will be very soon, follow @alfonsobries on twitter to get updates.
    </p>

    <div v-if="storedTheme">
      <h3 class="text-2xl font-medium text-gray-900">
        ¡Great work!
      </h3>
      <p class="mb-3">
        Your theme was saved correctly and from now on it will be listed among the community templates on this site.
      </p>

      <p class="mb-3">
        You can visit or share it at this link:<br>
        <nuxt-link class="text-orange-500 underline" :to="`/themes/${storedTheme.slug}`">
          {{ themePermalink }}
        </nuxt-link>
      </p>

      <t-alert v-if="copied === true" class="mb-3" show variant="success" @hidden="copied = undefined">
        The link was copied correctly!
      </t-alert>
      <t-alert v-if="copied === false" class="mb-3" show variant="error" @hidden="copied = undefined">
        Something went wrong! We could not copy the link try to copy it manually.
      </t-alert>

      <p class="mb-3 flex items-center">
        <t-button :to="`/themes/${storedTheme.slug}`" class="flex">
          Visit →
        </t-button>

        <t-button type="button" class="flex ml-2" @click="copyPermalink">
          <icon class="h-4 w-4 mr-1 text-white">
            <path id="Combined-Shape" d="M0,8.00585866 C0,6.89805351 0.897060126,6 2.00585866,6 L11.9941413,6 C13.1019465,6 14,6.89706013 14,8.00585866 L14,17.9941413 C14,19.1019465 13.1029399,20 11.9941413,20 L2.00585866,20 C0.898053512,20 0,19.1029399 0,17.9941413 L0,8.00585866 L0,8.00585866 Z M6,8 L2,8 L2,18 L12,18 L12,14 L15,14 L15,12 L18,12 L18,2 L8,2 L8,5 L6,5 L6,8 L12,8 L12,14 L17.9941413,14 C19.1029399,14 20,13.1019465 20,11.9941413 L20,2.00585866 C20,0.897060126 19.1019465,0 17.9941413,0 L8.00585866,0 C6.89706013,0 6,0.898053512 6,2.00585866 L6,8 Z" />
          </icon>
          Copy
        </t-button>

        <t-button target="_blank" :href="`http://twitter.com/share?text=Hey! I just build a custom theme for vuejs and Tailwind&url=${themePermalink}`" type="button" class="flex ml-2">
          <icon class="h-4 w-4 mr-1 text-white">
            <path id="Fill-1" d="M19.9554745,3.91978102 C19.2212409,4.24540146 18.4321898,4.46547445 17.6040146,4.56445255 C18.4493431,4.05773723 19.0984672,3.25540146 19.4041606,2.29941606 C18.6131387,2.76854015 17.7369343,3.10927007 16.8043796,3.29291971 C16.0575182,2.49722628 14.9935036,2 13.8159854,2 C11.5548905,2 9.72175182,3.83306569 9.72175182,6.0940146 C9.72175182,6.41489051 9.7580292,6.72737226 9.82781022,7.0270073 C6.42518248,6.85627737 3.40846715,5.22635036 1.38919708,2.74941606 C1.03678832,3.35408759 0.834890511,4.05737226 0.834890511,4.80766423 C0.834890511,6.2280292 1.55773723,7.48116788 2.65627737,8.21532847 C1.98510949,8.19408759 1.35386861,8.00992701 0.801824818,7.70328467 C0.801532847,7.72036496 0.801532847,7.73751825 0.801532847,7.75474453 C0.801532847,9.73839416 2.21277372,11.3931387 4.08569343,11.7691971 C3.74211679,11.8627737 3.38043796,11.9127737 3.0070073,11.9127737 C2.74321168,11.9127737 2.48671533,11.8871533 2.23678832,11.8393431 C2.75773723,13.4659124 4.26970803,14.649562 6.06124088,14.6826277 C4.66007299,15.7806569 2.89474453,16.4351825 0.976642336,16.4351825 C0.64620438,16.4351825 0.320291971,16.4158394 0,16.3780292 C1.81182482,17.539635 3.96386861,18.2173723 6.27591241,18.2173723 C13.8064234,18.2173723 17.9243796,11.9789051 17.9243796,6.56875912 C17.9243796,6.39124088 17.920438,6.21467153 17.9125547,6.03912409 C18.7124088,5.46189781 19.4065693,4.74080292 19.9554745,3.91978102" />
          </icon>
          Share in twitter
        </t-button>
      </p>
    </div>

    <div v-else class="max-w-sm mx-auto">
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
            disabled
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
            disabled
            :variant="{
              'error': form.errors.has('description')
            }"
            rows="3"
            name="description"
            class="w-full"
          />
        </t-input-group>
      </form>
      <!-- <template v-if="!$auth.loggedIn">
        <div v-if="signIn">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Sign in
          </h3>
          <p class="text-sm text-gray-600">
            Do not have an account?
            <a class="text-orange-500 hover:underline" href="#" @click.prevent="signIn = false">Sign up</a>
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
      </template> -->

      <t-input-group>
        <t-button
          :disabled="true || form.busy"
          type="button"
          class="d-block w-full"
          variant="disabled"
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
import copy from 'clipboard-copy'
import RegisterForm from '@/components/auth/RegisterForm.vue'
import LoginForm from '@/components/auth/LoginForm.vue'
import Icon from '@/components/Icon'

export default Vue.extend({
  components: {
    RegisterForm,
    LoginForm,
    Icon
  },
  props: {
    theme: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      copied: undefined,
      storedTheme: null,
      signIn: false,
      authSubmitted: false,
      form: new Form({
        name: '',
        description: '',
        settings: this.theme
      })
    }
  },
  computed: {
    themePermalink () {
      if (!this.storedTheme) {
        return null
      }
      const fullUrl = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '')
      return `${fullUrl}/themes/${this.storedTheme.slug}`
    }
  },
  // watch: {
  //   '$auth.loggedIn' (loggedIn) {
  //     if (loggedIn && this.authSubmitted) {
  //       this.storeTheme()
  //     }
  //   }
  // },
  methods: {
    copyPermalink () {
      copy(this.themePermalink)
        .then(() => {
          this.copied = true
        }).catch(() => {
          this.copied = false
        })
    },
    authNotReady () {
      this.authSubmitted = false
      this.form.busy = false
    },
    storeTheme () {

      // this.form.busy = true
      // // if (!this.$auth.loggedIn) {
      // //   this.authSubmitted = true
      // //   this.$refs.authForm.submitForm()
      // // }

      // this.form.post('/themes')
      //   .then(({ data: theme }) => {
      //     this.storedTheme = theme
      //   })
      //   .catch((error) => {
      //     this.$handleException(error)
      //   })
    }
  }
})
</script>
