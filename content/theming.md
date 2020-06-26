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
    }
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


### Single tag elements

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
When you use a variant, the variant classes will override the default classes; this means that you may need to repeat some classes and may seem impractical for some people, but it will give you more flexibility. 
</tip>


### Multiple tag elements

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

