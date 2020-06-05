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
            <t-checkbox id="t-checkbox" v-model="selected" value="TCheckbox" />
          </div>
          <div class="pl-7 flex-grow text-sm leading-5">
            <label for="t-checkbox" class="font-medium text-gray-700">Checkbox</label>
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
            <t-checkbox id="t-input-group" v-model="selected" value="TInputGroup" />
          </div>
          <div class="pl-7 flex-grow text-sm leading-5">
            <label for="t-input-group" class="font-medium text-gray-700">Input Group</label>
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
            <t-checkbox id="t-alert" v-model="selected" value="TAlert" />
          </div>
          <div class="pl-7 flex-grow text-sm leading-5">
            <label for="t-alert" class="font-medium text-gray-700">Alert</label>
            <div class="mt-1 flex items-center" :class="{ 'opacity-50': ! selected.includes('TAlert') }">
              <t-alert class="pointer-events-none" show>
                So you selected VueJs & Tailwind Combo, Good decision!
              </t-alert>
            </div>
          </div>
        </div>

        <div class="flex items-start mt-4">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="t-card" v-model="selected" value="TCard" />
          </div>
          <div class="pl-7 flex-grow text-sm leading-5">
            <label for="t-card" class="font-medium text-gray-700">Card</label>
            <div class="mt-1 flex items-center" :class="{ 'opacity-50': ! selected.includes('TCard') }">
              <t-card variant="demo" class="pointer-events-none" header="User profile">
                Im a full-stack software from Mexico City that likes Vue & TailwindCSS.
              </t-card>
            </div>
          </div>
        </div>

        <div class="flex items-start mt-4">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="t-modal" v-model="selected" value="TModal" />
          </div>
          <div class="pl-7 flex-grow text-sm leading-5">
            <label for="t-modal" class="font-medium text-gray-700">Modal</label>
            <div class="mt-1 flex items-center" :class="{ 'opacity-50': ! selected.includes('TModal') }">
              <t-modal
                variant="demo"
                :value="true"
                :focus-on-open="false"
                :disable-body-scroll="false"
                :esc-to-close="false"
                :click-to-close="false"
                class="pointer-events-none"
                header="User profile"
              >
                Im a full-stack software from Mexico City that likes Vue & TailwindCSS.
              </t-modal>
            </div>
          </div>
        </div>

        <div class="flex items-start mt-4  opacity-50">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="to-do-1" v-model="selected" disabled />
          </div>
          <div class="pl-7 flex-grow text-sm leading-5">
            <label for="to-do-1" class="font-medium text-gray-700">Table</label>
            <div class="mt-1 flex items-center">
              <span class="ml-2"> (coming soon...)</span>
            </div>
          </div>
        </div>

        <div class="flex items-start mt-4  opacity-50">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="to-do-2" v-model="selected" disabled />
          </div>
          <div class="pl-7 flex-grow text-sm leading-5">
            <label for="to-do-2" class="font-medium text-gray-700">Pagination</label>
            <div class="mt-1 flex items-center">
              <span class="ml-2"> (coming soon...)</span>
            </div>
          </div>
        </div>

        <div class="flex items-start mt-4  opacity-50">
          <div class="flex items-center h-5 mr-3">
            <t-checkbox id="to-do-3" v-model="selected" disabled />
          </div>
          <div class="pl-7 flex-grow text-sm leading-5">
            <label for="to-do-3" class="font-medium text-gray-700">Dropdown</label>
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
