---
title: TailwindCSS Tag Vue Component
description: VueJs custom HTML tag with configurable classes and infinite variants. Friendly with utility-first frameworks like TailwindCSS.
---

# Tag (TTag)

VueJs custom HTML tag with configurable classes and infinite variants. Friendly with utility-first frameworks like TailwindCSS.

<t-tag-playground></t-tag-playground>

<hr>


## Basic example

```html
<t-tag tag-name="h1" variant="h3">
  This is my title
  <t-tag tag-name="span" variant="badge">new</t-tag>
</t-tag>
<t-tag tag-name="p" variant="body">This is the body of my content</t-tag>
```


<tag-basic-example></tag-basic-example>

## Props

| Property     | Type               | Default value | Description                                           |
| ------------ | ------------------ | ------------- | ----------------------------------------------------- |
| tagName      | `String`           | `'div'`       | The HTML tag to use                                   |
| text         | `String`           | `undefined`   | Text inside the HTML tag                              |
| classes      | `Object`           | `undefined`   | The default CSS classes                               |
| fixedClasses | `Object`           | `undefined`   | The default CSS Fixed classes shared for all variants |
| variants     | `Object`           | `undefined`   | The different variants of classes the component have  |
| variant      | `[String, Object]` | `undefined`   | The variant that should be used                       |



## Slots

| Slot    | Description        |
| ------- | ------------------ |
| default | Content of the tag |
