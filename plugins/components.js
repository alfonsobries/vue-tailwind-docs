import Vue from 'vue'

import Tip from '@/components/Tip'
import Preview from '@/components/Preview'
import OkTip from '@/components/OkTip'
import WrongTip from '@/components/WrongTip'
import MehTip from '@/components/MehTip'
import Playground from '@/components/Playground'
import LoadingOverlay from '@/components/LoadingOverlay'

import TInputPlayground from '@/components/playgrounds/TInputPlayground'
import TInputDemo from '@/components/demos/TInputDemo'

import TTextareaPlayground from '@/components/playgrounds/TTextareaPlayground'
import TTextareaDemo from '@/components/demos/TTextareaDemo'

import TSelectPlayground from '@/components/playgrounds/TSelectPlayground'
import TSelectDemo from '@/components/demos/TSelectDemo'

import TRadioPlayground from '@/components/playgrounds/TRadioPlayground'
import TRadioDemo from '@/components/demos/TRadioDemo'

import TButtonPlayground from '@/components/playgrounds/TButtonPlayground'
import TButtonDemo from '@/components/demos/TButtonDemo'

import TCheckboxPlayground from '@/components/playgrounds/TCheckboxPlayground'
import TCheckboxDemo from '@/components/demos/TCheckboxDemo'

import SelectArrowSlotExample from '@/components/examples/select/SelectArrowSlot.vue'
import RadioBasicExample from '@/components/examples/radio/RadioBasic.vue'

Vue.component('tip', Tip)
Vue.component('preview', Preview)
Vue.component('ok-tip', OkTip)
Vue.component('wrong-tip', WrongTip)
Vue.component('meh-tip', MehTip)
Vue.component('playground', Playground)
Vue.component('loading-overlay', LoadingOverlay)

Vue.component('t-input-playground', TInputPlayground)
Vue.component('t-input-demo', TInputDemo)
Vue.component('t-textarea-playground', TTextareaPlayground)
Vue.component('t-textarea-demo', TTextareaDemo)
Vue.component('t-select-playground', TSelectPlayground)
Vue.component('t-select-demo', TSelectDemo)
Vue.component('t-radio-playground', TRadioPlayground)
Vue.component('t-radio-demo', TRadioDemo)
Vue.component('t-checkbox-playground', TCheckboxPlayground)
Vue.component('t-checkbox-demo', TCheckboxDemo)
Vue.component('t-button-playground', TButtonPlayground)
Vue.component('t-button-demo', TButtonDemo)

Vue.component('select-arrow-slot-example', SelectArrowSlotExample)
Vue.component('radio-basic-example', RadioBasicExample)
