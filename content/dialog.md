---
title: Dialog Component
description: VueJs Dialog component with configurable classes and infinite variants. Use it for alerts, confirmation, or prompt dialogs.
---

# Dialog (TDialog)

VueJs Dialog component with configurable classes and infinite variants. Friendly with utility-first frameworks like TailwindCSS.

Use it for alerts, confirmation, or prompt dialogs, open it programmatically, or add the component normally as a Vue component.

<!-- <t-dialog-playground></t-dialog-playground> -->

<hr>

## Basic example

<dialog-basic-example></dialog-basic-example>

### As Vue component

Add the Dialog in your template as any Vue component if you want to have more control over the content of the dialog.

For example, it allows you to use any custom HTML and reactive content by using the slots and interact with it by using the built-in functions like `this.$dialog.show('named-dialog')` similar to the way you interact with the Dialog. This is especially useful for forms.

```html
<!-- Note that the visual style of the example comes from a custom theme made for this docs -->
<t-dialog
  name="named-dialog"
  icon="question"
  type="confirm"
  variant="demo"
>
  <template slot="title">
    Delete user?
  </template>

  <p>This action cannot be undone.</p>

  <template slot="icon">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6" /></svg>
  </template>
</t-dialog>
```

### Open the dialog programmatically

You can use the build it global methods to trigger a dialog at any moment, these methods return a promise that you can use to handle the results of the dialog.

#### Confirm

```js
this.$dialog.confirm('Delete user?', 'This action cannot be undone.', 'info')
  .then((result) => {
    console.log(result)
  })
// Or 
this.$dialog.confirm({
  title: 'Delete user?',
  text: 'This action cannot be undone.',
  icon: 'info',
  // variant: 'my-confirm',
  // ...More props
}).then((result) => {
  console.log(result)
})
```

Example: 

<confirm-basic-example></confirm-basic-example>

#### Prompt

```js
this.$dialog.prompt('New password', 'Include one number and one special character.', 'question')
  .then((result) => {
    console.log(result)
  })
// Or 
this.$dialog.prompt({
  title: 'New password',
  text: 'Include one number and one special character.',
  icon: 'question',
  // variant: 'my-question',
  // ...More props
}).then((result) => {
  console.log(result)
})
```

<prompt-basic-example></prompt-basic-example>

#### Alert

```js
this.$dialog.alert('Server overheating', 'Please add an ice or something', 'warning')
  .then((result) => {
    console.log(result)
  })
// Or 
this.$dialog.alert({
  title: 'Server overheating',
  text: 'Please add an ice or something',
  icon: 'warning',
  // variant: 'my-alert',
  // ...More props
}).then((result) => {
  console.log(result)
})
```

<alert-basic-example></alert-basic-example>


## Props or options

| Property              | Type               | Default value        | Description                                                                                                                                                          |
| --------------------- | ------------------ | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value (v-model)       | `Boolean`          | `false`              | If set will show the Dialog                                                                                                                                          |
| type                  | `String`           | `'alert'`            | Dialog type ('alert', 'prompt' or 'confirm')                                                                                                                         |
| name                  | `String`           | `undefined`          | Unique name for the dialog. (Useful for toggle it with the `$dialog.show(name)` and `$dialog.hide(name)` methods)                                                    |
| titleTag              | `String`           | `'h3'`               | HTML Tag used for the dialog title                                                                                                                                   |
| title                 | `String`           | `undefined`          | Title of the dialog                                                                                                                                                  |
| icon                  | `String`           | `undefined`          | Icon of the dialog ('success', 'error', 'warning', 'info' or 'question'))                                                                                            |
| textTag               | `String`           | `'p'`                | HTML Tag used for the dialog text                                                                                                                                    |
| text                  | `String`           | `undefined`          | Text content of the dialog                                                                                                                                           |
| clickToClose          | `Boolean`          | `true`               | If set will close te dialog when the user clicks the overlay (clicks outside)                                                                                        |
| escToClose            | `Boolean`          | `true`               | If set will close te dialog when the user press the esc key                                                                                                          |
| cancelButtonText      | `String`           | 'Cancel'             | Cancel button text                                                                                                                                                   |
| cancelButtonAriaLabel | `String`           | `undefined`          | Cancel button aria label                                                                                                                                             |
| okButtonText          | `String`           | 'OK'                 | Ok button text                                                                                                                                                       |
| okButtonAriaLabel     | `String`           | `undefined`          | Ok button aria label                                                                                                                                                 |
| showCloseButton       | `Boolean`          | `false`              | If set will show a close button with an icon                                                                                                                         |
| disableBodyScroll     | `Boolean`          | `true`               | If set, the body of the page will be locked so a large dialog can be scrollable                                                                                      |
| focusOnOpen           | `Boolean`          | `true`               | If set, the dialog will be focused after opened. This is necessary if you want that the dialog close on when the user press the`esc` key                             |
| preConfirm            | `Function`         | `undefined`          | Function to run before submit the dialog, it accepts a promise                                                                                                       |
| inputAttributes       | `Object`           | `undefined`          | (Prompt only) attributes of of the text input                                                                                                                        |
| inputType             | `String`           | 'text'               | (Prompt only) type of the prompt input (accepts 'select', 'radio', 'checkbox' and all the valid `type` value for text input) input                                   |
| inputValidator        | `Function`         | `undefined`          | (Prompt only) Function for validate the value of the prompt, receives the prompt value and should return an error message or empty if no erros. It accepts a promise |
| inputValue            | `[String, Array]`  | `undefined`          | (Prompt only) Default value of the input                                                                                                                             |
| inputOptions          | `[Array, Object]`  | `undefined`          | (Prompt only and only applies to `select`, `radio` and `checkbox` inputType)  set of options in any of the valid format the the TSelect accepts                      |
| inputPlaceholder      | `String`           | `undefined`          | (Prompt only) Placeholder for the prompt input, and label in the case of a single checkbox                                                                           |
| fixedClasses          | `Object`           | `{...}`  (see below) | The default CSS Fixed classes shared for all variants                                                                                                                |
| classes               | `Object`           | `{...}`  (see below) | The default CSS classes                                                                                                                                              |
| variants              | `Object`           | `undefined`          | The different variants of classes the component have                                                                                                                 |
| variant               | `[String, Object]` | `undefined`          | The variant that should be used                                                                                                                                      |

## Classes and variants format

This component expects an object with classes named after every child element.

The properties in that object are the following:

| Property        | Description                                                   |
| --------------- | ------------------------------------------------------------- |
| close           | Close button                                                  |
| closeIcon       | Close button SVG icon                                         |
| overlay         | The overlay that covers the screen                            |
| wrapper         | Div that wraps the dialog                                     |
| dialog          | Dialog                                                        |
| body            | Dialog body                                                   |
| buttons         | Button wrapper                                                |
| iconWrapper     | Icon wrapper                                                  |
| icon            | SVG icon                                                      |
| content         | Wraps the title, text, and prompt input                       |
| titleWrapper    | Wraps the title                                               |
| title           | Title tag                                                     |
| textWrapper     | Wraps the text content                                        |
| text            | Text tag                                                      |
| cancelButton    | Cancel button                                                 |
| okButton        | Ok Button                                                     |
| inputWrapper    | Wraps the prompt input                                        |
| input           | Prompt input                                                  |
| select          | Prompt select                                                 |
| radioWrapper    | Prompt radio inputs wrapper                                   |
| radio           | Prompt radio input                                            |
| radioText       | Prompt radio text                                             |
| checkboxWrapper | Prompt checkbox wrapper                                       |
| checkbox        | Prompt checkbox                                               |
| checkboxText    | Prompt checkbox text                                          |
| errorMessage    | Error message (for invalid prompts)                           |
| busyWrapper     | Divs that appears when the prompt is busy (to use as overlay) |
| busyIcon        | Icon inside the busy wrapper                                  |

[Vue transition classes](https://vuejs.org/v2/guide/transitions.html#Transition-Classes)

| Property                |
| ----------------------- |
| overlayEnterClass       |  |
| overlayEnterActiveClass |
| overlayEnterToClass     |
| overlayLeaveClass       |
| overlayLeaveActiveClass |
| overlayLeaveToClass     |
| enterClass              |
| enterActiveClass        |
| enterToClass            |
| leaveClass              |
| leaveActiveClass        |
| leaveToClass            |

### Default fixed classes

The fixed classes have a default value with the minimum CSS classes this component needs to work as expected. If you replace the classes or create variants, you should keep the `wrapper` and `overlay` classes. Those classes are related to the display and position.

```js
{
  overlay: 'overflow-auto scrolling-touch left-0 top-0 bottom-0 right-0 w-full h-full fixed',
  wrapper: 'relative mx-auto ',
  dialog: 'overflow-hidden relative',
  close: 'absolute right-0 top-0',
};
```

### Default classes

Classes that define the default style of the component.

```js
{
close: 'bg-gray-100 flex h-8 items-center justify-center m-1 rounded-full text-gray-700 w-8 hover:bg-gray-200',
  closeIcon: 'h-5 w-5 fill-current',
  overlay: 'z-40 bg-black bg-opacity-50',
  wrapper: 'z-50 max-w-md',
  dialog: 'bg-white rounded p-4 text-left overflow-hidden shadow ',
  body: '',
  buttons: 'mt-4 flex space-x-4 justify-center',
  iconWrapper: 'mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 flex-shrink-0',
  icon: 'w-6 h-6 text-gray-700',
  content: 'mt-3',
  titleWrapper: '',
  title: 'text-lg leading-6 font-medium text-gray-900 text-center',
  textWrapper: 'mt-2 text-gray-600',
  text: '',
  cancelButton: 'inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5 w-full max-w-xs',
  okButton: 'inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5 w-full max-w-xs',
  inputWrapper: 'mt-3 flex items-center space-x-4 justify-center',
  input: 'form-input w-full',
  select: 'form-select w-full',
  radioWrapper: 'flex items-center space-x-2',
  radio: 'form-radio',
  radioText: '',
  checkboxWrapper: 'flex items-center space-x-2',
  checkbox: 'form-checkbox',
  checkboxText: '',
  errorMessage: 'text-red-500 block text-sm',
  busyWrapper: 'absolute bg-opacity-50 bg-white flex h-full items-center justify-center left-0 top-0 w-full',
  busyIcon: 'animate-spin h-6 w-6 fill-current text-gray-500',
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

If you need to add some margin or spacing between the dialog and the screen or define a different width, the `wrapper` attribute is the most appropriate example:

```js
{
  // ...
  wrapper: 'mt-20 px-10 max-w-md .. z-50 relative mx-auto',
  // ...
}
```

## Toggle the dialog programmatically

You can open the dialog programmatically by using the built-in functions.

These functions are `$dialog.alert`, `$dialog.prompt`, and `$dialog.confirm`, they all work the same and the only difference is the type of dialog that you will open.

### Method parameters

For simple dialogs, you can pass strings to the method parameters with the `title` as a required first parameter and the optional `text` and `icon` as the rest of the parameters.

#### Example:

```js
// Text parameters
this.$dialog.alert('Title of the dialog');
// Or
this.$dialog.alert('Title of the dialog', 'text of the dialog (optional)', 'iconName (optional)');
```

You can also pass an object that accepts any of the `props` of this component

#### Example:

```js
// Text parameters
this.$dialog.alert({
  title: 'Title of the dialog',
  text: 'text of the dialog',
  icon: 'question',
  variant: 'danger',
  textTag: 'span',
  // .... basically any prop
});
```

### Dialog response

The dialog will return a promise that will return and object useful data related with the user interaction.

The object returned will look like this:

```js
{
  hideReason: "ok",
  isOk: true,
  isCancel: false,
  isDismissed: false
  // Only in prompts
  input: DialogInput;
  // When using a preConfirm function
  response: any;
}
```

| Property    | Description                                                                             |
| ----------- | --------------------------------------------------------------------------------------- |
| hideReason  | The dialog close reason                                                                 |
| isOk        | If the ok button was pressed                                                            |
| isCancel    | If the cancel button was pressed                                                        |
| isDismissed | If the dialog was closed for any other reason                                           |
| input       | When using a prompt the result of the user prompt                                       |
| response    | When using the `preConfirm` function in a prompt the result of the preconfirm response |

### Hide reason

The possible hide reasons are the following:

| Reason      | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| `'outside'` | Closed because the user clicks outside                        |
| `'close'`   | Closed because the user press the close button               |
| `'esc'`     | Closed because the user press the `esc` key                  |
| `'cancel'`  | The user presses the cancel button                             |
| `'ok'`      | The user press the ok button                                 |
| `'method'`  | The user closed the dialog with the `$dialog.hide` method    |
| `'value'`   | The dialog was closed because the `v-model` was set to `form` |


## Toggle the dialog as a vue component

When using the Dialog as a normal vue component you can open/close the dialog in 3 ways:

#### 1. Using the `value` or `v-model`

```html
<template>
  <div> 
    <t-dialog v-model="showDialog">hello world</t-dialog>
    <button @click="showDialog=true" type="button">Show dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDialog: false
    }
  }
}
</script>
``` 

#### 2. Calling the show/hide methods inside the dialog 

```html
<div> 
  <t-dialog ref="dialog">hello world</t-dialog>
  <button @click="$refs.dialog.show()" type="button">Show dialog</button>
  <button @click="$refs.dialog.hide()" type="button">Hide dialog</button>
</div>

``` 

#### 3. Open the dialog by his name

This library includes some global methods that you can use to show/hide a named dialog. To use it, you just need to give the dialog a name, and then you can show and hide it with the `$dialog.show('name-of-your-dialog')` and `$dialog.hide('name-of-your-dialog')` respectively.

```html
<div> 
  <t-dialog name="my-dialog">hello world</t-dialog>
  
  <button @click="$dialog.show('my-dialog')" type="button">Show dialog</button>
  <button @click="$dialog.hide('my-dialog')" type="button">Hide dialog</button>
</div>
``` 

Note:

The `this.$dialog.show('my-dialog')` accept some extra parameters that are passed to the `before-open` event and you can use to pass data to the dialog. Consider the following example:

```html
<template>
  <div>
    <t-dialog
      name="dialog-name"
      @before-open="onBeforeOpen"
    >
      hello {{ user ? user.name : '' }}
    </t-dialog>
    <button type="button" @click="$dialog.show('dialog-name', { user: { name: 'Alfonso'} })">
      Show dialog
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
      // you can add a condition to cancel the dialog opening
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

| Name         | Params                                                           | Description                                                                                                     |
| ------------ | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| before-open  | `{ params, cancel }`                                             | Emits while the dialog is still invisible, but it was added to the DOM                                              |
| opened       | `{ params }`                                                     | Emits after dialog became visible or started transition                                                         |
| before-close | `{ cancel, event, reason, input?, response? }`                   | Emits before the dialog is going to be closed (include some of the data of the [dialog response](#dialog-response)) |
| closed       | `{ hideReason, isOk, isCancel, isDismissed, input?, response? }` | Emits right before dialog is destroyed (include [dialog response](#dialog-response))                            |
| input        | `boolean`                                                        | Emits when the v-model value change                                                                             |
| change       | `boolean`                                                        | Emits when the v-model value change                                                                             |

<tip>
The `cancel` param is a method you can use to stop the dialog from opening or closing.
</tip>

## Slots

| Slot        | Description                    |
| ----------- | ------------------------------ |
| default     | Content of the dialog          |
| title       | Content of the title           |
| icon        | Content of the icon            |
| loader      | Content of the loading div     |
| closeButton | Content of the close button    |
| buttons     | Content of the buttons section |

### Buttons scoped slot

The buttons scoped slot includes some data that is necessary to create your own buttons


| Attribute             | Type                                      |
| --------------------- | ----------------------------------------- |
| cancelButtonAriaLabel | Same value as the prop                    |
| okButtonAriaLabel     | Same value as the prop                    |
| cancelButtonText      | Same value as the prop                    |
| okButtonText          | Same value as the prop                    |
| okButtonClass         | Same value as the prop                    |
| cancelButtonClass     | Same value as the prop                    |
| dialogType            | Same value as the prop                    |
| cancel                | Method for trigger the "cancel" behavior |
| ok                    | Method for trigger the "ok" behavior |


### Slots Example

```html
<t-dialog
      name="named-dialog"
  :icon="icon"
  title="Remove user?"
>
  <template slot="title">
    yeah yeah
  </template>

  <template slot="icon">
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    ><path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
    /></svg>
  </template>

  <template
    slot="buttons"
    slot-scope="{ ok, cancel }"
  >
    <a
      href="#"
      @click.prevent="ok"
    >Ok do it</a>
    <a
      href="#"
      @click.prevent="cancel"
    >Cancel</a>
  </template>

  This is the content of the dialog.
</t-dialog>

```
