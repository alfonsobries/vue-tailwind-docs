<template>
  <t-card
    :variant="{
      playground: !fullscreen,
      fullscreen: fullscreen
    }"
    :style="fullscreen ? 'margin:0' : undefined"
  >
    <template slot="header">
      <h3 class="text-lg text-gray-900">
        Playground
      </h3>
      <div class="hidden sm:flex items-center text-sm md:text-base">
        <!-- <button type="button" class="bg-orange-100 text-orange-700 inline-block rounded-lg font-medium leading-none py-2 px-3 focus:outline-none bg-orange-50 text-orange-700">
          Customize
        </button>
        <button type="button" class=" text-gray-500 hover:text-orange-600 focus:text-orange-600 ml-2 inline-block rounded-lg font-medium leading-none py-2 px-3 focus:outline-none text-gray-500 hover:text-orange-600 focus:text-orange-600">
          Classes
        </button>
        <span class="border-gray-500 border-l h-4 inline-block ml-1 mr-2" /> -->
        <button
          type="button"
          class="p-2 rounded-full focus:outline-none"
          :class="{
            'border-orange-300 bg-orange-100 border-2 shadow-inner text-orange-800 hover:bg-orange-200': fullscreen,
            'hover:bg-gray-300 text-gray-700': !fullscreen,
          }"
          @click="toggleFullscreen"
        >
          <icon class="h-4 w-4 pointer-events-none">
            <path v-if="!fullscreen" id="Combined-Shape" d="M4.20710678,17.2071068 L7,20 L0,20 L0,13 L2.79289322,15.7928932 L7.12132034,11.4644661 L8.53553391,12.8786797 L4.20710678,17.2071068 Z M15.7928932,2.79289322 L13,0 L20,0 L20,7 L17.2071068,4.20710678 L12.8786797,8.53553391 L11.4644661,7.12132034 L15.7928932,2.79289322 Z M15.7928932,17.2071068 L13,20 L20,20 L20,13 L17.2071068,15.7928932 L12.8786797,11.4644661 L11.4644661,12.8786797 L15.7928932,17.2071068 Z M4.20710678,2.79289322 L7,0 L0,0 L0,7 L2.79289322,4.20710678 L7.12132034,8.53553391 L8.53553391,7.12132034 L4.20710678,2.79289322 Z" />
            <polygon v-else id="Combined-Shape" points="10 8.58578644 2.92893219 1.51471863 1.51471863 2.92893219 8.58578644 10 1.51471863 17.0710678 2.92893219 18.4852814 10 11.4142136 17.0710678 18.4852814 18.4852814 17.0710678 11.4142136 10 18.4852814 2.92893219 17.0710678 1.51471863 10 8.58578644" />
          </icon>
        </button>
      </div>
    </template>

    <div ref="wrapper" class="w-full bg-gray-700 relative max-w-full shadow-inner">
      <div
        ref="resizable"
        :style="`min-width:${minWidth}px`"
        class="relative flex bg-white h-full"
      >
        <div
          ref="iframeWrapper"
          class="flex-grow relative ease-in-out transition-all origin-top duration-100"
          :style="`height: ${initialHeight}px`"
          :class="{'pointer-events-none': dragging}"
        >
          <loading-overlay v-if="loadingIFrame" />
          <iframe
            ref="iframe"
            class="w-full h-full "
            :src="src"
          />
        </div>
        <span
          ref="resizer"
          draggable="true"
          style="cursor: ew-resize"
          class="sr-only sm:not-sr-only sm:border-l sm:bg-gray-100 sm:flex sm:items-center sm:w-4"
        >
          <icon class="h-4 w-4 text-gray-600 pointer-events-none">
            <path d="M8 5h2v14H8zM14 5h2v14h-2z" />
          </icon>
        </span>
      </div>
    </div>
  </t-card>
</template>

<script>
import Vue from 'vue'
import Icon from '@/components/Icon'
export default Vue.extend({
  components: {
    Icon
  },
  props: {
    src: {
      type: String,
      required: true
    },
    minWidth: {
      type: Number,
      default: 200
    },
    initialHeight: {
      type: Number,
      default: 200
    }
  },
  data () {
    return {
      fullscreen: false,
      dragging: false,
      startX: null,
      startWidth: null,
      loadingIFrame: true
    }
  },
  mounted () {
    const resizer = this.$refs.resizer
    const iframe = this.$refs.iframe

    resizer.addEventListener('mousedown', this.initDrag, false)
    iframe.addEventListener('load', this.iframeLoaded)
  },
  methods: {
    iframeLoaded () {
      this.syncIframeHeight()
      this.loadingIFrame = false
    },
    syncIframeHeight () {
      if (this.fullscreen) {
        return
      }
      const iframe = this.$refs.iframe
      const iframeWrapper = this.$refs.iframeWrapper
      const newHeight = iframe.contentWindow.document.body.offsetHeight
      iframeWrapper.style.height = `${newHeight}px`
    },
    async toggleFullscreen () {
      this.fullscreen = !this.fullscreen
      await this.$nextTick()
      this.$refs.resizable.style.width = 'auto'

      if (this.fullscreen) {
        this.$refs.iframeWrapper.style.height = 'auto'
      } else {
        this.$refs.iframeWrapper.style.height = `${this.initialHeight}px`
      }
    },
    initDrag (e) {
      e.preventDefault()

      this.dragging = true
      this.startX = e.clientX
      this.startWidth = parseInt(document.defaultView.getComputedStyle(this.$refs.resizable).width, 10)
      document.documentElement.addEventListener('mousemove', this.doDrag, false)
      document.documentElement.addEventListener('mouseup', this.stopDrag, false)
    },
    doDrag (e) {
      e.preventDefault()
      const width = Math.min(this.startWidth + e.clientX - this.startX, this.$refs.wrapper.offsetWidth)
      this.$refs.resizable.style.width = `${width}px`
      this.syncIframeHeight()
    },
    stopDrag (e) {
      e.preventDefault()
      this.dragging = false
      document.documentElement.removeEventListener('mousemove', this.doDrag, false)
      document.documentElement.removeEventListener('mouseup', this.stopDrag, false)
    }
  }
})
</script>
