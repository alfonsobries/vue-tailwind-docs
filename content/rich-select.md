---
title: TailwindCSS Rich Select Vue Component
description: VueJs reactive rich select component inspired in jquery select2 with configurable classes, variants, and most common events. Friendly with utility-first frameworks like TailwindCSS.
---

# Rich Select Box (TrichSelect)

VueJs reactive rich select component inspired in jquery select2 with configurable classes, variants, and most common events. Friendly with utility-first frameworks like TailwindCSS.

<t-radio-playground></t-radio-playground>

<hr>

## Props

| Property                | Type                 | Default value               | Description                                                                                              |
| ----------------------- | -------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------- |
| id                      | `String`             | `undefined`                 | id attribute of the button used as the options toggler                                                   |
| disabled                | `Boolean`            | `undefined`                 | disabled attribute of the button used as the options toggler                                             |
| name                    | `String`             | `undefined`                 | name attribute of the button used as the options toggler                                                 |
| readonly                | `Boolean`            | `undefined`                 | readonly attribute of the button used as the options toggler                                             |
| autofocus               | `Boolean`            | `undefined`                 | autofocus attribute of the button used as the options toggler                                            |
| required                | `Boolean`            | `undefined`                 | required attribute of the button used as the options toggler                                             |
| tabindex                | `[String, Number]`   | `undefined`                 | tabindex attribute of the button used as the options toggler                                             |
| options                 | `[Array, Object]`    | `[]`                        | The initial list of options in any of the valid formats accepted                                         |
| valueAttribute          | `String`             | `undefined`                 | Attribute from the options that should be used as the value of the selected option, accepts dot dotation |
| textAttribute           | `String`             | `undefined`                 | Attribute from the options that should be used as the text of the selected option, accepts dot dotation  |
| delay                   | `Number`             | `250`                       | Time in milliseconds between after performs a search when fetching results from custom function          |
| fetchOptions            | `Function`           | `undefined`                 | Method for fetching the options, receives the `query` as string and the `nextPage` if apply              |
| minimumInputLength      | `Number`             | `undefined`                 | Minimum length of the search query to start filtering the results                                        |
| minimumInputLengthText  | `[Function, String]` | * (see below)               | The text that is shown before the user reaches the min length for trigger a query (if set)               |
| minimumResultsForSearch | `Number`             | `undefined`                 | If set, The minimum length of the options list needed to show the search box                             |
| value (v-model)         | `[String, Number]`   | `null`                      | The current value of the component                                                                       |
| hideSearchBox           | `Boolean`            | `false`                     | If set will not show a search box                                                                        |
| openOnFocus             | `Boolean`            | `true`                      | If set will open the dropdown when the component is focused                                              |
| closeOnSelect           | `Boolean`            | `true`                      | If set will close the dropdown once an option is selected                                                |
| selectOnClose           | `Boolean`            | `false`                     | If set will select the highligted option when the dropdown is closed                                     |
| clearable               | `Boolean`            | `false`                     | If set will show a close button to clear the value of the input                                          |
| placeholder             | `String`             | `undefined`                 | Text that is being shown while no option selected                                                        |
| searchBoxPlaceholder    | `String`             | `'Search...'`               | Text that is being shown in the search box while empty                                                   |
| noResultsText           | `String`             | `'No results found'`        | Text that is being shown when the search query doesn't return any result                                 |
| searchingText           | `String`             | `'Searching...'`            | Text that is being shown while the input is querying the results                                         |
| loadingMoreResultsText  | `String`             | `'Loading more results...'` | Text that is being shown when the search box is loading more paginated results                           |
| maxHeight               | `[String, Number]`   | `300`                       | Max height of the dropdown parsed as px, also accepts the height as string in any valid units            |
| classes                 | `Object`             | `{...}`  (see below)        | The default CSS classes                                                                                  |
| fixedClasses            | `Object`             | `{...}`  (see below)        | The default CSS Fixed classes shared for all variants                                                    |
| variants                | `Object`             | `undefined`                 | The different variants of classes the component have                                                     |
| variant                 | `[String, Object]`   | `undefined`                 | The variant that should be used                                                                          |

<small>* The minimumInputLengthText accepts an `string` or a `Function` that receive the min input length and the current query and should return an string, example: `(minimumInputLength: number, _query?: string) => 'Please enter' + minimumInputLength +'  or more characters'`</small>

## Classes and variants format

This component expects an object with classes named after every child element.

The properties in that object are the following:

| Property                  | Description                                                      |
| ------------------------- | ---------------------------------------------------------------- |
| wrapper                   | Div that wraps the whole component                               |
| buttonWrapper             | Div that wraps the button that is used as the input              |
| selectButton              | Button that is used as the input                                 |
| selectButtonLabel         | Div inside the button that holds the text of the selected option |
| selectButtonPlaceholder   | Div that contains the placeholder when no value selected         |
| selectButtonIcon          | Icon with the chevron inside the button                          |
| selectButtonClearButton   | Button for clear the selected value                              |
| selectButtonClearIcon     | Cross icon inside the clear button                               |
| dropdown                  | Dropdown wrapper                                                 |
| dropdownFeedback          | Searching, min input length, and no results text                 |
| loadingMoreResults        | Loading more results text in paginated search                    |
| optionsList               | The list of options                                              |
| searchWrapper             | Div that wraps the search box                                    |
| searchBox                 | The search box input                                             |
| optgroup                  | The div that wraps an optgroup                                   |
| option                    | The default option item                                          |
| highlightedOption         | The option item when its highlighted                             |
| selectedOption            | The option item when it's selected                               |
| selectedHighlightedOption | The option item when its selected & highlighted                  |
| optionContent             | Div that wraps the option text                                   |
| optionLabel               | The option text                                                  |
| selectedIcon              | The option checkmark icon                                        |
| enterClass                | Vue Custom Transition Class for the options dropdown             |
| enterActiveClass          | Vue Custom Transition Class for the options dropdown             |
| enterToClass              | Vue Custom Transition Class for the options dropdown             |
| leaveClass                | Vue Custom Transition Class for the options dropdown             |
| leaveActiveClass          | Vue Custom Transition Class for the options dropdown             |
| leaveToClass              | Vue Custom Transition Class for the options dropdown             |


### Default fixed classes

As you may know, the fixed classes are shared and merged with the different variants and default classes. The classes we define here as default are the ones that you usually will need to make this component works correctly so you can only focus on colors, typography, etc when creating your theme.

```js
{
  wrapper: 'relative',
  buttonWrapper: 'inline-block relative w-full',
  selectButton: 'w-full flex text-left justify-between items-center',
  selectButtonLabel: 'block truncate',
  selectButtonPlaceholder: 'block truncate',
  selectButtonIcon: 'fill-current flex-shrink-0 ml-1 h-4 w-4',
  selectButtonClearButton: 'flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6',
  selectButtonClearIcon: 'fill-current h-3 w-3',
  dropdown: 'absolute w-full z-10',
  dropdownFeedback: '',
  loadingMoreResults: '',
  optionsList: 'overflow-auto',
  searchWrapper: 'inline-block w-full',
  searchBox: 'inline-block w-full',
  optgroup: '',
  option: '',
  highlightedOption: '',
  selectedOption: '',
  selectedHighlightedOption: '',
  optionContent: '',
  optionLabel: 'truncate block',
  selectedIcon: 'fill-current h-4 w-4',
  enterClass: '',
  enterActiveClass: '',
  enterToClass: '',
  leaveClass: '',
  leaveActiveClass: '',
  leaveToClass: '',
};
```

### Default classes

```js
{
  wrapper: '',
  buttonWrapper: '',
  selectButton: 'border bg-white rounded p-2 focus:outline-none focus:shadow-outline',
  selectButtonLabel: '',
  selectButtonPlaceholder: 'text-gray-500',
  selectButtonIcon: '',
  selectButtonClearButton: 'hover:bg-gray-200 text-gray-500 rounded',
  selectButtonClearIcon: '',
  dropdown: 'rounded bg-white shadow',
  dropdownFeedback: 'text-sm text-gray-500',
  loadingMoreResults: 'text-sm text-gray-500',
  optionsList: '',
  searchWrapper: 'bg-white p-2',
  searchBox: 'p-2 bg-gray-200 text-sm rounded border focus:outline-none focus:shadow-outline',
  optgroup: 'text-gray-500 uppercase text-xs py-1 px-2 font-semibold',
  option: '',
  highlightedOption: 'bg-gray-300',
  selectedOption: 'font-semibold bg-gray-100',
  selectedHighlightedOption: 'bg-gray-300 font-semibold',
  optionContent: 'flex justify-between items-center p-2 cursor-pointer',
  optionLabel: 'truncate block',
  selectedIcon: '',
  enterClass: '',
  enterActiveClass: 'opacity-0 transition ease-out duration-100',
  enterToClass: 'opacity-100',
  leaveClass: 'transition ease-in opacity-100',
  leaveActiveClass: '',
  leaveToClass: 'opacity-0 duration-75',
}
```

### Theme Example

```js
{
  // Remember that these classes are merged with the fixed classes
  classes: {
    wrapper: '',
    buttonWrapper: '',
    selectButton: 'border bg-white rounded p-2 focus:outline-none focus:shadow-outline',
    selectButtonLabel: '',
    selectButtonPlaceholder: 'text-gray-500',
    selectButtonIcon: '',
    selectButtonClearButton: 'hover:bg-gray-200 text-gray-500 rounded',
    selectButtonClearIcon: '',
    dropdown: 'rounded bg-white shadow',
    dropdownFeedback: 'text-sm text-gray-500',
    loadingMoreResults: 'text-sm text-gray-500',
    optionsList: '',
    searchWrapper: 'bg-white p-2',
    searchBox: 'p-2 bg-gray-200 text-sm rounded border focus:outline-none focus:shadow-outline',
    optgroup: 'text-gray-500 uppercase text-xs py-1 px-2 font-semibold',
    option: '',
    highlightedOption: 'bg-gray-300',
    selectedOption: 'font-semibold bg-gray-100',
    selectedHighlightedOption: 'bg-gray-300 font-semibold',
    optionContent: 'flex justify-between items-center p-2 cursor-pointer',
    optionLabel: 'truncate block',
    selectedIcon: '',
    enterClass: '',
    enterActiveClass: 'opacity-0 transition ease-out duration-100',
    enterToClass: 'opacity-100',
    leaveClass: 'transition ease-in opacity-100',
    leaveActiveClass: '',
    leaveToClass: 'opacity-0 duration-75',
  },
  variants: {
    danger: {
      // As explained in the "Theming" sections we only add the classes we want to override
      selectButton: 'border border-red-500 text-red-500 bg-red-100 rounded p-2 focus:outline-none focus:shadow-outline',
      selectButtonPlaceholder: 'text-red-400',
      selectButtonClearButton: 'hover:bg-red-200 text-red-500 rounded',
    },
    //... More variants
  }
}
```

## Options format

This component accepts the `options` in the same format as the `TSelect` component. See [TSelect options format](/docs/select#options-format) for more info.

## Events

| Event       | Arguments                                | Description                                                                       |
| ----------- | ---------------------------------------- | --------------------------------------------------------------------------------- |
| input       | String (The current value of the select) | Emitted every time the value of the `v-model` change                              |
| change      | String (The current value of the select) | Emitted when the select is blurred and the value was changed since it was focused |
| focus       | FocusEvent                               | Emitted when the select is focused                                                |
| blur        | FocusEvent                               | Emitted when the select is blurred                                                |
| fetch-error | Error                                    | Emitted when the `fetchOptions` function returns an error                         |
| click       | MouseEvent                               | When the button uses as input is clicked                                          |

## Scoped slots

| Slot                   | Description                                             |
| ---------------------- | ------------------------------------------------------- |
| label                  | Selected option label inside the button                 |
| option                 | Option content inside the list of options               |
| searchingText          | To place instead of the default searching text feedback |
| noResults              | To place instead of the no results text feedback        |
| loadingMoreResultsText | To place instead of the loading more results text       |
| dropdownUp             | To place content above the list of options              |
| dropdownDown           | To place content below the list of options              |

### Label slot

Allows you to change the template of the label, it contains the following data:

| Slot      | type   | Description                                                                                                                                |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| query     | String | The current search query                                                                                                                   |
| option    | Object | And object with the `text` and `value` attribute together with a `raw` attribute that contains the original option value before normalized |
| className | String | The selectedButtonLabel class in case you can to re-apply it                                                                               |

#### Example: 

Consider that the options come from an ajax query that contains a `repo` object with info of a GitHub repository

```vue
<template>
  <t-rich-select
    :fetch-options="fetchOptions"
    placeholder="select an option"
    value-attribute="full_name"
    text-attribute="full_name"
    :minimum-input-length="1"
  >
    <template
      slot="label"
      slot-scope="{ className, option, query }"
    >
      <div class="flex">
        <span class="flex-shrink-0">
          <img
            class="w-10 h-10 rounded-full"
            :src="option.raw.owner.avatar_url"
          >
        </span>
        <div class="ml-2 flex flex-col text-gray-800">
          <strong>{{ option.raw.full_name }}</strong>
          <span class="text-sm text-gray-700 leading-tight">{{ option.raw.description }}</span>
        </div>
      </div>
    </template>
  </t-rich-select>
</template>

<script>
export default {
  methods: {
    fetchOptions (q) {
      return fetch(`https://api.github.com/search/repositories?q=${q}&type=public`)
        .then((response) => response.json())
        .then((data) => ({ results: data.items }))
    }
  }
}
</script>
```

The example above will look like this: (search and select a repository):

<rich-select-label-slot-example></rich-select-label-slot-example>


### Option slot

Allows you to replace the option content inside the list of options

| Slot          | type    | Description                                                                                                                                |
| ------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| index         | Number  | The index of the option                                                                                                                    |
| isHighlighted | Boolean | If the option is highlighted                                                                                                               |
| isSelected    | Boolean | If the option is selected                                                                                                                  |
| option        | Object  | And object with the `text` and `value` attribute together with a `raw` attribute that contains the original option value before normalized |
| query         | String  | The current search query                                                                                                                   |
| className     | String  | The optionContent class in case you can to re-apply it                                                                                     |

#### Example: 

Consider that the options come from an ajax query that contains a `repo` object with info of a GitHub repository

```html
<template>
  <t-rich-select
    :fetch-options="fetchOptions"
    placeholder="select an option"
    value-attribute="full_name"
    text-attribute="full_name"
    :minimum-input-length="1"
  >
    <template
      slot="option"
      slot-scope="{ index, isHighlighted, isSelected, className, option, query }"
    >
      <div :class="className">
        <span class="flex-shrink-0">
          <img
            class="w-10 h-10 rounded-full"
            :src="option.raw.owner.avatar_url"
          >
        </span>
        <div class="ml-2 flex flex-col text-gray-800">
          <strong>
            {{ option.raw.full_name }}
            <span v-if="isSelected">(Selected)</span>
          </strong>
          <span class="text-sm text-gray-700 leading-tight">{{ option.raw.description }}</span>
        </div>
      </div>
    </template>
  </t-rich-select>
</template>

<script>
export default {
  methods: {
    fetchOptions (q) {
      return fetch(`https://api.github.com/search/repositories?q=${q}&type=public`)
        .then((response) => response.json())
        .then((data) => ({ results: data.items }))
    }
  }
}
</script>
```

The example above will look like this: (search for a repository):

<rich-select-option-slot-example></rich-select-option-slot-example>


### searchingText slot

Allows you to replace the "searching" text feedback

| Slot      | type   | Description                                               |
| --------- | ------ | --------------------------------------------------------- |
| query     | String | The current search query                                  |
| text      | String | The original searching text                               |
| className | String | The dropdownFeedback class in case you can to re-apply it |

#### Example: 

```html
<t-rich-select>
  <template
    slot="searchingText"
    slot-scope="{ query, text, className }"
  >
    <div :class="className">Please hold on we are looking for options with the query "{{ query }}".</div>
  </template>
</t-rich-select>
```

### noResults slot

Allows you to replace the "no results" text feedback

| Slot      | type   | Description                                               |
| --------- | ------ | --------------------------------------------------------- |
| query     | String | The current search query                                  |
| text      | String | The original searching text                               |
| className | String | The dropdownFeedback class in case you can to re-apply it |

#### Example: 

```html
<t-rich-select>
  <template
    slot="noResults"
    slot-scope="{ query, text, className }"
  >
    <div :class="className">Sorry your "{{ query }}" didnt return any value</div>
  </template>
</t-rich-select>
```
### loadingMoreResultsText slot

Allows you to replace the "loading more results" text feedback below the options

| Slot      | type             | Description                                               |
| --------- | ---------------- | --------------------------------------------------------- |
| query     | String           | The current search query                                  |
| text      | String           | The original searching text                               |
| className | String           | The dropdownFeedback class in case you can to re-apply it |
| nextPage  | Number,undefined | The next page to be loaded                                |

#### Example: 

```html
<t-rich-select>
  <template
    slot="noResults"
    slot-scope="{ query, text, className }"
  >
    <div :class="className">Sorry your "{{ query }}" didnt return any value</div>
  </template>
</t-rich-select>
```

### dropdownUp slot

Allows you to place content above the list of options

| Slot           | type   | Description                                                                                                                                |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| query          | String | The current search query                                                                                                                   |
| selectedOption | Object | And object with the `text` and `value` attribute together with a `raw` attribute that contains the original option value before normalized |
| options        | Array  | The full list of options (filtered)                                                                                                        |

#### Example: 

Consider that the options come from an ajax query that contains a `repo` object with info of a GitHub repository

```html
<t-rich-select>
  <template
    slot="dropdownUp"
    slot-scope="{ query, selectedOption, options }"
  >
    <div>You have {{ options.length }} options</div>
  </template>
</t-rich-select>
```

### dropdownDown slot

Allows you to place content below the list of options

| Slot           | type   | Description                                                                                                                                |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| query          | String | The current search query                                                                                                                   |
| selectedOption | Object | And object with the `text` and `value` attribute together with a `raw` attribute that contains the original option value before normalized |
| options        | Array  | The full list of options (filtered)                                                                                                        |

#### Example: 

Useful for place an action button, consider this example for dinamically create an option:

```vue
<template>
  <t-rich-select
    v-model="selected"
    :options="options"
  >
    <template
      slot="dropdownDown"
      slot-scope="{ query, selectedOption, options }"
    >
      <div
        v-if="query"
        class="text-center"
      >
        <button
          type="button"
          class="block p-3 w-full border bg-blue-500 hover:bg-blue-600 text-white"
          @click="createOption(query)"
        >
          Create {{ query }}
        </button>
      </div>
    </template>
  </t-rich-select>
</template>

<script>
export default {
  data () {
    return {
      selected: null,
      options: ['Option 1', 'Option 2']
    }
  },
  methods: {
    createOption (text) {
      this.options.push(text)
      this.selected = text
    }
  }
}
</script>


```

The example above will look like this: (search for an option)

<rich-select-create-option-example></rich-select-create-option-example>
