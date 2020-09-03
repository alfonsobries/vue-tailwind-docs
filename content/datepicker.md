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
 
