---
title: TailwindCSS Checkbox Group Vue Component
description: VueJs reactive Checkbox group component with customizable TailwindCSS or any CSS Framework classes.
---

# Checkbox group component (TCheckboxGroup)

VueJs reactive checkbox group component with configurable classes, variants, and most common events. Friendly with utility-first frameworks like TailwindCSS..

<t-checkbox-group-playground></t-checkbox-group-playground>

<hr>

## Basic example

```html
<t-checkbox-group name="example" :options="['Option A', 'Option B', 'Option C']"></t-checkbox-group>
```

<preview>
<t-checkbox-group name="example" :options="['Option A', 'Option B', 'Option C']"></t-checkbox-group>
</preview>

## Props

| Property          | Type               | Default value | Description                                                                                                                                 |
| ----------------- | ------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| value (`v-model`) | `Array`            | `[]`          | The value for the checkbox element when checked                                                                                             |
| id                | `String`           | `undefined`   | HTML attribute                                                                                                                              |
| autofocus         | `Boolean`          | `undefined`   | HTML attribute                                                                                                                              |
| disabled          | `Boolean`          | `undefined`   | HTML attribute                                                                                                                              |
| name              | `String`           | `undefined`   | HTML attribute                                                                                                                              |
| readonly          | `Boolean`          | `undefined`   | HTML attribute                                                                                                                              |
| required          | `Boolean`          | `undefined`   | HTML attribute                                                                                                                              |
| tabindex          | `[String, Number]` | `undefined`   | HTML attribute                                                                                                                              |
| groupWrapperTag   | `String`           | `'div'`       | The HTML tag to use to wrap the whole component                                                                                             |
| wrapperTag        | `String`           | `'label'`     | The HTML tag to use to wrap every single checkbox element                                                                                   |
| inputWrapperTag   | `String`           | `'span'`      | The HTML tag to use to wrap every single checkbox input                                                                                     |
| labelTag          | `String`           | `'span'`      | The HTML tag to use for the label of every single checkbox                                                                                  |
| options           | `[Array, Object]`  | `undefined`   | The options to list (see [options format](#options-format))                                                                                 |
| textAttribute     | `String`           | `undefined`   | Optional attribute from the option to use as the text<br />(see [define the value/text attributes](#define-the-valuetext-attributes))       |
| valueAttribute    | `String`           | `undefined`   | Optional attribute to use as the value of the `option` tag <br />(see [define the value/text attributes](#define-the-valuetext-attributes)) |
| classes           | `Object`           | `{}`          | The default CSS classes                                                                                                                     |
| fixedClasses      | `Object`           | `{}`          | Fixed CSS classes that will be merged with the active set of classes                                                                        |
| variants          | `Object`           | `undefined`   | The different variants of classes the component have                                                                                        |
| variant           | `[String, Object]` | `undefined`   | The variant that will be used                                                                                                               |


### Classes for component

When the input has the wrapped setting, the classes, variants, etc. need to be an object with the following properties:

| Property            | Description                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------- |
| groupWrapper        | Classes for the wrapper of the whole component                                              |
| wrapper             | Classes for the `label` HTML tag that wraps a single checkbox element                       |
| wrapperChecked      | Classes to apply to the wrapper when the checkbox input is checked (optional)               |
| inputWrapper        | Classes for the `span` that wraps the checkbox input                                        |
| inputWrapperChecked | Classes to apply to the inputWrapper when the checkbox input is checked (optional)          |
| label               | Classes for the `label` that wraps the label prop                                           |
| labelChecked        | Classes for the `label` that wraps the label prop when checkbox input is checked (optional) |
| input               | Classes for the checkbox input                                                              |

*The "Checked" attributes are optional.

#### Example

```js
const theme = {
  TCheckboxGroup: {
    classes: {
      groupWrapper: 'flex flex-col',
      label: 'text-sm uppercase mx-2 text-gray-700',
      input: 'form-checkbox transition duration-150 ease-in-out',
      inputWrapper: 'inline-flex',
      wrapper: 'flex items-center',
      // labelChecked: '',
      // inputWrapperChecked: '',
      // wrapperChecked: '',
    }
    // Variants and fixed classes in the same `object` format ...
  },
  // ...
}

Vue.use(VueTailwind, theme)
```

If you use the settings in the example above the component will be rendered like this:

<preview>
  <t-checkbox-group name="example" :classes="{
    groupWrapper: 'flex flex-col',
    label: 'text-sm uppercase mx-2 text-gray-700',
    input: 'form-checkbox transition duration-150 ease-in-out',
    inputWrapper: 'inline-flex',
    wrapper: 'flex items-center',
  }" :options="['Option A', 'Option B', 'Option C']"></t-checkbox-group>
  
</preview>

## Options format

The component accepts the options in different formats:

### Array of objects

```html
<!-- Value, text attributes (preferred default) -->
<t-checkbox-group :options="[{ value: 1, text: 'Option 1' }, { value: 2, text: 'Option 2' }]" />
<!-- id instead of value as attribute -->
<t-checkbox-group :options="[{ id: 1, text: 'Option 1' }, { id: 2, text: 'Option 2' }]" />
<!-- label instead of text as attribute -->
<t-checkbox-group :options="[{ value: 1, label: 'Option 1' }, { value: 2, label: 'Option 2' }]" />

<!-- All the examples above will render: -->
<div>
  <div>
    <input id="checkbox-field-0" name="checkbox-field" type="checkbox" value="1">
    <label for="checkbox-field-0">Option 1</label>
  </div>
  <div>
    <input id="checkbox-field-1" name="checkbox-field" type="checkbox" value="2">
    <label for="checkbox-field-1">Option 2</label>
  </div>
</div>
```

### Object with value:text pairs
```html
<t-checkbox-group :options="{ A: 'Option A', B: 'Option B', C: 'Option C' }" />

<!-- Will Render: -->
<div>
  <div>
    <input id="checkbox-field-0" name="checkbox-field" type="checkbox" value="A">
    <label for="checkbox-field-0">Option A</label>
  </div>
  <div>
    <input id="checkbox-field-1" name="checkbox-field" type="checkbox" value="B">
    <label for="checkbox-field-1">Option B</label>
  </div>
  <div>
    <input id="checkbox-field-2" name="checkbox-field" type="checkbox" value="C">
    <label for="checkbox-field-2">Option C</label>
  </div>
</div>
```

### Array of strings
```html
<t-checkbox-group :options="['Red', 'Blue', 'Yellow']" />

<!-- Will Render: -->
<div>
  <div>
    <input id="checkbox-field-0" name="checkbox-field" type="checkbox" value="Red">
    <label for="checkbox-field-0">Red</label>
  </div>
  <div>
    <input id="checkbox-field-1" name="checkbox-field" type="checkbox" value="Blue">
    <label for="checkbox-field-1">Blue</label>
  </div>
  <div>
    <input id="checkbox-field-2" name="checkbox-field" type="checkbox" value="Yellow">
    <label for="checkbox-field-2">Yellow</label>
  </div>
</div>
```
### Array of numbers
```html
<t-checkbox-group :options="[18, 19, 20]" />

<!-- Will Render: -->
<div>
  <div>
    <input id="checkbox-field-0" name="checkbox-field" type="checkbox" value="18">
    <label for="checkbox-field-0">18</label>
  </div>
  <div>
    <input id="checkbox-field-1" name="checkbox-field" type="checkbox" value="19">
    <label for="checkbox-field-1">19</label>
  </div>
  <div>
    <input id="checkbox-field-2" name="checkbox-field" type="checkbox" value="20">
    <label for="checkbox-field-2">20</label>
  </div>
</div>
```

### Define the value/text attributes
```html
<t-checkbox-group
  :options="[
    { key: 'A', description: 'One option' },
    { key: 'B', description: 'Another option' },
    { key: 'C', description: 'One more' },
  ]"
  value-attribute="key"
  text-attribute="description"
/>

<!-- Will Render: -->
<div>
  <div>
    <input id="checkbox-field-0" name="checkbox-field" type="checkbox" value="A">
    <label for="checkbox-field-0">One option</label>
  </div>
  <div>
    <input id="checkbox-field-1" name="checkbox-field" type="checkbox" value="B">
    <label for="checkbox-field-1">Another option</label>
  </div>
  <div>
    <input id="checkbox-field-2" name="checkbox-field" type="checkbox" value="C">
    <label for="checkbox-field-2">One more</label>
  </div>
</div>
```

## Events

| Event  | Arguments                                          | Description                                          |
| ------ | -------------------------------------------------- | ---------------------------------------------------- |
| input  | `String` (The current value of the checkbox group) | Emitted every time the value of the `v-model` change |
| change | `String` (The current value of the checkbox group) | Emitted every time the value of the `v-model` change |
| focus  | `FocusEvent`                                       | Emitted when the any of the options are focused      |
| blur   | `FocusEvent`                                       | Emitted when the any of the options are blurred      |


## Default slot

The label of every single option can be changed by using the default slot, check this example:

```html
I am:
<t-checkbox-group :options="['Angry', 'Happy', 'Cool']" name="label-examle">
  <template slot-scope="props">
    <template v-if="props.isChecked">
      <span v-if="props.label === 'Angry'">
        😡
      </span>
      <span v-else-if="props.label === 'Happy'">
        😃
      </span>
      <span v-else-if="props.label === 'Cool'">
        😎
      </span>
    </template>
    <template v-else>
      {{ props.label }}
    </template>
  </template>
</t-checkbox-group>
```

<checkbox-group-label-slot-example></checkbox-group-label-slot-example>