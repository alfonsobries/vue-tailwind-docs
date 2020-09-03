---
title: Radio Group Component
description: VueJs reactive radio input group component with customizable TailwindCSS or any CSS Framework classes.
---

# Radio group component (TRadioGroup)

VueJs reactive radio group component with configurable classes, variants, and most common events. Friendly with utility-first frameworks like TailwindCSS..

<t-radio-group-playground></t-radio-group-playground>

<hr>

## Basic example

```html
<t-radio-group name="example" :options="['Option A', 'Option B', 'Option C']"></t-radio-group>
```

<preview>
<t-radio-group name="example" :options="['Option A', 'Option B', 'Option C']"></t-radio-group>
</preview>

## Props

| Property          | Type               | Default value | Description                                                                                                                                 |
| ----------------- | ------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| value (`v-model`) | `Array`            | `null`        | The value for the radio input element checked                                                                                               |
| id                | `String`           | `undefined`   | HTML attribute                                                                                                                              |
| autofocus         | `Boolean`          | `undefined`   | HTML attribute                                                                                                                              |
| disabled          | `Boolean`          | `undefined`   | HTML attribute                                                                                                                              |
| name              | `String`           | `undefined`   | HTML attribute                                                                                                                              |
| readonly          | `Boolean`          | `undefined`   | HTML attribute                                                                                                                              |
| required          | `Boolean`          | `undefined`   | HTML attribute                                                                                                                              |
| tabindex          | `[String, Number]` | `undefined`   | HTML attribute                                                                                                                              |
| groupWrapperTag   | `String`           | `'div'`       | The HTML tag to use to wrap the whole component                                                                                             |
| wrapperTag        | `String`           | `'label'`     | The HTML tag to use to wrap every single radio input element                                                                                |
| inputWrapperTag   | `String`           | `'span'`      | The HTML tag to use to wrap every single radio input                                                                                  |
| labelTag          | `String`           | `'span'`      | The HTML tag to use for the label of every single radio input                                                                               |
| options           | `[Array, Object]`  | `undefined`   | The options to list (see [options format](#options-format))                                                                                 |
| textAttribute     | `String`           | `undefined`   | Optional attribute from the option to use as the text<br />(see [define the value/text attributes](#define-the-valuetext-attributes))       |
| valueAttribute    | `String`           | `undefined`   | Optional attribute to use as the value of the `option` tag <br />(see [define the value/text attributes](#define-the-valuetext-attributes)) |
| classes           | `Object`           | `{}`          | The default CSS classes                                                                                                                     |
| fixedClasses      | `Object`           | `{}`          | Fixed CSS classes that will be merged with the active set of classes                                                                        |
| variants          | `Object`           | `undefined`   | The different variants of classes the component have                                                                                        |
| variant           | `[String, Object]` | `undefined`   | The variant that will be used                                                                                                               |


### Classes for component

When the input has the wrapped setting, the classes, variants, etc. need to be an object with the following properties:

| Property            | Description                                                                                    |
| ------------------- | ---------------------------------------------------------------------------------------------- |
| groupWrapper        | Classes for the wrapper of the whole component                                                 |
| wrapper             | Classes for the `label` HTML tag that wraps a single radio input element                       |
| wrapperChecked      | Classes to apply to the wrapper when the radio input is checked (optional)               |
| inputWrapper        | Classes for the `span` that wraps the radio input                                        |
| inputWrapperChecked | Classes to apply to the inputWrapper when the radio input is checked (optional)          |
| label               | Classes for the `label` that wraps the label prop                                              |
| labelChecked        | Classes for the `label` that wraps the label prop when radio input is checked (optional) |
| input               | Classes for the radio input                                                              |

*The "Checked" attributes are optional.

#### Example

```js
const settings = {
  TRadioGroup: {
    classes: {
      groupWrapper: 'flex flex-col',
      label: 'text-sm uppercase mx-2 text-gray-700',
      input: 'form-radio input transition duration-150 ease-in-out',
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

Vue.use(VueTailwind, settings)
```

If you use the settings in the example above the component will be rendered like this:

<preview>
  <t-radio-group name="example" :classes="{
    groupWrapper: 'flex flex-col',
    label: 'text-sm uppercase mx-2 text-gray-700',
    input: 'form-radio input transition duration-150 ease-in-out',
    inputWrapper: 'inline-flex',
    wrapper: 'flex items-center',
  }" :options="['Option A', 'Option B', 'Option C']"></t-radio-group>
  
</preview>

## Options format

The component accepts the options in different formats:

### Array of objects



```html
<!-- Value, text attributes (preferred default) -->
<t-radio-group :options="[{ value: 1, text: 'Option 1' }, { value: 2, text: 'Option 2' }]" name="radio" />
<!-- id instead of value as attribute -->
<t-radio-group :options="[{ id: 1, text: 'Option 1' }, { id: 2, text: 'Option 2' }]"  name="radio" />
<!-- label instead of text as attribute -->
<t-radio-group :options="[{ value: 1, label: 'Option 1' }, { value: 2, label: 'Option 2' }]"  name="radio" />

<!-- All the examples above will render: -->
<div class="">
  <label for="radio-1" class="">
    <span class="">
      <input id="radio-1" value="1" type="radio" name="radio" class="">
    </span>
    <span class="">Option 1</span>
  </label>
  <label for="radio-2" class="">
    <span class="">
      <input id="radio-2" value="2" type="radio" name="radio" class="">
    </span>
    <span class="">Option 2</span>
  </label>
</div>
```

### Object with value:text pairs
```html
<t-radio-group :options="{ A: 'Option A', B: 'Option B', C: 'Option C' }" name="radio" />

<!-- Will Render: -->
<div class="">
  <label for="radio-a" class="">
    <span class="">
      <input id="radio-a" value="A" type="radio" name="radio" class="">
    </span>
    <span class="">Option A</span>
  </label>
  <label for="radio-b" class="">
    <span class="">
      <input id="radio-b" value="B" type="radio" name="radio" class="">
    </span>
    <span class="">Option B</span>
  </label>
  <label for="radio-c" class="">
    <span class="">
      <input id="radio-c" value="C" type="radio" name="radio" class="">
    </span>
    <span class="">Option C</span>
  </label>
</div>
```

### Array of strings
```html
<t-radio-group :options="['Red', 'Blue', 'Yellow']" name="radio" />

<!-- Will Render: -->
<div class="">
  <label for="radio-red" class="">
    <span class="">
      <input id="radio-red" value="red" type="radio" name="radio" class="">
    </span>
    <span class="">Red</span>
  </label>
  <label for="radio-blue" class="">
    <span class="">
      <input id="radio-blue" value="blue" type="radio" name="radio" class="">
    </span>
    <span class="">Blue</span>
  </label>
  <label for="radio-yellow" class="">
    <span class="">
      <input id="radio-yellow" value="yellow" type="radio" name="radio" class="">
    </span>
    <span class="">Yellow</span>
  </label>
</div>
```
### Array of numbers
```html
<t-radio-group :options="[18, 19, 20]" name="radio" />

<!-- Will Render: -->
<div class="">
  <label for="radio-18" class="">
    <span class="">
      <input id="radio-18" value="18" type="radio" name="radio" class="">
    </span>
    <span class="">18</span>
  </label>
  <label for="radio-19" class="">
    <span class="">
      <input id="radio-19" value="19" type="radio" name="radio" class="">
    </span>
    <span class="">19</span>
  </label>
  <label for="radio-20" class="">
    <span class="">
      <input id="radio-20" value="20" type="radio" name="radio" class="">
    </span>
    <span class="">20</span>
  </label>
</div>
```

### Define the value/text attributes
```html
<t-radio-group
  name="radio"
  :options="[
    { key: 'A', description: 'One option' },
    { key: 'B', description: 'Another option' },
    { key: 'C', description: 'One more' },
  ]"
  value-attribute="key"
  text-attribute="description"
/>

<!-- Will Render: -->
<div class="">
  <label for="radio-a" class="">
    <span class="">
      <input id="radio-a" value="a" type="radio" name="radio" class="">
    </span>
    <span class="">One option</span>
  </label>
  <label for="radio-b" class="">
    <span class="">
      <input id="radio-b" value="b" type="radio" name="radio" class="">
    </span>
    <span class="">Another option</span>
  </label>
  <label for="radio-c" class="">
    <span class="">
      <input id="radio-c" value="c" type="radio" name="radio" class="">
    </span>
    <span class="">One more</span>
  </label>
</div>
```

## Events

| Event  | Arguments                                             | Description                                          |
| ------ | ----------------------------------------------------- | ---------------------------------------------------- |
| input  | `String` (The current value of the radio input group) | Emitted every time the value of the `v-model` change |
| change | `String` (The current value of the radio input group) | Emitted every time the value of the `v-model` change |
| focus  | `FocusEvent`                                          | Emitted when the any of the options are focused      |
| blur   | `FocusEvent`                                          | Emitted when the any of the options are blurred      |


## Default slot

The label of every single option can be changed by using the default slot, check this example:

```html
I am:
<t-radio-group :options="['Angry', 'Happy', 'Cool']" name="label-examle">
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
</t-radio-group>
```

<radio-group-label-slot-example></radio-group-label-slot-example>