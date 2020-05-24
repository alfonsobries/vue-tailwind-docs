/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  purge: {
    enabled: false
  },
  theme: {},
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: [
    require('@tailwindcss/custom-forms')
  ]
}
