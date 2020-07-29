<template>
  <preview class="text-center">
    <t-dropdown text="Click me">
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
