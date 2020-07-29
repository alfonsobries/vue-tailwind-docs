<template>
  <preview class="text-center">
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
          class="flex text-sm rounded-full text-gray-700 items-center pr-3 bg-gray-300 focus:outline-none focus:shadow-solid transition duration-150 ease-in-out border-2 border-gray-200"
          :class="{ 'border-gray-300 bg-gray-500 text-white ': isShown }"
          aria-label="User menu"
          aria-haspopup="true"
          @mousedown="mousedownHandler"
          @focus="focusHandler"
          @blur="blurHandler"
          @keydown="keydownHandler"
        >
          <img class="h-8 w-8 rounded-full mr-2" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">

          Hi, Alfonso!
        </button>
      </div>

      <div slot-scope="{ hide, blurHandler }">
        <button
          class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
          role="menuitem"
          @blur="blurHandler"
        >
          Your Profile
        </button>
        <button
          class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
          role="menuitem"
          @blur="blurHandler"
        >
          Settings
        </button>

        <button
          class="border-t text-red-500 block w-full px-4 py-2 text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
          @click="hide"
        >
          Close me
        </button>
      </div>
    </t-dropdown>
  </preview>
</template>

<script>
export default {
}
</script>
