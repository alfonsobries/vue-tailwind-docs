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
      disabledLink: 'text-orange-500 underline uppercase text-sm py-2 px-4 opacity-50 cursor-not-allowed'
    }
  },
  TCheckbox: {
    classes: 'form-checkbox h-4 w-4 text-orange-500 transition duration-150 ease-in-out'
  },
  TRadio: {
    classes: 'form-radio h-4 w-4 text-orange-500 transition duration-150 ease-in-out'
  },
  TInput: {
    classes: 'form-input border-2 bg-orange-100 text-gray-700'
  },
  TTextarea: {
    classes: 'form-textarea border-2 bg-orange-100 text-gray-700'
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
    }
  },
  TInputGroup: {
    classes: {
      wrapper: 'mb-4',
      label: 'block uppercase tracking-wide text-xs font-semibold text-gray-700',
      body: '',
      feedback: 'text-sm text-gray-700',
      description: 'text-sm text-gray-700'
    }
  },
  TCard: {
    classes: {
      wrapper: 'rounded border shadow',
      body: 'p-4',
      header: 'p-4 border-b text-sm font-semibold uppercase text-gray-700',
      footer: 'p-2 border-t'
    }
  }
})
