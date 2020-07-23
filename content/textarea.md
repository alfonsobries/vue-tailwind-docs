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
<t-textarea value="Hello world" name="my-textarea" variant="demo" />
```

<preview>
  <t-textarea value="Hello world" name="my-input" variant="demo" />
</preview>

## Props

| Property     | Type                        | Default value     |
| ------------ | --------------------------- | ----------------- |
| id           | `String`                    | `undefined`       |
| autofocus    | `Boolean`                   | `undefined`       |
| disabled     | `Boolean`                   | `undefined`       |
| name         | `String`                    | `undefined`       |
| readonly     | `Boolean`                   | `undefined`       |
| required     | `Boolean`                   | `undefined`       |
| tabindex     | `[String, Number]`          | `undefined`       |
| placeholder  | `String`                    | `undefined`       |
| rows         | `[String, Number]`          | `undefined`       |
| maxlength    | `[String, Number]` / Number | `undefined`       |
| classes      | `[String, Object, Array]`   | `'form-textarea'` |
| fixedClasses | `[String, Object, Array]`   | `undefined`       |
| variants     | `Object`                    | `undefined`       |
| variant      | `[String, Object]`          | `undefined`       |

## Events

| Event		| Arguments 									| Description 	|
|---		|---											|---			|
| input		| `String` (The current value of the textarea)	| Emitted every time the value of the `v-model` change |
| change	| `String` (The current value of the textarea)	| Emitted when the textarea is blurred and the value was changed since it was focused |
| focus		| `FocusEvent`									| Emitted when the textarea is focused	|
| blur		| `FocusEvent`									| Emitted when the textarea is blurred	|
| keyup		| `KeyboardEvent`									| Emitted when on the textarea keyup event	|
| keydown	| `KeyboardEvent`									| Emitted when on the textarea keydown event	|