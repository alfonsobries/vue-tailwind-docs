import Vue from 'vue'

import Tip from '@/components/Tip'
import OkTip from '@/components/OkTip'
import WrongTip from '@/components/WrongTip'
import Playground from '@/components/Playground'
import LoadingOverlay from '@/components/LoadingOverlay'
import TInputPlayground from '@/components/playgrounds/TInputPlayground'

Vue.component('tip', Tip)
Vue.component('ok-tip', OkTip)
Vue.component('wrong-tip', WrongTip)
Vue.component('playground', Playground)
Vue.component('loading-overlay', LoadingOverlay)
Vue.component('t-input-playground', TInputPlayground)
