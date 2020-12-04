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

    <p v-if="needsFormsPlugin" class="flex items-center p-2 py-1 -mt-3 text-xs leading-none text-orange-700 bg-orange-100 rounded-b">
      <icon class="flex-shrink-0 inline-block w-4 h-4 mr-1 text-orange-700">
        <path id="Combined-Shape" d="M2.92893219,17.0710678 C6.83417511,20.9763107 13.1658249,20.9763107 17.0710678,17.0710678 C20.9763107,13.1658249 20.9763107,6.83417511 17.0710678,2.92893219 C13.1658249,-0.976310729 6.83417511,-0.976310729 2.92893219,2.92893219 C-0.976310729,6.83417511 -0.976310729,13.1658249 2.92893219,17.0710678 L2.92893219,17.0710678 Z M15.6568542,15.6568542 C18.7810486,12.5326599 18.7810486,7.46734008 15.6568542,4.34314575 C12.5326599,1.21895142 7.46734008,1.21895142 4.34314575,4.34314575 C1.21895142,7.46734008 1.21895142,12.5326599 4.34314575,15.6568542 C7.46734008,18.7810486 12.5326599,18.7810486 15.6568542,15.6568542 Z M9,11 L9,10.5 L9,9 L11,9 L11,15 L9,15 L9,11 Z M9,5 L11,5 L11,7 L9,7 L9,5 Z" />
      </icon>
      <span>
        To use the class <strong>`{{ formsPluginClass }}`</strong> you need to install the <a class="underline" target="_blank" href="https://github.com/tailwindcss/custom-forms">custom-forms</a> plugin.
      </span>
    </p>
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
    },
    formsPluginClass () {
      const pluginClasses = ['form-input', 'form-select', 'form-textarea', 'form-radio', 'form-chexkbox']

      if (typeof this.value === 'string') {
        return pluginClasses.find(className => this.value.includes(className))
      }

      if (typeof this.value === 'object') {
        const classesWithPluginClass = Object.keys(this.value).map((key) => {
          const value = this.value[key]
          if (typeof value === 'string') {
            return pluginClasses.find(className => value.includes(className))
          }
          return ''
        })
          .filter(className => !!className)
          .join(',')

        return classesWithPluginClass || ''
      }

      return ''
    },
    needsFormsPlugin () {
      return !!this.formsPluginClass
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
