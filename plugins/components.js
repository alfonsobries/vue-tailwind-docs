import Vue from 'vue'

import Tip from '@/components/Tip'
import Preview from '@/components/Preview'
import OkTip from '@/components/OkTip'
import WrongTip from '@/components/WrongTip'
import Since from '@/components/Since'
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

import DatepickerExample from '@/components/examples/datepicker/DatepickerExample'

import TInputGroupPlayground from '@/components/playgrounds/TInputGroupPlayground'
import TInputGroupDemo from '@/components/demos/TInputGroupDemo'

import TTagPlayground from '@/components/playgrounds/TTagPlayground'
import TTagDemo from '@/components/demos/TTagDemo'

import TAlertPlayground from '@/components/playgrounds/TAlertPlayground'
import TAlertDemo from '@/components/demos/TAlertDemo'

import TModalPlayground from '@/components/playgrounds/TModalPlayground'
import TModalDemo from '@/components/demos/TModalDemo'

import TCardPlayground from '@/components/playgrounds/TCardPlayground'
import TCardDemo from '@/components/demos/TCardDemo'

import TCheckboxGroupPlayground from '@/components/playgrounds/TCheckboxGroupPlayground'
import TCheckboxGroupDemo from '@/components/demos/TCheckboxGroupDemo'

import TRadioGroupPlayground from '@/components/playgrounds/TRadioGroupPlayground'
import TRadioGroupDemo from '@/components/demos/TRadioGroupDemo'

import TPaginationPlayground from '@/components/playgrounds/TPaginationPlayground'
import TPaginationDemo from '@/components/demos/TPaginationDemo'

import TDropdownPlayground from '@/components/playgrounds/TDropdownPlayground'
import TDropdownDemo from '@/components/demos/TDropdownDemo'

import TTogglePlayground from '@/components/playgrounds/TTogglePlayground'
import TToggleDemo from '@/components/demos/TToggleDemo'

import TTablePlayground from '@/components/playgrounds/TTablePlayground'
import TTableDemo from '@/components/demos/TTableDemo'
import TTableResponsiveDemo from '@/components/demos/TTableResponsiveDemo'

import SelectArrowSlotExample from '@/components/examples/select/SelectArrowSlot.vue'
import RadioBasicExample from '@/components/examples/radio/RadioBasic.vue'
import CheckboxBasicExample from '@/components/examples/radio/CheckboxBasic.vue'
import RichSelectLabelSlotExample from '@/components/examples/rich-select/RichSelectLabelSlot.vue'
import RichSelectOptionSlotExample from '@/components/examples/rich-select/RichSelectOptionSlot.vue'
import RichSelectCreateOptionExample from '@/components/examples/rich-select/RichSelectCreateOption.vue'
import TagBasicExample from '@/components/examples/tag/TagBasic.vue'
import ModalBasicExample from '@/components/examples/modal/ModalBasic.vue'
import CardBasicExample from '@/components/examples/card/CardBasic.vue'
import TableSlotColumnExample from '@/components/examples/table/SlotColumn.vue'
import TableSlotRowExample from '@/components/examples/table/SlotRow.vue'
import TableSlotTbodyExample from '@/components/examples/table/SlotTbody.vue'
import TableSlotTheadExample from '@/components/examples/table/SlotThead.vue'
import TableSlotTfootExample from '@/components/examples/table/SlotTfoot.vue'
import TableResponsiveExample from '@/components/examples/table/Responsive.vue'
import CheckboxGroupLabelSlotExample from '@/components/examples/checkbox-group/LabelSlot.vue'
import RadioGroupLabelSlotExample from '@/components/examples/radio-group/LabelSlot.vue'
import DropdownSlotDefaultExample from '@/components/examples/dropdown/SlotDefault.vue'
import DropdownSlotTriggerExample from '@/components/examples/dropdown/SlotTrigger.vue'
import DropdownSlotTriggerExample2 from '@/components/examples/dropdown/SlotTrigger2.vue'
import DropdownSlotTriggerExample3 from '@/components/examples/dropdown/SlotTrigger3.vue'
import DropdownSlotTriggerExample4 from '@/components/examples/dropdown/SlotTrigger4.vue'
import TDropdownResponsiveDemo from '@/components/demos/TDropdownResponsiveDemo.vue'
import ToggleDefaultSlotExample from '@/components/examples/toggle/SlotDefault.vue'

Vue.component('tip', Tip)
Vue.component('preview', Preview)
Vue.component('ok-tip', OkTip)
Vue.component('since', Since)
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
Vue.component('t-modal-playground', TModalPlayground)
Vue.component('t-modal-demo', TModalDemo)
Vue.component('t-card-playground', TCardPlayground)
Vue.component('t-card-demo', TCardDemo)
Vue.component('t-table-playground', TTablePlayground)
Vue.component('t-table-demo', TTableDemo)
Vue.component('t-table-responsive-demo', TTableResponsiveDemo)
Vue.component('t-checkbox-group-playground', TCheckboxGroupPlayground)
Vue.component('t-checkbox-group-demo', TCheckboxGroupDemo)
Vue.component('t-radio-group-playground', TRadioGroupPlayground)
Vue.component('t-radio-group-demo', TRadioGroupDemo)
Vue.component('t-pagination-playground', TPaginationPlayground)
Vue.component('t-pagination-demo', TPaginationDemo)
Vue.component('t-dropdown-playground', TDropdownPlayground)
Vue.component('t-dropdown-demo', TDropdownDemo)
Vue.component('t-dropdown-responsive-demo', TDropdownResponsiveDemo)
Vue.component('t-toggle-playground', TTogglePlayground)
Vue.component('t-toggle-demo', TToggleDemo)
Vue.component('datepicker-example', DatepickerExample)

Vue.component('select-arrow-slot-example', SelectArrowSlotExample)
Vue.component('radio-basic-example', RadioBasicExample)
Vue.component('checkbox-basic-example', CheckboxBasicExample)
Vue.component('rich-select-label-slot-example', RichSelectLabelSlotExample)
Vue.component('rich-select-option-slot-example', RichSelectOptionSlotExample)
Vue.component('rich-select-create-option-example', RichSelectCreateOptionExample)
Vue.component('tag-basic-example', TagBasicExample)
Vue.component('modal-basic-example', ModalBasicExample)
Vue.component('card-basic-example', CardBasicExample)
Vue.component('table-slot-column-example', TableSlotColumnExample)
Vue.component('table-slot-row-example', TableSlotRowExample)
Vue.component('table-slot-tbody-example', TableSlotTbodyExample)
Vue.component('table-slot-thead-example', TableSlotTheadExample)
Vue.component('table-slot-tfoot-example', TableSlotTfootExample)
Vue.component('table-responsive-example', TableResponsiveExample)
Vue.component('checkbox-group-label-slot-example', CheckboxGroupLabelSlotExample)
Vue.component('radio-group-label-slot-example', RadioGroupLabelSlotExample)
Vue.component('dropdown-slot-default-example', DropdownSlotDefaultExample)
Vue.component('dropdown-slot-trigger-example', DropdownSlotTriggerExample)
Vue.component('dropdown-slot-trigger-example-2', DropdownSlotTriggerExample2)
Vue.component('dropdown-slot-trigger-example-3', DropdownSlotTriggerExample3)
Vue.component('dropdown-slot-trigger-example-4', DropdownSlotTriggerExample4)
Vue.component('toggle-default-slot-example', ToggleDefaultSlotExample)
