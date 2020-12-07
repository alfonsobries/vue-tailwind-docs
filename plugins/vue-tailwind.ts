import Vue from 'vue'
import VueTailwind from 'vue-tailwind/dist/full'

Vue.use(VueTailwind, {
  TInput: {
    variants: {
      demo: 'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full leading-normal',
      error: 'border-2 bg-orange-100 border-red-500 text-red-500',
      playground: 'p-2 px-3 py-1 text-sm',
      newsletter: 'border-gray-200 text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 bg-white',
      newsletterError: 'border-red-200 text-red-900 placeholder-red-500 focus:placeholder-red-400 bg-red-100',
      newsletterSuccess: 'border-green-200 text-green-900 placeholder-green-500 focus:placeholder-green-400 bg-green-100'
    }
  },
  TTag: {
    variants: {
      h3: 'text-xl leading-5 font-semibold tracking-tight font-display text-gray-900',
      badgeDemo: 'px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800',
      bodyDemo: 'mt-2 text-base leading-6 text-gray-500',
      demo: 'py-1 bg-orange-200 px-5 inline-flex text-sm leading-5 font-semibold rounded-full text-orange-600'
    }
  },
  TButton: {
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

  },
  TRadio: {

  },
  TTextarea: {
    variants: {
      demo: 'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full leading-normal',
      error: 'form-textarea border-2 bg-orange-100 border-red-500 text-red-500'
    }
  },
  TSelect: {
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

  },
  TDropdown: {
    variants: {
      tooltip: {
        dropdown: 'origin-top-left absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-black bg-opacity-50 text-white z-10'
      },
      bitcoin: {
        dropdown: 'origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white z-10'
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
    variants: {
      vertical: {
        groupWrapper: 'flex flex-row space-x-2'
      }
    }
  },
  TTable: {

  },
  TPagination: {

  },
  TModal: {
    variants: {
      demo: {
        overlay: 'overflow-auto w-full h-full bg-black bg-opacity-50 p-4',
        wrapper: 'relative mx-auto max-w-lg',
        close: 'bg-gray-100 text-gray-600 rounded-full absolute right-0 top-0 -m-3 h-8 w-8 transition duration-100 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 flex items-center justify-center'
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
    variants: {
      demo: {
        overlay: 'overflow-auto w-full h-full bg-black bg-opacity-50 p-4',
        wrapper: 'relative mx-auto max-w-lg',
        close: 'bg-gray-100 text-gray-600 rounded-full absolute right-0 top-0 -m-3 h-8 w-8 transition duration-100 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 flex items-center justify-center'
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
