---
title: Toggle Component
description: VueJs reactive toggle component with customizable TailwindCSS or any CSS Framework classes.
---

# Toggle input (TToggle)

VueJs reactive **toggle** component with configurable classes, variants, and most common events. Friendly with utility-first frameworks like TailwindCSS.

<t-toggle-playground></t-toggle-playground>

<hr>

## Basic example

```html
<t-toggle checked />
```

<t-toggle checked></t-toggle>

## Props


| Property             | Type                                       | Default value       | Description                                                          |
| -------------------- | ------------------------------------------ | ------------------- | -------------------------------------------------------------------- |
| model (`v-model`)    | `[String, Object, Number, Boolean, Array]` | `undefined`         | The element using for the `v-model`                                  |
| value                | `[String, Object, Number, Boolean, Array]` | `true`              | The value for the element when checked                               |
| uncheckedValue       | `[String, Object, Number, Boolean, Array]` | `false`             | The value for the element when unchecked                             |
| checkedPlaceholder   | `String`                                   | `undefined`         | Optional string to show in the unchecked side                        |
| uncheckedPlaceholder | `String`                                   | `undefined`         | Optional string to show in the checked side                          |
| checkedLabel         | `String`                                   | `undefined`         | Optional string to show inside the button when checked               |
| uncheckedLabel       | `String`                                   | `undefined`         | Optional string to show inside the button when unchecked             |
| checked              | `Boolean`                                  | `undefined`         | Used to show the toggle as checked when no using a v-model           |
| id                   | `String`                                   | `undefined`         | HTML attribute                                                       |
| autofocus            | `Boolean`                                  | `undefined`         | HTML attribute                                                       |
| disabled             | `Boolean`                                  | `undefined`         | HTML attribute                                                       |
| name                 | `String`                                   | `undefined`         | HTML attribute of the hidden input                                   |
| readonly             | `Boolean`                                  | `undefined`         | HTML attribute of the hidden input                                   |
| required             | `Boolean`                                  | `undefined`         | HTML attribute of the hidden input                                   |
| tabindex             | `[String, Number]`                         | `0`                 | HTML attribute                                                       |
| classes              | `Object`                                   | `{...}` (see below) | The default CSS classes                                              |
| fixedClasses         | `Object`                                   | `{...}` (see below) | Fixed CSS classes that will be merged with the active set of classes |
| variants             | `Object`                                   | `undefined`         | The different variants of classes the component have                 |
| variant              | `[String, Object]`                         | `undefined`         | The variant that will be used                                        |


## Classes and variants format

This component expects an object with classes named after every child element.

The properties in that object are the following:

| Property               | Description                       |
| ---------------------- | --------------------------------- |
| wrapper                | Wrapper of the component          |
| wrapperChecked         | Wrapper when checked              |
| wrapperDisabled        | Wrapper when disabled             |
| wrapperCheckedDisabled | Wrapper when checked and disable  |
| button                 | Toggle button                     |
| buttonChecked          | Toggle button when checked        |
| checkedPlaceholder     | Placeholder in the unchecked side |
| uncheckedPlaceholder   | Placeholder in the checked side   |


### Default fixed classes

As you may know, the fixed classes are merged with the different variants and default classes.

The default `fixedClasses` on this component are the ones you usually will need as a minimum to ensure this component works as expected.

```js
{
  wrapper: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200',
  wrapperChecked: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200',
  wrapperDisabled: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200 opacity-50 cursor-not-allowed',
  wrapperCheckedDisabled: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200 opacity-50 cursor-not-allowed',
  button: 'inline-block absolute transform translate-x-0 transition ease-in-out duration-200',
  buttonChecked: 'inline-block absolute transform translate-x-full transition ease-in-out duration-200',
  checkedPlaceholder: 'inline-block',
  uncheckedPlaceholder: 'inline-block',
};
```

### Default classes

```js
{
  wrapper: 'bg-gray-100 rounded-full border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
  wrapperChecked: 'bg-blue-500 rounded-full border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
  wrapperDisabled: 'bg-gray-100 rounded-full border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
  wrapperCheckedDisabled: 'bg-blue-500 rounded-full border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
  button: 'h-5 w-5 rounded-full bg-white shadow flex items-center justify-center text-gray-400 text-xs',
  buttonChecked: 'h-5 w-5 rounded-full bg-white shadow flex items-center justify-center text-blue-500 text-xs',
  checkedPlaceholder: 'rounded-full w-5 h-5 flex items-center justify-center text-gray-400 text-xs',
  uncheckedPlaceholder: 'rounded-full w-5 h-5 flex items-center justify-center text-gray-400 text-xs',
}
```

## Label and placeholders

The labels and placeholder are optional and are useful for adding some extra info to the toggle components, the label placeholder is shown inside the button and the placeholder behind.

### Example

A good example is an AM/PM toggle for a time picker

```html
<t-toggle
  value="PM"
  unchecked-value="AM"
  checked-placeholder="AM"
  unchecked-placeholder="PM"
  checked-label="PM"
  unchecked-label="AM"
  :classes="{
    wrapper: 'bg-gray-200 focus:outline-none focus:shadow-outline rounded-sm border-2',
    wrapperChecked: 'bg-gray-200 focus:outline-none focus:shadow-outline rounded-sm border-2',
    button: 'rounded-sm w-6 h-6 bg-white shadow flex items-center justify-center text-gray-800 text-xs',
    buttonChecked: 'rounded-sm w-6 h-6 bg-white shadow flex items-center justify-center text-gray-800 text-xs',
    checkedPlaceholder: 'rounded-sm w-6 h-6 flex items-center justify-center text-gray-500 text-xs',
    uncheckedPlaceholder: 'rounded-sm w-6 h-6 flex items-center justify-center text-gray-500 text-xs'
  }"
/>
```

<preview>
<t-toggle
  value="PM"
  unchecked-value="AM"
  checked-placeholder="AM"
  unchecked-placeholder="PM"
  checked-label="PM"
  unchecked-label="AM"
  :classes="{
    wrapper: 'bg-gray-200 focus:outline-none focus:shadow-outline rounded-sm border-2',
    wrapperChecked: 'bg-gray-200 focus:outline-none focus:shadow-outline rounded-sm border-2',
    button: 'rounded-sm w-6 h-6 bg-white shadow flex items-center justify-center text-gray-800 text-xs',
    buttonChecked: 'rounded-sm w-6 h-6 bg-white shadow flex items-center justify-center text-gray-800 text-xs',
    checkedPlaceholder: 'rounded-sm w-6 h-6 flex items-center justify-center text-gray-500 text-xs',
    uncheckedPlaceholder: 'rounded-sm w-6 h-6 flex items-center justify-center text-gray-500 text-xs'
  }"
></t-toggle>
</preview>

## Scoped slots

| Slot      | Description                                              |
| --------- | -------------------------------------------------------- |
| default   | Set the content inside the option                        |
| checked   | Set the content in the placeholder of the unchecked side |
| unchecked | Set the content in the placeholder of the checked side   |

### Default slot

Allows you to add content inside the button

| Slot           | type      | Description                 |
| -------------- | --------- | --------------------------- |
| value          | `String`  | The checked value           |
| uncheckedValue | `String`  | The unchecked value         |
| isChecked      | `Boolean` | If the component is checked |

#### Example: 

Add an icon according to the checked/unchecked

```html
<t-toggle>
  <template
    slot="default"
    slot-scope="{ isChecked }"
  >
    <span
      class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity"
      :class="{
        'opacity-100 ease-in duration-200': !isChecked,
        'opacity-0 ease-out duration-100': isChecked,
      }"
    >
      👍
    </span>
    <span
      class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity "
      :class="{
        'opacity-100 ease-in duration-200': isChecked,
        'opacity-0 ease-out duration-100': !isChecked,
      }"
    >
      👎
    </span>
  </template>
</t-toggle>
```

The example above will look like this:

<toggle-default-slot-example></toggle-default-slot-example>

## Events

| Event  | Arguments                                  | Description                                          |
| ------ | ------------------------------------------ | ---------------------------------------------------- |
| input  | `String` (The current value of the toggle) | Emitted every time the value of the `v-model` change |
| change | `String` (The current value of the toggle) | Emitted every time the value of the `v-model` change |
| focus  | `FocusEvent`                               | Emitted when the toggle is focused                   |
| blur   | `FocusEvent`                               | Emitted when the toggle is blurred                   |
