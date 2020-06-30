<template>
  <div class="p-4">
    <!-- <template slot="footer">
      <span class="text-sm leading-tight mr-2 py-1">Current value:</span>
      <code class="text-orange-600 font-mono text-sm bg-gray-100 px-4 py-1 rounded overflow-auto max-w-full whitespace-pre">{{ currentValue }}</code>
    </template> -->

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

        <div class="flex flex-col sm:flex-row w-full">
          <div style="height: 200px" class="bg-red-500 sm:w-1/2" />
          <div style="height: 200px" class="bg-blue-600 sm:w-1/2" />
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
  </div>
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
