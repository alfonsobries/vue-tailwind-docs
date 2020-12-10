import Vue from 'vue'

import Tip from '@/components/Tip'
import Preview from '@/components/Preview'
import OkTip from '@/components/OkTip'
import WrongTip from '@/components/WrongTip'
import Since from '@/components/Since'
import MehTip from '@/components/MehTip'
import Announce from '@/components/Announce'
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

import TDatepickerPlayground from '@/components/playgrounds/TDatepickerPlayground'

import TDatepickerDemo from '@/components/demos/TDatepickerDemo'

import DatepickerExample from '@/components/examples/datepicker/DatepickerExample'
import DatepickerDaySlot from '@/components/examples/datepicker/DatepickerDaySlot'
import DatepickerMonthSlot from '@/components/examples/datepicker/DatepickerMonthSlot'
import DatepickerCustomLocale from '@/components/examples/datepicker/DatepickerCustomLocale'
import DatepickerDisabledDates from '@/components/examples/datepicker/DatepickerDisabledDates'
import DatepickerHighlightDates from '@/components/examples/datepicker/DatepickerHighlightDates'
import DatepickerRange from '@/components/examples/datepicker/DatepickerRange'
import DatepickerMultiple from '@/components/examples/datepicker/DatepickerMultiple'
import DatepickerMultipleViews from '@/components/examples/datepicker/DatepickerMultipleViews'

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
import DialogBasicExample from '@/components/examples/dialog/DialogBasic.vue'
import AlertBasicExample from '@/components/examples/dialog/AlertBasic.vue'
import PromptBasicExample from '@/components/examples/dialog/PromptBasic.vue'
import ConfirmBasicExample from '@/components/examples/dialog/ConfirmBasic.vue'
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

Vue.component('Tip', Tip)
Vue.component('Preview', Preview)
Vue.component('OkTip', OkTip)
Vue.component('Since', Since)
Vue.component('WrongTip', WrongTip)
Vue.component('MehTip', MehTip)
Vue.component('Playground', Playground)
Vue.component('LoadingOverlay', LoadingOverlay)
Vue.component('Announce', Announce)

Vue.component('TInputPlayground', TInputPlayground)
Vue.component('TInputDemo', TInputDemo)
Vue.component('TTextareaPlayground', TTextareaPlayground)
Vue.component('TTextareaDemo', TTextareaDemo)
Vue.component('TSelectPlayground', TSelectPlayground)
Vue.component('TSelectDemo', TSelectDemo)
Vue.component('TRadioPlayground', TRadioPlayground)
Vue.component('TRadioDemo', TRadioDemo)
Vue.component('TCheckboxPlayground', TCheckboxPlayground)
Vue.component('TCheckboxDemo', TCheckboxDemo)
Vue.component('TButtonPlayground', TButtonPlayground)
Vue.component('TButtonDemo', TButtonDemo)
Vue.component('TRichSelectPlayground', TRichSelectPlayground)
Vue.component('TRichSelectDemo', TRichSelectDemo)
Vue.component('TInputGroupPlayground', TInputGroupPlayground)
Vue.component('TDatepickerPlayground', TDatepickerPlayground)
Vue.component('TDatepickerDemo', TDatepickerDemo)
Vue.component('TInputGroupDemo', TInputGroupDemo)
Vue.component('TTagPlayground', TTagPlayground)
Vue.component('TTagDemo', TTagDemo)
Vue.component('TAlertPlayground', TAlertPlayground)
Vue.component('TAlertDemo', TAlertDemo)
Vue.component('TModalPlayground', TModalPlayground)
Vue.component('TModalDemo', TModalDemo)
Vue.component('TCardPlayground', TCardPlayground)
Vue.component('TCardDemo', TCardDemo)
Vue.component('TTablePlayground', TTablePlayground)
Vue.component('TTableDemo', TTableDemo)
Vue.component('TTableResponsiveDemo', TTableResponsiveDemo)
Vue.component('TCheckboxGroupPlayground', TCheckboxGroupPlayground)
Vue.component('TCheckboxGroupDemo', TCheckboxGroupDemo)
Vue.component('TRadioGroupPlayground', TRadioGroupPlayground)
Vue.component('TRadioGroupDemo', TRadioGroupDemo)
Vue.component('TPaginationPlayground', TPaginationPlayground)
Vue.component('TPaginationDemo', TPaginationDemo)
Vue.component('TDropdownPlayground', TDropdownPlayground)
Vue.component('TDropdownDemo', TDropdownDemo)
Vue.component('TDropdownResponsiveDemo', TDropdownResponsiveDemo)
Vue.component('TTogglePlayground', TTogglePlayground)
Vue.component('TToggleDemo', TToggleDemo)
Vue.component('DatepickerExample', DatepickerExample)
Vue.component('DatepickerDaySlotExample', DatepickerDaySlot)
Vue.component('DatepickerMonthSlotExample', DatepickerMonthSlot)
Vue.component('DatepickerCustomLocaleExample', DatepickerCustomLocale)
Vue.component('DatepickerDisabledDatesExample', DatepickerDisabledDates)
Vue.component('DatepickerHighlightDatesExample', DatepickerHighlightDates)
Vue.component('DatepickerRangeExample', DatepickerRange)
Vue.component('DatepickerMultipleExample', DatepickerMultiple)
Vue.component('DatepickerMultipleViewsExample', DatepickerMultipleViews)

Vue.component('SelectArrowSlotExample', SelectArrowSlotExample)
Vue.component('RadioBasicExample', RadioBasicExample)
Vue.component('CheckboxBasicExample', CheckboxBasicExample)
Vue.component('RichSelectLabelSlotExample', RichSelectLabelSlotExample)
Vue.component('RichSelectOptionSlotExample', RichSelectOptionSlotExample)
Vue.component('RichSelectCreateOptionExample', RichSelectCreateOptionExample)
Vue.component('TagBasicExample', TagBasicExample)
Vue.component('ModalBasicExample', ModalBasicExample)
Vue.component('CardBasicExample', CardBasicExample)
Vue.component('TableSlotColumnExample', TableSlotColumnExample)
Vue.component('TableSlotRowExample', TableSlotRowExample)
Vue.component('TableSlotTbodyExample', TableSlotTbodyExample)
Vue.component('TableSlotTheadExample', TableSlotTheadExample)
Vue.component('TableSlotTfootExample', TableSlotTfootExample)
Vue.component('TableResponsiveExample', TableResponsiveExample)
Vue.component('CheckboxGroupLabelSlotExample', CheckboxGroupLabelSlotExample)
Vue.component('RadioGroupLabelSlotExample', RadioGroupLabelSlotExample)
Vue.component('DropdownSlotDefaultExample', DropdownSlotDefaultExample)
Vue.component('DropdownSlotTriggerExample', DropdownSlotTriggerExample)
Vue.component('DropdownSlotTriggerExample2', DropdownSlotTriggerExample2)
Vue.component('DropdownSlotTriggerExample3', DropdownSlotTriggerExample3)
Vue.component('DropdownSlotTriggerExample4', DropdownSlotTriggerExample4)
Vue.component('ToggleDefaultSlotExample', ToggleDefaultSlotExample)
Vue.component('DialogBasicExample', DialogBasicExample)
Vue.component('AlertBasicExample', AlertBasicExample)
Vue.component('PromptBasicExample', PromptBasicExample)
Vue.component('ConfirmBasicExample', ConfirmBasicExample)
