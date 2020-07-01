import Vue from 'vue'
// @ts-ignore
import VueTailwind from 'vue-tailwind'

Vue.use(VueTailwind, {
  TButton: {
    classes: 'bg-orange-500 hover:bg-orange-700 text-white uppercase text-sm py-2 px-4 rounded',
    variants: {
      disabled: 'bg-orange-500 text-white uppercase text-sm py-2 px-4 rounded opacity-50 cursor-not-allowed',
      secondary: 'bg-orange-300 text-orange-500 hover:text-orange-700 uppercase text-sm py-2 px-4 rounded',
      link: 'text-orange-500 hover:text-orange-700 underline uppercase text-sm py-2 px-4',
      disabledLink: 'text-orange-500 underline uppercase text-sm py-2 px-4 opacity-50 cursor-not-allowed',
      playgroundMenu: 'ml-2 hover:bg-gray-200 inline-block leading-none px-3 py-2 rounded-lg text-xs transform ease-in-out duration-100',
      playgroundMenuActive: 'bg-gray-200 font-medium hover:bg-gray-300 inline-block leading-none px-3 py-2 rounded-lg shadow-inner text-xs transform ease-in-out duration-100'
    }
  },
  TCheckbox: {
    classes: 'form-checkbox h-4 w-4 text-orange-500 transition duration-150 ease-in-out'
  },
  TRadio: {
    classes: 'form-radio h-4 w-4 text-orange-500 transition duration-150 ease-in-out'
  },
  TInput: {
    classes: 'form-input border-2 bg-orange-100 text-gray-700',
    variants: {
      error: 'form-input border-2 bg-orange-100 border-red-500 text-red-500'
    }
  },
  TTextarea: {
    classes: 'form-textarea border-2 bg-orange-100 text-gray-700',
    variants: {
      error: 'form-textarea border-2 bg-orange-100 border-red-500 text-red-500'
    }
  },
  TSelect: {
    classes: 'form-select border-2 bg-orange-100 text-gray-700'
  },
  TAlert: {
    classes: {
      wrapper: 'rounded bg-blue-100 p-4 flex text-sm w-full border-l-4 border-blue-700',
      body: 'flex-grow text-blue-700',
      close: 'text-blue-700 hover:text-blue-600',
      closeIcon: 'h-5 w-5 fill-current'
    },
    variants: {
      error: {
        wrapper: 'rounded bg-red-100 p-4 flex text-sm border-l-4 border-red-500',
        body: 'flex-grow text-red-700',
        close: 'text-red-700 hover:text-red-500 hover:bg-red-200 ml-4 rounded',
        closeIcon: 'h-5 w-5 fill-current'
      },
      success: {
        wrapper: 'rounded bg-green-100 p-4 flex text-sm border-l-4 border-green-500',
        body: 'flex-grow text-green-700',
        close: 'text-green-700  hover:text-green-500 hover:bg-green-200 ml-4 rounded',
        closeIcon: 'h-5 w-5 fill-current'
      }
    }
  },
  TInputGroup: {
    classes: {
      wrapper: 'mb-4',
      label: 'block uppercase tracking-wide text-xs font-semibold text-gray-700',
      body: '',
      feedback: 'text-sm text-gray-700',
      description: 'text-sm text-gray-700'
    },
    variants: {
      error: {
        label: 'block uppercase tracking-wide text-xs font-semibold text-red-500',
        feedback: 'text-sm text-red-500'
      }
    }
  },
  TCard: {
    classes: {
      wrapper: 'rounded max-w-lg mx-auto bg-white shadow',
      body: 'p-8',
      header: 'p-8 border-b',
      footer: 'p-8 border-t'
    },
    variants: {
      playground: {
        wrapper: 'bg-white border rounded shadow flex flex-col overflow-hidden',
        body: '',
        header: 'px-4 py-2 border-b flex items-center justify-between bg-gray-100',
        footer: 'px-4 py-2 bg-gray-100 border-t'
      },
      fullscreen: {
        wrapper: 'bg-white fixed left-0 right-0 top-0 bottom-0 z-50 flex flex-col',
        body: 'flex flex-grow order-3',
        header: 'px-4 py-1 border-b flex items-center justify-between bg-gray-100 order-1',
        footer: 'px-4 py-2 bg-gray-100 border-b order-2'
      },
      preview: {
        wrapper: '',
        body: '',
        header: 'py-2 border-b font-semibold uppercase text-gray-700'
      },
      demo: {
        wrapper: 'rounded shadow bg-white',
        body: 'p-4',
        header: 'p-4 border-b text-sm font-semibold uppercase text-gray-700',
        footer: 'p-2 border-t'
      },
      theme: {
        wrapper: 'rounded shadow bg-white',
        body: 'p-4 text-sm leading-snug',
        header: 'p-2 flex border-b text-sm font-semibold uppercase text-gray-800 justify-between items-center',
        footer: 'p-2 border-t'
      }
    }
  },
  TRichSelect: {
    classes: {
      wrapper: 'relative',
      buttonWrapper: 'inline-block w-full relative',
      selectButton: 'w-full border-2 bg-white flex text-left justify-between items-center rounded p-2 focus:outline-none focus:shadow-outline',
      selectButtonLabel: 'block truncate',
      selectButtonPlaceholder: 'block truncate text-gray-500',
      selectButtonIcon: 'fill-current flex-shrink-0 ml-1 h-4 w-4',
      selectButtonClearButton: 'hover:bg-gray-200 rounded flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6',
      selectButtonClearIcon: 'fill-current h-3 w-3 text-gray-500',
      dropdown: 'absolute w-full rounded bg-white shadow z-10',
      dropdownFeedback: 'p-2 text-sm text-gray-500',
      loadingMoreResults: 'p-2 text-sm text-gray-500',
      optionsList: 'overflow-auto',
      searchWrapper: 'inline-block w-full bg-white p-2',
      searchBox: 'inline-block w-full p-2 bg-gray-200 text-sm rounded border focus:outline-none focus:shadow-outline',
      optgroup: 'text-gray-500 uppercase text-xs py-1 px-2 font-semibold',
      option: '',
      highlightedOption: 'bg-gray-300',
      selectedOption: 'font-semibold bg-gray-100',
      selectedHighlightedOption: 'bg-gray-300 font-semibold',
      optionContent: 'flex justify-between p-2 items-center',
      optionLabel: 'truncate block',
      selectedIcon: 'fill-current h-4 w-4',
      enterClass: '',
      enterActiveClass: 'opacity-0 transition ease-out duration-100',
      enterToClass: 'opacity-100',
      leaveClass: 'transition ease-in opacity-100',
      leaveActiveClass: '',
      leaveToClass: 'opacity-0 duration-75'
    }
  },
  TDropdown: {
    classes: {
      button: 'p-3',
      wrapper: 'inline-flex flex-col',
      dropdownWrapper: 'relative',
      dropdown: 'origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white z-10',
      enterClass: '',
      enterActiveClass: 'transition ease-out duration-100 transform opacity-0 scale-95',
      enterToClass: 'transform opacity-100 scale-100',
      leaveClass: 'transition ease-in transform opacity-100 scale-100',
      leaveActiveClass: '',
      leaveToClass: 'transform opacity-0 scale-95 duration-75'
    },
    variants: {
      menu: {
        button: '',
        wrapper: '',
        dropdownWrapper: 'lg:hidden bg-white shadow-sm z-30 -mt-1 h-full overflow-y-auto scrolling-touch fixed top-0 pt-20 w-full',
        dropdown: '',
        enterClass: '',
        enterActiveClass: 'transition ease-out duration-100 transform opacity-0',
        enterToClass: 'transform opacity-100',
        leaveClass: 'transition ease-in transform opacity-100',
        leaveActiveClass: '',
        leaveToClass: 'transform opacity-0 duration-75'
      }
    }
  },
  TModal: {
    classes: {
      overlay: 'z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-black bg-opacity-50',
      wrapper: 'z-50 relative mx-auto my-0 max-w-lg',
      modal: 'bg-white shadow border overflow-hidden relative',
      body: '',
      header: '',
      footer: '',
      close: 'absolute right-0 top-0',
      closeIcon: 'h-5 w-5 fill-current',
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
      demo: {
        overlay: 'bg-black bg-opacity-50 w-full p-4 rounded',
        wrapper: 'relative mx-auto my-0 max-w-lg',
        modal: 'rounded shadow bg-white relative',
        body: 'p-4',
        header: 'p-4 border-b text-sm font-semibold uppercase text-gray-700',
        footer: 'p-2 border-t',
        close: 'absolute right-0 top-0 m-3 text-gray-700 hover:text-gray-600',
        closeIcon: 'h-5 w-5 fill-current'
      },
      danger: {
        overlay: 'z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-black bg-opacity-50',
        wrapper: 'z-50 relative mx-auto my-0 max-w-lg',
        modal: 'bg-white shadow border overflow-hidden relative',
        body: '',
        header: '',
        footer: '',
        close: 'absolute right-0 top-0',
        closeIcon: 'h-5 w-5 fill-current'
      }
    }
  }
})
