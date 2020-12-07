<template>
  <div id="theme-builder" class="flex shadow">
    <theme-builder-steps
      :current-step="step"
      :last-active-step="lastActiveStep"
      @select="(index) => step = index"
    />
    <div class="w-full px-6 py-5 bg-white rounded rounded-r rounded-br sm:p-6 md:w-3/4">
      <div class="w-full md:pl-4">
        <theme-builder-step-select-components
          v-show="step === 0"
          v-model="selectedComponents"
          @ready="stepReady = 0"
          @notready="stepReady = null"
        />

        <theme-builder-step-build-theme
          v-show="step === 1"
          v-model="theme"
          :not-wrapped-theme="notWrappedTheme"
          :wrapped-theme="wrappedTheme"
          :selected-components="sortedSelectedComponents"
          @ready="step === 1 ? stepReady = 2 : undefined"
        />

        <theme-builder-step-install
          v-show="step === 2"
          :theme="theme"
        />

        <theme-builder-step-share
          v-show="step === 3"
          :theme="theme"
        />

        <div class="flex justify-between pt-4 mt-8 border-t">
          <t-button
            type="button"
            :variant="{
              'disabledLink': step <= 0,
              'link' : step > 0
            }"
            :disabled="step <= 0"
            @click="prevStep"
          >
            Prev step
          </t-button>
          <t-button
            v-if="step < 3"
            type="button"
            @click="nextStep"
          >
            Next step
          </t-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import cloneDeep from 'lodash/cloneDeep'
import ThemeBuilderSteps from './ThemeBuilderSteps.vue'
import ThemeBuilderStepSelectComponents from './ThemeBuilderStepSelectComponents.vue'
import ThemeBuilderStepBuildTheme from './ThemeBuilderStepBuildTheme.vue'
import ThemeBuilderStepInstall from './ThemeBuilderStepInstall.vue'
import ThemeBuilderStepShare from './ThemeBuilderStepShare.vue'

const notWrappedTheme = {
  TSelect: {
    fixedClasses: 'block w-full pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
    classes: 'text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 ',
    variants: {
      danger: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
      success: 'border-green-300 bg-green-50 placeholder-gray-400 text-green-900'
    }
  },
  TRadio: {
    fixedClasses: 'transition duration-100 ease-in-out shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0  disabled:opacity-50 disabled:cursor-not-allowed',
    classes: 'text-blue-500 border-gray-300',
    variants: {
      error: 'text-red-500 border-red-300',
      success: 'text-green-500 border-green-300'
    }
  },
  TCheckbox: {
    fixedClasses: 'transition duration-100 ease-in-out rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed',
    classes: 'text-blue-500 border-gray-300 ',
    variants: {
      error: 'text-red-500 border-red-300',
      success: 'text-green-500 border-green-300'
    }
  }
}

const wrappedTheme = {
  TSelect: {
    wrapped: true,
    fixedClasses: {
      wrapper: 'relative',
      input: 'bg-none block w-full pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
      arrowWrapper: 'pointer-events-none absolute inset-y-0 right-0 flex items-center px-2',
      arrow: 'fill-current h-4 w-4'
    },
    classes: {
      wrapper: 'relative',
      input: 'text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500',
      arrowWrapper: 'text-gray-700',
      arrow: ''
    },
    variants: {
      danger: {
        wrapper: 'relative',
        input: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
        arrowWrapper: 'text-red-700'
      }
    }
  },
  TRadio: {
    wrapped: true,
    fixedClasses: {
      label: 'text-sm uppercase mx-2',
      input: 'transition duration-100 ease-in-out shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed',
      inputWrapper: 'inline-flex items-center leading-none',
      wrapper: 'flex items-center'
    },
    classes: {
      label: 'text-gray-700',
      labelChecked: '',
      inputWrapper: '',
      inputWrapperChecked: '',
      wrapper: '',
      wrapperChecked: '',
      input: 'text-blue-500 border-gray-300'
    },
    variants: {
      danger: {
        label: 'text-red-500',
        input: 'text-red-500 border-red-300'
      },
      success: {
        label: 'text-green-500',
        input: 'text-green-500 border-green-300'
      }
    }
  },
  TCheckbox: {
    wrapped: true,
    fixedClasses: {
      label: 'text-sm uppercase mx-2',
      input: 'transition duration-100 ease-in-out rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed',
      inputWrapper: 'inline-flex items-center leading-none',
      wrapper: 'flex items-center'
    },
    classes: {
      label: 'text-gray-700',
      labelChecked: '',
      inputWrapper: '',
      inputWrapperChecked: '',
      wrapper: '',
      wrapperChecked: '',
      input: 'text-blue-500 border-gray-300'
    },
    variants: {
      danger: {
        label: 'text-red-500',
        input: 'text-red-500 border-red-300'
      },
      success: {
        label: 'text-green-500',
        input: 'text-green-500 border-green-300'
      }
    }
  }
}

const defaultTheme = {
  TInput: {
    fixedClasses: 'block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
    classes: 'text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 ',
    variants: {
      danger: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
      success: 'border-green-300 bg-green-50 placeholder-gray-400 text-green-900'
    }
  },
  TTextarea: {
    fixedClasses: 'block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
    classes: 'text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 ',
    variants: {
      danger: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
      success: 'border-green-300 bg-green-50 placeholder-gray-400 text-green-900'
    }
  },
  TSelect: cloneDeep(notWrappedTheme.TSelect),
  TRadio: cloneDeep(notWrappedTheme.TRadio),
  TCheckbox: cloneDeep(notWrappedTheme.TCheckbox),
  TButton: {
    fixedClasses: 'block px-4 py-2 transition duration-100 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
    classes: 'text-white bg-blue-500 border border-transparent shadow-sm rounded hover:bg-blue-600',
    variants: {
      secondary: 'text-gray-800 bg-white border border-gray-300 shadow-sm hover:text-gray-600',
      error: 'text-white bg-red-500 border border-transparent rounded shadow-sm hover:bg-red-600',
      success: 'text-white bg-green-500 border border-transparent rounded shadow-sm hover:bg-green-600',
      link: 'text-blue-500 underline hover:text-blue-600'
    }
  },
  TInputGroup: {
    fixedClasses: {
      wrapper: '',
      label: 'block',
      body: '',
      feedback: ' text-sm text-sm',
      description: 'text-gray-400 text-sm'
    },
    classes: {
      wrapper: '',
      label: '',
      body: '',
      feedback: 'text-gray-400',
      description: 'text-gray-400'
    },
    variants: {
      danger: {
        label: 'text-red-500',
        feedback: 'text-red-500'
      },
      success: {
        label: 'text-green-500',
        feedback: 'text-green-500'
      }
    }
  },
  TRichSelect: {
    fixedClasses: {
      wrapper: 'relative',
      buttonWrapper: 'inline-block relative w-full',
      selectButton: 'w-full flex text-left justify-between items-center px-3 py-2 text-black transition duration-100 ease-in-out border rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
      selectButtonLabel: 'block truncate',
      selectButtonPlaceholder: 'block truncate',
      selectButtonIcon: 'fill-current flex-shrink-0 ml-1 h-4 w-4',
      selectButtonClearButton: 'rounded flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6 transition duration-100 ease-in-out',
      selectButtonClearIcon: 'fill-current h-3 w-3',
      dropdown: 'absolute w-full z-10 -mt-1 absolute border-b border-l border-r rounded-b shadow-sm z-10',
      dropdownFeedback: '',
      loadingMoreResults: '',
      optionsList: 'overflow-auto',
      searchWrapper: 'inline-block w-full',
      searchBox: 'inline-block w-full',
      optgroup: '',
      option: 'cursor-pointer',
      disabledOption: 'opacity-50 cursor-not-allowed',
      highlightedOption: 'cursor-pointer',
      selectedOption: 'cursor-pointer',
      selectedHighlightedOption: 'cursor-pointer',
      optionContent: '',
      optionLabel: 'truncate block',
      selectedIcon: 'fill-current h-4 w-4',
      enterClass: '',
      enterActiveClass: '',
      enterToClass: '',
      leaveClass: '',
      leaveActiveClass: '',
      leaveToClass: ''
    },
    classes: {
      wrapper: '',
      buttonWrapper: '',
      selectButton: 'bg-white border-gray-300',
      selectButtonLabel: '',
      selectButtonPlaceholder: 'text-gray-400',
      selectButtonIcon: 'text-gray-600',
      selectButtonClearButton: 'hover:bg-blue-100 text-gray-600',
      selectButtonClearIcon: '',
      dropdown: 'bg-white border-gray-300',
      dropdownFeedback: 'pb-2 px-3 text-gray-400 text-sm',
      loadingMoreResults: 'pb-2 px-3 text-gray-400 text-sm',
      optionsList: '',
      searchWrapper: 'p-2 placeholder-gray-400',
      searchBox: 'px-3 py-2 bg-gray-50 text-sm rounded border focus:outline-none focus:shadow-outline border-gray-300',
      optgroup: 'text-gray-400 uppercase text-xs py-1 px-2 font-semibold',
      option: '',
      disabledOption: '',
      highlightedOption: 'bg-blue-100',
      selectedOption: 'font-semibold bg-gray-100 bg-blue-500 font-semibold text-white',
      selectedHighlightedOption: 'font-semibold bg-gray-100 bg-blue-600 font-semibold text-white',
      optionContent: 'flex justify-between items-center px-3 py-2',
      optionLabel: '',
      selectedIcon: '',
      enterClass: '',
      enterActiveClass: 'opacity-0 transition ease-out duration-100',
      enterToClass: 'opacity-100',
      leaveClass: 'transition ease-in opacity-100',
      leaveActiveClass: '',
      leaveToClass: 'opacity-0 duration-75'
    },
    variants: {
      danger: {
        selectButton: 'border-red-300 bg-red-50 text-red-900',
        selectButtonPlaceholder: 'text-red-200',
        selectButtonIcon: 'text-red-500',
        selectButtonClearButton: 'hover:bg-red-200 text-red-500',
        dropdown: 'bg-red-50 border-red-300'
      },
      success: {
        selectButton: 'border-green-300 bg-green-50 text-green-900',
        selectButtonIcon: 'text-green-500',
        selectButtonClearButton: 'hover:bg-green-200 text-green-500',
        dropdown: 'bg-green-50 border-green-300'
      }
    }
  },
  TDatepicker: {
    fixedClasses: {
      navigator: 'flex',
      navigatorViewButton: 'flex items-center',
      navigatorViewButtonIcon: 'flex-shrink-0 h-5 w-5',
      navigatorViewButtonBackIcon: 'flex-shrink-0 h-5 w-5',
      navigatorLabel: 'flex items-center py-1',
      navigatorPrevButtonIcon: 'h-6 w-6 inline-flex',
      navigatorNextButtonIcon: 'h-6 w-6 inline-flex',

      inputWrapper: 'relative',
      viewGroup: 'inline-flex flex-wrap',
      view: 'w-64',
      calendarDaysWrapper: 'grid grid-cols-7',
      calendarHeaderWrapper: 'grid grid-cols-7',
      monthWrapper: 'grid grid-cols-4',
      yearWrapper: 'grid grid-cols-4',

      input: 'block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
      clearButton: 'flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6',
      clearButtonIcon: 'fill-current h-3 w-3'
    },
    classes: {
      // Dropdown related classes
      wrapper: 'flex flex-col',
      dropdownWrapper: 'relative z-10',
      dropdown: 'origin-top-left absolute rounded shadow bg-white overflow-hidden mt-1',
      enterClass: '',
      enterActiveClass: 'transition ease-out duration-100 transform opacity-0 scale-95',
      enterToClass: 'transform opacity-100 scale-100',
      leaveClass: 'transition ease-in transform opacity-100 scale-100',
      leaveActiveClass: '',
      leaveToClass: 'transform opacity-0 scale-95 duration-75',

      // Wrapper for inline calendar
      inlineWrapper: '',
      inlineViews: 'rounded bg-white border mt-1 inline-flex',

      // Text input related classes
      inputWrapper: '',
      input: 'text-black placeholder-gray-400 border-gray-300',
      clearButton: 'hover:bg-gray-100 rounded transition duration-100 ease-in-out text-gray-600',
      clearButtonIcon: '',

      // Picker views
      viewGroup: '',
      view: '',

      // Navigator
      navigator: 'pt-2 px-3',
      navigatorViewButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer rounded-full px-2 py-1 -ml-1 hover:bg-gray-100',
      navigatorViewButtonIcon: 'fill-current text-gray-400',
      navigatorViewButtonBackIcon: 'fill-current text-gray-400',
      navigatorViewButtonMonth: 'text-gray-700 font-semibold',
      navigatorViewButtonYear: 'text-gray-500 ml-1',
      navigatorViewButtonYearRange: 'text-gray-500 ml-1',
      navigatorLabel: 'py-1',
      navigatorLabelMonth: 'text-gray-700 font-semibold',
      navigatorLabelYear: 'text-gray-500 ml-1',
      navigatorPrevButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-100 rounded-full p-1 ml-2 ml-auto disabled:opacity-50 disabled:cursor-not-allowed',
      navigatorNextButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-100 rounded-full p-1 -mr-1 disabled:opacity-50 disabled:cursor-not-allowed',
      navigatorPrevButtonIcon: 'text-gray-400',
      navigatorNextButtonIcon: 'text-gray-400',

      // Calendar View
      calendarWrapper: 'px-3 pt-2',
      calendarHeaderWrapper: '',
      calendarHeaderWeekDay: 'uppercase text-xs text-gray-500 w-8 h-8 flex items-center justify-center',
      calendarDaysWrapper: '',
      calendarDaysDayWrapper: 'w-full h-8 flex flex-shrink-0 items-center',

      // Day item
      otherMonthDay: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed',
      emptyDay: '',
      inRangeFirstDay: 'text-sm bg-blue-500 text-white w-full h-8 rounded-l-full',
      inRangeLastDay: 'text-sm bg-blue-500 text-white w-full h-8 rounded-r-full',
      inRangeDay: 'text-sm bg-blue-200 w-full h-8 disabled:opacity-50 disabled:cursor-not-allowed',
      selectedDay: 'text-sm rounded-full w-8 h-8 mx-auto bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed',
      activeDay: 'text-sm rounded-full bg-blue-100 w-8 h-8 mx-auto disabled:opacity-50 disabled:cursor-not-allowed',
      highlightedDay: 'text-sm rounded-full bg-blue-200 w-8 h-8 mx-auto disabled:opacity-50 disabled:cursor-not-allowed',
      day: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed',
      today: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed border border-blue-500',

      // Months View
      monthWrapper: 'px-3 pt-2',
      selectedMonth: 'text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white',
      activeMonth: 'text-sm rounded w-full h-12 mx-auto bg-blue-100',
      month: 'text-sm rounded w-full h-12 mx-auto hover:bg-blue-100',

      // Years View
      yearWrapper: 'px-3 pt-2',
      year: 'text-sm rounded w-full h-12 mx-auto hover:bg-blue-100',
      selectedYear: 'text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white',
      activeYear: 'text-sm rounded w-full h-12 mx-auto bg-blue-100'
    },
    variants: {
      danger: {
        input: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
        clearButton: 'hover:bg-red-200 text-red-500'
      }
    }
  },
  TTag: {
    fixedClasses: '',
    classes: '',
    variants: {
      title: 'text-2xl leading-8 font-extrabold text-gray-900 tracking-tight',
      subtitle: 'text-lg leading-6 font-medium text-gray-900',
      error: 'text-red-500',
      badge: 'inline-flex items-center px-3 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800',
      avatar: 'inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 overflow-hidden leading-none text-center'
    }
  },
  TToggle: {
    fixedClasses: {
      wrapper: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200',
      wrapperChecked: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200  border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
      wrapperDisabled: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200 opacity-50 cursor-not-allowed',
      wrapperCheckedDisabled: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200 opacity-50 cursor-not-allowed border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
      button: 'inline-block absolute transform translate-x-0 transition ease-in-out duration-200',
      buttonChecked: 'inline-block absolute transform translate-x-full transition ease-in-out duration-200',
      checkedPlaceholder: 'inline-block',
      uncheckedPlaceholder: 'inline-block'
    },
    classes: {
      wrapper: 'bg-gray-100 rounded-full border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
      wrapperChecked: 'bg-blue-500 rounded-full',
      wrapperDisabled: 'bg-gray-100 rounded-full border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
      wrapperCheckedDisabled: 'bg-blue-500',
      button: 'h-5 w-5 rounded-full bg-white shadow flex items-center justify-center text-gray-400 text-xs',
      buttonChecked: 'h-5 w-5 rounded-full bg-white shadow flex items-center justify-center text-blue-500 text-xs',
      checkedPlaceholder: 'rounded-full w-5 h-5 flex items-center justify-center text-gray-400 text-xs',
      uncheckedPlaceholder: 'rounded-full w-5 h-5 flex items-center justify-center text-gray-400 text-xs'
    },
    variants: {
      danger: {
        wrapperChecked: 'bg-red-500 rounded-full',
        wrapperCheckedDisabled: 'bg-red-500 rounded-full'
      },
      success: {
        wrapperChecked: 'bg-green-500 rounded-full',
        wrapperCheckedDisabled: 'bg-green-500 rounded-full'
      },
      box: {
        wrapper: 'bg-gray-100 rounded-sm border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
        wrapperChecked: 'bg-blue-500 rounded-sm',
        wrapperCheckedDisabled: 'bg-blue-500 rounded-sm',
        button: 'h-6 w-6 rounded-sm bg-white shadow flex items-center justify-center text-gray-400 text-xs',
        buttonChecked: 'h-6 w-6 rounded-sm  bg-white shadow flex items-center justify-center text-blue-500 text-xs',
        checkedPlaceholder: 'rounded-sm w-6 h-6 flex items-center justify-center text-gray-400 text-xs',
        uncheckedPlaceholder: 'rounded-sm w-6 h-6 flex items-center justify-center text-gray-400 text-xs'
      }
    }
  },
  TAlert: {
    fixedClasses: {
      wrapper: 'relative flex items-center p-4 border-l-4  rounded shadow-sm',
      body: 'flex-grow',
      close: 'absolute relative flex items-center justify-center ml-4 flex-shrink-0 w-6 h-6 transition duration-100 ease-in-out rounded  focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
      closeIcon: 'fill-current h-4 w-4'
    },
    classes: {
      wrapper: 'bg-blue-50 border-blue-500',
      body: 'text-blue-700',
      close: 'text-blue-500 hover:bg-blue-200'
    },
    variants: {
      danger: {
        wrapper: 'bg-red-50 border-red-500',
        body: 'text-red-700',
        close: 'text-red-500 hover:bg-red-200'
      },
      success: {
        wrapper: 'bg-green-50 border-green-500',
        body: 'text-green-700',
        close: 'text-green-500 hover:bg-green-200'
      }
    }
  },
  TCard: {
    fixedClasses: {
      wrapper: 'border rounded shadow-sm ',
      body: 'p-3',
      header: 'border-b p-3 rounded-t',
      footer: 'border-t p-3 rounded-b'
    },
    classes: {
      wrapper: 'bg-white border-gray-100',
      body: '',
      header: 'border-gray-100',
      footer: 'border-gray-100'
    },
    variants: {
      danger: {
        wrapper: 'bg-red-50 text-red-700 border-red-200',
        header: 'border-red-200 text-red-700',
        footer: 'border-red-200 text-red-700'
      }
    }
  },

  TModal: {
    fixedClasses: {
      overlay: 'z-40  overflow-auto scrolling-touch left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-opacity-50',
      wrapper: 'relative mx-auto z-50 max-w-lg px-3 py-12',
      modal: 'overflow-visible relative  rounded',
      body: 'p-3',
      header: 'border-b p-3 rounded-t',
      footer: ' p-3 rounded-b',
      close: 'flex items-center justify-center rounded-full absolute right-0 top-0 -m-3 h-8 w-8 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50'
    },
    classes: {
      overlay: 'bg-black',
      wrapper: '',
      modal: 'bg-white shadow',
      body: 'p-3',
      header: 'border-gray-100',
      footer: 'bg-gray-100',
      close: 'bg-gray-100 text-gray-600 hover:bg-gray-200',
      closeIcon: 'fill-current h-4 w-4',
      overlayEnterClass: '',
      overlayEnterActiveClass: 'opacity-0 transition ease-out duration-100',
      overlayEnterToClass: 'opacity-100',
      overlayLeaveClass: 'transition ease-in opacity-100',
      overlayLeaveActiveClass: '',
      overlayLeaveToClass: 'opacity-0 duration-75',
      enterClass: '',
      enterActiveClass: '',
      enterToClass: '',
      leaveClass: '',
      leaveActiveClass: '',
      leaveToClass: ''
    },
    variants: {
      danger: {
        overlay: 'bg-red-100',
        header: 'border-red-50 text-red-700',
        close: 'bg-red-50 text-red-700 hover:bg-red-200 border-red-100 border',
        modal: 'bg-white border border-red-100 shadow-lg',
        footer: 'bg-red-50'
      }
    }
  },
  TDialog: {
    fixedClasses: {
      overlay: 'overflow-auto scrolling-touch left-0 top-0 bottom-0 right-0 w-full h-full fixed z-40 bg-opacity-50',
      wrapper: 'relative mx-auto',
      modal: 'overflow-visible relative ',
      close: 'flex items-center justify-center  rounded-full absolute right-0 top-0 -m-3 h-8 w-8 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
      dialog: 'overflow-visible relative',
      iconWrapper: 'flex flex-shrink-0 h-12 items-center justify-center rounded-full w-12 mx-auto',
      icon: 'w-6 h-6',
      okButton: 'block px-4 py-2 text-white transition duration-100 ease-in-out border border-transparent rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed w-full max-w-xs',
      buttons: 'p-3 flex space-x-4 justify-center bg-gray-100 rounded-b'
    },
    classes: {
      close: 'bg-gray-100 text-gray-600 hover:bg-gray-200',
      closeIcon: 'fill-current h-4 w-4',

      overlay: 'bg-black',
      wrapper: 'z-50 max-w-lg px-3 py-12',
      dialog: 'bg-white shadow rounded text-left',

      body: 'p-3 space-y-3',
      buttons: 'bg-gray-100',

      iconWrapper: 'bg-gray-100',
      icon: 'text-gray-500',
      content: 'w-full flex justify-center flex-col',

      titleWrapper: '',
      title: 'text-lg font-semibold text-center',

      textWrapper: 'text-left w-full',
      text: '',

      cancelButton: 'block px-4 py-2 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-100 focus:border-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed w-full max-w-xs',
      okButton: 'bg-blue-500 hover:bg-blue-600',

      inputWrapper: 'mt-3 flex items-center space-x-3',

      input: 'block w-full px-3 py-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed w-full',
      select: 'block w-full px-3 py-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50  disabled:opacity-50 disabled:cursor-not-allowed w-full',

      radioWrapper: 'flex items-center space-x-2',
      radio: 'text-blue-500 transition duration-100 ease-in-out border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0  disabled:opacity-50 disabled:cursor-not-allowed',
      radioText: '',

      checkboxWrapper: 'flex items-center space-x-2',
      checkbox: 'text-blue-500 transition duration-100 ease-in-out border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0  disabled:opacity-50 disabled:cursor-not-allowed',
      checkboxText: '',

      errorMessage: 'text-red-500 block text-sm',

      busyWrapper: 'absolute bg-opacity-50 bg-white flex h-full items-center justify-center left-0 top-0 w-full',
      busyIcon: 'animate-spin h-6 w-6 fill-current text-gray-500',

      overlayEnterClass: '',
      overlayEnterActiveClass: 'opacity-0 transition ease-out duration-100',
      overlayEnterToClass: 'opacity-100',
      overlayLeaveClass: 'transition ease-in opacity-100',
      overlayLeaveActiveClass: '',
      overlayLeaveToClass: 'opacity-0 duration-75',

      enterClass: '',
      enterActiveClass: '',
      enterToClass: '',
      leaveClass: '',
      leaveActiveClass: '',
      leaveToClass: ''
    },
    variants: {
      danger: {
        overlay: 'bg-red-100',
        okButton: 'bg-red-500 hover:bg-red-600',
        iconWrapper: 'bg-red-50',
        buttons: 'bg-red-50',
        icon: 'text-red-500'
      },
      horizontal: {
        body: 'p-3 flex space-x-3',
        title: 'text-lg font-semibold'
      }
    }
  },
  TTable: {
    classes: {
      table: 'min-w-full divide-y divide-gray-100 shadow-sm border-gray-200 border',
      thead: '',
      theadTr: '',
      theadTh: 'px-3 py-2 font-semibold text-left bg-gray-100 border-b',
      tbody: 'bg-white divide-y divide-gray-100',
      tr: '',
      td: 'px-3 py-2 whitespace-no-wrap',
      tfoot: '',
      tfootTr: '',
      tfootTd: ''
    },
    variants: {
      thin: {
        td: 'p-1 whitespace-no-wrap text-sm',
        theadTh: 'p-1 font-semibold text-left bg-gray-100 border-b text-sm'
      }
    }
  },
  TPagination: {
    classes: {
      wrapper: 'table border-collapse text-center bg-white mx-auto shadow-sm',
      element: 'w-8 h-8 border border-gray-200 table-cell hover:border-blue-100',
      activeElement: 'w-8 h-8 border border-gray-200 border-blue-500 table-cell hover:border-blue-600',
      disabledElement: 'w-8 h-8 border border-gray-200 table-cell',
      ellipsisElement: 'w-8 h-8 border border-gray-200 hidden md:table-cell',
      activeButton: 'bg-blue-500 w-full h-full text-white hover:bg-blue-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
      disabledButton: 'opacity-25 w-full h-full cursor-not-allowed transition duration-100 ease-in-out',
      button: 'hover:bg-blue-100 w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
      ellipsis: ''
    },
    variants: {
      rounded: {
        wrapper: 'bg-white mx-auto text-center flex space-x-2',
        element: 'w-8 h-8 rounded-full',
        activeElement: 'w-8 h-8 rounded-full',
        disabledElement: 'w-8 h-8 rounded-full',
        ellipsisElement: 'w-8 h-8 rounded-full hidden md:inline',
        activeButton: 'border border-blue-500 bg-blue-500 w-full h-full rounded-full text-white hover:bg-blue-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
        disabledButton: 'border border-gray-200  opacity-25 w-full h-full rounded-full cursor-not-allowed transition duration-100 ease-in-out',
        button: 'border border-gray-200 hover:bg-blue-100 hover:border-blue-100 rounded-full w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
        ellipsis: ''
      }
    }
  },
  TDropdown: {
    fixedClasses: {
      button: 'flex items-center text-white block px-4 py-2 transition duration-100 ease-in-out border border-transparent rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
      wrapper: 'inline-flex flex-col',
      dropdownWrapper: 'relative z-10',
      dropdown: 'origin-top-left absolute left-0 w-56 rounded shadow mt-1',
      enterClass: '',
      enterActiveClass: 'transition ease-out duration-100 transform opacity-0 scale-95',
      enterToClass: 'transform opacity-100 scale-100',
      leaveClass: 'transition ease-in transform opacity-100 scale-100',
      leaveActiveClass: '',
      leaveToClass: 'transform opacity-0 scale-95 duration-75'
    },
    classes: {
      button: 'bg-blue-500 hover:bg-blue-600',
      dropdown: 'bg-white'
    },
    variants: {
      danger: {
        button: 'bg-red-500 hover:bg-red-600',
        dropdown: 'bg-red-50'
      }
    }
  }

}

export default Vue.extend({
  components: {
    ThemeBuilderSteps,
    ThemeBuilderStepSelectComponents,
    ThemeBuilderStepBuildTheme,
    ThemeBuilderStepInstall,
    ThemeBuilderStepShare
  },
  data () {
    return {
      step: 0,
      stepReady: 0,
      lastActiveStep: 0,
      selectedComponents: Object.keys(defaultTheme),
      sortedComponents: Object.keys(defaultTheme),
      theme: cloneDeep(defaultTheme),
      notWrappedTheme,
      wrappedTheme
    }
  },
  computed: {
    sortedSelectedComponents () {
      return this.sortedComponents.filter((componentName) => {
        return this.selectedComponents.includes(componentName)
      })
    }
  },
  watch: {
    async step (step) {
      if (step > this.lastActiveStep) {
        this.lastActiveStep = step
      }

      await this.$nextTick()
      this.$el.scrollIntoView({ behavior: 'smooth' })
    },
    sortedSelectedComponents (selectedComponents) {
      const theme = {}
      selectedComponents.forEach((componentName) => {
        theme[componentName] = defaultTheme[componentName]
      })
      this.theme = theme
    }
  },
  methods: {
    prevStep () {
      this.step--
    },
    nextStep () {
      this.step++
    }
  }
})
</script>
