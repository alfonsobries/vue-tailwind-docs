<template>
  <div ref="wrapper" class="w-full bg-gray-700 relative rounded max-w-full shadow-inner">
    <div
      ref="resizable"
      :style="`min-width:${minWidth}px`"
      class="relative flex bg-white rounded border"
    >
      <div class="flex-grow" :class="{'pointer-events-none': dragging}">
        <iframe
          :style="`height: ${height}px`"
          class="w-full"
          :src="src"
        />
      </div>
      <span ref="resizer" style="cursor: ew-resize" class="sr-only sm:not-sr-only sm:border-l sm:bg-gray-100 sm:flex sm:items-center sm:w-4">
        <svg class="h-4 w-4 text-gray-600 pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5h2v14H8zM14 5h2v14h-2z" />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true
    },
    minWidth: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 500
    }
  },
  data () {
    return {
      dragging: false,
      startX: null,
      startWidth: null
    }
  },
  mounted () {
    const resizer = this.$refs.resizer
    resizer.addEventListener('mousedown', this.initDrag, false)
  },
  methods: {
    initDrag (e) {
      this.dragging = true
      this.startX = e.clientX
      this.startWidth = parseInt(document.defaultView.getComputedStyle(this.$refs.resizable).width, 10)
      document.documentElement.addEventListener('mousemove', this.doDrag, false)
      document.documentElement.addEventListener('mouseup', this.stopDrag, false)
    },
    doDrag (e) {
      const width = Math.min(this.startWidth + e.clientX - this.startX, this.$refs.wrapper.offsetWidth)
      this.$refs.resizable.style.width = `${width}px`
    },
    stopDrag () {
      this.dragging = false
      document.documentElement.removeEventListener('mousemove', this.doDrag, false)
      document.documentElement.removeEventListener('mouseup', this.stopDrag, false)
    }
  }
  // mounted () {
  //   const resizer = this.$refs.resizer
  //   // const rezizeArea = this.$el
  //   const resizable = this.$refs.resizable

  //   resizer.mousemove = function (e) {
  //     const mousePosInResize = resizer.offsetWidth - e.offsetX
  //     // console.log(resizable.)
  //     // const width = e.layerX - (mousePosInResize > 0 ? mousePosInResize : 0)
  //     const width = resizable.offsetWidth - (mousePosInResize > 0 ? mousePosInResize : 0)

  //     // console.log(e)
  //     console.log(`
  //       mousePosInResize: ${mousePosInResize}
  //       mousePosInResize: ${mousePosInResize}
  //       Ofsset x: ${e.offsetX}
  //       page x: ${e.pageX}
  //       layer x: ${e.layerX}
  //       client x: ${e.clientX}
  //       screen x: ${e.screenX}
  //       x: ${e.x}
  //       something: ${e.layerX + mousePosInResize}
  //       clientWidht: ${resizable.offsetWidth}
  //       new width: ${width}
  //     `)
  //     console.log(width, resizable.clientWidth)
  //     // console.log(resizable.parentElement.clientWidth)
  //     // if (width > resizable.parentElement.clientWidth) {
  //     //   width = resizable.parentElement.clientWidth
  //     // }
  //     resizable.style.width = `${width}px`
  //     // console.log(e)
  //     // console.log()
  //     // resizeX(e.pageX)
  //   }

  //   resizer.onmousedown = (e) => {
  //     this.dragging = true
  //     document.documentElement.addEventListener('mousemove', resizer.doDrag, false)
  //     document.documentElement.addEventListener('mouseup', resizer.stopDrag, false)
  //   }

  //   resizer.doDrag = (e) => {
  //     // if (e.which != 1) {
  //     //   console.log('mouseup')
  //     //   resizer.stopDrag(e)
  //     //   return
  //     // }
  //     // console.log("doDrag(e)");
  //     resizer.mousemove(e)
  //   }

  //   resizer.stopDrag = (e) => {
  //     this.dragging = false
  //     document.documentElement.removeEventListener('mousemove', resizer.doDrag, false)
  //     document.documentElement.removeEventListener('mouseup', resizer.stopDrag, false)
  //   }

  //   // resizer(resizerID, mousemove, 'e-resize')

  //   // function onresize () {
  //   //   const element1 = document.getElementById('element1')
  //   //   const resizable = document.getElementById('resizable')
  //   //   const element3 = document.getElementById('element3')
  //   //   const ResizerY = document.getElementById('resizerY')
  //   //   ResizerY.style.top = element3.offsetTop - 15 + 'px'
  //   //   const topElements = document.getElementById('topElements')
  //   //   topElements.style.height = ResizerY.offsetTop - 20 + 'px'
  //   //   let height = topElements.clientHeight - 32
  //   //   if (height < 0) { height = 0 }
  //   //   height += 'px'
  //   //   element1.style.height = height
  //   //   resizable.style.height = height
  //   // }
  //   function resizeX (x) {
  //     console.log(x, resizable.clientWidth)
  //     // console.log("mousemove(X = " + e.pageX + ")");
  //     const width = resizable.parentElement.clientWidth
  //     // resizable.style.width = `${width}px`
  //     //               resizable.parentElement.clientWidth +
  //     //               resizable.parentElement.offsetLeft -
  //     //               x +
  //     //               'px'
  //     // resizable.style.width = `${x}px`
  //   }
  //   // function resizeY (y) {
  //   //   // console.log("mousemove(Y = " + e.pageY + ")");
  //   //   const element3 = document.getElementById('element3')
  //   //   const height =
  //   //                 element3.parentElement.clientHeight +
  //   //                 document.getElementById('rezizeArea').offsetTop -
  //   //                 y

  //   //   // console.log("mousemove(Y = " + e.pageY + ") height = " + height + " element3.parentElement.clientHeight = " + element3.parentElement.clientHeight);
  //   //   if ((height + 100) > element3.parentElement.clientHeight) { return }// Limit of the height of the elemtnt 3
  //   //   element3.style.height = height + 'px'
  //   //   onresize()
  //   // }
  // }
})
</script>
