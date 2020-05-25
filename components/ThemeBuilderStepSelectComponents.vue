<template>
  <div>
    <h2 class="text-2xl font-medium text-gray-900">
      Choose the component you need
    </h2>
    <p>Select the components that you want to personalize</p>
    <hr class="border-t my-4">
    <fieldset>
      <legend class="text-base leading-6 font-medium text-gray-900">
        HTML Inputs
      </legend>
      <div class="mt-4">
        <div class="flex items-start mt-4">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="t-input" v-model="selected" value="TInput" />
          </div>
          <div class="pl-7 flex-grow text-sm leading-5">
            <label for="t-input" class="font-medium text-gray-700 ">Text Input</label>
            <div class="mt-1" :class="{ 'opacity-50': ! selected.includes('TInput') }">
              <t-input class="pointer-events-none w-64" placeholder="..." />
            </div>
          </div>
        </div>

        <div class="flex items-start mt-4">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="t-textarea" v-model="selected" value="TTextarea" />
          </div>
          <div class="pl-7 flex-grow text-sm leading-5">
            <label for="t-textarea" class="font-medium text-gray-700">Textarea</label>
            <div class="mt-1" :class="{ 'opacity-50': ! selected.includes('TTextarea') }">
              <t-textarea class="pointer-events-none w-64" placeholder="..." />
            </div>
          </div>
        </div>

        <div class="flex items-start mt-4">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="t-select" v-model="selected" value="TSelect" />
          </div>
          <div class="pl-7 flex-grow text-sm leading-5">
            <label for="t-select" class="font-medium text-gray-700">Select</label>
            <div class="mt-1" :class="{ 'opacity-50': ! selected.includes('TSelect') }">
              <t-select class="pointer-events-none w-64" placeholder="..." />
            </div>
          </div>
        </div>

        <div class="flex items-start mt-4">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="t-chexkbox" v-model="selected" value="TCheckbox" />
          </div>
          <div class="pl-7 flex-grow text-sm leading-5">
            <label for="t-chexkbox" class="font-medium text-gray-700">Checkbox</label>
            <div class="mt-1 flex items-center" :class="{ 'opacity-50': ! selected.includes('TCheckbox') }">
              <t-checkbox class="pointer-events-none" /> <span class="ml-2">...</span>
            </div>
          </div>
        </div>

        <div class="flex items-start mt-4">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="t-radio" v-model="selected" value="TRadio" />
          </div>
          <div class="pl-7 flex-grow text-sm leading-5">
            <label for="t-radio" class="font-medium text-gray-700">Radio</label>
            <div class="mt-1 flex items-center" :class="{ 'opacity-50': ! selected.includes('TRadio') }">
              <t-radio class="pointer-events-none" /> <span class="ml-2">...</span>
            </div>
          </div>
        </div>
      </div>
    </fieldset>

    <fieldset class="mt-10">
      <legend class="text-base leading-6 font-medium text-gray-900">
        UI Components
      </legend>
      <div class="mt-4">
        <div class="flex items-start mt-4">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="t-radio" v-model="selected" value="TInputGroup" />
          </div>
          <div class="pl-7 flex-grow text-sm leading-5">
            <label for="t-radio" class="font-medium text-gray-700">TInputGroup</label>
            <div class="mt-1 flex items-center" :class="{ 'opacity-50': ! selected.includes('TInputGroup') }">
              <t-input-group
                label="Your password"
                classes="pointer-events-none mb-0"
                feedback="Your password doesnt match!"
              >
                <t-input type="password" />
              </t-input-group>
            </div>
          </div>
        </div>

        <div class="flex items-start mt-4">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="t-radio" v-model="selected" value="TAlert" />
          </div>
          <div class="pl-7 flex-grow text-sm leading-5">
            <label for="t-radio" class="font-medium text-gray-700">TAlert</label>
            <div class="mt-1 flex items-center" :class="{ 'opacity-50': ! selected.includes('TAlert') }">
              <t-alert class="pointer-events-none" show>
                So you selected VueJs & Tailwind Combo, Good decision!
              </t-alert>
            </div>
          </div>
        </div>

        <div class="flex items-start mt-4  opacity-50">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="t-radio" v-model="selected" disabled />
          </div>
          <div class="pl-7 flex-grow text-sm leading-5">
            <label for="t-radio" class="font-medium text-gray-700">Table</label>
            <div class="mt-1 flex items-center">
              <span class="ml-2"> (coming soon...)</span>
            </div>
          </div>
        </div>
        <div class="flex items-start mt-4  opacity-50">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="t-radio" v-model="selected" disabled />
          </div>
          <div class="pl-7 flex-grow text-sm leading-5">
            <label for="t-radio" class="font-medium text-gray-700">Modal</label>
            <div class="mt-1 flex items-center">
              <span class="ml-2"> (coming soon...)</span>
            </div>
          </div>
        </div>
        <div class="flex items-start mt-4  opacity-50">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="t-radio" v-model="selected" disabled />
          </div>
          <div class="pl-7 flex-grow text-sm leading-5">
            <label for="t-radio" class="font-medium text-gray-700">Pagination</label>
            <div class="mt-1 flex items-center">
              <span class="ml-2"> (coming soon...)</span>
            </div>
          </div>
        </div>
        <div class="flex items-start mt-4  opacity-50">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="t-radio" v-model="selected" disabled />
          </div>
          <div class="pl-7 flex-grow text-sm leading-5">
            <label for="t-radio" class="font-medium text-gray-700">Card</label>
            <div class="mt-1 flex items-center">
              <span class="ml-2"> (coming soon...)</span>
            </div>
          </div>
        </div>
        <div class="flex items-start mt-4  opacity-50">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="t-radio" v-model="selected" disabled />
          </div>
          <div class="pl-7 flex-grow text-sm leading-5">
            <label for="t-radio" class="font-medium text-gray-700">Dropdown</label>
            <div class="mt-1 flex items-center">
              <span class="ml-2"> (coming soon...)</span>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      selected: this.value
    }
  },
  computed: {
    isReady () {
      return this.selected.length > 0
    }
  },
  watch: {
    isReady (isReady) {
      this.$emit(isReady ? 'ready' : 'notready')
    },
    selected (selected) {
      this.$emit('input', selected)
    },
    value (value) {
      this.selected = value
    }
  }
})
</script>
