<template>
  <div>
    <t-input-group label="Select Wrapper">
      <classes-autocomplete v-model="localvalue.wrapper" :placeholder="baseClasses.wrapper" />
    </t-input-group>
    <t-input-group label="Select button wrapper">
      <classes-autocomplete v-model="localvalue.buttonWrapper" :placeholder="baseClasses.buttonWrapper" />
    </t-input-group>
    <t-input-group label="Select button">
      <classes-autocomplete v-model="localvalue.selectButton" :placeholder="baseClasses.selectButton" />
    </t-input-group>
    <t-input-group label="Select button label">
      <classes-autocomplete v-model="localvalue.selectButtonLabel" :placeholder="baseClasses.selectButtonLabel" />
    </t-input-group>
    <t-input-group label="Select button placeholder">
      <classes-autocomplete v-model="localvalue.selectButtonPlaceholder" :placeholder="baseClasses.selectButtonPlaceholder" />
    </t-input-group>
    <t-input-group label="Select button icon">
      <classes-autocomplete v-model="localvalue.selectButtonIcon" :placeholder="baseClasses.selectButtonIcon" />
    </t-input-group>
    <t-input-group label="Select button clear icon wrapper">
      <classes-autocomplete v-model="localvalue.selectButtonClearIconWrapper" :placeholder="baseClasses.selectButtonClearIconWrapper" />
    </t-input-group>
    <t-input-group label="Select button clear icon">
      <classes-autocomplete v-model="localvalue.selectButtonClearIcon" :placeholder="baseClasses.selectButtonClearIcon" />
    </t-input-group>
    <t-input-group label="Dropdown">
      <classes-autocomplete v-model="localvalue.dropdown" :placeholder="baseClasses.dropdown" />
    </t-input-group>
    <t-input-group label="Dropdown">
      <classes-autocomplete v-model="localvalue.dropdown" :placeholder="baseClasses.dropdown" />
    </t-input-group>
    <t-input-group label="Dropdown Feedback">
      <classes-autocomplete v-model="localvalue.dropdownFeedback" :placeholder="baseClasses.dropdownFeedback" />
    </t-input-group>
    <t-input-group label="Search box wrapper">
      <classes-autocomplete v-model="localvalue.searchWrapper" :placeholder="baseClasses.searchWrapper" />
    </t-input-group>
    <t-input-group label="Search box">
      <classes-autocomplete v-model="localvalue.searchBox" :placeholder="baseClasses.searchBox" />
    </t-input-group>
    <t-input-group label="Options list">
      <classes-autocomplete v-model="localvalue.optionsList" :placeholder="baseClasses.optionsList" />
    </t-input-group>
    <t-input-group label="Optgroup">
      <classes-autocomplete v-model="localvalue.optionsList" :placeholder="baseClasses.optionsList" />
    </t-input-group>
    <t-input-group label="Option">
      <classes-autocomplete v-model="localvalue.option" :placeholder="baseClasses.option" />
    </t-input-group>
    <t-input-group label="Highlighted option">
      <classes-autocomplete v-model="localvalue.highlightedOption" :placeholder="baseClasses.highlightedOption" />
    </t-input-group>
    <t-input-group label="Selected option">
      <classes-autocomplete v-model="localvalue.selectedOption" :placeholder="baseClasses.selectedOption" />
    </t-input-group>
    <t-input-group label="Selected and highlighted option">
      <classes-autocomplete v-model="localvalue.selectedHighlightedOption" :placeholder="baseClasses.selectedHighlightedOption" />
    </t-input-group>
    <t-input-group label="Option content">
      <classes-autocomplete v-model="localvalue.optionContent" :placeholder="baseClasses.optionContent" />
    </t-input-group>
    <t-input-group label="Option label">
      <classes-autocomplete v-model="localvalue.optionLabel" :placeholder="baseClasses.optionLabel" />
    </t-input-group>
    <t-input-group label="selectedIcon">
      <classes-autocomplete v-model="localvalue.selectedIcon" :placeholder="baseClasses.selectedIcon" />
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
      required: true
    },
    baseClasses: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      localvalue: this.value
    }
  },
  watch: {
    localvalue (localvalue) {
      this.$emit('input', localvalue)
    },
    value (value) {
      this.localvalue = value
    }
  }
}
</script>
