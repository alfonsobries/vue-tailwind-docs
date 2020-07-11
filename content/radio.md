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

## Options format

This component accepts the `options` in different formats:

### Array of objects

```html
<!-- `value`, `text` attributes (Preferred) -->
<t-select :options="[
  { value: 1, text: 'Option 1' },
  { value: 2, text: 'Option 2' }
]" />
<!-- `id` instead of `value` as attribute -->
<t-select :options="[
  { id: 1, text: 'Option 1' },
  { id: 2, text: 'Option 2' }
]" />
<!-- `label` instead of `text` as attribute -->
<t-select :options="[
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' }
]" />

<!-- All the examples above will render: -->
<select>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

### Object with value:text pairs
```html
<t-select :options="{
  A: 'Option A',
  B: 'Option B',
  C: 'Option C'
}" />

<!-- Will Render: -->
<select>
  <option value="A">Option A</option>
  <option value="B">Option B</option>
  <option value="C">Option C</option>
</select>
```

### Array of strings
```html
<t-select :options="['Red', 'Blue', 'Yellow']" />

<!-- Will Render: -->
<select>
  <option value="Red">Red</option>
  <option value="Blue">Blue</option>
  <option value="Yellow">Yellow</option>
</select>
```
### Array of numbers
```html
<t-select :options="[18, 19, 20]" />

<!-- Will Render: -->
<select>
  <option value="18">18</option>
  <option value="19">19</option>
  <option value="20">20</option>
</select>
```

## Define the value/text attributes

When your options come in a format that is not handled by the component you can define which attributes you want to use as the `value` and the `text` of every option tag.

Example:

Consider the following example where the options are an array of roles where the `role` should be the value of the option and the nested `name` inside the `details` attribute should be the text:

<meh-tip>
One alternative is to `map` the options to match one of the accepted formats:
</meh-tip>

```html
<t-select
  :options="[
    { role: 'root', details: { name: 'Root', expires: '2020-20-12' }, active: true },
    { role: 'admin', details: { name: 'Root', expires: '2020-20-12' }, active: true },
    { role: 'user', details: { name: 'Root', expires: '2020-20-12' }, active: true },
  ].map((option) => ({ value: option.role, text: option.details.name }))"
/>
```

<ok-tip>
A better approach is to use the <strong>valueAttribute</strong> and <strong>textAttribute</strong>.
</ok-tip>

```html
<t-select
  :options="[
    { role: 'root', details: { name: 'Root', expires: '2020-20-12' }, active: true },
    { role: 'admin', details: { name: 'Root', expires: '2020-20-12' }, active: true },
    { role: 'user', details: { name: 'Root', expires: '2020-20-12' }, active: true },
  ]"
  value-attribute="role"
  text-attribute="details.name"  
/>
```

<tip>
Notice that in the example above we are using dot notation to get a nested attribute in the option for the `textAttribute`. That notation also works for the `valueAttribute`.
</tip>

## Wrap radio

This component accepts the `wrapped` setting (or prop) that when set it will wrap the `select` tag in a `div` and will add a sibling `span` with an `svg` icon. This can give you more flexibility to customize your component.


Remember that the component can set as "wrapped" when installed or by using the `wrapped` prop (see [wrap inputs](/docs/theming#wrap-inputs) for more info):

```js
// When installed
const theme = {
  TSelect: {
    wrapped: true,
    // classes, variants, etc...
  },
  // ...
}

Vue.use(VueTailwind, theme)
```

```html
<!-- // Using the wrapped prop -->
<t-select wrapped />
```


A wrapped select will be rendered like this:

```html
<div>
  <select><!-- --></select>
  <span>
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"></path>
    </svg>
  </span>
</div>
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
  TSelect: {
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
  <t-select :classes="{
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
<t-select wrapped :options="[1,2,3]" variant="wrappedDemo">
  <template slot="arrow" slot-scope="{ className, variant, value }">
    <span v-if="variant==='error'" class="pr-2">😡</span>
    <span v-else-if="value>=2" class="pr-2">🥔</span>
    <span
      v-else
      :class="className"
    >▼</span>
  </template>
</t-select>
```

The example above will look like this:

<select-arrow-slot-example />

## Events

| Event  | Arguments                                  | Description                                          |
| ------ | ------------------------------------------ | ---------------------------------------------------- |
| input  | `String` (The current value of the select) | Emitted every time the value of the `v-model` change |
| change | `String` (The current value of the select) | Emitted when the select value change                 |
| focus  | `FocusEvent`                               | Emitted when the select is focused                   |
| blur   | `FocusEvent`                               | Emitted when the select is blurred                   |