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
        <component-checkbox v-model="selected" value="TInput" label="Text Input">
          <t-input class="pointer-events-none w-64" placeholder="..." />
        </component-checkbox>

        <component-checkbox v-model="selected" value="TTextarea" label="Textarea">
          <t-textarea class="pointer-events-none w-64" placeholder="..." />
        </component-checkbox>

        <component-checkbox v-model="selected" value="TSelect" label="Select">
          <t-select class="pointer-events-none w-64" placeholder="..." />
        </component-checkbox>

        <component-checkbox v-model="selected" value="TCheckbox" label="Checkbox">
          <t-checkbox class="pointer-events-none" /> <span class="ml-2">...</span>
        </component-checkbox>

        <component-checkbox v-model="selected" value="TRadio" label="Radio">
          <t-radio class="pointer-events-none" /> <span class="ml-2">...</span>
        </component-checkbox>

        <component-checkbox v-model="selected" value="TButton" label="Button">
          <t-button class="pointer-events-none">
            Button
          </t-button>
        </component-checkbox>
      </div>
    </fieldset>

    <fieldset class="mt-10">
      <legend class="text-base leading-6 font-medium text-gray-900">
        UI Components
      </legend>
      <div class="mt-4">
        <component-checkbox v-model="selected" value="TInputGroup" label="Input Group">
          <t-input-group
            label="Your password"
            classes="pointer-events-none mb-0"
            feedback="Your password doesnt match!"
          >
            <t-input type="password" />
          </t-input-group>
        </component-checkbox>

        <component-checkbox v-model="selected" value="TRichSelect" label="TRichSelect">
          <t-rich-select
            placeholder="Select an option"
            :options="['Option A', 'Option B', 'Option C', 'Option D']"
            class="max-w-xs"
          />
        </component-checkbox>

        <component-checkbox v-model="selected" value="TAlert" label="Alert">
          <t-alert class="pointer-events-none" show>
            So you selected VueJs & Tailwind Combo, Good decision!
          </t-alert>
        </component-checkbox>

        <component-checkbox v-model="selected" value="TCard" label="Card">
          <t-card variant="demo" class="pointer-events-none" header="User profile">
            Im a full-stack software from Mexico City that likes Vue & TailwindCSS.
          </t-card>
        </component-checkbox>

        <component-checkbox v-model="selected" value="TModal" label="Modal">
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
        </component-checkbox>
        <component-checkbox value="TTable" label="Table">
          <span class="ml-2"> (coming soon...)</span>
        </component-checkbox>
        <component-checkbox value="TPagination" label="Pagination">
          <span class="ml-2"> (coming soon...)</span>
        </component-checkbox>
        <component-checkbox value="TDropdown" label="Dropdown">
          <span class="ml-2"> (coming soon...)</span>
        </component-checkbox>
      </div>
    </fieldset>
  </div>
</template>
<script>
import Vue from 'vue'
import ComponentCheckbox from './ThemeBuilderStepSelectComponentsSelector'
export default Vue.extend({
  components: {
    ComponentCheckbox
  },
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
