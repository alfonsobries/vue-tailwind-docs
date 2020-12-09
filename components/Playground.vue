<template>
  <div class="relative max-w-full overflow-hidden rounded">
    <loading-overlay v-if="loadingIFrame" />

    <t-card
      ref="card"
      :variant="{
        playground: !fullscreen,
        fullscreen: fullscreen
      }"
      :style="fullscreen ? 'margin:0' : undefined"
      @keyup.native.esc="exitFullscreen"
    >
      <template slot="header">
        <div>
          <h3 class="text-base font-medium text-gray-900">
            {{ title }}
          </h3>
          <p v-if="subtitle" class="text-sm text-gray-500" v-text="subtitle" />
        </div>
        <div v-if="!hideTabs" class="items-center hidden text-sm sm:flex md:text-base">
          <t-button
            :variant="{
              'playgroundMenuActive': view === 'demo',
              'playgroundMenu': view !== 'demo'
            }"
            @click.prevent="view = 'demo'"
          >
            Demo
          </t-button>
          <t-button
            :variant="{
              'playgroundMenuActive': view === 'customize',
              'playgroundMenu': view !== 'customize'
            }"
            @click.prevent="view = 'customize'"
          >
            Customize
          </t-button>
          <t-button
            :variant="{
              'playgroundMenuActive': view === 'settings',
              'playgroundMenu': view !== 'settings'
            }"
            @click.prevent="view = 'settings'"
          >
            Settings
          </t-button>
          <span class="inline-block h-4 mr-2 border-l border-gray-400" />
          <button
            type="button"
            class="p-2 rounded-full focus:outline-none"
            :class="{
              'border-orange-300 bg-orange-100 border-2 shadow-inner text-orange-800 hover:bg-orange-200': fullscreen,
              'hover:bg-gray-300 text-gray-700': !fullscreen,
            }"
            @click="toggleFullscreen"
          >
            <icon class="w-4 h-4 pointer-events-none">
              <path v-if="!fullscreen" id="Combined-Shape" d="M4.20710678,17.2071068 L7,20 L0,20 L0,13 L2.79289322,15.7928932 L7.12132034,11.4644661 L8.53553391,12.8786797 L4.20710678,17.2071068 Z M15.7928932,2.79289322 L13,0 L20,0 L20,7 L17.2071068,4.20710678 L12.8786797,8.53553391 L11.4644661,7.12132034 L15.7928932,2.79289322 Z M15.7928932,17.2071068 L13,20 L20,20 L20,13 L17.2071068,15.7928932 L12.8786797,11.4644661 L11.4644661,12.8786797 L15.7928932,17.2071068 Z M4.20710678,2.79289322 L7,0 L0,0 L0,7 L2.79289322,4.20710678 L7.12132034,8.53553391 L8.53553391,7.12132034 L4.20710678,2.79289322 Z" />
              <polygon v-else id="Combined-Shape" points="10 8.58578644 2.92893219 1.51471863 1.51471863 2.92893219 8.58578644 10 1.51471863 17.0710678 2.92893219 18.4852814 10 11.4142136 17.0710678 18.4852814 18.4852814 17.0710678 11.4142136 10 18.4852814 2.92893219 17.0710678 1.51471863 10 8.58578644" />
            </icon>
          </button>
        </div>
      </template>

      <template v-if="!hideTabs">
        <template v-if="view === 'demo'" slot="footer">
          <slot name="controls" />
        </template>

        <playground-settings
          v-show="view === 'settings'"
          :settings="currentSettings"
          :component-name="componentName"
          @select="(selected) => view = selected"
        />

        <playground-customize
          v-show="view === 'customize'"
          :settings.sync="currentSettings"
          :theme-builder-settings="themeBuilderSettings"
          :component-name="componentName"
          @select="(selected) => view = selected"
        />
      </template>

      <div v-show="view === 'demo' || !hideTabs" ref="wrapper" class="relative w-full max-w-full bg-gray-700 shadow-inner pattern2">
        <div
          ref="resizable"
          :style="`min-width:${minWidth}px`"
          class="relative flex h-full bg-white"
        >
          <div
            ref="iframeWrapper"
            class="relative flex-grow transition-all duration-75 ease-in-out origin-top"
            :style="`height: ${initialHeight}px; min-height: ${minHeight}px`"
            :class="{'pointer-events-none': dragging}"
          >
            <iframe
              ref="iframe"
              class="w-full h-full "
              :src="initialSrc"
            />
          </div>
          <span
            ref="resizer"
            draggable="true"
            style="cursor: ew-resize"
            class="sr-only sm:not-sr-only sm:border-l sm:bg-gray-100 sm:flex sm:items-center sm:w-4"
          >
            <icon class="w-4 h-4 text-gray-600 pointer-events-none">
              <path d="M8 5h2v14H8zM14 5h2v14h-2z" />
            </icon>
          </span>
        </div>
      </div>
    </t-card>
  </div>
</template>

<script>
import Vue from 'vue'
import isEqual from 'lodash/isEqual'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import Icon from '@/components/Icon'
import PlaygroundSettings from './PlaygroundSettings'
import PlaygroundCustomize from './PlaygroundCustomize'

export default Vue.extend({
  components: {
    PlaygroundSettings,
    PlaygroundCustomize,
    Icon
  },
  props: {
    title: {
      type: String,
      default: 'Playground:'
    },
    subtitle: {
      type: String,
      default: undefined
    },
    hideTabs: {
      type: Boolean,
      default: false
    },
    settings: {
      type: Object,
      default: null
    },
    params: {
      type: Object,
      default: null
    },
    themeBuilderSettings: {
      type: Object,
      default: null
    },
    variant: {
      type: String,
      default: null
    },
    componentName: {
      type: String,
      required: true
    },
    minWidth: {
      type: Number,
      default: 200
    },
    initialHeight: {
      type: Number,
      default: 100
    },
    minHeight: {
      type: Number,
      default: 100
    }
  },
  data () {
    return {
      currentSettings: this.settings,
      currentParams: this.params,
      view: 'demo',
      fullscreen: false,
      dragging: false,
      startX: null,
      startWidth: null,
      loadingIFrame: true,
      iframeSyncInterval: null,

      waitforIframeLoadedInterval: null,
      waitforIframeLoadedIntervalTries: 0,
      initialSrc: this.getInitialSrc()
    }
  },
  computed: {
    serializableParams () {
      const params = {
        ...{
          variant: this.variant
        },
        ...this.currentSettings,
        ...this.currentParams
      }

      return this.serializeParams(params)
    }
  },
  watch: {
    view () {
      if (this.view === 'demo') {
        this.syncIframeHeight()
      }
    },
    fullscreen (fullscreen) {
      if (fullscreen) {
        this.disableBodyScroll()
      } else {
        this.enableBodyScroll()
      }
    },
    currentSettings (currentSettings) {
      this.$emit('update:settings', currentSettings)
    },
    settings (settings) {
      if (!isEqual(settings, this.currentSettings)) {
        this.currentSettings = settings
      }
    },
    currentParams (currentParams) {
      this.$emit('update:params', currentParams)
    },
    params (params) {
      if (!isEqual(params, this.currentParams)) {
        this.currentParams = params
      }
    },
    async serializableParams (serializableParams) {
      await this.waitforIframeLoaded()
      const iframe = this.$refs.iframe
      iframe.contentWindow.$nuxt.$router.replace({ query: serializableParams }, async () => {
        await this.$nextTick()
        this.syncIframeHeight()
      })
    }
  },
  mounted () {
    const resizer = this.$refs.resizer

    resizer.addEventListener('mousedown', this.initDrag, false)

    this.initIframe()

    this.startIframeSyncInterval()
  },
  beforeDestroy () {
    this.stopIframeSyncInterval()
    this.enableBodyScroll()
  },
  methods: {
    getInitialSrc () {
      const params = {
        ...{
          component: this.componentName
        },
        ...{
          variant: this.variant
        },
        ...this.settings,
        ...this.params
      }

      const serializableParams = this.serializeParams(params)
      const query = new URLSearchParams(serializableParams).toString()
      return `/playground?${query}`
    },
    exitFullscreen () {
      this.fullscreen = false
    },
    startIframeSyncInterval () {
      this.iframeSyncInterval = setInterval(() => {
        this.syncIframeHeight()
      }, 500)
    },
    stopIframeSyncInterval () {
      clearInterval(this.iframeSyncInterval)
    },
    disableBodyScroll () {
      const card = this.$refs.card.$el
      if (card) {
        disableBodyScroll(card, {
          reserveScrollBarGap: true
        })

        card.focus()
      }
    },
    enableBodyScroll () {
      const card = this.$refs.card.$el
      if (card) {
        enableBodyScroll(card)
      }
    },
    serializeParams (params) {
      const result = {}

      Object.keys(params).forEach((key) => {
        const value = params[key]
        if (typeof value === 'object') {
          const stringfied = JSON.stringify(params[key])
          result[key] = stringfied
        } else {
          result[key] = value
        }
      })

      return result
    },
    waitforIframeLoaded () {
      return new Promise((resolve, reject) => {
        const iframe = this.$refs.iframe
        const nuxtLoaded = iframe && !!iframe.contentWindow.$nuxt
        if (nuxtLoaded) {
          resolve()
        }

        this.waitforIframeLoadedInterval = setInterval(() => {
          this.waitforIframeLoadedIntervalTries++
          const iframe = this.$refs.iframe
          const nuxtLoaded = iframe && !!iframe.contentWindow.$nuxt

          if (nuxtLoaded) {
            clearInterval(this.waitforIframeLoadedInterval)
            this.waitforIframeLoadedInterval = null
            resolve()
          }

          if (this.thiswaitforIframeLoadedIntervalTries > 20) {
            reject(new Error('Never loaded'))
          }
        }, 500)
      })
    },
    initIframe () {
      this.loadingIFrame = true
      const iframe = this.$refs.iframe
      iframe.addEventListener('load', this.iframeLoaded)
    },
    iframeLoaded () {
      this.syncIframeHeight()
      this.loadingIFrame = false
    },
    syncIframeHeight () {
      if (this.fullscreen || this.view !== 'demo') {
        return
      }
      const iframe = this.$refs.iframe
      const iframeWrapper = this.$refs.iframeWrapper
      const newHeight = iframe.contentWindow.document.body.offsetHeight
      if (newHeight && iframeWrapper.style.height !== `${newHeight}px`) {
        iframeWrapper.style.height = `${newHeight}px`
      }
    },
    async toggleFullscreen () {
      this.fullscreen = !this.fullscreen
      await this.$nextTick()
      this.$refs.resizable.style.width = 'auto'

      if (this.fullscreen) {
        this.$refs.iframeWrapper.style.height = 'auto'
      } else {
        this.$refs.iframeWrapper.style.height = `${this.initialHeight}px`
        this.syncIframeHeight()
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
    },
    stopDrag (e) {
      e.preventDefault()
      this.dragging = false
      document.documentElement.removeEventListener('mousemove', this.doDrag, false)
      document.documentElement.removeEventListener('mouseup', this.stopDrag, false)
      this.syncIframeHeight()
    }
  }
})
</script>

<style>
.pattern2 {
  background-color: #4a5568;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23ed8936' fill-opacity='0.1' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
}
</style>
