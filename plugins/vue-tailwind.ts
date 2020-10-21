import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

Vue.use(VueTailwind, {
  TTag: {
    variants: {
      h3: 'text-xl leading-5 font-semibold tracking-tight font-display text-gray-900',
      badgeDemo: 'px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800',
      bodyDemo: 'mt-2 text-base leading-6 text-gray-500',
      demo: 'py-1 bg-orange-200 px-5 inline-flex text-sm leading-5 font-semibold rounded-full text-orange-600'
    }
  },
  TButton: {
    fixedClasses: 'transform ease-in-out duration-100',
    classes: 'bg-orange-500 hover:bg-orange-700 text-white uppercase text-sm py-2 px-4 rounded',
    variants: {
      disabled: 'bg-orange-500 text-white uppercase text-sm py-2 px-4 rounded opacity-50 cursor-not-allowed',
      secondary: 'bg-orange-300 text-orange-500 hover:text-orange-700 uppercase text-sm py-2 px-4 rounded',
      link: 'text-orange-500 hover:text-orange-700 underline uppercase text-sm py-2 px-4',
      disabledLink: 'text-orange-500 underline uppercase text-sm py-2 px-4 opacity-50 cursor-not-allowed',
      playgroundMenu: 'mx-1 focus:outline-none focus:shadow-outline hover:bg-gray-200 inline-block leading-none px-3 py-2 rounded-lg text-xs border border-transparent',
      playgroundMenuActive: 'mx-1 focus:outline-none focus:shadow-outline bg-gray-200 hover:bg-gray-300 inline-block leading-none px-3 py-2 rounded-lg shadow-inner text-xs border'
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
      demo: 'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full leading-normal',
      error: 'form-input border-2 bg-orange-100 border-red-500 text-red-500',
      playground: 'form-input p-2 px-3 py-1 text-sm',
      newsletter: 'border-gray-200 text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 bg-white',
      newsletterError: 'border-red-200 text-red-900 placeholder-red-500 focus:placeholder-red-400 bg-red-100',
      newsletterSuccess: 'border-green-200 text-green-900 placeholder-green-500 focus:placeholder-green-400 bg-green-100'
    }
  },
  TTextarea: {
    classes: 'form-textarea border-2 bg-orange-100 text-gray-700',
    variants: {
      demo: 'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full leading-normal',
      error: 'form-textarea border-2 bg-orange-100 border-red-500 text-red-500'
    }
  },
  TSelect: {
    classes: 'form-select border-2 bg-orange-100 text-gray-700',
    variants: {
      demo: 'form-select w-full',
      playground: 'form-select p-2 px-3 py-1 text-sm',
      wrappedDemo: {
        wrapper: 'relative',
        input: 'appearance-none bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full leading-normal',
        arrowWrapper: 'pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700',
        arrow: 'fill-current h-4 w-4 leading-none'
      }
    }
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
      feedback: 'text-sm text-gray-500',
      description: 'text-sm text-gray-500`'
    },
    variants: {
      newsletter: {
        body: 'sm:flex items-center',
        feedback: 'text-sm text-red-700'
      },
      newsletterSuccess: {
        body: 'sm:flex items-center',
        feedback: 'text-sm text-green-700'
      },
      error: {
        label: 'block uppercase tracking-wide text-xs font-semibold text-red-500',
        feedback: 'text-sm text-red-500'
      },
      classes: {
        wrapper: 'mb-4 px-3 pt-1 border rounded bg-white',
        label: 'flex justify-between',
        body: 'py-3 border-t mt-3',
        feedback: 'text-sm text-gray-500',
        description: 'text-sm text-gray-500 leading-tight'
      },
      playground: {
        wrapper: '',
        label: 'text-xs font-medium uppercase text-gray-500 leading-none'
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
        footer: 'px-4 pt-2 pb-4 bg-gray-100 border-t'
      },
      fullscreen: {
        wrapper: 'bg-white fixed left-0 right-0 top-0 bottom-0 z-50 flex flex-col max-h-screen',
        body: 'flex flex-grow order-3 overflow-y-auto scrolling-touch',
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
      tooltip: {
        dropdown: 'origin-top-left absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-black bg-opacity-50 text-white z-10'
      },
      bitcoin: {
        dropdown: 'origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white z-10'
      },
      demo: {
        button: 'bg-white hover:bg-gray-100 border uppercase text-sm py-2 px-4 rounded'
      },
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
      },
      searchBox: {
        wrapper: 'max-w-lg w-full lg:max-w-xs relative',
        dropdownWrapper: '',
        dropdown: 'origin-top-right right-0 rounded-md shadow-lg bg-white border w-full fixed mt-3 md:absolute md:mt-0'
      }
    }
  },
  TCheckboxGroup: {
    classes: {
      groupWrapper: 'flex flex-col',
      label: 'text-sm uppercase mx-2 text-gray-700',
      input: 'form-checkbox transition duration-150 ease-in-out',
      inputWrapper: 'inline-flex',
      wrapper: 'flex items-center'
    }
  },
  TRadioGroup: {
    classes: {
      groupWrapper: 'flex flex-col',
      label: 'text-sm uppercase mx-2 text-gray-700',
      input: 'form-radio transition duration-150 ease-in-out',
      inputWrapper: 'inline-flex',
      wrapper: 'flex items-center'
    },
    variants: {
      vertical: {
        groupWrapper: 'flex flex-row space-x-2'
      }
    }
  },
  TTable: {
    classes: {
      table: 'shadow min-w-full divide-y divide-gray-200',
      tbody: 'bg-white divide-y divide-gray-200',
      td: 'px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700',
      theadTh: 'px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider'
    },
    variants: {
      demo: {
        table: 'shadow min-w-full divide-y divide-gray-200',
        tbody: 'bg-white divide-y divide-gray-200',
        td: 'px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700',
        theadTh: 'px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider'
      }
    }
  },
  TPagination: {
    variants: {
      demo: {
        wrapper: 'table border-collapse text-center bg-white',
        element: 'w-8 h-8 border-2 table-cell',
        disabledElement: 'w-8 h-8 border-2 table-cell',
        ellipsisElement: 'w-8 h-8 border-2 hidden md:table-cell',
        activeButton: 'bg-gray-300 w-full h-full',
        disabledButton: 'opacity-25 w-full h-full cursor-not-allowed',
        button: 'hover:bg-gray-200 w-full h-full text-gray-700',
        ellipsis: ''
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
  },
  TDialog: {
    fixedClasses: {
      overlay: 'overflow-auto scrolling-touch left-0 top-0 bottom-0 right-0 w-full h-full fixed',
      wrapper: 'relative mx-auto ',
      dialog: 'overflow-hidden relative',
      close: 'absolute right-0 top-0'
    },
    classes: {
      close: 'bg-gray-100 flex h-8 items-center justify-center m-1 rounded-full text-gray-700 w-8 hover:bg-gray-200',
      closeIcon: 'h-5 w-5 fill-current',

      overlay: 'z-40 bg-black bg-opacity-50',
      wrapper: 'z-50 max-w-md',
      dialog: 'bg-white rounded p-4 text-left overflow-hidden shadow ',

      body: '',
      buttons: 'mt-4 flex space-x-4 justify-center',

      iconWrapper: 'mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-200',
      icon: 'w-6 h-6 text-gray-700',
      content: 'mt-3',

      titleWrapper: '',
      title: 'text-lg leading-6 font-medium text-gray-900 text-center',

      textWrapper: 'mt-2 text-gray-600',
      text: '',

      cancelButton: 'inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5 w-full',
      okButton: 'inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5 w-full',

      inputWrapper: 'mt-3 flex items-center space-x-4 justify-center',

      input: 'form-input w-full',
      select: 'form-select w-full',

      radioWrapper: 'flex items-center space-x-2',
      radio: 'form-radio',
      radioText: '',

      checkboxWrapper: 'flex items-center space-x-2',
      checkbox: 'form-checkbox',
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
      demo: {
        overlay: 'bg-black bg-opacity-50 w-full p-4 rounded',
        wrapper: 'z-50 relative mx-auto my-0 max-w-md',
        dialog: 'bg-white rounded p-4 text-left shadow',
        close: 'bg-gray-100 flex h-8 items-center justify-center m-1 rounded-full text-gray-700 w-8 hover:bg-gray-200 absolute right-0 top-0',
        content: 'mt-3',
        title: 'text-lg leading-6 font-medium text-gray-900 text-center',
        textWrapper: 'mt-2 text-gray-600',
        iconWrapper: 'mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-orange-200',
        icon: 'w-6 h-6 text-orange-700',
        cancelButton: 'inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-orange-300 focus:shadow-outline-orange transition ease-in-out duration-150 sm:text-sm sm:leading-5 w-full',
        okButton: 'inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-orange-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-orange-500 focus:outline-none focus:border-orange-700 focus:shadow-outline-orange transition ease-in-out duration-150 sm:text-sm sm:leading-5 w-full'
      },
      danger: {
        overlay: 'bg-red-500 bg-opacity-50',
        cancelButton: 'inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-red-300 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5 w-full',
        okButton: 'inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5 w-full',
        iconWrapper: 'mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-200',
        icon: 'w-6 h-6 text-red-700'
      }
    }
  }
})
