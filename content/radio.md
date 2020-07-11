---
title: TailwindCSS Radio button Vue Component
description: VueJs reactive radio button component with customizable TailwindCSS or any CSS Framework classes.
---

# Radio input (TRadio)

VueJs reactive `<input type="radio" />` component with configurable classes, variants, and most common events. Friendly with utility-first frameworks like TailwindCSS..

<t-radio-playground></t-radio-playground>

<hr>

## Basic example

```html
<div class="flex">
  <label class="flex items-center">
    <t-radio name="options" value="a" />
    <span class="ml-2 text-sm">Option A</span>
  </label>
  <label class="ml-2 flex items-center">
    <t-radio name="options" value="b" />
    <span class="ml-2 text-sm">Option B</span>
  </label>
</div>
```

<radio-basic-example></radio-basic-example>

## Props


| Property          | Type                                | Default value  | Description                                                                                           |
| ----------------- | ----------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------- |
| value             | `[String, Object, Number, Boolean]` | `'on'`         | The value for the radio element                                                                       |
| model (`v-model`) | `[String, Object, Number, Boolean]` | `undefined`    | The element using for the `v-model`                                                                   |
| checked           | `[Boolean, String]`                 | `falee`        | HTML attribute                                                                                        |
| id                | `String`                            | `undefined`    | HTML attribute                                                                                        |
| autofocus         | `Boolean`                           | `undefined`    | HTML attribute                                                                                        |
| disabled          | `Boolean`                           | `undefined`    | HTML attribute                                                                                        |
| name              | `String`                            | `undefined`    | HTML attribute                                                                                        |
| readonly          | `Boolean`                           | `undefined`    | HTML attribute                                                                                        |
| required          | `Boolean`                           | `undefined`    | HTML attribute                                                                                        |
| tabindex          | `[String, Number]`                  | `undefined`    | HTML attribute                                                                                        |
| wrapped           | `Boolean`                           | `undefined`    | If set the input will be wrapped in a div and will add some exra HTML (see [wrap radio](#wrap-radio)) |
| wrapperTag        | `String`                            | `'label'`      | The HTML tag to use to wrap the input when `wrapped` is set to true                                   |
| label             | `String`                            | `'label'`      | When the input is `wrapped` the label is added as sibling of the input                                |
| labelTag          | `String`                            | `'span'`       | The HTML tag to use for the label prop                                                                |
| classes           | `[String, Array, Object]`           | `'form-radio'` | The default CSS classes                                                                               |
| fixedClasses      | `[String, Array, Object]`           | `undefined`    | Fixed CSS classes that will be merged with the active set of classes                                  |
| variants          | `Object`                            | `undefined`    | The different variants of classes the component have                                                  |
| variant           | `[String, Object]`                  | `undefined`    | The variant that will be used                                                                         |

## Wrap radio

This component accepts the `wrapped` setting (or prop) that when set it will wrap the `option` tag in a `label` HTML tag and will add a sibling `span` tag with the content of the `label` prop. This can give you more flexibility to customize your component.

Remember that the component can set as "wrapped" when installed or by using the `wrapped` prop (see [wrap inputs](/docs/theming#wrap-inputs) for more info):

```js
// When installed
const theme = {
  TRadio: {
    wrapped: true,
    // classes, variants, etc...
  },
  // ...
}

Vue.use(VueTailwind, theme)
```

```html
<!-- // Using the wrapped prop -->
<t-radio wrapped />
```

A wrapped radio input will be rendered like this:

```html
<label class="mx-1 bg-gray-100 border border-gray-300 flex items-center px-4 py-2 rounded shadow-inner cursor-pointer focus:shadow-outline text-sm text-gray-700 hover:text-gray-500 leading-5 uppercase">
  <input value="Option A" type="radio" checked="checked" name="radio-example" class="absolute invisible">
  <span class="">Option A</span>
</label>
```

### Classes for wrapped select

When the select is wrapped the classes, variants, etc need to be an object with the following properties:

| Property     | Description                                                                |
| ------------ | -------------------------------------------------------------------------- |
| wrapper      | `div` that wraps the whole component                                       |
| input        | `select` tag                                                               |
| arrowWrapper | `span` that is a sibling of the `select` tag that is used to wrap the icon |
| arrow        | `svg` icon                                                                 |

#### Example

```js
const theme = {
  TRadio: {
    wrapped: true,
    classes: {
      wrapper: 'relative',
      input: 'appearance-none bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full leading-normal',
      arrowWrapper: 'pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700',
      arrow: 'fill-current h-4 w-4',
    }
    // Variants and fixed classes in the same `object` format ...
  },
  // ...
}

Vue.use(VueTailwind, theme)
```

If you use the settings above the component will be rendered like this:

<preview>
  <t-radio :classes="{
    wrapper: 'relative',
    input: 'appearance-none bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full leading-normal',
    arrowWrapper: 'pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700',
    arrow: 'fill-current h-4 w-4',  
  }" :options="['Option 1', 'Option 2', 'Option 3']" wrapped />
</preview>

### Customize the select icon

If you want to use your own HTML instead of the default SVG icon you can use the `arrow` or `arrowWrapper` slots, use the first one if you only want to override the SVG icon and the second one if you want to override the whole icon wrapper.

Both slots yield in the slot scope the current variant, the original classes the element has (from the theme), and the current value of the component in case you want to use those values inside the slot.

##### Example:

Let's say that for some reason you want to use an ascii down arrow instead of the default SVG icon, an angry emoji when it has an `error` variant and just because you can show a potato emoji when the current value is `>=2`, you know, a typical real-world use:

```html
<t-radio wrapped :options="[1,2,3]" variant="wrappedDemo">
  <template slot="arrow" slot-scope="{ className, variant, value }">
    <span v-if="variant==='error'" class="pr-2">😡</span>
    <span v-else-if="value>=2" class="pr-2">🥔</span>
    <span
      v-else
      :class="className"
    >▼</span>
  </template>
</t-radio>
```

The example above will look like this:

<select-arrow-slot-example />

## Events

| Event  | Arguments                                 | Description                                                                      |
| ------ | ----------------------------------------- | -------------------------------------------------------------------------------- |
| input  | `String` (The current value of the radio) | Emitted every time the value of the `v-model` change                             |
| change | `String` (The current value of the radio) | Emitted every time the value of the `v-model` change |
| focus  | `FocusEvent`                              | Emitted when the radio is focused                                                |
| blur   | `FocusEvent`                              | Emitted when the radio is blurred                                                |
