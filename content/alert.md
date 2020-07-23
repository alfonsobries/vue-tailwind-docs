---
title: Alert Component
description: VueJs Alert component with configurable classes and infinite variants. Friendly with utility-first frameworks like TailwindCSS.
---

# Alert (TAlert)

VueJs Alert component with configurable classes and infinite variants. Friendly with utility-first frameworks like TailwindCSS.

<t-alert-playground></t-alert-playground>

<hr>


## Basic example

```html
<t-alert variant="error" show>
  Something goes wrong
</t-alert>
```


<preview>
  <t-alert variant="error" show>
    Something goes wrong
  </t-alert>
</preview>

## Props

| Property     | Type               | Default value        | Description                                           |
| ------------ | ------------------ | -------------------- | ----------------------------------------------------- |
| tagName      | `String`           | `'div'`              | The tag used as wrapper                               |
| bodyTagName  | `String`           | `'div'`              | The tag that wraps the alert text                     |
| dismissible  | `Boolean`          | `true`               | If the alert can be closed and has close button       |
| show         | `Boolean`          | `false`              | If the alert should be shown                          |
| timeout      | `Number`           | `undefined`          | Time in milliseconds before the alert is auto hidden  |
| classes      | `Object`           | `{...}`  (see below) | The default CSS classes                               |
| fixedClasses | `Object`           | `{...}`  (see below) | The default CSS Fixed classes shared for all variants |
| variants     | `Object`           | `undefined`          | The different variants of classes the component have  |
| variant      | `[String, Object]` | `undefined`          | The variant that should be used                       |

## Classes and variants format

This component expects an object with classes named after every child element.

The properties in that object are the following:

| Property  | Description           |
| --------- | --------------------- |
| wrapper   | Wrapper of the alert  |
| body      | Wrapper of the text   |
| close     | Close button          |
| closeIcon | Close button svg icon |

### Example

```js
{
  fixedClasses: {
    wrapper: 'rounded p-4 flex text-sm border-l-4',
    body: 'flex-grow',
    close: 'ml-4 rounded',
    closeIcon: 'h-5 w-5 fill-current'
  },
  classes: {
    wrapper: 'bg-blue-100 border-blue-500',
    body: 'text-blue-700',
    close: 'text-blue-700 hover:text-blue-500 hover:bg-blue-200',
    closeIcon: 'h-5 w-5 fill-current'
  },
  variants: {
    danger: {
      wrapper: 'bg-red-100 border-red-500',
      body: 'text-red-700',
      close: 'text-red-700 hover:text-red-500 hover:bg-red-200'
    },
    success: {
      wrapper: 'bg-green-100 border-green-500',
      body: 'text-green-700',
      close: 'text-green-700  hover:text-green-500 hover:bg-green-200'
    }
  }
}
```

## Events

| Event  | Arguments | Description                     |
| ------ | --------- | ------------------------------- |
| shown  | -         | Emitted when the alert is shown |
| hidden | -         | Emitted when alert is hidden    |

## Slots

| Slot    | Description                       |
| ------- | --------------------------------- |
| default | Content of the alert              |
| close   | Content of the dismiss button |
