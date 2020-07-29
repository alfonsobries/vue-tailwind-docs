---
title: Pagination Component
description: VueJs pagination component with configurable classes and infinite variants. Friendly with utility-first frameworks like TailwindCSS.
---

# Pagination (TPagination)

VueJs Pagination component with configurable classes and infinite variants. Friendly with utility-first frameworks like TailwindCSS.

<t-pagination-playground></t-pagination-playground>

<hr>


## Basic example

```html
<t-pagination
  :total-items="totalRows"
  :per-page="perPage"
  :limit="limit"
  :disabled="disabled"
  v-model="currentPage"
/>
```

<preview>
<t-pagination
  :total-items="200"
  :per-page="20"
  :limit="5"
  :value="2"
/>
</preview>

## Props

| Property              | Type               | Default value        | Description                                                           |
| --------------------- | ------------------ | -------------------- | --------------------------------------------------------------------- |
| value                 | `Number`           | `null`               | The current page number (`v-model`) of the component                  |
| tagName               | `String`           | `'ul'`               | The tag name that will wrapper the component                          |
| elementTagName        | `String`           | `'li'`               | The tag name that will wrapper every button in the pagination         |
| disabled              | `Boolean`          | `false`              | If set the pagination buttons will be disabled                        |
| perPage               | `Number`           | `20`                 | Number of items that every page represents                            |
| limit                 | `Number`           | `5`                  | How many buttons (including the ellipsis if shown) should be rendered |
| totalItems            | `Number`           | `0`                  | How many items are in the list                                        |
| prevLabel             | `String`           | &lsaquo;             | Prev button label                                                     |
| nextLabel             | `String`           | &rsaquo;             | Next button label                                                     |
| firstLabel            | `String`           | &laquo;              | First button label                                                    |
| lastLabel             | `String`           | &raquo;              | Last button label                                                     |
| ellipsisLabel         | `String`           | &hellip;             | Ellipsis control label                                                |
| hideFirstLastControls | `Boolean`          | `false`              | If set will hide the first and last controls                          |
| hidePrevNextControls  | `Boolean`          | `false`              | If set will hide the prev and next controls                           |
| hideEllipsis          | `Boolean`          | `false`              | If set will hide ellipsis control                                     |
| fixedClasses          | `Object`           | `undefined`          | The default CSS Fixed classes shared for all variants                 |
| classes               | `Object`           | `{...}`  (see below) | The default CSS classes                                               |
| variants              | `Object`           | `undefined`          | The different variants of classes the component have                  |
| variant               | `[String, Object]` | `undefined`          | The variant that should be used                                       |

## Classes and variants format

This component expects an object with classes named after every child element.

The properties in that object are the following:

| Property        | Description                                      |
| --------------- | ------------------------------------------------ |
| wrapper         | The tag name that wraps the component            |
| element         | A single page element                            |
| disabledElement | A single page element when component is disabled |
| ellipsisElement | The element with the ellipsis                    |
| button          | The button                                       |
| activeButton    | The button when is active                        |
| disabledButton  | The butotn when is disabled                      |
| ellipsis        | The ellipsis button                              |


### Default classes

```js
{
  wrapper: 'table border-collapse text-center bg-white mx-auto mt-2',
  element: 'w-8 h-8 border table-cell',
  disabledElement: 'w-8 h-8 border table-cell',
  ellipsisElement: 'w-8 h-8 border hidden md:table-cell',
  activeButton: 'bg-gray-300 w-full h-full',
  disabledButton: 'opacity-25 w-full h-full cursor-not-allowed',
  button: 'hover:bg-gray-200 w-full h-full',
  ellipsis: '',
}
```

## Events

| Event  | Arguments                            | Description                  |
| ------ | ------------------------------------ | ---------------------------- |
| input  | `Number` (The current selected page) | Emitted when the page change |
| change | `Number` (The current selected page) | Emitted when the page change |
