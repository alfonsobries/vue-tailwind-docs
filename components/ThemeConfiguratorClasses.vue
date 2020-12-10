<template>
  <t-input-group
    :description="description"
    variant="classes"
    :sorted-elements="['label', 'description', 'default', 'feedback']"
  >
    <classes-form
      :key="`wrapped-${wrapped}`"
      v-model="localValue"
      :base-classes="baseClasses"
      :fixed-classes="fixedClasses"
      :elements="elements"
    />

    <template slot="label">
      <h4 class="block mt-3 text-base font-medium text-gray-900">
        {{ label }}
      </h4>

      <label v-if="main && wrappable" class="flex items-center text-sm">
        <t-checkbox
          v-model="localWrapped"
          class="mr-2 text-gray-600 uppercase"
        />

        Wrapped
      </label>
    </template>
  </t-input-group>
</template>

<script>
import Vue from 'vue'
import isEqual from 'lodash/isEqual'
import Icon from '@/components/Icon'
import ClassesForm from '@/components/ClassesForm.vue'
export default Vue.extend({
  components: {
    ClassesForm,
    Icon
  },
  props: {
    label: {
      type: String,
      default: undefined
    },
    description: {
      type: String,
      default: undefined
    },
    value: {
      type: [String, Object],
      default: undefined
    },
    baseClasses: {
      type: [String, Object],
      default: undefined
    },
    fixedClasses: {
      type: [String, Object],
      default: undefined
    },
    componentName: {
      type: String,
      required: true
    },
    wrapped: {
      type: Boolean,
      default: undefined
    },
    main: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      localValue: typeof this.value === 'object' ? { ...this.value } : this.value,
      localWrapped: this.wrapped
    }
  },
  computed: {
    wrappable () {
      return ['TSelect', 'TRadio', 'TCheckbox'].includes(this.componentName)
    },
    elements () {
      if (this.localWrapped) {
        switch (this.componentName) {
          case 'TSelect':
            return {
              wrapper: 'Wrapper',
              input: 'Select input',
              arrowWrapper: 'Arrow wrapper',
              arrow: 'Arrow icon'
            }
          case 'TRadio':
            return {
              wrapper: 'Wrapper',
              wrapperChecked: 'Wrapper when the input if checked',
              label: 'Label next to input',
              labelChecked: 'Label when the input if checked',
              inputWrapper: 'Wrapper of the input',
              inputWrapperChecked: 'Wrapper of the input if checkec',
              input: 'Input'
            }
          case 'TCheckbox':
            return {
              wrapper: 'Wrapper',
              wrapperChecked: 'Wrapper when the input if checked',
              label: 'Label next to input',
              labelChecked: 'Label when the input if checked',
              inputWrapper: 'Wrapper of the input',
              inputWrapperChecked: 'Wrapper of the input if checkec',
              input: 'Input'
            }
        }
      }

      switch (this.componentName) {
        case 'TCheckboxGroup':
          return {
            groupWrapper: 'group wrapper',
            wrapper: 'Wrapper',
            wrapperChecked: 'Wrapper when the input if checked',
            label: 'Label next to input',
            labelChecked: 'Label when the input if checked',
            inputWrapper: 'Wrapper of the input',
            inputWrapperChecked: 'Wrapper of the input if checkec',
            input: 'Input'
          }
        case 'TDatepicker':
          return {
            // Dropdown related classes
            wrapper: '',
            dropdownWrapper: '',
            dropdown: '',
            enterClass: '',
            enterActiveClass: '',
            enterToClass: '',
            leaveClass: '',
            leaveActiveClass: '',
            leaveToClass: '',

            // Wrapper for inline calendar
            inlineWrapper: '',

            // Text input related classes
            inputWrapper: '',
            input: '',

            // Picker views
            viewGroup: '',
            view: '',

            // Navigator
            navigator: '',
            navigatorViewButton: '',
            navigatorViewButtonIcon: '',
            navigatorViewButtonBackIcon: '',
            navigatorViewButtonMonth: '',
            navigatorViewButtonYear: '',
            navigatorViewButtonYearRange: '',
            navigatorLabel: '',
            navigatorLabelMonth: '',
            navigatorLabelYear: '',
            navigatorPrevButton: '',
            navigatorNextButton: '',
            navigatorPrevButtonIcon: '',
            navigatorNextButtonIcon: '',

            // Calendar View
            calendarWrapper: '',
            calendarHeaderWrapper: '',
            calendarHeaderWeekDay: '',
            calendarDaysWrapper: '',
            calendarDaysDayWrapper: '',

            // Day item
            otherMonthDay: '',
            emptyDay: '',
            inRangeFirstDay: '',
            inRangeLastDay: '',
            inRangeDay: '',
            selectedDay: '',
            activeDay: '',
            highlightedDay: '',
            day: '',
            today: '',

            // Months View
            monthWrapper: '',
            selectedMonth: '',
            activeMonth: '',
            month: '',

            // Years View
            yearWrapper: '',
            year: '',
            selectedYear: '',
            activeYear: '',

            clearButton: '',
            clearButtonIcon: ''
          }
        case 'TRadioGroup':
          return {
            groupWrapper: 'group wrapper',
            wrapper: 'Wrapper',
            wrapperChecked: 'Wrapper when the input if checked',
            label: 'Label next to input',
            labelChecked: 'Label when the input if checked',
            inputWrapper: 'Wrapper of the input',
            inputWrapperChecked: 'Wrapper of the input if checkec',
            input: 'Input'
          }

        case 'TTable':
          return {
            table: 'Table',
            tbody: 'Tbody',
            tr: 'Body tr',
            td: 'Body td',
            thead: 'Thead',
            theadTr: 'Thead tr',
            theadTh: 'Thead th',
            tfoot: 'Tfoot',
            tfootTr: 'Tfoot tr',
            tfootTd: 'Tfoot td'
          }
        case 'TPagination':
          return {
            wrapper: 'Wrapper',
            element: 'Element',
            disabledElement: 'Disabled element',
            ellipsisElement: 'Ellipsis element',
            activeButton: 'Active button',
            disabledButton: 'Disabled button',
            button: 'Button',
            ellipsis: 'Ellipisis'
          }
        case 'TDropdown':
          return {
            button: '',
            wrapper: '',
            dropdownWrapper: '',
            dropdown: '',
            enterClass: '',
            enterActiveClass: '',
            enterToClass: '',
            leaveClass: '',
            leaveActiveClass: '',
            leaveToClass: ''

          }
        case 'TToggle':
          return {
            wrapper: 'Wrapper',
            wrapperChecked: 'Wrapper when checked',
            button: 'Button',
            buttonChecked: 'Button when checked',
            checkedPlaceholder: 'Placeholder',
            uncheckedPlaceholder: 'Placeholder when checked'
          }
        case 'TAlert':
          return {
            wrapper: 'Wrapper',
            body: 'Body',
            close: 'Close',
            closeIcon: 'Close icon'
          }

        case 'TCard':
          return {
            wrapper: 'Wrapper',
            body: 'Body',
            header: 'Header',
            footer: 'Footer'
          }

        case 'TInputGroup':
          return {
            wrapper: 'Wrapper',
            label: 'Label',
            feedback: 'Feedback',
            description: 'Description',
            body: 'Body'
          }

        case 'TModal':
          return {
            overlay: 'Overlay',
            wrapper: 'Wrapper',
            modal: 'Modal',
            body: 'Body',
            header: 'Header',
            footer: 'Footer',
            close: 'Close',
            closeIcon: 'Close icon'
          }
        case 'TDialog':
          return {
            close: 'Close',
            closeIcon: 'Close icon',
            overlay: 'Overlay',
            wrapper: 'Wrapper',
            dialog: 'Dialog',
            body: 'Body',
            buttons: 'Buttons',
            iconWrapper: 'Icon Wrapper',
            icon: 'Icon',
            content: 'Content',
            titleWrapper: 'Title Wrapper',
            title: 'Title',
            textWrapper: 'Text Wrapper',
            text: 'Text',
            cancelButton: 'Cancel Button',
            okButton: 'Ok Button',
            inputWrapper: 'Input Wrapper',
            input: 'Input',
            select: 'Select',
            radioWrapper: 'Radio Wrapper',
            radio: 'Radio',
            radioText: 'Radio Text',
            checkboxWrapper: 'Checkbox Wrapper',
            checkbox: 'Checkbox',
            checkboxText: 'Checkbox Text',
            errorMessage: 'Error Message',
            busyWrapper: 'Busy Wrapper',
            busyIcon: 'Busy Icon',
            overlayEnterClass: 'Overlay Enter Class',
            overlayEnterActiveClass: 'Overlay Enter Active Class',
            overlayEnterToClass: 'Overlay Enter To Class',
            overlayLeaveClass: 'Overlay Leave Class',
            overlayLeaveActiveClass: 'Overlay Leave Active Class',
            overlayLeaveToClass: 'Overlay Leave To Class',
            enterClass: 'Enter Class',
            enterActiveClass: 'Enter Active Class',
            enterToClass: 'Enter To Class',
            leaveClass: 'Leave Class',
            leaveActiveClass: 'Leave Active Class',
            leaveToClass: 'Leave To Class'
          }
        case 'TRichSelect':
          return {
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
          }
      }

      return {}
    }
  },
  watch: {
    localValue: {
      handler (localValue) {
        this.$emit('input', localValue)
      },
      deep: true
    },
    value: {
      handler (value) {
        const localValue = typeof value === 'object' ? { ...value } : value
        if (!isEqual(localValue, this.localValue)) {
          this.localValue = localValue
        }
      },
      deep: true
    },
    localWrapped (localWrapped) {
      this.$emit('update:wrapped', localWrapped)
    },
    wrapped (wrapped) {
      this.localWrapped = wrapped
    }
  }

})
</script>
