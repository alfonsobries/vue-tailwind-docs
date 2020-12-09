---
title: Override default props/settings
description: Override the default component settings when installing the library
---

# Override default settings

All the components on this library have default settings added as component props according to how I understand those settings are most commonly used.

I am aware that in many cases is useful to change the default value, so you don't need to add the prop over and over when needed.
## When to use this feature

Let's use an example. What if I want:

- That all the button components have the `type="button"` attribute (I do myself always change that).
- Change the default localization settings for the DatePicker to spanish.
- Make all the Alert components not `dismissible` by default.
- Don't allow the Modal to be closed by pressing the `ESC` key as default.

You can do that since this library allows you to override the default value of all the `props` for every component.

## How to override a prop default value

Piece of cake! When you install the library, you need to pass the prop's name within the new default value. It expects the same syntax used to override the classes (if you think about it, the classes are just another prop we are replacing).

Take a look at this example where I try to achieve the example mentioned above:

```js
// Locale to eventually replace the default Datepicker locale
import Spanish from 'vue-tailwind/dist/l10n/es'

const settings = {
  't-button': {
    component: TButton,
    props: {
      // classes: '...',
      // variants: '...',
      // ...
      // Originally it defaults to `undefined` that means is considered a submit
      // button if the button is inside a form.
      type: 'button',
    }
  },
  't-datepicker': {
    component: TDatepicker,
    props: {
      // classes: '...',
      // variants: '...',
      // ...
      // Originally a locale object with English values
      locale: Spanish,
    }
  },
  't-modal': {
    component: TModal,
    props: {
      // classes: '...',
      // variants: '...',
      // ...
      // Originally `true`
      escToClose: false,
    }
  },
  't-alert': {
    component: TAlert,
    props: {
      // classes: '...',
      // variants: '...',
      // ...
      // Originally `true`
      dismissible: false,
    }
  },
}

Vue.use(VueTailwind, settings)
```

### Use valid values

When you override the default prop value of a component you need to ensure to define a valid value according to every prop otherwise you may experience unexpected errors.

#### Example:

<wrong-tip>
The example below may causes issues since the <code class="font-mono text-sm text-orange-600 bg-orange-100">clickToClose</code> prop expects a <code class="font-mono text-sm text-orange-600 bg-orange-100">boolean</code> value.
</wrong-tip>

```js
const settings = {
  TModal: {
    clickToClose: 'yes',
  },
  // ...
}

Vue.use(VueTailwind, settings)
```

<ok-tip>
The next example will work since you are overriding the <code class="font-mono text-sm text-orange-600 bg-orange-100">clickToClose</code> prop with a <code class="font-mono text-sm text-orange-600 bg-orange-100">boolean</code> value as that specific prop expects.
</ok-tip>

```js
const settings = {
  TModal: {
    clickToClose: false,
  },
  // ...
}

// Add the settings as the second parameter when you register your component
Vue.use(VueTailwind, settings)
```

## Use the settings to create different components

You can also use this feature to create different versions of the same component.

```js
import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

import TButton from 'vue-tailwind/dist/t-button'
import TTag from 'vue-tailwind/dist/t-tag'

const settings = {
  // What about one <t-button /> for normal button and a `<t-submit />` for a submit button
  't-button': {
    component: TButton,
    props: {
      type: 'button',
    }
  },
  't-submit': {
    component: TButton,
    props: {
      type: 'submit',
    }
  },
  // I love this use case for the TTag component and will let you guess what
  // is doing: 👇
  'blog-title': { // Used like <blog-title>Title of a blog post</blog-title>
    component: TTag,
    props: {
      tag: 'h1',
      classes: 'font-semibold text-xl leading-6',
    }
  },
  'blog-subtitle': { // Used like <blog-title>subtitle of a blog post</blog-title>
    component: TTag,
    props: {
      tag: 'h2',
      classes: 'font-semibold text-xl leading-6',
    }
  },
  't-link': { // Used like <t-link href="">Open site</t-link>
    component: TTag,
    props: {
      tag: 'a',
      classes: 'text-blue-500 underline hover:text-blue-600',
    }
  }
}

Vue.use(VueTailwind, settings)
```
