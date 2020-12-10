---
title: Textarea Component
description: VueJs reactive textarea component with customizable TailwindCSS or any CSS Framework classes.
---

# Textarea (TTextarea)

VueJs reactive `<textarea></textarea>` component with configurable classes, variants, and most common events. Friendly with utility-first frameworks like TailwindCSS..

<t-textarea-playground></t-textarea-playground>

<hr>

## Basic example

```html
<t-textarea value="Hello world" name="my-textarea" />
```

<preview>
  <t-textarea value="Hello world" name="my-input" />
</preview>

## Props

| Property          | Type                      | Default value |
| ----------------- | ------------------------- | ------------- |
| value (`v-model`) | `[String, Number]`        | `undefined`   |
| id                | `String`                  | `undefined`   |
| autocomplete      | `String`                  | `undefined`   |
| autofocus         | `Boolean`                 | `undefined`   |
| disabled          | `Boolean`                 | `undefined`   |
| maxlength         | `[String, Number]`        | `undefined`   |
| minlength         | `[String, Number]`        | `undefined`   |
| multiple          | `Boolean`                 | `undefined`   |
| name              | `String`                  | `undefined`   |
| pattern           | `String`                  | `undefined`   |
| placeholder       | `String`                  | `undefined`   |
| readonly          | `Boolean`                 | `undefined`   |
| required          | `Boolean`                 | `undefined`   |
| rows              | `String`                  | `undefined`   |
| cols              | `String`                  | `undefined`   |
| tabindex          | `[String, Number]`        | `undefined`   |
| type              | `String`                  | `'text'`      |
| wrap              | `String`                  | `'soft'`      |
| classes           | `[String, Object, Array]` | ...           |
| fixedClasses      | `[String, Object, Array]` | `undefined`   |
| variants          | `Object`                  | `undefined`   |
| variant           | `[String, Object]`        | `undefined`   |

#### Default value of the *classes* prop:

```css
block w-full px-3 py-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50  disabled:opacity-50 disabled:cursor-not-allowed
```


## Events

| Event   | Arguments                                    | Description                                                                                 |
| ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------- |
| input   | `String` (The current value of the textarea) | Emitted every time the value of the `v-model` change                                        |
| change  | `String` (The current value of the textarea) | Emitted when the textarea is blurred and the value changed since the last time it has focus |
| focus   | `FocusEvent`                                 | Emitted when the textarea is focused                                                        |
| blur    | `FocusEvent`                                 | Emitted when the textarea is blurred                                                        |
| keyup   | `KeyboardEvent`                              | Emitted on the textarea keyup event                                                         |
| keydown | `KeyboardEvent`                              | Emitted on the textarea keydown event                                                       |
