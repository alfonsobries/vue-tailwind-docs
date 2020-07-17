---
title: TailwindCSS Input Group Vue Component
description: VueJs input group component with configurable classes and variants. Friendly with utility-first frameworks like TailwindCSS.
---

# Input Group (TInputGroup)

VueJs input group component with configurable classes and infinite variants. Friendly with utility-first frameworks like TailwindCSS.

<t-input-group-playground></t-input-group-playground>

<hr>


## Playground



## Basic example

```html
<t-input-group
  label="Password"
  feedback="Password must be at least 6 characters long"
>
  <t-input
    variant="error"
    value="password"
    type="password"
  />
</t-input-group>
```

<preview>
  <t-input-group label="Password" feedback="Password must be at least 6 characters long" variant="error">
    <t-input variant="error" value="password" type="password"></t-input>
  </t-input-group>
</preview>

## Props

| Property       | Type               | Default value                                     | Description                                           |
| -------------- | ------------------ | ------------------------------------------------- | ----------------------------------------------------- |
| label          | `String`           | `undefined`                                       | Think as the title of the input group                 |
| description    | `String`           | `undefined`                                       | Description for whats inside the input group          |
| feedback       | `String`           | `undefined`                                       | Like the description but for showing some feedback    |
| sortedElements | `Array`            | `['label', 'default', 'feedback', 'description']` | The elements in the order that will be rendered       |
| classes        | `Object`           | `{...}`  (see below)                              | The default CSS classes                               |
| fixedClasses   | `Object`           | `{...}`  (see below)                              | The default CSS Fixed classes shared for all variants |
| variants       | `Object`           | `undefined`                                       | The different variants of classes the component have  |
| variant        | `[String, Object]` | `undefined`                                       | The variant that should be used                       |


## Classes and variants format

This component expects an object with classes named after every child element.

The properties in that object are the following:

| Property    | Description                    |
| ----------- | ------------------------------ |
| wrapper     | Base input group wrapper class |
| label       | Label classes                  |
| body        | Input wrapper classes          |
| feedback    | Feedback message classes       |
| description | Description message classes   |

### Example

```js
{
  fixedClasses: {
    wrapper: 'mb-4',
    label: 'block uppercase tracking-wide text-xs font-bold mb-1',
    body: '',
    feedback: 'text-sm',
    description: 'text-sm'
  },
  classes: {
    wrapper: '',
    label: '',
    body: '',
    feedback: 'text-gray-500',
    description: 'text-gray-500'
  },
  variants: {
    danger: {
      label: 'text-red-500',
      feedback: 'text-red-500'
    },
    success: {
      label: 'text-green-500',
      feedback: 'text-green-500'
    }
  }
}
```

## Slots

| Slot        | description                        |
| ----------- | ---------------------------------- |
| default     | Content of the input group body    |
| label       | Content of the label               |
| feedback    | Content of the feedback message    |
| description | Content of the description message |
