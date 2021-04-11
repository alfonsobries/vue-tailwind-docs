---
title: Datetimepicker Component
description: VueJs reactive date-time picker component with multiple features, configurable classes, and variants. Friendly with utility-first frameworks like TailwindCSS.
---

# Datetime picker (TDatePicker)

VueJs reactive date-time picker component with multiple features, configurable classes and variants, and most common events. Friendly with utility-first frameworks like TailwindCSS.

<t-datepicker-playground></t-datepicker-playground>

<hr>

## Props

| Property                        | Type                              | Default value | Description                                                                                                                    |
| ------------------------------- | --------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| value (`v-model`)               | `[Date, String, Number, Array]`   | `null`        | The current value of the component                                                                                             |
| id                              | `String`                          | `undefined`   | id attribute of the text input that shows the user friendly date                                                               |
| disabled                        | `Boolean`                         | `undefined`   | disabled attribute of the text input that shows the user friendly date                                                         |
| name                            | `String`                          | `undefined`   | name attribute of the `hidden` input that contains the formatted date                                                          |
| readonly                        | `Boolean`                         | `undefined`   | readonly attribute of the text input that shows the user friendly date                                                         |
| autofocus                       | `Boolean`                         | `undefined`   | autofocus attribute of the text input that shows the user friendly date                                                        |
| required                        | `Boolean`                         | `undefined`   | required attribute of the text input that shows the user friendly date                                                         |
| tabindex                        | `[String, Number]`                | `undefined`   | tabindex attribute of the text input that shows the user friendly date                                                         |
| placeholder                     | `String`                          | `undefined`   | Placeholder for the text input that contains the user friendly date                                                            |
| inputName                       | `String`                          | `undefined`   | Name attribute for the text input that contains the user friendly date. (The `name` prop is used for the hidden input)         |
| weekStart                       | `Number`                          | `0`           | First day of the week show in the calendar, `0` = Sunday                                                                       |
| monthsPerView                   | `Number`                          | `1`           | How many months the calendar show show per view (see [Multiple months per view](#multiple-months-per-view))                    |  |
| lang                            | `String`                          | `en`          | Default language used in the component                                                                                         |
| locale                          | `Object`                          | `{...}`       | Object that define the localization (see [Localization](#localization))                                                        |
| locales                         | `Object`                          | `{}`          | Object with the different languages objects available (see [Formatting tokens](#formatting))                                   |
| dateFormat                      | `String`                          | `'Y-m-d'`     | Formatted date added to the hidden input and to the `v-model` value                                                            |
| userFormat                      | `String`                          | `'F j, Y'`    | User friendly format that is shown in the text input                                                                           |
| dateFormatter                   | `Function`                        | `undefined`   | Allows you to override the default date formatter function (see [Custom date parse and format](#custom-date-parse-and-format)) |
| dateParser                      | `Function`                        | `undefined`   | Allows you to override the default date parser function (see [Custom date parse and format](#custom-date-parse-and-format))    |
| closeOnSelect                   | `Boolean`                         | `true`        | If set will close the date picker when a date is selected                                                                      |
| showDaysForOtherMonth           | `Boolean`                         | `true`        | If set will show the days for the prev/next button in the current calendar view                                                |
| show                            | `Boolean`                         | `false`       | If set will show the datepicker open when the component is loaded                                                              |
| inline                          | `Boolean`                         | `false`       | If set will show the datepicker opened                                                                                         |
| initialView                     | `String`                          | `'day'`       | Initial view of the calendar (valid options: `''day''`, `'month'`, `'year'` )                                                  |
| yearsPerView                    | `Number`                          | `12`          | How many years will show in the `year` view                                                                                    |
| disabledDates                   | `[Date, Array, Function, String]` | `undefined`   | Disable a single date string, a group or dates on an array or based in a function (see [Disable dates](#disable-dates))        |
| highlightDates                  | `[Date, Array, Function, String]` | `undefined`   | Highlight a single date string, a group or dates on an array or based in a function (see [Highlight dates](#highlight-dates))  |
| maxDate                         | `[Date, String]`                  | `undefined`   | Max allowed date                                                                                                               |
| minDate                         | `[Date, String]`                  | `undefined`   | Min allowed date                                                                                                               |
| initialDate                     | `[Date, String]`                  | `undefined`   | Initial active date                                                                                                            |
| initialTime <since>^2,2</since> | `[Date, String]`                  | `undefined`   | Useful to set an initial time without setting an initial date                                                                  |
| conjunction                     | `String`                          | `','`         | Used to join the dates values for  multiple dates                                                                              |
| multiple                        | `Boolean`                         | `false`       | When set it will create multiple hidden inputs with all the selected dates (see [Multiple dates](#handle-multiple-dates))      |
| range                           | `Boolean`                         | `false`       | When set it will expect a range of dates to be selected (see [Range](#ranges))                                                 |
| clearable                       | `Boolean`                         | `true`        | If set will allow you to clear the date value                                                                                  |
| datepicker <since>^2,2</since>  | `Boolean`                         | `true`        | If set to `false` it will hide the date picker to show only the `timepicker` if set                                            |
| timepicker <since>^2,2</since>  | `Boolean`                         | `false`       | If set it will show a timepicker input                                                                                         |
| amPm <since>^2,2</since>        | `Boolean`                         | `false`       | If set it will show the timepicker input with an AM/PM toggle, otherwise it will use 24 hours format                           |
| showSeconds <since>^2,2</since> | `Boolean`                         | `false`       | If set it will add an extra input to the timepicker so you can set the seconds                                                 |

## Classes and variants format

This component expects an object with classes named after every child element.

The properties in that object are the following:

| Property                                                 | Description                                                                         |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| wrapper                                                  | Wrapper for the component                                                           |
| inlineWrapper                                            | Wrapper for the component when the `inline` options is set                          |
| inlineViews                                              | Wrapper for the views when the `inline` options is set                              |
| <strong>Dropdown related classes</strong>                |                                                                                     |
| dropdownWrapper                                          | Dropdown wrapper                                                                    |
| dropdown                                                 | Dropdown                                                                            |
| enterClass                                               | Transition class                                                                    |
| enterActiveClass                                         | Transition class                                                                    |
| enterToClass                                             | Transition class                                                                    |
| leaveClass                                               | Transition class                                                                    |
| leaveActiveClass                                         | Transition class                                                                    |
| leaveToClass                                             | Transition class                                                                    |
| <strong>Text input related classes</strong>              |                                                                                     |
| inputWrapper                                             | Input wrapper                                                                       |
| input                                                    | Text input                                                                          |
| clearButton                                              | Clear butotn                                                                        |
| clearButtonIcon                                          | Claer button icon                                                                   |
| <strong>Picker views</strong>                            |                                                                                     |
| viewGroup                                                | Groups all the views, for example when shows multiple months                        |
| view                                                     | A single view of the calendar                                                       |
| <strong>Navigator</strong>                               |                                                                                     |
| navigator                                                | Date navigator wrapper                                                              |
| navigatorViewButton                                      | View toggler button                                                                 |
| navigatorViewButtonIcon                                  | View toggler button icon                                                            |
| navigatorViewButtonBackIcon                              | View toggler button back icon                                                       |
| navigatorViewButtonMonth                                 | View toggler month text                                                             |
| navigatorViewButtonYear                                  | View toggler year text                                                              |
| navigatorViewButtonYearRange                             | View toggler year range text                                                        |
| navigatorLabel                                           | Label show instead of the button when have more that one month per view             |
| navigatorLabelMonth                                      | Label month text                                                                    |
| navigatorLabelYear                                       | Label year                                                                          |
| navigatorPrevButton                                      | Navigator prev button                                                               |
| navigatorNextButton                                      | Navigator next button                                                               |
| navigatorPrevButtonIcon                                  | Navigator prev button  icon                                                         |
| navigatorNextButtonIcon                                  | Navigator prev next  icon                                                           |
| <strong>Calendar View</strong>                           |                                                                                     |
| calendarWrapper                                          | Calendar wrapper                                                                    |
| calendarHeaderWrapper                                    | Calendar header wrapper                                                             |
| calendarHeaderWeekDay                                    | Calendar header week day                                                            |
| calendarDaysWrapper                                      | Calendar days list wrapper                                                          |
| calendarDaysDayWrapper                                   | Calendar single day wrapper                                                         |
| <strong>Day item</strong>                                |                                                                                     |
| otherMonthDay                                            | Day that is for another month                                                       |
| emptyDay                                                 | Html tag used as placeholder when we dont show other month days                     |
| inRangeFirstDay                                          | First day for ranges                                                                |
| inRangeLastDay                                           | Last day for ranges                                                                 |
| inRangeDay                                               | Day inside a range                                                                  |
| selectedDay                                              | Day selected                                                                        |
| activeDay                                                | Day active (for keyboard navigation)                                                |
| highlightedDay                                           | Highlighted day                                                                     |
| day                                                      | Default day                                                                         |
| today                                                    | Today day                                                                           |
| <strong>Months View</strong>                             |                                                                                     |
| monthWrapper                                             | Month list wrapper                                                                  |
| selectedMonth                                            | Selected month                                                                      |
| activeMonth                                              | Active month   (for keyboard navigation)                                            |
| month                                                    | Default month                                                                       |
| <strong>Years View</strong>                              |                                                                                     |
| yearWrapper                                              | Years list wrapper                                                                  |
| year                                                     | Default year                                                                        |
| selectedYear                                             | Selected year                                                                       |
| activeYear                                               | Active year                                                                         |
| <strong>Timepicker Related</strong>  <since>^2.2</since> |                                                                                     |
| timepickerWrapper                                        | Divs that wraps the entire timepicker section                                       |
| timepickerTimeWrapper                                    | Div that wraps the timepicker text inputs within the AM/PM toggle and the ok button |
| timepickerTimeFieldsWrapper                              | Div that wraps the timepicker text inputs                                           |
| timepickerOkButton                                       | Timepicker submit button                                                            |
| timepickerInput                                          | Timepicker hours/minutes and seconds text inputs                                    |
| timepickerTimeLabel                                      | "Time" label                                                                        |
| timepickerAmPmWrapper                                    | AM/PM Toggle wrapper                                                                |
| timepickerAmPmWrapperChecked                             | AM/PM Toggle wrapper when checked (PM selected)                                     |
| timepickerAmPmWrapperDisabled                            | AM/PM Toggle wrapper when disabled (currently unused state)                         |
| timepickerAmPmWrapperCheckedDisabled                     | AM/PM Toggle wrapper when checked and disabled (currently unused state)             |
| timepickerAmPmButton                                     | AM/PM button                                                                        |
| timepickerAmPmButtonChecked                              | AM/PM button when is selected                                                       |
| timepickerAmPmCheckedPlaceholder                         | "AM" placeholder when PM is selected                                                |
| timepickerAmPmUncheckedPlaceholder                       | "PM" placeholder when AM is selected                                                |

### Default fixed classes

As you may know, the fixed classes are merged with the different variants and default classes.

The default `fixedClasses` on this component are the ones you usually will need as a minimum to ensure this component works as expected.


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
  viewGroup: 'inline-flex flex-wrap',
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
  wrapper: 'flex flex-col',
  dropdownWrapper: 'relative z-10',

  // Dropdown related classes
  dropdown: 'origin-top-left absolute rounded shadow bg-white overflow-hidden mt-1',
  enterClass: 'opacity-0 scale-95',
  enterActiveClass: 'transition transform ease-out duration-100',
  enterToClass: 'opacity-100 scale-100',
  leaveClass: 'opacity-100 scale-100',
  leaveActiveClass: 'transition transform ease-in duration-75',
  leaveToClass: 'opacity-0 scale-95',

  // Wrapper for inline calendar
  inlineWrapper: '',
  inlineViews: 'rounded bg-white border mt-1 inline-flex flex-col',

  // Text input related classes
  inputWrapper: '',
  input: 'block w-full px-3 py-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
  clearButton: 'hover:bg-gray-100 rounded transition duration-100 ease-in-out text-gray-600',
  clearButtonIcon: '',

  // Picker views
  viewGroup: '',
  view: '',

  // Navigator
  navigator: 'pt-2 px-3',
  navigatorViewButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer rounded-full px-2 py-1 -ml-1 hover:bg-gray-100',
  navigatorViewButtonIcon: 'fill-current text-gray-400',
  navigatorViewButtonBackIcon: 'fill-current text-gray-400',
  navigatorViewButtonMonth: 'text-gray-700 font-semibold',
  navigatorViewButtonYear: 'text-gray-500 ml-1',
  navigatorViewButtonYearRange: 'text-gray-500 ml-1',
  navigatorLabel: 'py-1',
  navigatorLabelMonth: 'text-gray-700 font-semibold',
  navigatorLabelYear: 'text-gray-500 ml-1',
  navigatorPrevButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-100 rounded-full p-1 ml-2 ml-auto disabled:opacity-50 disabled:cursor-not-allowed',
  navigatorNextButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-100 rounded-full p-1 -mr-1 disabled:opacity-50 disabled:cursor-not-allowed',
  navigatorPrevButtonIcon: 'text-gray-400',
  navigatorNextButtonIcon: 'text-gray-400',

  // Calendar View
  calendarWrapper: 'px-3 py-2',
  calendarHeaderWrapper: '',
  calendarHeaderWeekDay: 'uppercase text-xs text-gray-500 w-8 h-8 flex items-center justify-center',
  calendarDaysWrapper: '',
  calendarDaysDayWrapper: 'w-full h-8 flex flex-shrink-0 items-center',

  // Day item
  otherMonthDay: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed',
  emptyDay: '',
  inRangeFirstDay: 'text-sm bg-blue-500 text-white w-full h-8 rounded-l-full',
  inRangeLastDay: 'text-sm bg-blue-500 text-white w-full h-8 rounded-r-full',
  inRangeDay: 'text-sm bg-blue-200 w-full h-8 disabled:opacity-50 disabled:cursor-not-allowed',
  selectedDay: 'text-sm rounded-full w-8 h-8 mx-auto bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed',
  activeDay: 'text-sm rounded-full bg-blue-100 w-8 h-8 mx-auto disabled:opacity-50 disabled:cursor-not-allowed',
  highlightedDay: 'text-sm rounded-full bg-blue-200 w-8 h-8 mx-auto disabled:opacity-50 disabled:cursor-not-allowed',
  day: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed',
  today: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed border border-blue-500',

  // Months View
  monthWrapper: 'px-3 py-2',
  selectedMonth: 'text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white',
  activeMonth: 'text-sm rounded w-full h-12 mx-auto bg-blue-100',
  month: 'text-sm rounded w-full h-12 mx-auto hover:bg-blue-100',

  // Years View
  yearWrapper: 'px-3 py-2',
  year: 'text-sm rounded w-full h-12 mx-auto hover:bg-blue-100',
  selectedYear: 'text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white',
  activeYear: 'text-sm rounded w-full h-12 mx-auto bg-blue-100',

  // Time selector *Since 2.2*
  timepickerWrapper: 'flex items-center px-4 py-2 space-x-2',
  timepickerTimeWrapper: 'flex items-center space-x-2',
  timepickerTimeFieldsWrapper: 'bg-gray-100 rounded-md w-full text-right flex items-center border border-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
  timepickerOkButton: 'text-blue-600 text-sm uppercase font-semibold transition duration-100 ease-in-out border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 rounded cursor-pointer',
  timepickerInput: 'text-center w-8 border-transparent bg-transparent p-0 h-6 text-sm transition duration-100 ease-in-out border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 rounded',
  timepickerTimeLabel: 'flex-grow text-sm text-gray-500',
  timepickerAmPmWrapper: 'relative inline-flex flex-shrink-0 transition duration-200 ease-in-out bg-gray-100 border border-transparent rounded cursor-pointer focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
  timepickerAmPmWrapperChecked: 'relative inline-flex flex-shrink-0 transition duration-200 ease-in-out bg-gray-100 border border-transparent rounded cursor-pointer focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
  timepickerAmPmWrapperDisabled: 'relative inline-flex flex-shrink-0 transition duration-200 ease-in-out opacity-50 cursor-not-allowed',
  timepickerAmPmWrapperCheckedDisabled: 'relative inline-flex flex-shrink-0 transition duration-200 ease-in-out opacity-50 cursor-not-allowed',
  timepickerAmPmButton: 'absolute flex items-center justify-center w-6 h-6 text-xs text-gray-800 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded shadow',
  timepickerAmPmButtonChecked: 'absolute flex items-center justify-center w-6 h-6 text-xs text-gray-800 transition duration-200 ease-in-out transform translate-x-full bg-white rounded shadow',
  timepickerAmPmCheckedPlaceholder: 'flex items-center justify-center w-6 h-6 text-xs text-gray-500 rounded-sm',
  timepickerAmPmUncheckedPlaceholder: 'flex items-center justify-center w-6 h-6 text-xs text-gray-500 rounded-sm',
}
```

## Events

| Event             | Arguments                             | Description                                                 |
| ----------------- | ------------------------------------- | ----------------------------------------------------------- |
| input             | `String` (The current date formatted) | Emitted every time the value of the `v-model` change        |
| change            | `String` (The current date formatted) | Emitted every time the value of the `v-model` change        |
| focus             | `FocusEvent`                          | Emitted when the text input inside the component is focused |
| blur              | `FocusEvent`                          | Emitted when the text input inside the component is blurred |
| keydown           | `KeyboardEvent`                       | Emitted when the user key down any key                      |
| hidden            | ``                                    | Emitted when the dropdown is hidden                         |
| shown             | ``                                    | Emitted when the dropdown is shown                          |
| update:show       | `Boolean`                             | Used to sync the `show` prop                                |
| active-change     | `Date`                                | Emitted when the active date change                         |
| user-date-changed | `String`                              | Emitted when the user formatted date change                 |

## Scoped slots

| Slot        | description                                                |
| ----------- | ---------------------------------------------------------- |
| day         | Content of a day button inside the calendar                |
| month       | Content of a month button inside the calendar              |
| year        | Content of a year button inside the calendar               |
| clearButton | Replaces the SVG icon inside the button to clear the input |

### Day scoped slot

The `day` scoped slot include this information that may be useful for you when rendering the value

| Prop              | description                                                    |
| ----------------- | -------------------------------------------------------------- |
| dayFormatted      | The day formatted                                              |
| isForAnotherMonth | If the day belongs to a different month that the one is active |
| isFirstDayOfRange | For ranges: if the day is the first day of the range           |
| isLastDayOfRange  | For ranges: if the day is the last day of the range            |
| isInRange         | For ranges: if the day is part of the range                    |
| isSelected        | If the day is selected                                         |
| isActive          | If the day is active (for keyboard navigation)                 |
| isHighlighted     | If the day is highlighted                                      |
| isToday           | If the day is today                                            |
| day               | The `Date` object that represents the current                  |
| activeDate        | A `Date` object that represents the current active day         |
| value             | A `Date` object that represents the currently selected day     |

#### Example

Let`s show a cake when the day is in a hypothetical array of birthdays and a taco every Tuesday:

```html
<t-datepicker
  v-model="date"
  inline
>
  <template
    slot="day"
    slot-scope="{ day, dayFormatted }"
  >
    <span v-if="birthdays.includes(day)">
      🎂
    </span>
    <span v-else-if="day.getDay() === 2">
      🌮
    </span>
    <span v-else>
      {{ dayFormatted }}
    </span>
  </template>
</t-datepicker>
```

<datepicker-day-slot-example></datepicker-day-slot-example> 

### Month scoped slot

The `month` scoped slot include this information that may be useful for you when rendering the value

| Prop           | description                                                  |
| -------------- | ------------------------------------------------------------ |
| monthFormatted | The month formatted                                          |
| isSelected     | If the month is selected                                     |
| isActive       | If the month is active (for keyboard navigation)             |
| month          | The `Date` object that represents the current month          |
| activeDate     | A `Date` object that represents the current active month     |
| value          | A `Date` object that represents the currently selected month |

#### Example

Let's show a pumpkin in October:

```html
<t-datepicker
  v-model="date"
  initial-view="month"
  inline
>
  <template
    slot="month"
    slot-scope="{ month, monthFormatted }"
  >
    <span v-if="month.getMonth() === 9">
      🎃
    </span>
    <span v-else>
      {{ monthFormatted }}
    </span>
  </template>
</t-datepicker>
```

<datepicker-month-slot-example></datepicker-month-slot-example> 

### Year scoped slot

The `year` scoped slot include this information that may be useful for you when rendering the value

| Prop          | description                                                 |
| ------------- | ----------------------------------------------------------- |
| yearFormatted | The year formatted                                          |
| isSelected    | If the year is selected                                     |
| isActive      | If the year is active (for keyboard navigation)             |
| year          | The `Date` object that represents the current year          |
| activeDate    | A `Date` object that represents the current active year     |
| value         | A `Date` object that represents the currently selected year |

### Clear icon scoped slit

Props in the `clearButton` slot

| Prop             | description                                                 |
| ---------------- | ----------------------------------------------------------- |
| className        | Original `clearButtonIcon` class                            |
| formatedDate     | Current formatted date                                      |
| userFormatedDate | Current user formatted date                                 |
| activeDate       | A `Date` object that represents the currently active date   |
| value            | A `Date` object that represents the currently selected date |

## Localization

Since the localization files of this component are based in the [Flatpickr component](https://flatpickr.js.org/localization/) dozens of locales are already available in the [source code](https://github.com/alfonsobries/vue-tailwind/tree/master/src/l10n).

### Add more locales

To keep the bundle size small only the English locale is loaded by default but adding more locales is very easy.

1. Import the locale file from the `vue-tailwind/dist/l10n/{localename}` path.

2. Add that locale object to the `locale` prop in the configuration settings for the TDatepicker:

```js
import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import TDatepicker from 'vue-tailwind/dist/t-datepicker'
import Spanish from 'vue-tailwind/dist/l10n/es'

const settings = {
  // ...,
  't-datepicker': {
    component: TDatepicker,
    props: {
      // classes: {...},
      // fixedClasses: {...},
      locale: Spanish,
    }    
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

import TDatepicker from 'vue-tailwind/dist/t-datepicker'

import English from 'vue-tailwind/dist/l10n/index'
import Spanish from 'vue-tailwind/dist/l10n/es'
import Mandarin from 'vue-tailwind/dist/l10n/zh'
import Japanese from 'vue-tailwind/dist/l10n/ja'
import French from 'vue-tailwind/dist/l10n/fr'

const settings = {
  // ...,
  't-datepicker': {
    component: TDatepicker,
    props: {
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
}

Vue.use(VueTailwind, settings)
```

When using the component you can switch the language by using the `lang` prop.

```html
<t-datepicker lang="fr" />
```

### Custom localization

You can also define your own localization file, just use one of the ones available in the [source code](https://github.com/alfonsobries/vue-tailwind/tree/master/src/l10n) as a base and add it to your settings.

Since the custom localization files are merged to the default localization you just need to define the attributes you want to override.

Example:


```js
import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import TDatepicker from 'vue-tailwind/dist/t-datepicker'

const customLocale = {
  weekdays: {
    shorthand: ["S😴", "M😭", "T😑", "W😶", "T😔", "F😎", "S😵"],    
  },
}

const settings = {
  // ...,
  't-datepicker': {
    component: TDatepicker,
    props: {
      // classes: {...},
      // fixedClasses: {...},
      locale: customLocale,
    }
  }
}

Vue.use(VueTailwind, settings)
```

<datepicker-custom-locale-example></datepicker-custom-locale-example>

<tip>
Notice that in the custom locale I am only defining one of the different attributes the locale files have. These attributes will be merged with the <a href="https://github.com/alfonsobries/vue-tailwind/blob/master/src/l10n/default.ts" target="_blank" class="underline">default localization file</a>.
</tip>


## Formatting tokens

*Credits to the guys behind the [Flatpickr](https://flatpickr.js.org/) from where I mostly copied the code behind this formatting.*

Each character in the table below can be used in `dateFormat` and `userFormat` options to achieve the format you need.

### Date Formatting Tokens

| Character         | Description                                               | Example                                                       |
| ----------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| d                 | Day of the month, 2 digits with leading zeros             | 01 to 31                                                      |
| D                 | A textual representation of a day                         | Mon through Sun                                               |
| l (lowercase 'L') | A full textual representation of the day of the week      | Sunday through Saturday                                       |
| j                 | Day of the month without leading zeros                    | 1 to 31                                                       |
| J                 | Day of the month without leading zeros and ordinal suffix | 1st, 2nd, to 31st                                             |
| w                 | Numeric representation of the day of the week             | 0 (for Sunday) through 6 (for Saturday)                       |
| W                 | Numeric representation of the week                        | 0 (first week of the year) through 52 (last week of the year) |
| F                 | A full textual representation of a month                  | January through December                                      |
| m                 | Numeric representation of a month, with leading zero      | 01 through 12                                                 |
| n                 | Numeric representation of a month, without leading zeros  | 1 through 12                                                  |
| M                 | A short textual representation of a month                 | Jan through Dec                                               |
| U                 | The number of seconds since the Unix Epoch                | 1413704993                                                    |
| y                 | A two-digit representation of a year                      | 99 or 03                                                      |
| Y                 | A full numeric representation of a year, 4 digits         | 1999 or 2003                                                  |
| Z                 | ISO Date format                                           | 2017-03-04T01:23:43.000Z                                      |


### Time Formatting Tokens

| Character | Description                        | Example    |
| --------- | ---------------------------------- | ---------- |
| H         | Hours (24 hours)                   | 00 to 23   |
| h         | Hours                              | 1 to 12    |
| G         | Hours, 2 digits with leading zeros | 1 to 12    |
| i         | Minutes                            | 00 to 59   |
| S         | Seconds, 2 digits                  | 00 to 59   |
| s         | Seconds                            | 0, 1 to 59 |
| K         | AM/PM                              | AM or PM   |

### Escaping Formatting Tokens

You may escape formatting tokens using `\\`.

```js
{
    dateFormat: "Y-m-d\\Z", // Displays: 2017-01-22Z
}
```

## Custom date parse and format

If you want to use your own date formatter / parser you can do it by using the  `dateFormatter` and `dateParser` props. You don't need to use both, but you need to ensure that the formatted date works for the parsed date and vice versa.

Both props expect a function that receives the following parameters:


| Parameter | Type             | Description                     |
| --------- | ---------------- | ------------------------------- |
| dateObj   | `Date` or `null` | Date to be parsed or formatted  |
| format    | `String`         | The format defined in the props |

#### Example

Consider the following example where we use the `moment` library to handle the dates:

```html
<template>
  <t-datepicker
    v-model="date"
    :date-formatter="dateFormatter"
    :date-parser="dateParser"
    date-format="YYYY-MM-DD"
    user-format="LLLL"
  />
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      date: '1987-03-18'
    }
  },
  methods: {
    dateFormatter (date, format) {
      return moment(date).format(format)
    },
    dateParser (date, format) {
      return moment(date, format).toDate()
    }
  }
}
</script>
```

<tip>
Notice in the example above that the dateFormat prop and userFormat props are now using valid moment format strings
</tip>

## Disable dates

You can use the `disableDates` props to disable one date, many dates on an array, or based on a function.

The props accept the following formats:

| Format                    | Type       | Description                                                                  |
| ------------------------- | ---------- | ---------------------------------------------------------------------------- |
| Date string               | `String`   | Date formatted as a string (will be parsed according to the dateFormat from) |
| Date object               | `Date`     | You can pass a Date object directly                                          |
| Function                  | `Function` | A function that receives the current date that is being validated            |
| Array of dates and method | `Array`    | An array that includes all the methods above                                 |

#### Example

For the following example I am disabling dates with an array with all the valid formats:

```html
<template>
  <t-datepicker
    v-model="date"
    inline
    :disabled-dates="disabledDates"
  />
</template>

<script>
export default {
  data () {
    return {
      date: '1987-03-18',
      disabledDates: [
        // A formatted date
        '1987-03-19',
        // A date object ('1987-03-25',)
        new Date(1987, 4, 25),
        // Disable mondays
        function (date) {
          return date.getDay() === 1
        }
      ]
    }
  }

}
</script>
```

<datepicker-disabled-dates-example></datepicker-disabled-dates-example>

## Highlight dates

You can use the `highlightDates` props to highlight one date, many dates on an array, or based on a function.

The props accept the following formats:

| Format                    | Type       | Description                                                                  |
| ------------------------- | ---------- | ---------------------------------------------------------------------------- |
| Date string               | `String`   | Date formatted as a string (will be parsed according to the dateFormat from) |
| Date object               | `Date`     | You can pass a Date object directly                                          |
| Function                  | `Function` | A function that receives the current date that is being validated            |
| Array of dates and method | `Array`    | An array that includes all the methods above                                 |

#### Example

For this example lets hightlight dates with an array with all the valid formats:

```html
<template>
  <t-datepicker
    v-model="date"
    inline
    :highlight-dates="highlightDates"
  />
</template>

<script>
export default {
  data () {
    return {
      date: '1987-03-18',
      highlightDates: [
        // A formatted date
        '1987-03-19',
        // A date object ('1987-03-25',)
        new Date(1987, 4, 25),
        // Disable mondays
        function (date) {
          return date.getDay() === 1
        }
      ]
    }
  }

}
</script>
```

<datepicker-highlight-dates-example></datepicker-highlight-dates-example>

## Handle multiple dates

This component allows the user to select multiple dates if the `v-model` (or value) of the input has an array, it doesn't matter if the user sets the `multiple` prop. 

When you use the `multiple` prop the difference is that it will render one hidden input per value, this especially useful for POST form submissions.

If you set `multiple` to `false` (default value) the hidden input will contain all the dates separated by a comma o whatever value set in the `conjunction` prop

#### Example

<datepicker-multiple-example></datepicker-multiple-example>

## Ranges

The Datepicker is compatible with "range" values, when `range` is set, the value of the model will expect an array where the first element represents the "from" value, and the second one the "to" value.

### Range Values

When the value of a component with the `range` setting changes, you should consider that the input value will be handled differently if the `multiple` prop is set or not:

This is how the component handles the value:

- The `v-model` of the component will be an array with 2 formatted dates.
- It will create a hidden input with the formatted dates separated by comma o whatever value used in the `conjunction` prop.
- If the `multiple` prop is set, it will create two hidden inputs with both "from" and "to" values.
- The text input will render the value with the user format separated with the `rangeSeparator` defined in the current localization settings.

#### Example

<datepicker-range-example></datepicker-range-example>

## Multiple months per view

The Datepicker allows you to display multiple calendars per view by using the `monthsPerView` prop.

#### Example

<datepicker-multiple-views-example></datepicker-multiple-views-example>


## Timepicker
Since <since>^2.2</since>

You can add a timepicker by setting the `timepicker` prop.


```html
<t-datepicker timepicker />
```

<preview class="flex flex-col items-center p-4 bg-gray-100 border rounded shadow-inner">
  <t-datepicker
    inline
    timepicker
  />
</preview>

<tip>
The timepicker is currently no compatible with the `range` and `multiple` options and you cannot disable specific times for the moment.
</tip>


### AM/PM Format

Use the `amPm` prop to show an AM/PM toggle:

```html
<t-datepicker
  timepicker
  am-pm
/>
```

<preview class="flex flex-col items-center p-4 bg-gray-100 border rounded shadow-inner">
  <t-datepicker
    inline
    timepicker
    am-pm
  />
</preview>

### Show Seconds

Use the `showSeconds` prop to show an extra input to set the seconds

```html
<t-datepicker
  timepicker
  show-seconds
/>
```

<preview class="flex flex-col items-center p-4 bg-gray-100 border rounded shadow-inner">
  <t-datepicker
    inline
    timepicker
    show-seconds
  />
</preview>

### Set initial time

Use the `initialTime` prop to set an initial time for the timepicker without needed to set an initial date

```html
<t-datepicker
  timepicker
  initial-time="09:00"
/>
```

<preview class="flex flex-col items-center p-4 bg-gray-100 border rounded shadow-inner">
  <t-datepicker
    inline
    timepicker
    initial-time="09:00"
  />
</preview>

### Timepicker only

Set `datepicker=false`  together with the `timepicker` option to show a timepicker only.

```html
<t-datepicker
  value="09:30:15 AM"
  user-format="G:i:S K"
  date-format="G:i:S K"
  timepicker
  :datepicker="false"
/>
```

<preview class="flex flex-col items-center p-4 bg-gray-100 border rounded shadow-inner">
  <t-datepicker
    inline
    value="09:30:15 AM"
    user-format="G:i:S K"
    date-format="G:i:S K"
    timepicker
    :datepicker="false"
  />
</preview>

<tip>
To show the time formated you should play with the `userFormat` and  `dateFormat` props since the time is still treated as a date internally. See the example above.
</tip>
