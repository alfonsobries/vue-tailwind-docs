export const state = () => ({
  main: [
    {
      to: '/docs/installation',
      text: 'Docs'
    },
    {
      to: '/theme-builder',
      text: 'Theme Builder'
    },
    // {
    //   to: '/community-themes',
    //   text: 'Community Themes'
    // },
    {
      to: '/contribute',
      text: 'Contribute'
    }
  ],
  docs: [
    {
      id: 'getting-started',
      text: 'Getting started',
      items: [
        {
          to: '/docs/installation',
          text: 'Installation'
        },
        {
          to: '/docs/release-notes',
          text: 'Release Notes'
        },
        {
          to: '/docs/upcoming-changes',
          text: 'Upcoming changes',
          updated: '2020-09-08'
        },
        {
          to: '/docs/theming',
          text: 'Theming'
        },
        {
          to: '/docs/settings',
          text: 'Override settings',
          since: '1.2.0'
        },
        {
          to: '/docs/workflow',
          text: 'Workflow'
        }
      ]
    },
    {
      id: 'form-elements',
      text: 'Form elements',
      items: [
        {
          to: '/docs/text-input',
          text: 'Text Input'
        },
        {
          to: '/docs/textarea',
          text: 'Textarea'
        },
        {
          to: '/docs/select',
          text: 'Select'
        },
        {
          to: '/docs/radio',
          text: 'Radio'
        },
        {
          to: '/docs/button',
          text: 'Button'
        },
        {
          to: '/docs/checkbox',
          text: 'Checkbox'
        }
      ]
    },
    {
      id: 'form-components',
      text: 'Form Components',
      items: [
        {
          to: '/docs/rich-select',
          text: 'Rich Select'
        },
        {
          to: '/docs/datepicker',
          text: 'Datepicker',
          since: '1.2.0'
        },
        {
          to: '/docs/checkbox-group',
          text: 'Checkbox group'
        },
        {
          to: '/docs/radio-group',
          text: 'Radio group'
        },
        {
          to: '/docs/input-group',
          text: 'Input group'
        },
        {
          to: '/docs/toggle',
          text: 'Toggle',
          since: '1.1.0'
        }
      ]
    },
    {
      id: 'components',
      text: 'Components',
      items: [
        {
          to: '/docs/tag',
          text: 'Tag'
        },
        {
          to: '/docs/alert',
          text: 'Alert'
        },
        {
          to: '/docs/table',
          text: 'Table'
        },
        {
          to: '/docs/modal',
          text: 'Modal'
        },
        {
          to: '/docs/dialog',
          text: 'Dialog',
          since: '1.3.0'
        },
        {
          to: '/docs/pagination',
          text: 'Pagination'
        },
        {
          to: '/docs/card',
          text: 'Card'
        },
        {
          to: '/docs/dropdown',
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
