import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      themeWasChanged: false
    }
  },
  watch: {
    settings () {
      this.themeWasChanged = true
    }
  }
})
