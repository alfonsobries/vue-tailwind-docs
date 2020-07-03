---
title: TailwindCSS select Vue Component
description: VueJs reactive select component with customizable TailwindCSS or any CSS Framework classes.
---

# Select (TSelect)

VueJs reactive `<select></select>` component with configurable classes, variants, and most common events. Friendly with utility-first frameworks like TailwindCSS..

<t-select-playground></t-select-playground>

<hr>

## Basic example

```html
<t-select placeholder="Select an option" :options="['Option A', 'Option B', 'Option C']" variant="demo" />
```

<preview>
  <t-select placeholder="Select an option" :options="['Option A', 'Option B', 'Option C']" variant="demo" />
</preview>

## Props

| Property       | Type                      | Default value   | Description                                                                                                                                 |
| -------------- | ------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| id             | `String`                  | `undefined`     | HTML attribute                                                                                                                              |
| autofocus      | `Boolean`                 | `undefined`     | HTML attribute                                                                                                                              |
| disabled       | `Boolean`                 | `undefined`     | HTML attribute                                                                                                                              |
| name           | `String`                  | `undefined`     | HTML attribute                                                                                                                              |
| readonly       | `Boolean`                 | `undefined`     | HTML attribute                                                                                                                              |
| required       | `Boolean`                 | `undefined`     | HTML attribute                                                                                                                              |
| tabindex       | `[String, Number]`        | `undefined`     | HTML attribute                                                                                                                              |
| placeholder    | `String`                  | `undefined`     | HTML attribute                                                                                                                              |
| multiple       | `Boolean`                 | `undefined`     | HTML attribute                                                                                                                              |
| options        | `[Array, Object]`         | `undefined`     | The options of the select (see [options format](#options-format))                                                                           |
| textAttribute  | `String`                  | `undefined`     | Optional attribute from the option to use as the text<br />(see [define the value/text attributes](#define-the-valuetext-attributes))       |
| valueAttribute | `String`                  | `undefined`     | Optional attribute to use as the value of the `option` tag <br />(see [define the value/text attributes](#define-the-valuetext-attributes)) |
| wrapped        | `Boolean`                 | `undefined`     | If set the input will be wrapped in a div within a svg icon (see [wrap select](#wrap-select))
| classes        | `[String, Object, Array]` | `'form-select'` | The default CSS classes                                                                                                                     |
| fixedClasses   | `[String, Object, Array]` | `undefined`     | Fixed CSS classes that will be merged with the active set of classes                                                                        |
| variants       | `Object`                  | `undefined`     | The different variants of classes the component have                                                                                        |
| variant        | `[String, Object]`        | `undefined`     | The variant that will be used                                                                                                               |

## Options format

This component accepts the `options` in different formats:

### Array of objects

```html
<!-- `value`, `text` attributes (Preferred) -->
<t-select :options="[
  { value: 1, text: 'Option 1' },
  { value: 2, text: 'Option 2' }
]" />
<!-- `id` instead of `value` as attribute -->
<t-select :options="[
  { id: 1, text: 'Option 1' },
  { id: 2, text: 'Option 2' }
]" />
<!-- `label` instead of `text` as attribute -->
<t-select :options="[
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' }
]" />

<!-- All the examples above will render: -->
<select>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

### Object with value:text pairs
```html
<t-select :options="{
  A: 'Option A',
  B: 'Option B',
  C: 'Option C'
}" />

<!-- Will Render: -->
<select>
  <option value="A">Option A</option>
  <option value="B">Option B</option>
  <option value="C">Option C</option>
</select>
```

### Array of strings
```html
<t-select :options="['Red', 'Blue', 'Yellow']" />

<!-- Will Render: -->
<select>
  <option value="Red">Red</option>
  <option value="Blue">Blue</option>
  <option value="Yellow">Yellow</option>
</select>
```
### Array of numbers
```html
<t-select :options="[18, 19, 20]" />

<!-- Will Render: -->
<select>
  <option value="18">18</option>
  <option value="19">19</option>
  <option value="20">20</option>
</select>
```

## Define the value/text attributes

When your options come in a format that is not handled by the component you can define which attributes you want to use as the `value` and the `text` of every option tag.

Example:

Consider the following example where the options are an array of roles where the `role` should be the value of the option and the nested `name` inside the `details` attribute should be the text:

<meh-tip>
One alternative is to `map` the options to match one of the accepted formats:
</meh-tip>

```html
<t-select
  :options="[
    { role: 'root', details: { name: 'Root', expires: '2020-20-12' }, active: true },
    { role: 'admin', details: { name: 'Root', expires: '2020-20-12' }, active: true },
    { role: 'user', details: { name: 'Root', expires: '2020-20-12' }, active: true },
  ].map((option) => ({ value: option.role, text: option.details.name }))"
/>
```

<ok-tip>
A better approach is to use the <strong>valueAttribute</strong> and <strong>textAttribute</strong>.
</ok-tip>

```html
<t-select
  :options="[
    { role: 'root', details: { name: 'Root', expires: '2020-20-12' }, active: true },
    { role: 'admin', details: { name: 'Root', expires: '2020-20-12' }, active: true },
    { role: 'user', details: { name: 'Root', expires: '2020-20-12' }, active: true },
  ]"
  value-attribute="role"
  text-attribute="details.name"  
/>
```

<tip>
Notice that in the example above we are using dot notation to get a nested attribute in the option for the `textAttribute`. That notation also works for the `valueAttribute`.
</tip>

## Wrap select

@TODO @TODO @TODO @TODO @TODO @TODO @TODO @TODO @TODO @TODO @TODO @TODO @TODO @TODO @TODO @TODO

## Events

| Event  | Arguments                                  | Description                                          |
| ------ | ------------------------------------------ | ---------------------------------------------------- |
| input  | `String` (The current value of the select) | Emitted every time the value of the `v-model` change |
| change | `String` (The current value of the select) | Emitted when the select value change                 |
| focus  | `FocusEvent`                               | Emitted when the select is focused                   |
| blur   | `FocusEvent`                               | Emitted when the select is blurred                   |