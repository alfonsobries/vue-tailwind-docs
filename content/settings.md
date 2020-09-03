---
title: Override default props/settings
description: Override the default component settings when installing the library
---

# Override default settings

All the components in this library have default settings added as component's props according to the way we understand those settings are most commonly used.

However, we are aware than in a lot of cases is useful to change the default value so we don't need to add the prop over and over when needed.

## When to use this feature

Let's use an example, what if I want:

- That all the button components have the `type="button"` attribute (I do myself change that).
- Change the default localization settings for a DatePicker.
- Make all the alert not `dismissible` by default.
- Don't allow the Modal to be closed by pressing `ESC` as default.

You can use this feature to override those default values so you don't need to use the props when using a component.

## How to override a prop default value

Piece of cake! When you install the library you just need to pass the name of the prop within the new default value. It expects exactly the same syntax used to override the classes (actually the classes are just another that we replace prop).

Take a look at this example where we try to achieve the example mentioned a few paragraphs above:

```js
// Locale to eventually replace the default datepicker locale
import Spanish from 'vue-tailwind/dist/l10n/es'

const settings = {
  TButton: {
    // classes: '...',
    // variants: '...',
    // ...
    // Originally it defaults to `undefined` that means is considered a submit
    // button if the button is inside a form.
    type: 'button',
  },
  TDatepicker: {
    // classes: '...',
    // variants: '...',
    // ...
    // Originally a locale object with English values
    locale: Spanish,
  },
  TAlert: {
    // classes: '...',
    // variants: '...',
    // ...
    // Originally `true`
    dismissible: false,
  },
  TModal: {
    // classes: '...',
    // variants: '...',
    // ...
    // Originally `true`
    escToClose: false,
  },
  
}

Vue.use(VueTailwind, settings)
```

### Use valid values

When you override the default prop value of a component ensure to return a valid value according to every prop otherwise you may experience unexpected errors.

#### Example:

<wrong-tip>
The example above may causes issues since the <code class="font-mono text-sm text-orange-600 bg-orange-100">clickToClose</code> prop expects a <code class="font-mono text-sm text-orange-600 bg-orange-100">boolean</code> value.
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
The example will work since you are overriding the <code class="font-mono text-sm text-orange-600 bg-orange-100">clickToClose</code> prop with a <code class="font-mono text-sm text-orange-600 bg-orange-100">boolean</code> value as expected.
</ok-tip>

```js
const settings = {
  TModal: {
    clickToClose: 'yes',
  },
  // ...
}

// Add the settings as the second parameter when you register your component
Vue.use(VueTailwind, settings)
```
