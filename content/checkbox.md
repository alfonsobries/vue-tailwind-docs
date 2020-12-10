---
title: Checkbox Component
description: VueJs reactive Checkbox component with customizable TailwindCSS or any CSS Framework classes.
---

# Checkbox input (TCheckbox)

VueJs reactive `<input type="checkbox" />` component with configurable classes, variants, and most common events. Friendly with utility-first frameworks like TailwindCSS..

<t-checkbox-playground></t-checkbox-playground>

<hr>

## Basic example

```html
<div class="flex">
  <label class="flex items-center">
    <t-checkbox name="options" value="a" checked />
    <span class="ml-2 text-sm">Option A</span>
  </label>
  <label class="flex items-center ml-2">
    <t-checkbox name="options" value="b" />
    <span class="ml-2 text-sm">Option B</span>
  </label>
</div>
```

<checkbox-basic-example></checkbox-basic-example>

## Props

| Property          | Type                                       | Default value | Description                                                                                                  |
| ----------------- | ------------------------------------------ | ------------- | ------------------------------------------------------------------------------------------------------------ |
| value             | `[String, Object, Number, Boolean, Array]` | `true'`       | The value for the checkbox element                                                                           |
| uncheckedValue    | `[String, Object, Number, Boolean, Array]` | `false`       | The value for the checkbox element when unchecked                                                            |
| model (`v-model`) | `[String, Object, Number, Boolean]`        | `undefined`   | The element used for the `v-model`                                                                           |
| checked           | `[Boolean, String]`                        | `false`       | HTML attribute                                                                                               |
| id                | `String`                                   | `undefined`   | HTML attribute                                                                                               |
| autofocus         | `Boolean`                                  | `undefined`   | HTML attribute                                                                                               |
| disabled          | `Boolean`                                  | `undefined`   | HTML attribute                                                                                               |
| name              | `String`                                   | `undefined`   | HTML attribute                                                                                               |
| readonly          | `Boolean`                                  | `undefined`   | HTML attribute                                                                                               |
| required          | `Boolean`                                  | `undefined`   | HTML attribute                                                                                               |
| tabindex          | `[String, Number]`                         | `undefined`   | HTML attribute                                                                                               |
| wrapped           | `Boolean`                                  | `false`       | If set the input will be wrapped in a div within some extra HTML (see [wrapped checkbox](#wrapped-checkbox)) |
| wrapperTag        | `String`                                   | `'label'`     | The HTML tag used to wrap the input when `wrapped` is set to `true`                                          |
| label             | `String`                                   | `undefined`   | When the input is `wrapped` the label is added as sibling of the input                                       |
| labelTag          | `String`                                   | `'span'`      | The HTML tag to use for the label                                                                            |
| classes           | `[String, Array, Object]`                  | ...           | The default CSS classes                                                                                      |
| fixedClasses      | `[String, Array, Object]`                  | `undefined`   | Fixed CSS classes that will be merged with the active set of classes                                         |
| variants          | `Object`                                   | `undefined`   | The different variants of classes the component have                                                         |
| variant           | `[String, Object]`                         | `undefined`   | The variant that will be used                                                                                |

#### Default value of the *classes* prop:

```css
text-blue-500 transition duration-100 ease-in-out border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed
```

## Events

| Event  | Arguments                                    | Description                                          |
| ------ | -------------------------------------------- | ---------------------------------------------------- |
| input  | `String` (The current value of the checkbox) | Emitted every time the value of the `v-model` change |
| change | `String` (The current value of the checkbox) | Emitted every time the value of the `v-model` change |
| focus  | `FocusEvent`                                 | Emitted when the checkbox is focused                 |
| blur   | `FocusEvent`                                 | Emitted when the checkbox is blurred                 |


## Wrapped checkbox

This component accepts the `wrapped` prop that, when set it will add some extra HTML tags that make the component even more flexible.

Remember that the component can set as "wrapped" when installed or by using the `wrapped` prop (see [wrapped inputs](/docs/theming#wrapped-inputs) for more info):

```js
// When installed
const settings = {
  't-checkbox': {
    component: TCheckbox,
    props: {
      wrapped: true,
      // classes, variants, etc...
    }
  }
  // ...
}

Vue.use(VueTailwind, settings)
```


```html
<!-- // Using the wrapped prop -->
<t-checkbox wrapped />
```

A wrapped checkbox input will be rendered like this:

```html
<label class="">
  <span class="">
    <input type="checkbox" class="">
  </span>
  <span class="">Label of the checkbox</span>
</label>
```

### Classes for wrapped input

When the input has the wrapped setting, the classes, variants, etc. need to be an object with the following properties:


| Property            | Description                                                                      |
| ------------------- | -------------------------------------------------------------------------------- |
| wrapper             | Classes for the `label` HTML tag that wraps the whole component                  |
| wrapperChecked      | Classes to apply to the wrapper when the checkbox is checked                     |
| inputWrapper        | Classes for the `span` that wraps the checkbox                                   |
| inputWrapperChecked | Classes to apply to the inputWrapper when the checkbox is checked                |
| input               | Classes for the checkbox                                                         |
| label               | Classes for the `label` that wraps the label prop                                |
| labelChecked        | Classes for the `label` that wraps the label prop when checkbox input is checked |

The "Checked" attributes are optional.

#### Example

```js
const settings = {
  't-checkbox': {
    component: TChexbox,
    props: {
      wrapped: true,
      classes: {
        label: 'text-sm uppercase mx-2 text-gray-700',
        input: 'text-blue-500 transition duration-100 ease-in-out border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed',
        inputWrapper: 'inline-flex',
        wrapper: 'flex items-center',
        // labelChecked: '',
        // inputWrapperChecked: '',
        // wrapperChecked: '',
      }
      // Variants and fixed classes in the same `object` format ...
    }
  },
  // ...
}

Vue.use(VueTailwind, settings)
```

If you use the settings in the example above the component will be rendered like this:

<preview>
  <t-checkbox name="example-b" :classes="{
    label: 'text-sm uppercase mx-2 text-gray-700',
    input: 'text-blue-500 transition duration-100 ease-in-out border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed',
    inputWrapper: 'inline-flex',
    wrapper: 'flex items-center',
  }" label="Option A" wrapped ></t-checkbox>
  <t-checkbox name="example-b" :classes="{
    label: 'text-sm uppercase mx-2 text-gray-700',
    input: 'text-blue-500 transition duration-100 ease-in-out border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed',
    inputWrapper: 'inline-flex',
    wrapper: 'flex items-center',
  }" label="Option B" wrapped></t-checkbox>
</preview>

### Use a label

When the TCheckbox component has the `wrapped` setting set it accepts a label prop that is added as a sibling of the `input`

```html
<t-checkbox wrapped label="my own option" name="example-2">
<t-checkbox wrapped label="my own option 2" name="example-2">
```

<preview>
<t-checkbox wrapped label="my own option" name="example-2"></t-checkbox>
<t-checkbox wrapped label="my own option 2" name="example-2"></t-checkbox>
</preview>

#### Label slot

The label can be also added by using the default slot.

```html
I am: 
<t-checkbox wrapped name="example-3">
😡
</t-checkbox>
<t-checkbox wrapped name="example-3">
😀
</t-checkbox>
```

<preview>
I am: 
<t-checkbox wrapped name="example-3">
😡
</t-checkbox>
<t-checkbox wrapped name="example-3">
😀
</t-checkbox>
</preview>
