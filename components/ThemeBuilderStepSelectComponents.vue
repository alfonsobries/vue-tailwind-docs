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

        <component-checkbox v-model="selected" value="TTag" label="TTag">
          <t-tag variant="demo">
            Custom tag
          </t-tag>
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
            :fixed-classes="{}"
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
        <component-checkbox v-model="selected" value="TTable" label="Table">
          <t-table
            variant="demo"
            :headers="['Name', 'Email', 'Age', 'Sales']"
            :data="[
              ['Alfonso Bribiesca', 'alfonso@vexilo.com', '31', '$9,999.00'],
              ['Saida Redondo', 'saida@gmail.com', 27, '$124.00'],
            ]"
          />
        </component-checkbox>
        <component-checkbox v-model="selected" value="TPagination" label="Pagination">
          <t-pagination
            variant="demo"
            :value="2"
            :total-items="50"
            :per-page="10"
          />
        </component-checkbox>
        <component-checkbox v-model="selected" value="TDropdown" label="Dropdown">
          <t-dropdown>
            <div
              slot="trigger"
              slot-scope="{
                mousedownHandler: userMenuMousedownHandler,
                focusHandler: userMenuFocusHandler,
                blurHandler: userMenuBlurHandler,
                keydownHandler: userMenuKeydownHandler,
              }"
            >
              <button
                class="flex items-center transform ease-in-out duration-100 text-orange-500 border-orange-500 border-2 uppercase text-sm py-2 px-4 rounded"
                aria-label="User menu"
                aria-haspopup="true"
                @mousedown="userMenuMousedownHandler"
                @focus="userMenuFocusHandler"
                @blur="userMenuBlurHandler"
                @keydown="userMenuKeydownHandler"
              >
                Account
                <icon class="h-3 w-3 ml-2">
                  <path d="M19 9l-7 7-7-7" />
                </icon>
              </button>
            </div>
            <template>
              <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                  role="menuitem"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                  role="menuitem"
                >
                  Settings
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                  role="menuitem"
                >
                  Sign out
                </a>
              </div>
            </template>
          </t-dropdown>
        </component-checkbox>
      </div>
    </fieldset>
  </div>
</template>
<script>
import Vue from 'vue'
import ComponentCheckbox from './ThemeBuilderStepSelectComponentsSelector'
import Icon from '@/components/Icon'
export default Vue.extend({
  components: {
    ComponentCheckbox,
    Icon
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
