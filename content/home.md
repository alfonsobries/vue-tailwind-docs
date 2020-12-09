---
title: Getting started
description: Vuetailwind is a set of lightview and fully customizable Vue Components optimized for TailwindCss.
---


# Built to be customized

Most component libraries depend on CSS frameworks with an opinionated and limited number of styles defined by the people who maintain them.

If you are ok with the design, those libraries are great for a simple CRUD application, but hey! Your application is meant to do more, right?

All **VueTailwind** components were designed to be customized with **custom CSS classes** and **unlimited variants** defined when you import the library or when you use the component.

This means that when you use this library, you are not attached to any style defined by us like it happens when you use a typical library of components like Bootstrap. Instead, you can determine your theme based on your application's needs.

This library makes special sense when you work with utility-first frameworks like [TailwindCss](https://tailwindcss.com), which is the default framework used in this library.

In summary, with this library, you will be able to:

- Define your component's look and feel by defining custom default CSS classes.
- Add unlimited variants for every specific use case.
- Override the default value of the props according to your needs.
- Create different versions of one component with different default settings.

## Quick start

### 1. Install the dependencies 

```console
npm install vue-tailwind --save
``` 

Or: 

```console
yarn add vue-tailwind
``` 


<p>
  <nuxt-link to="/docs/installation">More details →</nuxt-link>
</p>

## 2. Install TailwindCSS (Optional)

This library uses TailwindCSS classes by default. Still, it should work with any CSS framework since all the CSS classes are configurable.


<p>
  <nuxt-link to="/docs/installation#2-install-tailwindcss-optional">More details →</nuxt-link>
</p>

## 3. Configure Vue to use vue-tailwind

```js
import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

const components = {
  //...
}

Vue.use(VueTailwind, components)
```

<p>
  <nuxt-link to="/docs/installation#3-configure-vue-to-use-vue-tailwind">More details →</nuxt-link>
</p>

## Workflow

Once your different variants were defined you can use the `variant` prop to define which variant should be applied:

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

<p>
  <nuxt-link to="/docs/workflow">More details →</nuxt-link>
</p>

## What's new in version 2.x

- Install only the components you need for smaller bundle size
- Custom name for components
- The ability to install the same component multiple times with different default settings and name
- New default theme

#### Plans for v3.x

- Rebuild with Vue 3
- Multiple typescript improvements
- Stronger test coverage
- Accesibility first
- New Branding

[Read more →](https://www.vue-tailwind.com/docs/upcoming-changes#plans-for-version-3x)

## Contribute

Is this project helpful for you? Consider sponsoring me [https://github.com/sponsors/alfonsobries](https://github.com/sponsors/alfonsobries).

Of course, any other kind help is welcome, even if you notice some grammar mistakes (English is not my primary language) see [contribute page](https://vue-tailwind.com/contribute) for details.
