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
          <div class="pl-7 text-sm leading-5">
            <label for="t-input" class="font-medium text-gray-700 ">Text Input</label>
            <p class="mt-1" :class="{ 'opacity-50': ! selected.includes('TInput') }">
              <t-input class="pointer-events-none w-64" placeholder="..." />
            </p>
          </div>
        </div>

        <div class="flex items-start mt-4">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="t-textarea" v-model="selected" value="TTextarea" />
          </div>
          <div class="pl-7 text-sm leading-5">
            <label for="t-textarea" class="font-medium text-gray-700">Textarea</label>
            <p class="mt-1" :class="{ 'opacity-50': ! selected.includes('TTextarea') }">
              <t-textarea class="pointer-events-none w-64" placeholder="..." />
            </p>
          </div>
        </div>

        <div class="flex items-start mt-4">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="t-select" v-model="selected" value="TSelect" />
          </div>
          <div class="pl-7 text-sm leading-5">
            <label for="t-select" class="font-medium text-gray-700">Select</label>
            <p class="mt-1" :class="{ 'opacity-50': ! selected.includes('TSelect') }">
              <t-select class="pointer-events-none w-64" placeholder="..." />
            </p>
          </div>
        </div>

        <div class="flex items-start mt-4">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="t-chexkbox" v-model="selected" value="TCheckbox" />
          </div>
          <div class="pl-7 text-sm leading-5">
            <label for="t-chexkbox" class="font-medium text-gray-700">Checkbox</label>
            <p class="mt-1 flex items-center" :class="{ 'opacity-50': ! selected.includes('TCheckbox') }">
              <t-checkbox class="pointer-events-none" /> <span class="ml-2">...</span>
            </p>
          </div>
        </div>

        <div class="flex items-start mt-4">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="t-radio" v-model="selected" value="TRadio" />
          </div>
          <div class="pl-7 text-sm leading-5">
            <label for="t-radio" class="font-medium text-gray-700">Radio</label>
            <p class="mt-1 flex items-center" :class="{ 'opacity-50': ! selected.includes('TRadio') }">
              <t-radio class="pointer-events-none" /> <span class="ml-2">...</span>
            </p>
          </div>
        </div>
      </div>
    </fieldset>

    <fieldset class="mt-10 opacity-50">
      <legend class="text-base leading-6 font-medium text-gray-900">
        UI Components (coming soon...)
      </legend>
      <div class="mt-4">
        <div class="flex items-start mt-4">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="t-radio" v-model="selected" disabled />
          </div>
          <div class="pl-7 text-sm leading-5">
            <label for="t-radio" class="font-medium text-gray-700">Alert</label>
            <p class="mt-1 flex items-center">
              <t-radio class="pointer-events-none" /> <span class="ml-2">...</span>
            </p>
          </div>
        </div>
        <div class="flex items-start mt-4">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="t-radio" v-model="selected" disabled />
          </div>
          <div class="pl-7 text-sm leading-5">
            <label for="t-radio" class="font-medium text-gray-700">Table</label>
            <p class="mt-1 flex items-center">
              <t-radio class="pointer-events-none" /> <span class="ml-2">...</span>
            </p>
          </div>
        </div>
        <div class="flex items-start mt-4">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="t-radio" v-model="selected" disabled />
          </div>
          <div class="pl-7 text-sm leading-5">
            <label for="t-radio" class="font-medium text-gray-700">Modal</label>
            <p class="mt-1 flex items-center">
              <t-radio class="pointer-events-none" /> <span class="ml-2">...</span>
            </p>
          </div>
        </div>
        <div class="flex items-start mt-4">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="t-radio" v-model="selected" disabled />
          </div>
          <div class="pl-7 text-sm leading-5">
            <label for="t-radio" class="font-medium text-gray-700">Pagination</label>
            <p class="mt-1 flex items-center">
              <t-radio class="pointer-events-none" /> <span class="ml-2">...</span>
            </p>
          </div>
        </div>
        <div class="flex items-start mt-4">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="t-radio" v-model="selected" disabled />
          </div>
          <div class="pl-7 text-sm leading-5">
            <label for="t-radio" class="font-medium text-gray-700">Card</label>
            <p class="mt-1 flex items-center">
              <t-radio class="pointer-events-none" /> <span class="ml-2">...</span>
            </p>
          </div>
        </div>
        <div class="flex items-start mt-4">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="t-radio" v-model="selected" disabled />
          </div>
          <div class="pl-7 text-sm leading-5">
            <label for="t-radio" class="font-medium text-gray-700">Dropdown</label>
            <p class="mt-1 flex items-center">
              <t-radio class="pointer-events-none" /> <span class="ml-2">...</span>
            </p>
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
