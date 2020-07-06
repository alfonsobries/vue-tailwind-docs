<template>
  <div>
    <t-input-group label="Select Wrapper">
      <classes-autocomplete v-model="localValue.wrapper" :placeholder="baseClasses.wrapper" />
    </t-input-group>
    <t-input-group label="Select button wrapper">
      <classes-autocomplete v-model="localValue.buttonWrapper" :placeholder="baseClasses.buttonWrapper" />
    </t-input-group>
    <t-input-group label="Select button">
      <classes-autocomplete v-model="localValue.selectButton" :placeholder="baseClasses.selectButton" />
    </t-input-group>
    <t-input-group label="Select button label">
      <classes-autocomplete v-model="localValue.selectButtonLabel" :placeholder="baseClasses.selectButtonLabel" />
    </t-input-group>
    <t-input-group label="Select button placeholder">
      <classes-autocomplete v-model="localValue.selectButtonPlaceholder" :placeholder="baseClasses.selectButtonPlaceholder" />
    </t-input-group>
    <t-input-group label="Select button icon">
      <classes-autocomplete v-model="localValue.selectButtonIcon" :placeholder="baseClasses.selectButtonIcon" />
    </t-input-group>
    <t-input-group label="Select button clear icon wrapper">
      <classes-autocomplete v-model="localValue.selectButtonClearIconWrapper" :placeholder="baseClasses.selectButtonClearIconWrapper" />
    </t-input-group>
    <t-input-group label="Select button clear icon">
      <classes-autocomplete v-model="localValue.selectButtonClearIcon" :placeholder="baseClasses.selectButtonClearIcon" />
    </t-input-group>
    <t-input-group label="Dropdown">
      <classes-autocomplete v-model="localValue.dropdown" :placeholder="baseClasses.dropdown" />
    </t-input-group>
    <t-input-group label="Dropdown">
      <classes-autocomplete v-model="localValue.dropdown" :placeholder="baseClasses.dropdown" />
    </t-input-group>
    <t-input-group label="Dropdown Feedback">
      <classes-autocomplete v-model="localValue.dropdownFeedback" :placeholder="baseClasses.dropdownFeedback" />
    </t-input-group>
    <t-input-group label="Search box wrapper">
      <classes-autocomplete v-model="localValue.searchWrapper" :placeholder="baseClasses.searchWrapper" />
    </t-input-group>
    <t-input-group label="Search box">
      <classes-autocomplete v-model="localValue.searchBox" :placeholder="baseClasses.searchBox" />
    </t-input-group>
    <t-input-group label="Options list">
      <classes-autocomplete v-model="localValue.optionsList" :placeholder="baseClasses.optionsList" />
    </t-input-group>
    <t-input-group label="Optgroup">
      <classes-autocomplete v-model="localValue.optionsList" :placeholder="baseClasses.optionsList" />
    </t-input-group>
    <t-input-group label="Option">
      <classes-autocomplete v-model="localValue.option" :placeholder="baseClasses.option" />
    </t-input-group>
    <t-input-group label="Highlighted option">
      <classes-autocomplete v-model="localValue.highlightedOption" :placeholder="baseClasses.highlightedOption" />
    </t-input-group>
    <t-input-group label="Selected option">
      <classes-autocomplete v-model="localValue.selectedOption" :placeholder="baseClasses.selectedOption" />
    </t-input-group>
    <t-input-group label="Selected and highlighted option">
      <classes-autocomplete v-model="localValue.selectedHighlightedOption" :placeholder="baseClasses.selectedHighlightedOption" />
    </t-input-group>
    <t-input-group label="Option content">
      <classes-autocomplete v-model="localValue.optionContent" :placeholder="baseClasses.optionContent" />
    </t-input-group>
    <t-input-group label="Option label">
      <classes-autocomplete v-model="localValue.optionLabel" :placeholder="baseClasses.optionLabel" />
    </t-input-group>
    <t-input-group label="selectedIcon">
      <classes-autocomplete v-model="localValue.selectedIcon" :placeholder="baseClasses.selectedIcon" />
    </t-input-group>
  </div>
</template>

<script>
import ClassesAutocomplete from '@/components/ClassesAutocomplete.vue'
export default {
  components: {
    ClassesAutocomplete
  },
  props: {
    value: {
      type: Object,
      default: () => ({
        wrapper: '',
        buttonWrapper: '',
        selectButton: '',
        selectButtonLabel: '',
        selectButtonPlaceholder: '',
        selectButtonIcon: '',
        selectButtonClearButton: '',
        selectButtonClearIcon: '',
        dropdown: '',
        dropdownFeedback: '',
        loadingMoreResults: '',
        optionsList: '',
        searchWrapper: '',
        searchBox: '',
        optgroup: '',
        option: '',
        highlightedOption: '',
        selectedOption: '',
        selectedHighlightedOption: '',
        optionContent: '',
        optionLabel: '',
        selectedIcon: '',
        enterClass: '',
        enterActiveClass: '',
        enterToClass: '',
        leaveClass: '',
        leaveActiveClass: '',
        leaveToClass: ''
      })
    },
    baseClasses: {
      type: Object,
      default: () => ({
        wrapper: '',
        buttonWrapper: '',
        selectButton: '',
        selectButtonLabel: '',
        selectButtonPlaceholder: '',
        selectButtonIcon: '',
        selectButtonClearButton: '',
        selectButtonClearIcon: '',
        dropdown: '',
        dropdownFeedback: '',
        loadingMoreResults: '',
        optionsList: '',
        searchWrapper: '',
        searchBox: '',
        optgroup: '',
        option: '',
        highlightedOption: '',
        selectedOption: '',
        selectedHighlightedOption: '',
        optionContent: '',
        optionLabel: '',
        selectedIcon: '',
        enterClass: '',
        enterActiveClass: '',
        enterToClass: '',
        leaveClass: '',
        leaveActiveClass: '',
        leaveToClass: ''
      })
    }
  },
  data () {
    return {
      localValue: this.value
    }
  },
  watch: {
    localValue: {
      handler (localValue) {
        this.$emit('input', localValue)
      },
      deep: true
    },
    value (value) {
      this.localValue = value
    }
  }
}
</script>
