<template>
  <t-card variant="playground">
    <template slot="header">
      <h3 class="text-2xl font-medium text-gray-900">
        Playground
      </h3>
      <div class="hidden sm:flex items-center text-sm md:text-base">
        <button type="button" class="bg-orange-100 text-orange-700 inline-block rounded-lg font-medium leading-none py-2 px-3 focus:outline-none bg-orange-50 text-orange-700">
          Customize
        </button>
        <button type="button" class=" text-gray-500 hover:text-orange-600 focus:text-orange-600 ml-2 inline-block rounded-lg font-medium leading-none py-2 px-3 focus:outline-none text-gray-500 hover:text-orange-600 focus:text-orange-600">
          Classes
        </button>
      </div>
    </template>

    <template slot="footer">
      <span class="text-sm leading-tight mr-2 py-1">Current value:</span>
      <code class="text-orange-600 font-mono text-sm bg-gray-100 px-4 py-1 rounded overflow-auto max-w-full whitespace-pre">{{ currentValue }}</code>
    </template>

    <div class="flex -mx-3">
      <div class="w-3/5 px-3">
        <div id="preview">
          <h4 class="text-base font-medium text-gray-900">
            Preview:
          </h4>
          <p class="text-xs leading-5 text-gray-500">
            Take a look of how your component will look like
          </p>
          <div class="mt-2 flex flex-col items-center justify-center bg-white p-4 relative rounded shadow-md border">
            <t-input v-model="currentValue" />
          </div>
        </div>
      </div>
      <div class="px-3">
        <fieldset>
          <legend class="text-base font-medium text-gray-900">
            Example variants
          </legend>
          <p class="text-xs leading-5 text-gray-500">
            Variants crafted by us as an example
          </p>
          <div>
            <div class="mt-1 flex items-center">
              <input id="push_default" name="form-input push_notifications" type="radio" class="form-radio h-4 w-4 text-orange-600 transition duration-150 ease-in-out">
              <label for="push_default" class="ml-3">
                <span class="block text-sm leading-5 font-medium text-gray-700"> Default
                </span>
              </label>
            </div>
            <div class="mt-1 flex items-center">
              <input id="push_everything" name="form-input push_notifications" type="radio" class="form-radio h-4 w-4 text-orange-600 transition duration-150 ease-in-out">
              <label for="push_everything" class="ml-3">
                <span class="block text-sm leading-5 font-medium text-gray-700"> Danger
                </span>
              </label>
            </div>
            <div class="mt-1 flex items-center">
              <input id="push_email" name="form-input push_notifications" type="radio" class="form-radio h-4 w-4 text-orange-600 transition duration-150 ease-in-out">
              <label for="push_email" class="ml-3">
                <span class="block text-sm leading-5 font-medium text-gray-700"> Success
                </span>
              </label>
            </div>
            <div class="mt-1 flex items-center">
              <input id="push_nothing" name="form-input push_notifications" type="radio" class="form-radio h-4 w-4 text-orange-600 transition duration-150 ease-in-out">
              <label for="push_nothing" class="ml-3">
                <span class="block text-sm leading-5 font-medium text-gray-700"> Weird
                </span>
              </label>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  </t-card>
</template>

<script>
export default {
  data () {
    return {
      currentValue: 'I love vuejs 😎'
    }
  }
}
</script>
