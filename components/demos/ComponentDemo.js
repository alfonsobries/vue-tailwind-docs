import Vue from 'vue'
import parseJsonClasses from '@/utils/parseJsonClasses'

export default Vue.extend({
  props: {
    params: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      currentValue: null
    }
  },
  computed: {
    settings () {
      return parseJsonClasses(this.params)
    }
  }
})
