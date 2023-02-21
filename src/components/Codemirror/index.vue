<template>
	<Codemirror v-model="code" ref="mirror" v-bind="$attrs" :disabled="disabled" :style="style" :extensions="extensions"
		@ready="emits('ready', $event)" @change="emits('change', $event)" @update="emits('update', $event)" />
</template>

<script setup lang="tsx">
import { ref, computed } from "vue";
import { Codemirror } from "vue-codemirror";
import { json } from "@codemirror/lang-json";
import { javascript } from '@codemirror/lang-javascript'
import { sql } from '@codemirror/lang-sql'
import { oneDark } from "@codemirror/theme-one-dark";
// .... 可添加其他主题包

const props = defineProps({
	value: { // v-model:value
		type: String,
		default: ''
	},
	type: {
		type: String,
		default: 'json',
		validator: (val: string) => {
			return ['javascript', 'json', 'sql'].includes(val)
		}
	},
	disabled: {
		type: Boolean,
		default: false
	},
	style: {
		type: Object,
		default: {}
	},
});
const emits = defineEmits(['update', 'ready', 'change']);

const code = computed({
	get: () => {
		return props.value
	},
	set: (val) => {
		return val
	}
});

const typeToFun: any = {
	'json': json(),
	'sql': sql(),
	'javascript': javascript()
}
const extensions = computed(() => {
	return [typeToFun[props.type], oneDark]
})

const mirror = ref()

// 滚动到底部
const scrollBottom = () => {
	const el = document.querySelector('.cm-scroller')
	const con = document.querySelector('.cm-content')

	if (con instanceof HTMLElement) {
		const height = con.offsetHeight
		if (el) {
			el.scrollTop = height
		}
	}
}

defineExpose({
	mirror,
	scrollBottom
});
</script>
