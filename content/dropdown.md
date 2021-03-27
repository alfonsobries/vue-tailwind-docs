---
title: Dropdown Component
description: VueJs Card component with configurable classes and infinite variants. Friendly with utility-first frameworks like TailwindCSS.
---

# Dropdown (TDropdown)

VueJs dropdown component with configurable classes and infinite variants. Friendly with utility-first frameworks like TailwindCSS.

<t-dropdown-playground></t-dropdown-playground>

<hr>


## Basic example

```html
<t-dropdown text="Menu">
  <div class="py-1 rounded-md shadow-xs">
    <a
      href="#"
      class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
      role="menuitem"
    >
      Your Profile
    </a>
    <a
      href="#"
      class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
      role="menuitem"
    >
      Settings
    </a>
    <a
      href="#"
      class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
      role="menuitem"
    >
      Sign out
    </a>
  </div>
</t-dropdown>
```

<preview>
<t-dropdown text="Open Menu">
  <div class="py-1 rounded-md shadow-xs">
    <a
      href="#"
      class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
      role="menuitem"
    >
      Your Profile
    </a>
    <a
      href="#"
      class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
      role="menuitem"
    >
      Settings
    </a>
    <a
      href="#"
      class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
      role="menuitem"
    >
      Sign out
    </a>
  </div>
</t-dropdown>
</preview>

## Props

| Property               | Type               | Default value       | Description                                                     |
| ---------------------- | ------------------ | ------------------- | --------------------------------------------------------------- |
| text                   | `String`           | `''`                | Text inside the dropdown button                                 |
| disabled               | `Boolean`          | `undefined`         | Disables the dropdown button                                    |
| tagName                | `String`           | `'div'`             | HTML tag that wraps the whole component                         |
| dropdownWrapperTagName | `String`           | `'div'`             | HTML tag that wraps the dropdown (the one that is hidden/shown) |
| dropdownTagName        | `String`           | `'div'`             | HTML tag that wraps the dropdown content                        |
| toggleOnFocus          | `Boolean`          | `false`             | If set the modal will be toggled when focus/blur                |
| toggleOnClick          | `Boolean`          | `true`              | If set the modal will be toggled when click the button          |
| toggleOnHover          | `Boolean`          | `false`             | If set the modal will be toggled when hover the button          |
| hideOnLeaveTimeout     | `Number`           | `250`               | Timeout to hide the modal after mouseout                        |
| show                   | `Boolean`          | `false`             | If set will show the dropdown (accepts the `.sync` modifier)    |
| fixedClasses           | `Object`           | `undefined`         | The default CSS Fixed classes shared for all variants           |
| classes                | `Object`           | `{...}` (see below) | The default CSS classes                                         |
| variants               | `Object`           | `undefined`         | The different variants of classes the component have            |
| variant                | `[String, Object]` | `undefined`         | The variant that should be used                                 |

## Classes and variants format

This component expects an object with classes named after every child element.

The properties in that object are the following:

| Property         | Description                                  |
| ---------------- | -------------------------------------------- |
| button           | Default button trigger                       |
| wrapper          | Wrapper of the whole component               |
| dropdownWrapper  | Wrapper of the dropdown                      |
| dropdown         | Wrapper of the dropdown content              |
| enterClass       | Vue Custom Transition Class for the dropdown |
| enterActiveClass | Vue Custom Transition Class for the dropdown |
| enterToClass     | Vue Custom Transition Class for the dropdown |
| leaveClass       | Vue Custom Transition Class for the dropdown |
| leaveActiveClass | Vue Custom Transition Class for the dropdown |
| leaveToClass     | Vue Custom Transition Class for the dropdown |



### Default classes

```js
{
  button: 'block px-4 py-2 text-white transition duration-100 ease-in-out bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
  wrapper: 'inline-flex flex-col',
  dropdownWrapper: 'relative z-10',
  dropdown: 'origin-top-left absolute left-0 w-56 rounded shadow bg-white mt-1',
  enterClass: 'opacity-0 scale-95',
  enterActiveClass: 'transition transform ease-out duration-100',
  enterToClass: 'opacity-100 scale-100',
  leaveClass: 'opacity-100 scale-100',
  leaveActiveClass: 'transition transform ease-in duration-75',
  leaveToClass: 'opacity-0 scale-95',
}
```
## Scoped slots

| Slot    | Description                             |
| ------- | --------------------------------------- |
| default | The dropdown contents goes there        |
| trigger | If used will replace the button trigger |
| button  | If used will replace the button content |

### Default slot

Everything inside the default slot will be inside the dropdown, this slot contains the following data:

| Slot               | type       | Description                                                                                                                             |
| ------------------ | ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| hide               | `Function` | If called it will hide the dropdown                                                                                                     |
| hideIfFocusOutside | `Function` | If called from a focus event (for example in a button inside the dropdown) will hide the dropdown if the focus is outside the component |
| show               | `Function` | If called it will show the dropdown                                                                                                     |
| toggle             | `Function` | If called it will toggle the dropdown                                                                                                   |
| blurHandler        | `Function` | Intended to be used in any "blureable" element inside the dropdown for better UX                                                        |

#### Example: 

Consider a dropdown that is used as a menu of items:

```vue
<t-dropdown text="Click me">
  <div slot-scope="{ hide, blurHandler }">
    <button
      class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
      role="menuitem"
      @blur="blurHandler"
    >
      Your Profile
    </button>
    <button
      class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
      role="menuitem"
      @blur="blurHandler"
    >
      Settings
    </button>

    <button
      class="block w-full px-4 py-2 text-sm leading-5 text-red-500 transition duration-150 ease-in-out border-t hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
      @click="hide"
    >
      Close me
    </button>
  </div>
</t-dropdown>
```
<tip>
Is a general recomendation to add the `blurHandler` to any button or blureable element inside the dropdown, that handler ensures to hide the dropdown according to your settings, for example when the user clicks outside.
</tip>

The example below will be look like this:

<dropdown-slot-default-example></dropdown-slot-default-example>

### Trigger slot

Will replace the current dropdown button, useful for any custom handler.

| Slot               | type       | Description                                                                                                                             |
| ------------------ | ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| isShown            | `Boolean`  | If the dropdown is shown                                                                                                                |
| hide               | `Function` | If called it will hide the dropdown                                                                                                     |
| hideIfFocusOutside | `Function` | If called from a focus event (for example in a button inside the dropdown) will hide the dropdown if the focus is outside the component |
| show               | `Function` | If called it will show the dropdown                                                                                                     |
| toggle             | `Function` | If called it will toggle the dropdown                                                                                                   |
| blurHandler        | `Function` | Intended to be used in any "blureable" element that is used a the dropdown trigger                                                      |
| mousedownHandler   | `Function` | Intended to be used in any "blureable" element that is used a the dropdown trigger                                                      |
| focusHandler       | `Function` | Intended to be used in any "focuseable" element that is used a the dropdown trigger                                                     |
| keydownHandler     | `Function` | Intended to be used in any "clickeable" element that is used a the dropdown trigger                                                     |
| disabled           | `Boolean`  | If the dropdown component is currently disabled                                                                                         |

#### Example: 

**Rich menu button**

```vue
<t-dropdown>
  <div
    slot="trigger"
    slot-scope="{
      mousedownHandler,
      focusHandler,
      blurHandler,
      keydownHandler,
      isShown
    }"
  >
    <button
      id="user-menu"
      class="flex items-center pr-3 text-sm text-gray-700 transition duration-150 ease-in-out bg-gray-300 border-2 border-gray-200 rounded-full focus:outline-none focus:shadow-solid"
      :class="{ 'border-gray-300 bg-gray-500 text-white ': isShown }"
      aria-label="User menu"
      aria-haspopup="true"
      @mousedown="mousedownHandler"
      @focus="focusHandler"
      @blur="blurHandler"
      @keydown="keydownHandler"
    >
      <img class="w-8 h-8 mr-2 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">

      Hi, Alfonso!
    </button>
  </div>

  <div slot-scope="{ hide, blurHandler }">
    <button
      class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
      role="menuitem"
      @blur="blurHandler"
    >
      Your Profile
    </button>
    <button
      class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
      role="menuitem"
      @blur="blurHandler"
    >
      Settings
    </button>

    <button
      class="block w-full px-4 py-2 text-sm leading-5 text-red-500 transition duration-150 ease-in-out border-t hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
      @click="hide"
    >
      Close me
    </button>
  </div>
</t-dropdown>
```
<tip>
Is a general recomendation to add the `blurHandler`, `mousedownHandler`, `focusHandler` and `keydownHandler` to any button or blureable element that you want to use as a trigger, those handler ensures to toggle the dropdown according to your settings.
</tip>

The example below will be look like this:

<dropdown-slot-trigger-example></dropdown-slot-trigger-example>

**Tooltip**

```vue
<t-dropdown
  variant="tooltip"
  toggle-on-hover
>
  <span
    slot="trigger"
    class="text-blue-500 border-b border-dashed"
  >
    hey!, hover me
  </span>

  <template>
    Yes you can use the dropdown as tooltip
  </template>
</t-dropdown>
```

The example below will be look like this:

<dropdown-slot-trigger-example-2></dropdown-slot-trigger-example-2>

<tip>
To create the perfect tooltip you can create your own variant and replace the HTML of the different parts to use a `span` for example.
</tip>

**Dropdown group**

```vue
<t-dropdown>
  <div
    slot="trigger"
    slot-scope="{
      mousedownHandler,
      focusHandler,
      blurHandler,
      keydownHandler,
      isShown
    }"
    class="flex"
  >
    <button
      class="flex items-center justify-center flex-shrink-0 px-3 py-2 text-white bg-blue-500 border-r border-blue-600 rounded-l hover:bg-blue-500"
    >
      Hi, Alfonso!
    </button>
    <button
      class="flex items-center justify-center flex-shrink-0 px-3 py-2 text-white bg-blue-500 border-l border-blue-400 rounded-r hover:bg-blue-500"
      @mousedown="mousedownHandler"
      @focus="focusHandler"
      @blur="blurHandler"
      @keydown="keydownHandler"
    >
      <svg class="w-4 h-4 text-white fill-current" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd">
          <g id="icon-shape">
            <polygon id="Combined-Shape" points="9.29289322 12.9497475 10 13.6568542 15.6568542 8 14.2426407 6.58578644 10 10.8284271 5.75735931 6.58578644 4.34314575 8" />
          </g>
        </g>
      </svg>
    </button>
  </div>

  <div slot-scope="{ hide, blurHandler }">
    <button
      class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
      role="menuitem"
      @blur="blurHandler"
    >
      Your Profile
    </button>
    <button
      class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
      role="menuitem"
      @blur="blurHandler"
    >
      Settings
    </button>
  </div>
</t-dropdown>
```

The example below will be look like this:

<dropdown-slot-trigger-example-3></dropdown-slot-trigger-example-3>

<tip>
Notice the in the example above the slot handler are only used in the trigger of the dropdown
</tip>

**Navbar**

```vue
<t-dropdown
  tag-name="nav"
  :classes="{}"
  :fixed-classes="{}"
  class="bg-blue-800"
>
  <div
    slot="trigger"
    slot-scope="{
      mousedownHandler,
      focusHandler,
      blurHandler,
      keydownHandler,
      isShown
    }"
    class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
  >
    <div class="flex justify-between h-16">
      <div class="flex">
        <div class="flex items-center mr-2 -ml-2 sm:hidden">
          <!-- Mobile menu button -->
          <button
            class="inline-flex items-center justify-center p-2 text-blue-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:text-white"
            aria-label="Main menu"
            aria-expanded="false"
            @mousedown="mousedownHandler"
            @blur="blurHandler"
            @keydown="keydownHandler"
          >
            <svg
              :class="{ 'hidden': isShown, 'block': !isShown}"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              :class="{ 'hidden': !isShown, 'block': isShown}"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex items-center flex-shrink-0 text-white">
          MYAPP
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <a href="#" class="px-3 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-blue-900 rounded-md focus:outline-none focus:text-white focus:bg-blue-700">Users</a>
          <a href="#" class="px-3 py-2 ml-4 text-sm font-medium leading-5 text-blue-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700">Companies</a>
          <a href="#" class="px-3 py-2 ml-4 text-sm font-medium leading-5 text-blue-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700">Settings</a>
        </div>
      </div>
    </div>
  </div>

  <div class="sm:hidden">
    <div class="px-2 pt-2 pb-3 sm:px-3">
      <a href="#" class="block px-3 py-2 text-base font-medium text-white transition duration-150 ease-in-out bg-blue-900 rounded-md focus:outline-none focus:text-white focus:bg-blue-700">Users</a>
      <a href="#" class="block px-3 py-2 mt-1 text-base font-medium text-blue-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700">Companies</a>
      <a href="#" class="block px-3 py-2 mt-1 text-base font-medium text-blue-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700">Settings</a>
    </div>
  </div>
</t-dropdown>
```

The example below will be look like this:

<dropdown-slot-trigger-example-4></dropdown-slot-trigger-example-4>

