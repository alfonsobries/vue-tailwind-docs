<template>
  <t-card
    :variant="variant"
    :classes="theme.Card.classes"
    :variants="theme.Card.variants"
  >
    <template slot="header">
      <t-tag
        :variant="variant"
        :classes="theme.Title.classes"
        :variants="theme.Title.variants"
        tag-name="h3"
      >
        Create applications with personality
      </t-tag>
      <t-tag
        :variant="variant"
        :classes="theme.TagLine.classes"
        :variants="theme.TagLine.variants"
        tag-name="p"
      >
        With VueTailwind you can configure how your components with look like from the beggining with as many variants as you need.
      </t-tag>
    </template>

    <template slot="footer">
      <t-button
        :variant="variant"
        :classes="theme.CancelButton.classes"
        :variants="theme.CancelButton.variants"
        @click.prevent
      >
        Do this
      </t-button>
      <t-button
        :variant="variant"
        :classes="theme.ContinueButton.classes"
        :variants="theme.ContinueButton.variants"
        @click.prevent
      >
        Or do this
      </t-button>
    </template>

    <t-input-group
      label="Example themes"
      :classes="theme.Inputgroup.classes"
      :variant="variant"
      :variants="theme.Inputgroup.variants"
    >
      <t-rich-select
        v-model="variant"
        hide-search-box
        :classes="theme.RichSelect.classes"
        :variant="variant"
        :variants="theme.RichSelect.variants"
        clearable
        :options="variants"
        placeholder="Select an example theme"
      />
    </t-input-group>
  </t-card>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      variant: '',
      variants: {
        console: 'Console',
        bootstrap: 'Bootstrap like',
        bulma: 'Bulma like',
        stripe: 'Stripe like',
        material: 'Material like'
      },
      theme: {
        RichSelect: {
          classes: {
            wrapper: 'relative',
            buttonWrapper: 'inline-block w-full relative',
            selectButton: 'w-full border bg-white flex text-left justify-between items-center rounded p-2 focus:outline-none focus:shadow-outline transition transition-all duration-200',
            selectButtonLabel: 'block truncate',
            selectButtonPlaceholder: 'block truncate text-gray-500',
            selectButtonIcon: 'fill-current flex-shrink-0 ml-1 h-4 w-4',
            selectButtonClearButton: 'hover:bg-gray-200 text-gray-500 rounded flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6 transition transition-all duration-200',
            selectButtonClearIcon: 'fill-current h-3 w-3',
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
            selectedIcon: 'fill-current h-4 w-4'
          },
          variants: {
            bootstrap: {
              // wrapper: 'relative',
              // buttonWrapper: 'inline-block w-full relative',
              selectButton: 'w-full border bg-blue-500 border-blue-600 text-white flex text-left justify-between items-center rounded p-2 focus:outline-none transition transition-all duration-200',
              // selectButtonLabel: 'block truncate',
              // selectButtonPlaceholder: 'block truncate text-gray-500',
              // selectButtonIcon: 'fill-current flex-shrink-0 ml-1 h-4 w-4',
              selectButtonClearButton: 'text-white rounded flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6 transition transition-all duration-200',
              // selectButtonClearIcon: 'fill-current h-3 w-3',
              dropdown: 'absolute w-full rounded bg-white border z-10 mt-1',
              // dropdownFeedback: 'p-2 text-sm text-gray-500',
              // loadingMoreResults: 'p-2 text-sm text-gray-500',
              // optionsList: 'overflow-auto',
              // searchWrapper: 'inline-block w-full bg-white p-2',
              // searchBox: 'inline-block w-full p-2 bg-gray-200 text-sm rounded border focus:outline-none focus:shadow-outline',
              // optgroup: 'text-gray-500 uppercase text-xs py-1 px-2 font-semibold',
              // option: '',
              highlightedOption: 'bg-gray-200',
              selectedOption: 'bg-gray-100',
              selectedHighlightedOption: 'bg-gray-200'
              // optionContent: 'flex justify-between p-2 items-center',
              // optionLabel: 'truncate block',
              // selectedIcon: 'fill-current h-4 w-4'
            },
            bulma: {
              // wrapper: 'relative',
              // buttonWrapper: 'inline-block w-full relative',
              selectButton: 'w-full border border-teal-300 bg-white flex text-left justify-between items-center rounded p-2 focus:outline-none focus:shadow-outline transition transition-all duration-200',
              // selectButtonLabel: 'block truncate',
              // selectButtonPlaceholder: 'block truncate text-gray-500',
              // selectButtonIcon: 'fill-current flex-shrink-0 ml-1 h-4 w-4',
              selectButtonClearButton: 'text-white rounded flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6 text-teal-500 rounded-full bg-teal-200 transition transition-all duration-200',
              // selectButtonClearIcon: 'fill-current h-3 w-3',
              dropdown: 'absolute w-full rounded bg-white border z-10 mt-1 ',
              // dropdownFeedback: 'p-2 text-sm text-gray-500',
              // loadingMoreResults: 'p-2 text-sm text-gray-500',
              // optionsList: 'overflow-auto',
              // searchWrapper: 'inline-block w-full bg-white p-2',
              // searchBox: 'inline-block w-full p-2 bg-gray-200 text-sm rounded border focus:outline-none focus:shadow-outline',
              // optgroup: 'text-gray-500 uppercase text-xs py-1 px-2 font-semibold',
              // option: '',
              highlightedOption: 'bg-teal-200',
              selectedOption: 'bg-teal-100',
              selectedHighlightedOption: 'bg-teal-200'
              // optionContent: 'flex justify-between p-2 items-center',
              // optionLabel: 'truncate block',
              // selectedIcon: 'fill-current h-4 w-4'
            },
            stripe: {
              // wrapper: 'relative',
              // buttonWrapper: 'inline-block w-full relative',
              selectButton: 'w-full bg-gray-200 bg-white flex text-left justify-between items-center rounded p-2 focus:outline-none focus:shadow-outline transition transition-all duration-200',
              // selectButtonLabel: 'block truncate',
              // selectButtonPlaceholder: 'block truncate text-gray-500',
              // selectButtonIcon: 'fill-current flex-shrink-0 ml-1 h-4 w-4',
              selectButtonClearButton: 'text-white rounded flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6 text-indigo-500 rounded-full hover:bg-indigo-500 hover:text-white transition transition-all duration-200',
              // selectButtonClearIcon: 'fill-current h-3 w-3',
              dropdown: 'absolute w-full rounded-lg bg-white z-10 mt-2 shadow-2xl overflow-hidden',
              // dropdownFeedback: 'p-2 text-sm text-gray-500',
              // loadingMoreResults: 'p-2 text-sm text-gray-500',
              // optionsList: 'overflow-auto',
              // searchWrapper: 'inline-block w-full bg-white p-2',
              // searchBox: 'inline-block w-full p-2 bg-gray-200 text-sm rounded border focus:outline-none focus:shadow-outline',
              // optgroup: 'text-gray-500 uppercase text-xs py-1 px-2 font-semibold',
              option: 'text-sm',
              highlightedOption: 'bg-indigo-500 text-white text-sm',
              selectedOption: 'bg-indigo-100 text-sm',
              selectedHighlightedOption: 'bg-indigo-500 text-white text-sm'
              // optionContent: 'flex justify-between p-2 items-center',
              // optionLabel: 'truncate block',
              // selectedIcon: 'fill-current h-4 w-4'
            },
            material: {
              wrapper: 'relative',
              buttonWrapper: 'inline-block w-full relative',
              selectButton: 'bg-gray-200 border border-b border-gray-700 border-l-0 border-r-0 border-t-0 duration-200 flex focus:outline-none focus:shadow-outline items-center justify-between p-3 rounded-t-md text-gray-700 text-left transition transition-all w-full',
              // selectButtonLabel: 'block truncate',
              // selectButtonPlaceholder: 'block truncate text-gray-500',
              selectButtonIcon: 'fill-current flex-shrink-0 ml-1 h-4 w-4',
              selectButtonClearButton: 'text-gray-700 hover:text-gray-800 rounded flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-3 h-6 w-6 transition transition-all duration-200',
              selectButtonClearIcon: 'fill-current h-4 w-4',
              dropdown: 'absolute w-full rounded bg-white shadow-md z-10',
              // dropdownFeedback: 'p-2 text-sm text-gray-500',
              // loadingMoreResults: 'p-2 text-sm text-gray-500',
              // optionsList: 'overflow-auto',
              // searchWrapper: 'inline-block w-full bg-white p-2',
              // searchBox: 'inline-block w-full p-2 bg-gray-200 text-sm rounded border focus:outline-none focus:shadow-outline',
              // optgroup: 'text-gray-500 uppercase text-xs py-1 px-2 font-semibold',
              option: 'text-sm font-semibold',
              highlightedOption: 'text-sm font-semibold bg-gray-200',
              selectedOption: 'text-sm font-semibold bg-blue-200 text-blue-600',
              selectedHighlightedOption: 'text-sm font-semibold bg-blue-200',
              optionContent: 'flex justify-between p-3 items-center',
              // optionLabel: 'truncate block',
              selectedIcon: 'hidden'
            },
            console: {
              wrapper: 'relative',
              buttonWrapper: 'inline-block w-full relative',
              selectButton: 'w-full border-2 border-dashed flex text-left justify-between items-center p-2 focus:outline-none transition transition-all duration-200',
              selectButtonLabel: 'block truncate',
              selectButtonPlaceholder: 'block truncate text-white',
              selectButtonIcon: 'fill-current flex-shrink-0 ml-1 h-4 w-4',
              selectButtonClearButton: 'text-white flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6 transition transition-all duration-200',
              selectButtonClearIcon: 'fill-current h-3 w-3',
              dropdown: 'absolute w-full rounded bg-black border-2 border-dashed border-white z-10 mt-2',
              dropdownFeedback: 'p-2 text-sm ',
              loadingMoreResults: 'p-2 text-sm ',
              optionsList: 'overflow-auto',
              searchWrapper: 'inline-block w-full bg-white p-2',
              searchBox: 'inline-block w-full p-2 bg-gray-200 text-sm rounded border focus:outline-none focus:shadow-outline',
              optgroup: ' uppercase text-xs py-1 px-2 font-semibold',
              option: 'border-t-2 border-b-2 border-transparent',
              highlightedOption: 'border-t-2 border-b-2 border-dashed border-white',
              selectedOption: 'border-t-2 border-b-2 border-transparent',
              selectedHighlightedOption: 'border-t-2 border-b-2 border-dashed border-white',
              optionContent: 'flex justify-between p-2 items-center',
              optionLabel: 'truncate block',
              selectedIcon: 'fill-current h-4 w-4'
            }
          }
        },
        Inputgroup: {
          classes: {
            wrapper: '',
            label: 'block uppercase tracking-wide text-xs font-bold mb-1 transition transition-all duration-200 text-gray-700',
            body: '',
            feedback: 'text-sm text-gray-500',
            description: 'text-sm text-gray-500'
          },
          variants: {
            bootstrap: {
              wrapper: '',
              label: 'mb-1 block text-gray-900 transition transition-all duration-200'
            },
            bulma: {
              wrapper: '',
              label: 'font-semibold mb-1 block text-gray-900 transition transition-all duration-200'
            },
            stripe: {
              wrapper: '',
              label: 'font-medium mb-1 block text-gray-900 text-sm transition transition-all duration-200'
            },
            material: {
              wrapper: '',
              label: 'font-medium block text-gray-700 text-xs transition transition-all duration-200'
            },
            console: {
              wrapper: '',
              label: 'block mb-3 uppercase transition transition-all duration-200'
            }
          }
        },
        Card: {
          classes: {
            wrapper: 'rounded-lg bg-white shadow-lg w-full transition transition-all duration-200',
            body: 'p-4',
            header: 'pt-4 px-4',
            footer: 'p-4 bg-gray-100 border-t transition transition-all duration-200 flex justify-end'
          },
          variants: {
            bootstrap: {
              wrapper: 'rounded bg-white border w-full transition transition-all duration-200',
              body: 'p-4',
              header: 'pt-4 px-4',
              footer: 'p-4 transition transition-all duration-200 flex justify-end'
            },
            bulma: {
              wrapper: 'bg-white border w-full shadow-lg transition transition-all duration-200',
              body: 'p-4',
              header: 'pt-4 px-4',
              footer: 'transition transition-all duration-200 flex'
            },
            stripe: {
              wrapper: 'rounded-lg bg-white shadow-xl w-full transition transition-all duration-200',
              body: 'p-4',
              header: 'pt-4 px-4',
              footer: 'p-4 transition transition-all duration-200 flex justify-end'
            },
            material: {
              wrapper: 'rounded-md bg-white shadow-md w-full transition transition-all duration-200',
              body: 'p-4',
              header: 'pt-4 px-4',
              footer: 'p-4 transition transition-all duration-200 flex justify-start'
            },
            console: {
              wrapper: 'bg-black border-2 border-dashed border-white duration-200 font-mono rounded-sm shadow-lg shadow-xl text-white transform transition transition-all w-full',
              body: 'p-4',
              header: 'pt-4 px-4',
              footer: 'p-4 pt-0 transition transition-all duration-200 flex justify-start'
            }
          }
        },
        CancelButton: {
          classes: 'px-5 py-2 rounded-lg hover:underline text-gray-500 transition transition-all duration-200',
          variants: {
            bootstrap: 'py-2 px-3 text-blue-500 hover:underline transition transition-all duration-200',
            bulma: 'border-t text-teal-400 hover:text-teal-900 w-1/2 p-4 transition transition-all duration-200',
            material: 'mr-4 font-medium bg-white hover:bg-blue-100 text-blue-500 px-4 py-2 relative rounded text-sm uppercase transition transition-all duration-200',
            console: 'border-b-2 px-2 border-dashed border-transparent duration-200 hover:border-white py-1 relative transition transition-all uppercase focus:outline-none'
          }
        },
        ContinueButton: {
          classes: 'px-5 py-2 rounded-lg ml-3 bg-orange-500 hover:bg-orange-600 text-white transition transition-all duration-200',
          variants: {
            bootstrap: 'py-2 px-3 rounded ml-3 bg-blue-500 hover:bg-blue-600 text-white transition transition-all duration-200',
            bulma: 'border-l border-t text-teal-400 hover:text-teal-900  w-1/2 p-3 transition transition-all duration-200',
            stripe: 'ml-4 font-medium bg-indigo-500 hover:-translate-y-1 hover:opacity-75 hover:shadow-lg px-4 py-2 relative rounded rounded-md shadow-md text-sm text-white uppercase transition transition-all duration-200',
            material: 'mr-4 font-medium bg-white hover:bg-gray-100 text-gray-900 px-4 py-2 relative rounded text-sm uppercase transition transition-all duration-200',
            console: 'border-b-2 px-2 border-dashed border-transparent duration-200 hover:border-white ml-8 py-1 relative transition transition-all uppercase focus:outline-none'
          }
        },
        Title: {
          classes: 'font-medium leading-7 mb-3 text-2xl text-gray-900',
          variants: {
            bootstrap: 'text-2xl leading-7 font-medium text-gray-900 mb-2',
            bulma: 'text-2xl leading-7 font-medium text-gray-900 mb-2',
            stripe: 'text-lg leading-5 font-medium text-indigo-500 mb-2 uppercase',
            material: 'text-2xl leading-7 text-gray-900 mb-2',
            console: 'uppercase mb-4'
          }
        },
        TagLine: {
          classes: 'text-sm text-gray-700 leading-5',
          variants: {
            bootstrap: 'text-gray-900 leading-6',
            bulma: 'text-gray-900 leading-6',
            stripe: 'text-gray-700 text-sm leading-5',
            material: 'text-gray-600 text-sm leading-5',
            console: ''
          }
        }
      }
    }
  }
})
</script>
