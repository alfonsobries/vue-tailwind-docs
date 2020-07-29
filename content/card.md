---
title: Card Component
description: VueJs Card component with configurable classes and infinite variants. Friendly with utility-first frameworks like TailwindCSS.
---

# Card (TCard)

VueJs Card component with configurable classes and infinite variants. Friendly with utility-first frameworks like TailwindCSS.

<t-card-playground></t-card-playground>

<hr>


## Basic example

```html
<t-card
  header="Title of the card"
>
  Content of the card.
  
  <template v-slot:footer>
    <div class="flex justify-between">
      <t-button type="button">
        Cancel
      </t-button>
      <t-button type="button">
        Ok
      </t-button>
    </div>
  </template>
</t-card>
```

<card-basic-example></card-basic-example>

## Props

| Property     | Type               | Default value | Description                                                       |
| ------------ | ------------------ | ------------- | ----------------------------------------------------------------- |
| tagName      | `String`           | `div`         | HTML tag that wraps the card component                            |
| header       | `String`           | `undefined`   | The content of the header                                         |
| footer       | `String`           | `undefined`   | The content of the footer                                         |
| noBody       | `Boolean`          | `false`       | If set the modal will be rendered without body, header and footer |
| fixedClasses | `Object`           | `undefined`   | The default CSS Fixed classes shared for all variants             |
| classes      | `Object`           | `undefined`   | The default CSS classes                                           |
| variants     | `Object`           | `undefined`   | The different variants of classes the component have              |
| variant      | `[String, Object]` | `undefined`   | The variant that should be used                                   |

## Classes and variants format

This component expects an object with classes named after every child element.

The properties in that object are the following:

| Property | Description              |
| -------- | ------------------------ |
| wrapper  | Div that wraps the modal |
| body     | Body wrapper class       |
| header   | Header wrapper class     |
| footer   | Footer wrapper class     |

## Slots

| Slot    | description                 |
| ------- | --------------------------- |
| default | Content of the modal        |
| header  | Content of the header       |
| footer  | Content of the footer       |
| close   | Content of the close button |
