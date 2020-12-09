---
title: Text Input Component
description: VueJs reactive text input component with customizable TailwindCSS or any CSS Framework classes.
---

# Text input (TInput)

VueJs reactive `<input />` component with configurable classes, variants, and most common events. Friendly with utility-first frameworks like TailwindCSS.

<t-input-playground></t-input-playground>

<hr>


## Basic example

```html
<t-input value="Hello world" name="my-input" />
```

<preview>
  <t-input value="Hello world" name="my-input" />
</preview>

## Props

| Property          | Type                      | Default value |
| ----------------- | ------------------------- | ------------- |
| value (`v-model`) | `[String, Number]`        | `undefined`   |
| id                | `String`                  | `undefined`   |
| autocomplete      | `String`                  | `undefined`   |
| autofocus         | `Boolean`                 | `undefined`   |
| disabled          | `Boolean`                 | `undefined`   |
| max               | `[String, Number]`        | `undefined`   |
| maxlength         | `[String, Number]`        | `undefined`   |
| min               | `[String, Number]`        | `undefined`   |
| minlength         | `[String, Number]`        | `undefined`   |
| multiple          | `Boolean`                 | `undefined`   |
| name              | `String`                  | `undefined`   |
| pattern           | `String`                  | `undefined`   |
| placeholder       | `String`                  | `undefined`   |
| readonly          | `Boolean`                 | `undefined`   |
| required          | `Boolean`                 | `undefined`   |
| tabindex          | `[String, Number]`        | `undefined`   |
| type              | `String`                  | `'text'`      |
| classes           | `[String, Object, Array]` | ...           |
| fixedClasses      | `[String, Object, Array]` | `undefined`   |
| variants          | `Object`                  | `undefined`   |
| variant           | `[String, Object]`        | `undefined`   |


#### Default value of the *classes* prop:

```css
block w-full px-3 py-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed
```

## Events

| Event   | Arguments                                 | Description                                                                              |
| ------- | ----------------------------------------- | ---------------------------------------------------------------------------------------- |
| input   | `String` (The current value of the input) | Emitted every time the value of the `v-model` change                                     |
| change  | `String` (The current value of the input) | Emitted when the input is blurred and the value changed since the last time it has focus |
| focus   | `FocusEvent`                              | Emitted when the input is focused                                                        |
| blur    | `FocusEvent`                              | Emitted when the input is blurred                                                        |
| keyup   | `KeyboardEvent`                           | Emitted on the input keyup event                                                         |
| keydown | `KeyboardEvent`                           | Emitted on the input keydown event                                                       |
