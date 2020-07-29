<template>
  <div class="p-4 flex justify-center">
    <t-dropdown
      :classes="settings.classes"
      :variant="settings.variant ? settings.variant : undefined"
      :variants="settings.variants"
      :fixed-classes="settings.fixedClasses"
    >
      <template
        slot="button"
      >
        My account
        <icon class="h-3 w-3 ml-2">
          <path d="M19 9l-7 7-7-7" />
        </icon>
      </template>
      <div class="py-1 rounded-md shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
        <a
          href="#"
          class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
          role="menuitem"
        >
          Your Profile
        </a>
        <a
          href="#"
          class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
          role="menuitem"
        >
          Settings
        </a>
        <a
          href="#"
          class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
          role="menuitem"
        >
          Sign out
        </a>
      </div>
    </t-dropdown>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import ComponentDemo from './ComponentDemo'
export default ComponentDemo.extend({
  components: {
    Icon
  }
})
</script>
