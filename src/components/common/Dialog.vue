<template>
	<el-dialog v-model="dialogVisible" :title="title" v-bind="$attrs" destroy-on-close lock-scroll draggable
		@close="close">
		<template #default>
			<slot></slot>
		</template>
		<!-- footer -->
		<template v-if="slots.footer" #footer>
			<slot name="footer"></slot>
		</template>
		<template v-if="!slots.footer && showFooter" #footer>
			<div>
				<el-button @click="cancel">取消</el-button>
				<el-button type="primary" @click="confirm">确认</el-button>
			</div>
		</template>
	</el-dialog>
</template>

<script setup lang="ts" name="ImportExcel">
import { computed, useAttrs, useSlots } from "vue";

const props = defineProps({
	show: { // v-model:show
		type: Boolean,
		default: false
	},
	title: {
		type: String,
		default: 'title'
	},
	showFooter: {
		type: Boolean,
		default: true
	}
});
const emits = defineEmits(['update:show', 'cancel', 'confirm', 'close']);

// 插槽
const slots = useSlots()

// 弹窗状态
const dialogVisible = computed({
	get: () => {
		return props.show
	},
	set: (val) => {
		return val
	}
});

// 取消
const cancel = () => {
	emits('update:show', false)
	emits('cancel')
}

// 确认
const confirm = () => {
	emits('confirm')
}

// 关闭回调
const close = () => {
	emits('update:show', false)
	emits('close')
}
</script>
