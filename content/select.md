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

## @TODO

## Props

| Property    | Type                    | Default value     |
| ----------- | ----------------------- | ----------------- |
| id          | String                  | `undefined`       |
| autofocus   | Boolean                 | `undefined`       |
| disabled    | Boolean                 | `undefined`       |
| name        | String                  | `undefined`       |
| readonly    | Boolean                 | `undefined`       |
| required    | Boolean                 | `undefined`       |
| tabindex    | String / Number         | `undefined`       |
| placeholder | String                  | `undefined`       |
| rows        | String  / Number        | `undefined`       |
| maxlength   | String / Number         | `undefined`       |
| classes     | String / Object / Array | `'form-textarea'` |
| variants    | Object                  | `undefined`       |
| variant     | String / Object         | `undefined`       |

## Events

| Event		| Arguments 									| Description 	|
|---		|---											|---			|
| input		| `String` (The current value of the textarea)	| Emitted every time the value of the `v-model` change |
| change	| `String` (The current value of the textarea)	| Emitted when the textarea is blurred and the value was changed since it was focused |
| focus		| `FocusEvent`									| Emitted when the textarea is focused	|
| blur		| `FocusEvent`									| Emitted when the textarea is blurred	|
| keyup		| `KeyboardEvent`									| Emitted when on the textarea keyup event	|
| keydown	| `KeyboardEvent`									| Emitted when on the textarea keydown event	|