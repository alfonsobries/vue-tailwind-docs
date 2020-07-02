import Vue from 'vue'

import Tip from '@/components/Tip'
import Preview from '@/components/Preview'
import OkTip from '@/components/OkTip'
import WrongTip from '@/components/WrongTip'
import Playground from '@/components/Playground'
import LoadingOverlay from '@/components/LoadingOverlay'

import TInputPlayground from '@/components/playgrounds/TInputPlayground'
import TTextareaPlayground from '@/components/playgrounds/TTextareaPlayground'

Vue.component('tip', Tip)
Vue.component('preview', Preview)
Vue.component('ok-tip', OkTip)
Vue.component('wrong-tip', WrongTip)
Vue.component('playground', Playground)
Vue.component('loading-overlay', LoadingOverlay)

Vue.component('t-input-playground', TInputPlayground)
Vue.component('t-textarea-playground', TTextareaPlayground)
