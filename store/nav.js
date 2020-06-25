export const state = () => ({
  main: [
    {
      to: '/docs',
      text: 'Docs'
    },
    {
      to: '/to-do',
      text: 'Theme Builder'
    },
    {
      to: '/to-do-2',
      text: 'Community Themes'
    },
    {
      to: '/to-do-3',
      text: 'Contribute'
    }
  ],
  docs: [
    {
      id: 'form-elements',
      text: 'Form elements',
      items: [
        {
          to: '/',
          text: 'Text Input'
        },
        {
          to: '/',
          text: 'Textarea'
        },
        {
          to: '/',
          text: 'Select'
        },
        {
          to: '/',
          text: 'Radio'
        },
        {
          to: '/',
          text: 'Button'
        },
        {
          to: '/',
          text: 'Checkbox'
        }
      ]
    },
    {
      id: 'form-components',
      text: 'Form Components',
      items: [
        {
          to: '/',
          text: 'Rich Select'
        },
        {
          to: '/',
          text: 'Datepicker'
        },
        {
          to: '/',
          text: 'Checkbox group'
        },
        {
          to: '/',
          text: 'Radio group'
        },
        {
          to: '/',
          text: 'Input group'
        }
      ]
    },
    {
      id: 'components',
      text: 'Components',
      items: [
        {
          to: '/',
          text: 'Tag'
        },
        {
          to: '/',
          text: 'Alert'
        },
        {
          to: '/',
          text: 'Table'
        },
        {
          to: '/',
          text: 'Modal'
        },
        {
          to: '/',
          text: 'Pagination'
        },
        {
          to: '/',
          text: 'Card'
        },
        {
          to: '/',
          text: 'Dropdown'
        }
      ]
    }
  ]
})

// getters
export const getters = {
  main: state => state.main,
  docs: state => state.docs
}
