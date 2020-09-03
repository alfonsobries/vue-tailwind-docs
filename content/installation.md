---
title: Install and configure
description: Learn how to install and configure vue-tailwind. VueTailwind is a set of Lightview and fully customizable Vue Components optimized for TailwindCss
---

# Installation

Learn how to install and configure vue-tailwind.

<hr>

## 1. Install the dependencies 

```console
npm install vue-tailwind --save
``` 

Or: 

```console
yarn add vue-tailwind
``` 

<tip>
Dont forget to <a class="underline" href="https://tailwindcss.com/docs/installation" target="_blank">Install TailwindCSS</a> first.
</tip>


## 2. Configure your project to use `vue-tailwind` 


```js
import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

const settings = {
  //...
}

Vue.use(VueTailwind, settings)
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

const settings = {
  TInput,
  TButton,
}

export default settings
```

Then you can import your theme and add it as a parameter when you install VueTailwind:

```js {3,6}
import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import settings from './settings.js'

Vue.use(VueTailwind, settings)
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

#### Override the default settings <since>1.2.0+</since>

Let's say that some default values of the component are not the best for your specific project needs and you see yourself setting the props over and over every time you use the component.

With this library, you can override the default settings when installing the library.

For example, maybe you want:

- That all the button components have the `type="button"` attribute (I do myself change that).
- Change the default localization settings for the DatePicker.
- Make all the Alert components not `dismissible` by default.
- Don't allow the Modal to be closed by pressing the `ESC` key as default.

With this library, you can do that and more since you can override the default value of all the `props` for every component.

So let's try the goal explained above:

```js
// Locale to eventually replace the default datepicker locale
import Spanish from 'vue-tailwind/dist/l10n/es'

const settings = {
  TButton: {
    // classes: '...',
    // ...
    // Originally it defaults to `undefined` that means is considered a submit
    // button if the button is inside a form.
    type: 'button',
  },
  TDatepicker: {
    // classes: '...',
    // ...
    // Originally a locale object with English values
    locale: Spanish,
  },
  TAlert: {
    // classes: '...',
    // ...
    // Originally `true`
    dismissible: false,
  },
  TModal: {
    // classes: '...',
    // ...
    // Originally `true`
    escToClose: false,
  },
  
}

// Add the settings as the second parameter when you register your component
Vue.use(VueTailwind, settings)
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
