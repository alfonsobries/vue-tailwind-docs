---
title: Button Component
description: VueJs reactive button component with customizable TailwindCSS or any CSS Framework classes.
---

# Button (TButton)

VueJs reactive `<button />` component with configurable classes, variants, and most common events. Friendly with utility-first frameworks like TailwindCSS..

<t-button-playground></t-button-playground>

<hr>

## Basic example

```html
<t-button>Example button</t-button>
```

<preview>
  <t-button>Example button</t-button>
</preview>


## Props


| Property          | Type                      | Default value  | Description                                                          |
| ----------------- | ------------------------- | -------------- | -------------------------------------------------------------------- |
| value (`v-model`) | `[String, Number]`        | `undefined`    | HTML attribute                                                       |
| id                | `String`                  | `undefined`    | HTML attribute                                                       |
| name              | `String`                  | `undefined`    | HTML attribute                                                       |
| disabled          | `Boolean`                 | `undefined`    | HTML attribute                                                       |
| readonly          | `Boolean`                 | `undefined`    | HTML attribute                                                       |
| autofocus         | `Boolean`                 | `undefined`    | HTML attribute                                                       |
| required          | `Boolean`                 | `undefined`    | HTML attribute                                                       |
| autocomplete      | `String`                  | `undefined`    | HTML attribute                                                       |
| type              | `String`                  | `undefined`    | HTML attribute                                                       |
| tabindex          | `[String, Number]`        | `undefined`    | HTML attribute                                                       |
| text              | `String`                  | `undefined`    | Text of the button (when no slot used)                               |
| tagName           | `String`                  | `'button'`     | HTML Tag to use for the component `button` or `a`                    |
| href              | `String`                  | `null`         | Href attribute for `a`                                               |
| classes           | `[String, Array, Object]` | `'form-radio'` | The default CSS classes                                              |
| fixedClasses      | `[String, Array, Object]` | `undefined`    | Fixed CSS classes that will be merged with the active set of classes |
| variants          | `Object`                  | `undefined`    | The different variants of classes the component have                 |
| variant           | `[String, Object]`        | `undefined`    | The variant that will be used                                        |


*Note:* when the `href` prop is set it changes the tag name to `a`

## VueRouter compatibility

This button is compatible with `vue-router`, you just need to define the `to` prop and if the `router-link` or `nuxt-link` component is available it will render the component.

### RouterLink Props

When the component is rendered as RouterLink you can use the properties of that component:

| Property         | Type               | Default value                |
| ---------------- | ------------------ | ---------------------------- |
| to               | `[String, Object]` | `undefined`                  |
| replace          | `Boolean`          | `false`                      |
| append           | `Boolean`          | `false`                      |
| exact            | `Boolean`          | `false`                      |
| activeClass      | `String`           | `'router-link-active'`       |
| exactActiveClass | `String`           | `'router-link-exact-active'` |


## InertiaJs compatibility

This button is compatible with `inertia-link` and will be converted if the `href` prop is set and the `InertiaLink` component is available.

### InertiaLink Props

When the component is rendered as RouterLink you can use the properties of that component:

| Property       | Type      | Default value |
| -------------- | --------- | ------------- |
| method         | `String`  | `null`        |
| data           | `Object`  | `null`        |
| preserveState  | `Boolean` | `false`       |
| preserveScroll | `Boolean` | `false`       |



## Events

| Event | Arguments  | Description                        |
| ----- | ---------- | ---------------------------------- |
| focus | FocusEvent | Emitted when the button is focused |
| blur  | FocusEvent | Emitted when the button is blurred |
| click | MouseEvent | Emitted when the button is clicked |
