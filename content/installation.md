---
title: Install and configure
description: Learn how to install and configure vue-tailwind. VueTailwind is a set of Lightview and fully customizable Vue Components optimized for TailwindCss
---

# Installation

Learn how to install and configure vue-tailwind.

<hr>

## 1. Install the dependencies 

```console
npm install vue-tailwind@next --save
``` 

Or: 

```console
yarn add vue-tailwind@next
``` 

<tip>
Dont forget to <a class="underline" href="https://tailwindcss.com/docs/installation" target="_blank">Install TailwindCSS</a> first.
</tip>


## 2. Configure your project to use `vue-tailwind` 


```js
import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

const theme = {
  //...
}

Vue.use(VueTailwind, theme)
```

#### Apply your own theme:

Let's say, for example, that for the specific needs of your project the text inputs should have a `blue two width border`, the buttons should have `rounded borders` and you need a secondary button that should be `purple`.

Considering those needs define objects with the desired classes for every component, a good approach is to create a file where you define the template:

```js[./myOwnTheme.js]
const TInput = {
  classes: 'border-2 block w-full rounded text-gray-800',
  // Optional variants
  variants: {
    // ...
  },
  // Optional fixedClasses
  // fixedClasses: '',
}

const TButton = {
  classes: 'rounded-lg border block inline-flex items-center justify-center',
  variants: {
    secondary: 'rounded-lg border block inline-flex items-center justify-center bg-purple-500 border-purple-500 hover:bg-purple-600 hover:border-purple-600',
  },
  // Optional fixedClasses
  // fixedClasses: 'transform ease-in-out duration-100',
}

const MyOwnTheme = {
  TInput,
  TButton,
}

export default MyOwnTheme
```

Then you can import your theme and add it as a parameter when you install VueTailwind:

```js {3,6}
import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import MyOwnTheme from './myOwnTheme.js'

Vue.use(VueTailwind, MyOwnTheme)
```

Or just define the settings directly:

```js {4,5,6,11}
import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

const TInput = {
  classes: 'border-2 border-blue-500 block w-full rounded',
}
// Or create a separate file like `src/themes/default/TInput.js` and import it
// import TInput from './myOwnTInput'
Vue.use(VueTailwind, {
  TInput
})

// Or why not? define the settings inline:
Vue.use(VueTailwind, {
  TInput: {
    classes: 'border-2 border-blue-500 block w-full rounded',
  }
})
```

## 3. Configure `purgecss` (optional)

Using `purgecss` postcss plugin? Add your theme file to the postcss config:

```js
// postcss.config.js (from https://tailwindcss.com/docs/controlling-file-size#setting-up-purgecss)
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './myOwnTheme.js',
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
}
```
