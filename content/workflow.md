---
title: Use the plugin and component
description: How do you work with the vue-tailwind components and apply different variants.
---

# Workflow

 How to work with the vue-tailwind components and his different variants.

<hr>

## Working with Variants

Using as a premise that you have already defined a theme with different variants, you can alternate between those variants when using your components by using the `variant` prop.

#### Example:

```html
<t-alert variant="error" show>
  Oops! Something goes wrong
</t-alert>

<t-alert variant="success" show>
  Good work, everything is working as expected!
</t-alert>
```

With our custom theme the alerts above will look like this:

<t-alert variant="error" show>
  Oops! Something goes wrong
</t-alert>

<t-alert variant="success" show>
  Good work, everything is working as expected!
</t-alert>


This is how the variants of the alert above look like:

```js
const theme{
  // ...
  TAlert: {
    classes: {
      // ...
    },
    variants: {
      error: {
        wrapper: 'rounded bg-red-100 p-4 flex text-sm border-l-4 border-red-500',
        body: 'flex-grow text-red-700',
        close: 'text-red-700 hover:text-red-500 hover:bg-red-200 ml-4 rounded',
        closeIcon: 'h-5 w-5 fill-current'
      },
      success: {
        wrapper: 'rounded bg-green-100 p-4 flex text-sm border-l-4 border-green-500',
        body: 'flex-grow text-green-700',
        close: 'text-green-700  hover:text-green-500 hover:bg-green-200 ml-4 rounded',
        closeIcon: 'h-5 w-5 fill-current'
      }
    }
  },
  // ...
}
```

### Variants as objects

The `variant` prop also accepts an object where the `key` should be the variant you want to apply and the `value` should be a truthy or a falsy value.

#### Example:

```html
<t-alert
  :variant="{
    error: hasError,  
    success: doesntHaveError,  
  }"
  show
>
  {{ feedback }}}
</t-alert>
```

<tip>
If the variant object has more than one truthy value it will take the first one.
</tip>

To better exemplify the example above take a look at this one that has the values harcoded:

```html
<t-alert
  :variant="{
    error: false,  
    success: true,  
  }"
  show
>
  This message was harcoded and should have the `success` variant.
</t-alert>
```

<t-alert :variant="{ error: false, success: true}" show>
  This message was hardcoded and should have the `success` variant since success is truthy.
</t-alert>

## Working with classes

The `classes` prop have similar behavior as default `class` attribute, this means that it accepts the classes in the same syntax that [Vue accepts](https://vuejs.org/v2/guide/class-and-style.html), (also when you define the classes in the global template)

### Single tag elements

```html
<t-button
  classes="px-4 py-1 text-white text-sm rounded bg-orange-500 hover:bg-orange-600">
  Defined as string
</t-button>

<t-button
  :classes="{
    'ml-2 px-4 py-1 text-white text-sm rounded bg-yellow-500 hover:bg-yellow-600': true
  }"
>
  Defined from an object
</t-button>

<t-button
  :classes="['ml-2', 'px-4', 'py-1', 'text-white', 'text-sm', 'rounded', 'bg-teal-500',  'hover:bg-teal-600']"
>
  Defined from an array
</t-button>
```

<t-button classes="px-4 py-1 text-white text-sm rounded bg-orange-500 hover:bg-orange-600">Defined as string</t-button>
<t-button :classes="{'ml-2 px-4 py-1 text-white text-sm rounded bg-yellow-500 hover:bg-yellow-600': true}">
  Defined from an object
</t-button>
<t-button :classes="['ml-2', 'px-4', 'py-1', 'text-white', 'text-sm', 'rounded', 'bg-teal-500',  'hover:bg-teal-600']">
  Defined from an array
</t-button>

In case you are wondering you can use the default `class` attribute and the `classes` prop together, in this case both classes will be merged:

```html
<t-button
  class="px-4 py-1 text-white text-sm rounded"
  classes="bg-orange-500 hover:bg-orange-600">
  Merged `class` and `classes`
</t-button>
```

<t-button class="px-4 py-1 text-white text-sm rounded" classes="bg-orange-500 hover:bg-orange-600">
  Merged `class` and `classes`
</t-button>

<tip>
As you may imagine, if you use the HTML `class` attribute in a component with multiple tags the class will be only be applied to the tag that wraps the component.
</tip>

### Multiple tag elements

The components that depend on multiple HTML tags work the same as the single tag ones the only difference is that every class should be wrapped in an object.


```html
<t-alert
  :classes="{
    wrapper: 'rounded bg-teal-100 p-4 flex text-sm border-2 shadow border-teal-300',
    body: 'flex-grow text-teal-700',
    close: {'text-teal-500 hover:bg-teal-200 ml-4 rounded': true},
    closeIcon: ['h-5', 'w-5', 'fill-current']
  }"
  show
>
  The classes of this component were defined from a prop
</t-alert>
```

<t-alert :classes="{ wrapper: 'rounded bg-teal-100 p-4 flex text-sm border-2 shadow border-teal-300', body: 'flex-grow text-teal-700', close: {'text-teal-500 hover:bg-teal-200 ml-4 rounded': true}, closeIcon: ['h-5', 'w-5', 'fill-current']}" show>
  The classes of this component were defined from a prop
</t-alert>

<tip>
Notice that the `close` and `closeIcon` attributes in the example above uses array and object syntax.
</tip>


## Classes and variants formats by component

The components that depend on a single tag like the inputs, buttons, etc. simply expect the classes list. For the rest of the components, the format varies for every single one.

For more information about the format of any specific component, consult the component docs.

