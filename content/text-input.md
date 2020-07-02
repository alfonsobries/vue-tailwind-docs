---
title: Text input
description: VueJs reactive text input with customizable Tailwind or any Css Framework classes.
---

# Text input (TInput)

VueJs reactive `<input />` with configurable classes, variants, and most common events.

<t-input-playground></t-input-playground>

<hr>


## Basic example

```html
<t-input value="Hello world" name="my-input" variant="demo" />
```

<preview>
  <t-input value="Hello world" name="my-input" variant="demo" />
</preview>

## Props

| Property          | Type                      | Default value  |
| ----------------- | ------------------------- | -------------- |
| value (`v-model`) | `[String, Number]`        | `undefined`    |
| id                | `String`                  | `undefined`    |
| autocomplete      | `String`                  | `undefined`    |
| autofocus         | `Boolean`                 | `undefined`    |
| disabled          | `Boolean`                 | `undefined`    |
| max               | `[String, Number]`        | `undefined`    |
| maxlength         | `[String, Number]`        | `undefined`    |
| min               | `[String, Number]`        | `undefined`    |
| minlength         | `[String, Number]`        | `undefined`    |
| multiple          | `Boolean`                 | `undefined`    |
| name              | `String`                  | `undefined`    |
| pattern           | `String`                  | `undefined`    |
| placeholder       | `String`                  | `undefined`    |
| readonly          | `Boolean`                 | `undefined`    |
| required          | `Boolean`                 | `undefined`    |
| tabindex          | `[String, Number]`        | `undefined`    |
| type              | `String`                  | `'text'`       |
| classes           | `[String, Object, Array]` | `'form-input'` |
| fixedClasses      | `[String, Object, Array]` | `undefined`    |
| variants          | `Object`                  | `undefined`    |
| variant           | `[String, Object]`        | `undefined`    |

## Events

| Event   | Arguments                                 | Description                                                                             |
| ------- | ----------------------------------------- | --------------------------------------------------------------------------------------- |
| input   | `String` (The current value of the input) | Emitted every time the value of the `v-model` change                                    |
| change  | `String` (The current value of the input) | Emitted when the input is blurred and the value was changed since last time was focused |
| focus   | `FocusEvent`                              | Emitted when the input is focused                                                       |
| blur    | `FocusEvent`                              | Emitted when the input is blurred                                                       |
| keyup   | `KeyboardEvent`                           | Emitted when on the input keyup event                                                   |
| keydown | `KeyboardEvent`                           | Emitted when on the input keydown event                                                 |
