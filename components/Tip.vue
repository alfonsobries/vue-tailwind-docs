<template>
  <div v-if="show" class="rounded bg-orange-100 p-4 text-orange-800 flex items-center">
    <icon class="w-6 h-6 text-orange-300 mr-3 mt-1 inline-block flex-shrink-0">
      <path id="Combined-Shape" d="M2.92893219,17.0710678 C6.83417511,20.9763107 13.1658249,20.9763107 17.0710678,17.0710678 C20.9763107,13.1658249 20.9763107,6.83417511 17.0710678,2.92893219 C13.1658249,-0.976310729 6.83417511,-0.976310729 2.92893219,2.92893219 C-0.976310729,6.83417511 -0.976310729,13.1658249 2.92893219,17.0710678 L2.92893219,17.0710678 Z M15.6568542,15.6568542 C18.7810486,12.5326599 18.7810486,7.46734008 15.6568542,4.34314575 C12.5326599,1.21895142 7.46734008,1.21895142 4.34314575,4.34314575 C1.21895142,7.46734008 1.21895142,12.5326599 4.34314575,15.6568542 C7.46734008,18.7810486 12.5326599,18.7810486 15.6568542,15.6568542 Z M9,11 L9,10.5 L9,9 L11,9 L11,15 L9,15 L9,11 Z M9,5 L11,5 L11,7 L9,7 L9,5 Z" />
    </icon>
    <span>
      <slot />
    </span>
    <a v-if="closable" class="-mr-3 -mt-3 rounded-full p-3 bg-orange-200 hover:bg-orange-300 flex items-center justify-center w-5 h-5" href="#" @click.prevent="show = false">
      <icon class="w-3 h-3 text-orange-800 inline-block flex-shrink-0">
        <path id="Combined-Shape" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
      </icon>
    </a>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  components: {
    Icon
  },
  props: {
    closable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      show: true
    }
  }
}
</script>
