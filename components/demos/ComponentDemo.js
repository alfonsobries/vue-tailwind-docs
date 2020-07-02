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
  },
  watch: {
    'settings' (settings, oldSettings) {
      if (!settings) {
        return
      }

      // If we have a new placeholde we should reset the current value
      if (settings.placeholder && settings.placeholder !== oldSettings.placeholder) {
        this.currentValue = null
      }
    },
    deep: true
  }
})
