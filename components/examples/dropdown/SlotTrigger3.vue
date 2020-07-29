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
        class="flex"
      >
        <button
          class="px-3 py-2 flex items-center justify-center bg-blue-500 hover:bg-blue-500 rounded-l text-white flex-shrink-0 border-r border-blue-600"
        >
          Hi, Alfonso!
        </button>
        <button
          class="px-3 py-2 flex items-center justify-center bg-blue-500 hover:bg-blue-500 rounded-r text-white flex-shrink-0 border-l border-blue-400"
          @mousedown="mousedownHandler"
          @focus="focusHandler"
          @blur="blurHandler"
          @keydown="keydownHandler"
        >
          <svg class="fill-current text-white w-4 h-4" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
      </div>
    </t-dropdown>
  </preview>
</template>

<script>
export default {
}
</script>
