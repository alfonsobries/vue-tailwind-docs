---
title: Modal Component
description: VueJs Modal component with configurable classes and infinite variants. Friendly with utility-first frameworks like TailwindCSS.
---

# Modal (TModal)

VueJs Modal component with configurable classes and infinite variants. Friendly with utility-first frameworks like TailwindCSS.

<t-modal-playground></t-modal-playground>

<hr>


## Basic example

```html
<t-modal
  header="Title of the modal"
>
  Content of the modal.
  <template v-slot:footer>
    <div class="flex justify-between">
      <t-button type="button">
        Cancel
      </t-button>
      <t-button type="button">
        Ok
      </t-button>
    </div>
  </template>
</t-modal>
```

<modal-basic-example></modal-basic-example>

## Props

| Property          | Type               | Default value        | Description                                                                                                                              |
| ----------------- | ------------------ | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| name              | `String`           | `undefined`          | Use to open and close the modal by his name                                                                                              |
| value (v-model)   | `Boolean`          | `false`              | Will show the modal according to the value                                                                                               |
| header            | `String`           | `undefined`          | The content of the header                                                                                                                |
| footer            | `String`           | `undefined`          | The content of the footer                                                                                                                |
| clickToClose      | `Boolean`          | `true`               | If true, the modal will close when the user click the overlay                                                                            |
| escToClose        | `Boolean`          | `true`               | If true, the modal will close when the user press the `esc` button                                                                       |
| noBody            | `Boolean`          | `false`              | If true, the modal will be rendered without body, header, and footer                                                                     |
| hideCloseButton   | `Boolean`          | `false`              | If true, the modal will hide the close button                                                                                            |
| disableBodyScroll | `Boolean`          | `true`               | When set, the body of the page will be locked so a large modal can be scrollable                                                         |
| focusOnOpen       | `Boolean`          | `true`               | When set, the modal will be focused after opened. This is necessary if you want that the modal close on when the user press the`esc` key |
| fixedClasses      | `Object`           | `{...}`  (see below) | The default CSS Fixed classes shared for all variants                                                                                    |
| classes           | `Object`           | `{...}`  (see below) | The default CSS classes                                                                                                                  |
| variants          | `Object`           | `undefined`          | The different variants of classes the component have                                                                                     |
| variant           | `[String, Object]` | `undefined`          | The variant that should be used                                                                                                          |

## Classes and variants format

This component expects an object with classes named after every child element.

The properties in that object are the following:

| Property  | Description                        |
| --------- | ---------------------------------- |
| overlay   | The overlay that covers the screen |
| wrapper   | Div that wraps the modal           |
| modal     | The classes of the modal           |
| body      | Body wrapper class                 |
| header    | Header wrapper class               |
| footer    | Footer wrapper class               |
| close     | Close button classes               |
| closeIcon | Close icon classes                 |

### Default fixed classes

The component classes have a default value with the minimum CSS classes needed to work as expected. If you replace the classes or create variants, you should keep the `wrapper` and `overlay` classes. Those classes are related to the display and position and help this component works as expected.

```js
{
  overlay: 'overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed',
  wrapper: 'relative mx-auto ',
  modal: 'overflow-hidden relative',
  body: '',
  header: '',
  footer: '',
  close: '',
  closeIcon: '',
  overlayEnterClass: '',
  overlayEnterActiveClass: '',
  overlayEnterToClass: '',
  overlayLeaveClass: '',
  overlayLeaveActiveClass: '',
  overlayLeaveToClass: '',
  enterClass: '',
  enterActiveClass: '',
  enterToClass: '',
  leaveClass: '',
  leaveActiveClass: '',
  leaveToClass: '',
};
```

### Default classes

Classes that define the default style of the component.

```js
{
  overlay: 'z-40 bg-black bg-opacity-50',
  wrapper: 'z-50 max-w-lg',
  modal: 'bg-white shadow',
  body: '',
  header: '',
  footer: '',
  close: 'absolute right-0 top-0',
  closeIcon: 'h-5 w-5 fill-current',
  overlayEnterClass: '',
  overlayEnterActiveClass: 'opacity-0 transition ease-out duration-100',
  overlayEnterToClass: 'opacity-100',
  overlayLeaveClass: 'transition ease-in opacity-100',
  overlayLeaveActiveClass: '',
  overlayLeaveToClass: 'opacity-0 duration-75',
  enterClass: '',
  enterActiveClass: '',
  enterToClass: '',
  leaveClass: '',
  leaveActiveClass: '',
  leaveToClass: '',
}
```

### Margin and width

If you need to add some margin or spacing between the modal and the screen or define a different width, the `wrapper` attribute is the most appropriate example:

```js
{
  // ...
  wrapper: 'mt-20 px-10 max-w-md .. z-50 relative mx-auto',
  // ...
}
```


### Full Example

```js
{
  fixedClasses: {
    overlay: 'z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-opacity-50',
    wrapper: 'z-50 relative mx-auto my-0 max-w-lg mt-12',
    modal: 'bg-white shadow overflow-hidden relative',
    body: 'p-4',
    header: 'p-4 border-b text-sm font-semibold uppercase text-gray-700',
    footer: 'p-2 border-t',
    close: 'absolute right-0 top-0 m-3 text-gray-700 hover:text-gray-600',
    closeIcon: 'h-5 w-5 fill-current'
  },
  classes: {
    overlay: 'bg-black ',
    wrapper: '',
    modal: '',
    body: 'p-4',
    header: 'text-gray-700',
    footer: '',
    close: 'text-gray-700 hover:text-gray-600',
    closeIcon: ''
  },
  variants: {
    danger: {
      overlay: 'bg-red-500',
      header: 'border-red-100 text-red-700',
      footer: 'border-red-100 bg-red-100',
      close: 'text-red-700 hover:text-red-600'
    }
  }
}
```

## Interact with the modal

You can open/close the modal in 3 ways:

### 1. Using the `value` or `v-model`

```html
<template>
  <div> 
    <t-modal v-model="showModal">hello world</t-modal>
    <button @click="showModal=true" type="button">Show modal</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    }
  }
}
</script>
``` 

### 2. Calling the show/hide methods inside the modal 

```html
<div> 
  <t-modal ref="modal">hello world</t-modal>
  <button @click="$refs.modal.show()" type="button">Show modal</button>
  <button @click="$refs.modal.hide()" type="button">Hide modal</button>
</div>

``` 

### 3. Open the modal by his name

This library includes some global methods that you can use to show/hide a named modal. To use it, you just need to give the modal a name, and then you can show and hide it with the `$modal.show('name-of-your-modal')` and `$modal.hide('name-of-your-modal')` respectively.

```html
<div> 
  <t-modal name="my-modal">hello world</t-modal>
  
  <button @click="$modal.show('my-modal')" type="button">Show modal</button>
  <button @click="$modal.hide('my-modal')" type="button">Hide modal</button>
</div>
``` 

Note:

The `this.$modal.show('my-modal')` accept some extra parameters that are passed to the `before-open` event and you can use to pass data to the modal. Consider the following example:

```html
<template>
  <div>
    <t-modal
      name="modal-name"
      @before-open="onBeforeOpen"
    >
      hello {{ user ? user.name : '' }}
    </t-modal>
    <button type="button" @click="$modal.show('modal-name', { user: { name: 'Alfonso'} })">
      Show modal
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: undefined
    }
  },
  methods: {
    onBeforeOpen ({ params, cancel }) {
      // you can add a condition to cancel the modal opening
      if (false) {
        cancel()
      }

      this.user = params.user
    }
  }
}
</script>
``` 

## Events

| Name         | Params               | Description                                                       |
| ------------ | -------------------- | ----------------------------------------------------------------- |
| before-open  | `{ params, cancel }` | Emits while modal is still invisible, but it was added to the DOM |
| opened       | `{ params }`         | Emits after modal became visible or started transition            |
| before-close | `{ cancel }`         | Emits before modal is going to be closed                          |
| closed       |                      | Emits right before modal is destroyed                             |
| input        |                      | Emits when the v-model value change                               |

<tip>
The `cancel` param is a method you can use to stop the modal from opening or closing.
</tip>

## Slots

| Slot    | description                 |
| ------- | --------------------------- |
| default | content of the modal        |
| header  | content of the header       |
| footer  | content of the footer       |
| close   | Content of the close button |
