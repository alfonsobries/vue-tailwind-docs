---
title: Datepicker Component
description: VueJs reactive date-time picker component with multiple features, configurable classes, and variants. Friendly with utility-first frameworks like TailwindCSS.
---

# Date picker (TDatePicker)

VueJs reactive date-time picker component with multiple features, configurable classes and variants, and most common events. Friendly with utility-first frameworks like TailwindCSS.

<datepicker-example></datepicker-example>

Code for the example above: 

```html
<t-datepicker
  v-model="date"
  placeholder="Select a date"
  date-format="Y-m-d"
  user-format="m/d/Y"
/>
```

<hr>


## Props

| Property              | Type                              | Default value | Description                                                                                                          |
| --------------------- | --------------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------- |
| id                    | `String`                          | `undefined`   | id attribute of the text input that shows the user friendly date                                                     |
| disabled              | `Boolean`                         | `undefined`   | disabled attribute of the text input that shows the user friendly date                                               |
| name                  | `String`                          | `undefined`   | name attribute of the `hidden` input that contains the formatted                                                     |
| readonly              | `Boolean`                         | `undefined`   | readonly attribute of the text input that shows the user friendly date                                               |
| autofocus             | `Boolean`                         | `undefined`   | autofocus attribute of the text input that shows the user friendly date                                              |
| required              | `Boolean`                         | `undefined`   | required attribute of the text input that shows the user friendly date                                               |
| tabindex              | `[String, Number]`                | `undefined`   | tabindex attribute of the text input that shows the user friendly date                                               |
| value (v-model)       | `[Date, String, Number, Array]`   | `null`        | The current value of the component                                                                                   |
| placeholder           | `String`                          | `undefined`   | Placeholder for the text input that contains the user friendly date                                                  |
| inputName             | `String`                          | `undefined`   | Name attribute for the text input that contains the user friendly date, the `name` prop is used for the hidden input |
| weekStart             | `Number`                          | `0`           | First day of the week show in the calendar, `0` = Sunday                                                             |
| monthsPerView         | `Number`                          | `1`           | How many months calendar show per view                                                                               |
| lang                  | `String`                          | `en`          | Default language used in the component                                                                               |
| locale                | `Object`                          | `{...}`       | Object that define the localization   (see [Localization](#localization))                                            |
| locales               | `Object`                          | `{}`          | Object with the different languages objects available     (see [Formatting tokens](#formatting))                     |
| dateFormat            | `String`                          | `'Y-m-d'`     | Formatted date added to the hidden input and to the `v-model` value                                                  |
| userFormat            | `String`                          | `'F j, Y'`    | User friendly format that is shown in the text input                                                                 |
| dateFormatter         | `Function`                        | `undefined`   | Allows you to override the default date formatter function (see [Custom date formatter](#custom-date-formatter))     |
| dateParser            | `Function`                        | `undefined`   | Allows you to override the default date parser function (see [Custom date parser](#custom-date-parser))              |
| closeOnSelect         | `Boolean`                         | `true`        | If set will close the date picker when a date is selected                                                            |
| showDaysForOtherMonth | `Boolean`                         | `true`        | If set will show the days for the prev/next button in the current calendar view                                      |
| show                  | `Boolean`                         | `false`       | If set will show the datepicker open when the component is loaded                                                    |
| inline                | `Boolean`                         | `false`       | If set will show the datepicker open as a block                                                                      |
| initialView           | `String`                          | `'day'`       | Initial view of the calendar (other options `'month'`, `'year'` )                                                    |
| yearsPerView          | `Number`                          | `12`          | How many years will show in the `year` view                                                                          |
| disabledDates         | `[Date, Array, Function, String]` | `undefined`   | Disable a single date, a group or dates or based in a function (see [Disable dates](#disable-dates))                 |
| highlightDates        | `[Date, Array, Function, String]` | `undefined`   | Highlight a single date, a group or dates or based in a function (see [Highlight dates](#highlight-dates))           |
| maxDate               | `[Date, String]`                  | `undefined`   | Max allowed date                                                                                                     |
| minDate               | `[Date, String]`                  | `undefined`   | Min allowed date                                                                                                     |
| initialDate           | `[Date, String]`                  | `undefined`   | Initial active date                                                                                                  |
| conjuntion            | `String`                          | `','`         | When multiple dates or range used to join the dates values                                                           |
| multiple              | `Boolean`                         | `false`       | When set it will allow to select multiple dates (see [Multiple dates](#range))                                       |
| range                 | `Boolean`                         | `false`       | When set it will expect a range of dates to be selected (see [Range](#range))                                        |
| clearable             | `Boolean`                         | `true`        | If set will allow you to clear the date value                                                                        |
 


## Classes and variants format

This component expects an object with classes named after every child element.

The properties in that object are the following:

| Property                                    | Description                                                             |
| ------------------------------------------- | ----------------------------------------------------------------------- |
| wrapper                                     | Wrapper for the component                                               |
| inlineWrapper                               | Wrapper for the component when uses is inline                           |
| <strong>Dropdown related classes</strong>   |
| dropdownWrapper                             | Dropdown wrapper                                                        |
| dropdown                                    | Dropdown                                                                |
| enterClass                                  | Transition class                                                        |
| enterActiveClass                            | Transition class                                                        |
| enterToClass                                | Transition class                                                        |
| leaveClass                                  | Transition class                                                        |
| leaveActiveClass                            | Transition class                                                        |
| leaveToClass                                | Transition class                                                        |
| <strong>Text input related classes</strong> |                                                                         |
| inputWrapper                                | Input wrapper                                                           |
| input                                       | Text input                                                              |
| clearButton                                 | Clear butotn                                                            |
| clearButtonIcon                             | Claer button icon                                                       |
| <strong>Picker views</strong>               |                                                                         |
| viewGroup                                   | Groups all the views, for example when shows multiple months            |
| view                                        | A single view of the calendar                                           |
| <strong>Navigator</strong>                  |                                                                         |
| navigator                                   | Date navigator wrapper                                                  |
| navigatorViewButton                         | View toggler button                                                     |
| navigatorViewButtonIcon                     | View toggler button icon                                                |
| navigatorViewButtonBackIcon                 | View toggler button back icon                                           |
| navigatorViewButtonMonth                    | View toggler month text                                                 |
| navigatorViewButtonYear                     | View toggler year text                                                  |
| navigatorViewButtonYearRange                | View toggler year range text                                            |
| navigatorLabel                              | Label show instead of the button when have more that one month per view |
| navigatorLabelMonth                         | Label month text                                                        |
| navigatorLabelYear                          | Label year                                                              |
| navigatorPrevButton                         | Navigator prev button                                                   |
| navigatorNextButton                         | Navigator next button                                                   |
| navigatorPrevButtonIcon                     | Navigator prev button  icon                                             |
| navigatorNextButtonIcon                     | Navigator prev next  icon                                               |
| <strong>Calendar View</strong>              |                                                                         |
| calendarWrapper                             | Calendar wrapper                                                        |
| calendarHeaderWrapper                       | Calendar header wrapper                                                 |
| calendarHeaderWeekDay                       | Calendar header week day                                                |
| calendarDaysWrapper                         | Calendar days list wrapper                                              |
| calendarDaysDayWrapper                      | Calendar single day wrapper                                             |
| <strong>Day item</strong>                   |                                                                         |
| otherMonthDay                               | Day that is for another month                                           |
| emptyDay                                    | Html tag used as placeholder when we dont show other month days         |
| inRangeFirstDay                             | First day for ranges                                                    |
| inRangeLastDay                              | Last day for ranges                                                     |
| inRangeDay                                  | Day inside a range                                                      |
| selectedDay                                 | Day selected                                                            |
| activeDay                                   | Day active (for keyboard navigation)                                    |
| highlightedDay                              | Highlighted day                                                         |
| day                                         | Default day                                                             |
| today                                       | Today day                                                               |
| <strong>Months View</strong>                |                                                                         |
| monthWrapper                                | Month list wrapper                                                      |
| selectedMonth                               | Selected month                                                          |
| activeMonth                                 | Active month   (for keyboard navigation)                                |
| month                                       | Default month                                                           |
| <strong>Years View</strong>                 |                                                                         |
| yearWrapper                                 | Years list wrapper                                                      |
| year                                        | Default year                                                            |
| selectedYear                                | Selected year                                                           |
| activeYear                                  | Active year                                                             |


### Default fixed classes

As you may know, the fixed classes are shared and merged with the different variants and default classes. The classes we define here as default are the ones that you usually will need to make this component works correctly so you can only focus on colors, typography, etc when creating your theme.

```js
{
  navigator: 'flex',
  navigatorViewButton: 'flex items-center',
  navigatorViewButtonIcon: 'flex-shrink-0 h-5 w-5',
  navigatorViewButtonBackIcon: 'flex-shrink-0 h-5 w-5',
  navigatorLabel: 'flex items-center py-1',
  navigatorPrevButtonIcon: 'h-6 w-6 inline-flex',
  navigatorNextButtonIcon: 'h-6 w-6 inline-flex',

  inputWrapper: 'relative',
  viewGroup: 'inline-flex',
  view: 'w-64',
  calendarDaysWrapper: 'grid grid-cols-7',
  calendarHeaderWrapper: 'grid grid-cols-7',
  monthWrapper: 'grid grid-cols-4',
  yearWrapper: 'grid grid-cols-4',

  clearButton: 'flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6',
  clearButtonIcon: 'fill-current h-3 w-3',
};
```

### Default classes

```js
{
  // Dropdown related classes
  wrapper: 'inline-flex flex-col',
  dropdownWrapper: 'relative z-10',
  dropdown: 'origin-top-left absolute rounded-md shadow-lg',
  enterClass: '',
  enterActiveClass: 'transition ease-out duration-100 transform opacity-0 scale-95',
  enterToClass: 'transform opacity-100 scale-100',
  leaveClass: 'transition ease-in transform opacity-100 scale-100',
  leaveActiveClass: '',
  leaveToClass: 'transform opacity-0 scale-95 duration-75',

  // Wrapper for inline calendar
  inlineWrapper: '',

  // Text input related classes
  inputWrapper: '',
  input: 'form-input w-full',
  clearButton: 'hover:bg-gray-200 text-gray-500 rounded',
  clearButtonIcon: '',

  // Picker views
  viewGroup: 'bg-white border',
  view: '',

  // Navigator
  navigator: 'pt-2 px-2',
  navigatorViewButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer rounded-full px-2 py-1 -ml-1 hover:bg-gray-200',
  navigatorViewButtonIcon: 'fill-current text-gray-500',
  navigatorViewButtonBackIcon: 'fill-current text-gray-500',
  navigatorViewButtonMonth: 'text-gray-700 font-semibold',
  navigatorViewButtonYear: 'text-gray-600 ml-1',
  navigatorViewButtonYearRange: 'text-gray-600 ml-1',
  navigatorLabel: 'py-1',
  navigatorLabelMonth: 'text-gray-700 font-semibold',
  navigatorLabelYear: 'text-gray-600 ml-1',
  navigatorPrevButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 rounded-full p-1 ml-2 ml-auto disabled:opacity-25 disabled:cursor-not-allowed',
  navigatorNextButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 rounded-full p-1 -mr-1 disabled:opacity-25 disabled:cursor-not-allowed',
  navigatorPrevButtonIcon: 'text-gray-500',
  navigatorNextButtonIcon: 'text-gray-500',

  // Calendar View
  calendarWrapper: 'p-2',
  calendarHeaderWrapper: '',
  calendarHeaderWeekDay: 'uppercase text-xs text-gray-600 w-8 h-8 flex items-center justify-center',
  calendarDaysWrapper: '',
  calendarDaysDayWrapper: 'w-full h-8 flex flex-shrink-0 items-center',

  // Day item
  otherMonthDay: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 text-gray-400 disabled:opacity-25 disabled:cursor-not-allowed',
  emptyDay: '',
  inRangeFirstDay: 'text-sm bg-blue-500 text-white w-full h-8 rounded-l-full',
  inRangeLastDay: 'text-sm bg-blue-500 text-white w-full h-8 rounded-r-full',
  inRangeDay: 'text-sm bg-blue-200 w-full h-8 disabled:opacity-25 disabled:cursor-not-allowed',
  selectedDay: 'text-sm rounded-full w-8 h-8 mx-auto bg-blue-500 text-white disabled:opacity-25 disabled:cursor-not-allowed',
  activeDay: 'text-sm rounded-full bg-blue-100 w-8 h-8 mx-auto disabled:opacity-25 disabled:cursor-not-allowed',
  highlightedDay: 'text-sm rounded-full bg-blue-200 w-8 h-8 mx-auto disabled:opacity-25 disabled:cursor-not-allowed',
  day: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 disabled:opacity-25 disabled:cursor-not-allowed',
  today: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 disabled:opacity-25 disabled:cursor-not-allowed border border-blue-500',

  // Months View
  monthWrapper: 'p-2',
  selectedMonth: 'text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white',
  activeMonth: 'text-sm rounded w-full h-12 mx-auto bg-blue-100',
  month: 'text-sm rounded w-full h-12 mx-auto hover:bg-blue-100',

  // Years View
  yearWrapper: 'p-2',
  year: 'text-sm rounded w-full h-12 mx-auto hover:bg-blue-100',
  selectedYear: 'text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white',
  activeYear: 'text-sm rounded w-full h-12 mx-auto bg-blue-100',

}
```

## Events

| Event       | Arguments                                | Description                                                                       |
| ----------- | ---------------------------------------- | --------------------------------------------------------------------------------- |
| input       | `String` (The current date formatted) | Emitted every time the value of the `v-model` change                              |
| change      | `String` (The current date formatted) | Emitted every time the value of the `v-model` change  |
| focus       | `FocusEvent`                               | Emitted when the text input inside the component is focused                                                |
| blur        | `FocusEvent`                               | Emitted when the text input inside the component is blurred                                                |
| keydown        | `KeyboardEvent`                               | Emitted when the user keydown any key                                                |
| hidden        | ``                               | Emitted when the dropdown is hidden                                                |
| shown        | ``                               | Emitted when the dropdown is shown                                                |
| update:show       | `Boolean`                               | Used to sync the `show` prop                                         |
| activeChange       | `Date`                               | Emitted when the active date change                                       |

## Localization

Since the localization files of this component are based in the [Flatpickr component](https://flatpickr.js.org/localization/) dozens of locales are already available in the [source code](https://github.com/alfonsobries/vue-tailwind/tree/master/src/l10n).

### Add more locales

To keep the bundle size small only the English locale is loaded by default but adding more locales is very easy.

1. Import the locale file from the `vue-tailwind/dist/l10n/{localename}` path.

2. Add that locale object to the `locale` prop in the configuration settings for the TDatepicker:

```js
import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import Spanish from 'vue-tailwind/dist/l10n/es'

const settings = {
  // TInput: {...},
  // ...,
  TDatepicker: {
    // classes: {...},
    // fixedClasses: {...},
    locale: Spanish,
  }
}

Vue.use(VueTailwind, settings)
```


### Multiple locales

If you need multiple locales you can use the `locales` prop of the date-picker, when using the component you can switch the active language by using the `lang` prop:

1. Import all the locale files you need from the `vue-tailwind/dist/l10n/{localename}` path.

2. Add those locales to the configuration settings when installing the library:

3. Optionally define a default language.

```js
import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

import English from 'vue-tailwind/dist/l10n/index'
import Spanish from 'vue-tailwind/dist/l10n/es'
import Mandarin from 'vue-tailwind/dist/l10n/zh'
import Japanese from 'vue-tailwind/dist/l10n/ja'
import French from 'vue-tailwind/dist/l10n/fr'

const settings = {
  // TInput: {...},
  // ...,
  TDatepicker: {
    // classes: {...},
    // fixedClasses: {...},
    locales: {
      en:  English,
      es:  Spanish,
      zh:  Mandarin,
      ja:  Japanese,
      fr:  French,
    },
    // Optionally define the default language
    lang: 'es'
  }
}

Vue.use(VueTailwind, settings)
```

When using the component you can switch the language by using the `lang` prop.

```html
<t-datepicker lang="fr" />
```

### Custom localization

Of you you can also define your own localization file, just use one of the ones available in the [source code](https://github.com/alfonsobries/vue-tailwind/tree/master/src/l10n) as a base and add it to your settings as you do with any of the imported files.

Since the custom localization files are merged to the default localization you just need to define the attributes you want to override.

Example:


```js
import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

const customLocale = {
  weekdays: {
    shorthand: ["S😴", "M😭", "T😑", "W😶", "T😔", "F😎", "S😵"],    
  },
}

const settings = {
  // TInput: {...},
  // ...,
  TDatepicker: {
    // classes: {...},
    // fixedClasses: {...},
    locale: customLocale,
  }
}

Vue.use(VueTailwind, settings)
```
<preview class="flex flex-col items-center p-4 bg-gray-100 border rounded shadow-inner">
<t-datepicker inline value="1987-02-18" :locale="{ weekdays: { shorthand: ['S😴', 'M😭', 'T😑', 'W😶', 'T😔', 'F😎', 'S😵'] }}" /></t-datepicker>
</preview>


<tip>
Notice that in the custom locale I am only defining one of the different attributes the locale files have. These attributes will be merged with the <a href="https://github.com/alfonsobries/vue-tailwind/blob/master/src/l10n/default.ts" target="_blank" class="underline">default localization file</a>.
</tip>


## Timepicker

The time-picker feature will be an important feature of this component but is not ready yet. I am working hard to have it ready as soon as possible. Follow me on twitter [@alfonsobries](https://twitter.com/alfonsobries) so I can keep you updated.