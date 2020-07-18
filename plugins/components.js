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

import TRichSelectPlayground from '@/components/playgrounds/TRichSelectPlayground'
import TRichSelectDemo from '@/components/demos/TRichSelectDemo'

import TInputGroupPlayground from '@/components/playgrounds/TInputGroupPlayground'
import TInputGroupDemo from '@/components/demos/TInputGroupDemo'

import TTagPlayground from '@/components/playgrounds/TTagPlayground'
import TTagDemo from '@/components/demos/TTagDemo'

import TAlertPlayground from '@/components/playgrounds/TAlertPlayground'
import TAlertDemo from '@/components/demos/TAlertDemo'

import SelectArrowSlotExample from '@/components/examples/select/SelectArrowSlot.vue'
import RadioBasicExample from '@/components/examples/radio/RadioBasic.vue'
import CheckboxBasicExample from '@/components/examples/radio/CheckboxBasic.vue'
import RichSelectLabelSlotExample from '@/components/examples/rich-select/RichSelectLabelSlot.vue'
import RichSelectOptionSlotExample from '@/components/examples/rich-select/RichSelectOptionSlot.vue'
import RichSelectCreateOptionExample from '@/components/examples/rich-select/RichSelectCreateOption.vue'
import TagBasicExample from '@/components/examples/tag/TagBasic.vue'

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
Vue.component('t-rich-select-playground', TRichSelectPlayground)
Vue.component('t-rich-select-demo', TRichSelectDemo)
Vue.component('t-input-group-playground', TInputGroupPlayground)
Vue.component('t-input-group-demo', TInputGroupDemo)
Vue.component('t-tag-playground', TTagPlayground)
Vue.component('t-tag-demo', TTagDemo)
Vue.component('t-alert-playground', TAlertPlayground)
Vue.component('t-alert-demo', TAlertDemo)

Vue.component('select-arrow-slot-example', SelectArrowSlotExample)
Vue.component('radio-basic-example', RadioBasicExample)
Vue.component('checkbox-basic-example', CheckboxBasicExample)
Vue.component('rich-select-label-slot-example', RichSelectLabelSlotExample)
Vue.component('rich-select-option-slot-example', RichSelectOptionSlotExample)
Vue.component('rich-select-create-option-example', RichSelectCreateOptionExample)
Vue.component('tag-basic-example', TagBasicExample)
