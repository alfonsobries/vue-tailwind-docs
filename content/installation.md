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

## 2. Install TailwindCSS (Optional)

This library uses TailwindCSS classes by default. Still, it should work with any CSS framework since all the CSS classes are configurable.

To install TailwindCSS follow his official documentation: [https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)

#### 2.1 Add the @tailwindcss/forms plugin

The default theme of this library depends on the `@tailwindcss/forms` plugin. To use it, follow the steps on the plugin source page.
[https://github.com/tailwindlabs/tailwindcss-forms](https://github.com/tailwindlabs/tailwindcss-forms)

#### 2.1 Add variants for disabled pseudo-class

Also needed for the default theme and strongly recommended since it adds the ability to use some classes like `disabled:opacity-50 disabled:cursor-not-allowed` to disabled inputs.

See [https://tailwindcss.com/docs/configuring-variants](https://tailwindcss.com/docs/configuring-variants) on the TailwindCSS docs for more info.

As a reference, your `tailwind.config.js` may look like this:

```js
module.exports = {
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
```

## 3. Configure Vue to use vue-tailwind

```js
import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

const components = {
  //...
}

Vue.use(VueTailwind, components)
```

### 3.1 Import and install the components

```js
import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

import {
  TInput,
  TTextarea,
  TSelect,
  TRadio,
  TCheckbox,
  TButton,
  TInputGroup,
  TCard,
  TAlert,
  TModal,
  TDropdown,
  TRichSelect,
  TPagination,
  TTag,
  TRadioGroup,
  TCheckboxGroup,
  TTable,
  TDatepicker,
  TToggle,
  TDialog,
} from 'vue-tailwind/dist/components';

const settings = {
  // Use the following syntax
  // {component-name}: {
  //   component: {importedComponentObject},
  //   props: {
  //     {propToOverride}: {newDefaultValue}
  //     {propToOverride2}: {newDefaultValue2}
  //   }
  // }
  't-input': {
    component: TInput,
    props: {
      classes: 'border-2 block w-full rounded text-gray-800'
      // ...More settings
    }
  },
  't-textarea': {
    component: TTextarea,
    props: {
      classes: 'border-2 block w-full rounded text-gray-800'
      // ...More settings
    }
  },
  // ...Rest of the components
}

Vue.use(VueTailwind, settings)
```

#### Configuration format:

The format expected by the settings is the following:

```js
{component-name}: {
  component: {importedComponentObject},
  props: {
    {propToOverride}: {newDefaultValue}
    {propToOverride2}: {newDefaultValue2}
  }
}
```

The `component-name` is the name that you will use to add your component. You can give any name you want. Take a look at the following example:

```js
const settings = {
  'my-text-input': {
    component: TInput,
    props: {
      // ...
    }
  }
}
```

```html
<my-text-input />
```

In case you are wondering you can install the same component twice but with different settings:

```js
const settings = {
  'normal-button': {
    component: TButton,
    props: {
      // See "override settings" section for more info about this
      type: 'button'
    }
  },
  'submit-button': {
    component: TButton,
    props: {
      // See "override settings" section for more info about this
      type: 'submit'
    }
  }
}
```

```html
<normal-button /> <!-- <button type="button"></button> -->
<submit-button /> <!-- <button type="submit"></button> -->
```


### 3.2 Alternatively, you can use the v1.0 syntax

This syntax will install all the components on this library.

```js
import Vue from 'vue'
// Notice that I am using a different path here:
import VueTailwind from 'vue-tailwind/dist/full'

const settings = {
  TInput: {
    classes: 'border-2 block w-full rounded text-gray-800',
    // ...More settings
  },
  TButton: {
    classes: 'rounded-lg border block inline-flex items-center justify-center',
    // ...More settings
  },
  // ...Rest of the components
}

Vue.use(VueTailwind, settings)
```

### 3.3 Or you can install only the components you need

```js
import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

import TInput from 'vue-tailwind/dist/t-input'
import TButton from 'vue-tailwind/dist/t-button'

const settings = {
  't-input': {
    component: TInput,
    props: {
      classes: 'block w-full px-3 py-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
      // ...More settings
    }
  },
  't-button': {
    component: TButton,
    props: {
      classes: 'block px-4 py-2 text-white transition duration-100 ease-in-out bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50  disabled:opacity-50 disabled:cursor-not-allowed',
      // ...More settings
    }
  },
}

Vue.use(VueTailwind, settings)
```

<tip>Using the syntax from point **3.3** is the best way to prevent a big bundle size, but only if you import a couple of components. If the number of components you install increases, the recommended way to install them is to use the syntax from the points **3.1** or **3.2** to help the library reuse some code and keep the bundle size at a minimum.</tip>

## 4. Configure purgecss (optional)

To use `purgecss` postcss plugin, you will need a way to tell the plugin which classes you are using. One way to do that is to move your settings to a separate file and then add that file to the postcss config:

```js [./MySettings.js]
import {
  TInput,
  // ...Rest of the components
} from 'vue-tailwind/dist/components';

const MySettings = {
  't-input': {
    component: TInput,
    props: {
      classes: 'border-2 block w-full rounded text-gray-800'
      // ...More settings
    }
  },  
  // ...Rest of the components
}

// You can import these settings in your installation file:
// import MySettings from './MySettings.js';
// Vue.use(VueTailwind, MySettings)
```


```js
// postcss.config.js (from https://tailwindcss.com/docs/controlling-file-size#setting-up-purgecss)
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './MySettings.js',
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
