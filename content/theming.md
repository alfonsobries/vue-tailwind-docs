---
title: Configure your theme
description: How to create and configure your own and unique theme and the different variants for your components.
---

# Configure your theme

How to create and configure your own and unique theme and the different variants.

<hr>

## Format

The plugin expects an `object` that uses the name of the components in the `keys`. Every key should have a child `object` with the `classes` and `variants` keys (the `variants` are optional).

The `classes` key attribute expects a single valid CSS class value (in any of the [valid format accepted by vue](https://vuejs.org/v2/guide/class-and-style.html) (usually a string) when the component depends on a single tag (button, inputs, etc.) or an `object` of classes when the components depend on multiple HTML tags.

Take a look as this example:

```js
const theme = {
  // Single tag elements
  TInput: {
    classes: 'border-2 block w-full rounded text-gray-800',
    // Optional, multiple variants (see variants section)
    variants: {
      // ....
    },
    // Optional, fixed classes
    // fixedClasses: '...',
  },
  TButton: {
    classes: 'rounded-lg border block inline-flex items-center justify-center',
  },
  // ...
  // Multiple tag elements
  TAlert: {
    classes: {
      wrapper: 'rounded bg-blue-100 p-4 flex text-sm border-l-4 border-blue-500',
      body: 'flex-grow text-blue-700',
      close: 'text-blue-700 hover:text-blue-500 hover:bg-blue-200 ml-4 rounded',
      closeIcon: 'h-5 w-5 fill-current'
    },
    // Optional, multiple variants (see variants section)
    variants: {
      // ....
    },
    // Optional, fixed classes
    // fixedClasses: {
    //    ...
    // },
  },
  TCard: {
    classes: {
      wrapper: 'rounded max-w-lg mx-auto bg-white shadow',
      body: 'p-4',
      header: 'p-4 border-b',
      footer: 'p-4 border-t'
    },
  }
}

// Add the theme as second parameter when you registry your component
Vue.use(VueTailwind, theme)
```

## Variants

The variants are the heart of the theming system you can create as many variants as you need, the variants expect the same format as the single `classes` attribute but grouped according to your custom variant name:


#### Single tag elements

```js
const theme = {
  TInput: {
    classes: 'border-2 block w-full rounded text-gray-800 p-3',
    variants: {
      error: 'border-2 block w-full rounded text-red-500 border-red-500 p-3'
      inmenu: 'border-transparent bg-gray-500 text-gray-900 p-2'
      funny: '...', 
      // ...etc
    }
  },
  // ...etc
}

Vue.use(VueTailwind, theme)
```

<tip>
When you use a variant, the variant classes will override the default classes; this means that you may need to repeat some classes, if you want to have classes that are always applied you can use the `fixedClasses` prop (more info below).  
</tip>

#### Multiple tag elements

```js
const theme = {
  TAlert: {
    classes: {
      wrapper: 'rounded bg-blue-100 p-4 flex text-sm border-l-4 border-blue-500',
      body: 'flex-grow text-blue-700',
      close: 'text-blue-700 hover:text-blue-500 hover:bg-blue-200 ml-4 rounded',
      closeIcon: 'h-5 w-5 fill-current'
    },
    variants: {
      error: {
        wrapper: 'rounded bg-red-100 p-4 flex text-sm border-l-4 border-red-500',
        body: 'flex-grow text-red-700',
        close: 'text-red-700 hover:text-red-500 hover:bg-red-200 ml-4 rounded',
        closeIcon: 'h-5 w-5 fill-current'
      },
      big: {
        // Hey! you only need to override the parts you 
        // want to change from the default classes
        body: 'text-2xl font-bold flex-grow text-blue-700',
      }
    }
  },
  // ....
}

Vue.use(VueTailwind, theme)
```

<tip>
As you may notice in the example above, when you work with multiple tags classes, you don't need to write all the classes again, only the ones you want to override.
</tip>


## Fixed classes

When you create a theme, especially one with many variants, you will notice that you will start dealing with many repeated classes that all the variants have in common and that you have to write over and over again.

To make it easier to handle those classes, you can use the prop `fixedClasses` that all the components have, the classes defined in this attribute will always be merge to the currently active class of the component.

For example, let's say that you need all your buttons to have a small transition-related class and you know all of them will have a shadow. Consider this two alternatives:

<wrong-tip>
You can repeat the same common classes over and over.
</wrong-tip>

```js
const theme = {
  TButton: {
    classes: 'transform ease-in-out duration-100 shadow bg-orange-500,
    variants: {
      secondary: 'transform ease-in-out duration-100 shadow underline text-orange-500',
      // ...
    }
  },
  TAlert: {
    classes: {
      wrapper: 'rounded flex flex text-sm w-full border-l-4 p-4 bg-blue-100 border-blue-700',
      body: 'flex-grow text-blue-700',
      close: 'p-2 ml-4 rounded text-blue-700 hover:text-blue-600',
      closeIcon: 'h-5 w-5 fill-current'
    },
    variants: {
      error: {
        wrapper: 'rounded flex flex text-sm w-full border-l-4 p-4 bg-red-100 border-red-700',
        body: 'flex-grow text-red-700',
        close: 'p-2 ml-4 rounded text-red-700 hover:text-red-600',
        closeIcon: 'h-5 w-5 fill-current'
      },
      // ...
    }
  },
}
```

<ok-tip>
A better idea is to use the `fixedClasses` prop to define CSS classes that all the variants have in common
</ok-tip>

```js
const theme = {
  TButton: {
    fixedClasses: 'transform ease-in-out duration-100 shadow',
    classes: 'bg-orange-500,
    variants: {
      secondary: 'underline text-orange-500',
      // ...
    }
  },
  TAlert: {
    fixedClasses: {
      wrapper: 'rounded flex flex text-sm w-full border-l-4 p-4',
      body: 'flex-grow ',
      close: 'p-2 ml-4 rounded',
      closeIcon: 'h-5 w-5 fill-current '
    },
    classes: {
      wrapper: 'bg-blue-100 border-blue-700',
      body: 'text-blue-700',
      close: 'text-blue-700 hover:text-blue-600',
      closeIcon: ''
    },
    variants: {
      error: {
        wrapper: 'bg-red-100 border-red-700',
        body: 'text-red-700',
        close: 'text-red-700 hover:text-red-600',
      },
      // ...
    }
  },
  // ....
}

Vue.use(VueTailwind, theme)
```

For the example above, with both alternatives, the results will look like this:

```html
<!-- <t-button>Press me</tbutton> -->
<button class="transform ease-in-out duration-100 shadow bg-orange-500">Press me</button>

<!-- <t-alert show>Hello world</talert> -->
<div class="rounded flex flex text-sm w-full border-l-4 p-4 bg-blue-100 border-blue-700">
  <div class="flex-grow text-blue-700">
    Hello world
  </div>
  <button type="button" class="p-2 ml-4 rounded text-blue-700 hover:text-blue-600">
    <svg class="h-5 w-5 fill-current">...</svg>
  </button>
</div>


<!-- <t-button variant="secondary">Press me</tbutton> -->
<button class="transform ease-in-out duration-100 shadow underline text-orange-500">Press me</button>

<!-- <t-alert variant="error" show>Hello world</talert> -->
<div class="rounded flex flex text-sm w-full border-l-4 p-4 bg-red-100 border-red-700">
  <div class="flex-grow text-red-700">
    Hello world
  </div>
  <button type="button" class="p-2 ml-4 rounded text-red-700 hover:text-red-600">
    <svg class="h-5 w-5 fill-current">...</svg>
  </button>
</div>
```

<tip>
When using the `fixedClasses` prop for multiple tags elements you only need to define the keys you need.
</tip>


## Use component props

In some cases, you will need yo define the theme of a specific component directly, maybe the theme is determined by the user, is dynamic for some reason, is more practical, or is just a personal preference.

All the components comes with the `variants`, `classes` and `fixedClasses` props that expects the value in the same format as the theme.

Take a look at the following examples:

#### Single tag element

```html
<t-input
  classes="border-2 block w-full rounded text-gray-800 p-3"
  :variants="{
    error: 'border-2 block w-full rounded text-red-500 border-red-500 p-3'
    inmenu: 'border-transparent bg-gray-500 text-gray-900 p-2'
    funny: '...', 
  }"
  variant="funny"
/>
```

#### Multiple tag element

```html
<t-alert
  :classes="{
    wrapper: 'rounded bg-blue-100 p-4 flex text-sm border-l-4 border-blue-500',
    body: 'flex-grow text-blue-700',
    close: 'text-blue-700 hover:text-blue-500 hover:bg-blue-200 ml-4 rounded',
    closeIcon: 'h-5 w-5 fill-current'
  }"
  :variants="{
    error: {
      wrapper: 'rounded bg-red-100 p-4 flex text-sm border-l-4 border-red-500',
      body: 'flex-grow text-red-700',
      close: 'text-red-700 hover:text-red-500 hover:bg-red-200 ml-4 rounded',
    },
    big: {
      body: 'text-2xl font-bold flex-grow text-blue-700',
    }
  }"
  variant="error"
/>
```

<tip>
We will talk more about the `variant` prop in the <strong>Workflow</strong> section.
</tip>
