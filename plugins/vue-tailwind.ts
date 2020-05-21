import Vue from 'vue'
// @ts-ignore
import VueTailwind from 'vue-tailwind'

Vue.use(VueTailwind, {
  TButton: {
    classes: 'bg-orange-500 hover:bg-orange-700 text-white uppercase text-sm py-2 px-4 rounded',
    theme: {
      link: 'text-orange-500 hover:text-orange-700 underline uppercase text-sm py-2 px-4',
      disabledLink: 'text-orange-300 cursor-not-allowed underline uppercase text-sm py-2 px-4'
    }
  },
  TCheckbox: {
    classes: 'form-checkbox h-4 w-4 text-orange-500 transition duration-150 ease-in-out'
  },
  TRadio: {
    classes: 'form-radio h-4 w-4 text-orange-500 transition duration-150 ease-in-out'
  },
  TInput: {
    classes: 'form-input border-2 bg-orange-100'
  },
  TTextarea: {
    classes: 'form-textarea border-2 bg-orange-100'
  },
  TSelect: {
    classes: 'form-select border-2 bg-orange-100'
  }
})
