---
title: Getting started
description: Vuetailwind is a set of lightview and fully customizable Vue Components optimized for TailwindCss.
---


# Built to be customized

When you work on a real-world application, you usually need different variants for every component your app uses; you may need (besides of default style of your text input) a specific style for a search input inside a navbar and another one for the contact form, and we are not talking yet about the different states that your input could have.

All **VueTailwind** components were designed to be customized with custom CSS classes and unlimited variants defined when you import the library or when you use the component.

This means that when you use this library, you are not attached to any style defined by us like it happens when you use a typical library of components like Bootstrap. Instead, you can determine your theme based on your application's needs.

This library makes special sense when you work with utility-first frameworks like [TailwindCss](https://tailwindcss.com), which is the default framework used in this library.

## Quick start

Here is a small example of how the classes and variants are defined when you import this library:

```js
import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

const theme = {
  TInput: {
    classes: 'form-input border-2 text-gray-700',
    variants: {
      error: 'form-input border-2 border-red-300 bg-red-100',
      // ... Infinite variants
    }
  },
  TAlert: {
    classes: {
      wrapper: 'rounded bg-blue-100 p-4 flex text-sm border-l-4 border-blue-500',
      body: 'flex-grow text-blue-700',
      close: 'text-blue-700 hover:text-blue-500 hover:bg-blue-200 ml-4 rounded',
      closeIcon: 'h-5 w-5 fill-current'
    },
    variants: {
      danger: {
        wrapper: 'rounded bg-red-100 p-4 flex text-sm border-l-4 border-red-500',
        body: 'flex-grow text-red-700',
        close: 'text-red-700 hover:text-red-500 hover:bg-red-200 ml-4 rounded'
      },
      // ... Infinite variants
    }
  },
  // ... The rest of the components
}

Vue.use(VueTailwind, theme)
```

The default classes and variants can also be defined in the component props:

```html
<t-input
  :classes="form-input border-2 text-gray-700"
  :variants="{
    error: 'form-input border-2 border-red-300 bg-red-100',
    success: 'form-input border-2 border-green-300 bg-green-100'
  }"
/>
```

To apply an specific variant you just need to use the `variant` prop:

```html
<t-input variant="error" />
```

The variant prop also accepts an object that takes the first attribute with a _truthy_ value

```html
<t-input
  :variant="{
    error: inputIsNotValid,
    success: inputIsValid,
  }"
/>
```

## What's new in version 1.x

- Rebuilt from scratch in Typescript
- Small bundle size and less dependencies
- A better way to import only selected components
- Unlimited variants and a easy way to configure them

## What's next?

- Im working in a datepicker that is the most requested component, after that im planning to create a swal like dialog component.
- Already started to work in a react version of this package called react-tailwind.
- Im making some final changes to the Community themes features that should be released soon.
- Vue 3 compatibility

## Contribute

Is this project helpful for you? Consider sponsoring me [https://github.com/sponsors/alfonsobries](https://github.com/sponsors/alfonsobries).

Of course, any other kind help is welcome, even if you notice some grammar mistakes (English is not my primary language) see <nuxt-link to="/contribute">contribute page</nuxt-link> for details.