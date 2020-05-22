<template>
  <div class="space-y-1">
    <label id="assigned-to-label" class="block text-sm leading-5 font-medium text-gray-700">Assigned to</label>
    <div class="relative">
      <span class="inline-block w-full">
        <t-input
          ref="input"
          v-model="localValue"
          aria-haspopup="listbox"
          :aria-expanded="open"
          @focus="focusHandler"
          @blur="blurHandler"
          @input="inputHandler"
          @keydown="keydownHandler"
          @keydown.up.prevent="onArrowUp"
          @keydown.down.prevent="onArrowDown"
          @keydown.enter.stop.prevent="selectHighligtedOption"
        />
      </span>
      <div
        v-show="open"
        x-description="Select popover, show/hide based on select state."
        x-transition:leave="transition ease-in duration-100"
        x-transition:leave-start="opacity-100"
        x-transition:leave-end="opacity-0"
        class="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10"
      >
        <ul
          ref="listbox"
          tabindex="-1"
          role="listbox"
          aria-labelledby="assigned-to-label"
          :aria-activedescendant="activeDescendant"
          class="max-h-56 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
        >
          <li
            v-for="(option, index) in options"
            :id="option"
            :key="option"
            role="option"
            :class="{ 'text-white bg-orange-500': highlighted === index, 'text-gray-900': highlighted !== index}"
            class="cursor-default select-none relative py-2 pl-4 pr-9"
            @click="selectOptionAtIndex(index)"
            @mouseenter="highlighted = index"
            @mouseleave="highlighted = null"
          >
            <div class="flex items-center space-x-3">
              <span :class="{ 'font-semibold': highlighted === index, 'font-normal': highlighted !== index }" class="font-normal block truncate">
                {{ option }}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      optionSelected: false,
      cursorPosition: null,
      hasFocus: false,
      localValue: this.value,
      options: [],
      searchTimeout: null,
      highlighted: null,
      activeDescendant: null
    }
  },
  computed: {
    open () {
      return this.options.length && this.query
    },
    valueAtCursorParts () {
      if (!this.localValue) {
        return ''
      }

      return this.localValue.substr(0, this.cursorPosition).split(' ')
    },
    query () {
      if (!this.hasFocus || this.optionSelected) {
        return ''
      }

      const parts = this.valueAtCursorParts
      const query = parts[parts.length - 1]
      return query
    }
  },
  watch: {
    query () {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout)
      }

      this.searchTimeout = setTimeout(this.fetchOptions, 100)
    },
    localValue (localValue) {
      this.$emit('input', localValue)
    },
    value (value) {
      this.localValue = value
    },
    highlighted (highlighted) {
      if (!this.open) { return }

      if (highlighted === null) {
        this.activeDescendant = ''
        return
      }

      this.activeDescendant = this.$refs.listbox ? this.$refs.listbox.children[this.highlighted - 1] : null
    }
  },
  methods: {
    selectOptionAtIndex (index) {
      if (!this.localValue) {
        this.localValue = `${this.options[index]} `
      } else {
        const parts = this.valueAtCursorParts
        parts[parts.length - 1] = `${this.options[index]} `
        this.localValue = parts.join(' ')
      }
      this.options = []
    },
    selectHighligtedOption () {
      if (this.highlighted !== null && this.open) {
        this.selectOptionAtIndex(this.highlighted)
      }
    },
    onArrowUp () {
      this.highlighted = this.highlighted - 1 < 1 ? this.options.length : this.highlighted - 1
      if (this.$refs.listbox) {
        this.$refs.listbox.children[this.highlighted - 1].scrollIntoView({ block: 'nearest' })
      }
    },
    onArrowDown () {
      this.highlighted = this.highlighted + 1 > this.options.length ? 1 : this.highlighted + 1
      if (this.$refs.listbox) {
        this.$refs.listbox.children[this.highlighted - 1].scrollIntoView({ block: 'nearest' })
      }
    },
    fetchOptions () {
      this.searchTimeout = null
      if (!this.query) {
        this.options = []
        return
      }
      const requestId = 'options'
      return axios.get(`css-autocomplete?q=${this.query}`, { requestId })
        .then(({ data }) => {
          this.options = data
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            // Its ok
            return
          }
          alert('Something goes wrong!')
        })
    },
    keydownHandler () {
      this.optionSelected = false
    },
    inputHandler () {
      this.cursorPosition = this.$refs.input.$el.selectionStart
      this.highlighted = 0
    },
    focusHandler () {
      this.hasFocus = true
      this.cursorPosition = null
    },
    blurHandler () {
      // Ensure the blur is handled after the option click handler
      setTimeout(() => {
        this.hasFocus = false
        this.cursorPosition = this.$refs.input.$el.selectionStart
      }, 100)
    }
  }
})
</script>
