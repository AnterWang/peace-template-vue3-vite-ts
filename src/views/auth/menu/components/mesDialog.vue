<template>
	<Dialog v-model:show="dialogVisible" width="70%" title="json" @confirm="confirm" :showFooter="false">
		<Codemirror v-model:value="code" ref="codeEdit" :style="{ height: '70vh' }" :disabled="disabled" @change="change" />
	</Dialog>
</template>

<script setup>
import { ref, reactive, nextTick } from "vue"
import { ElMessage, ElMessageBox } from "element-plus"
import { CirclePlus } from "@element-plus/icons-vue"
import Dialog from '@/components/common/Dialog.vue'
import Codemirror from '@/components/Codemirror/index.vue'

// Codemirror
const disabled = ref(true) // 是否禁用
const code = ref(``) // 值
const change = ($event) => {
	code.value = $event
}
const codeEdit = ref()

// 确定
const confirm = () => {
	dialogVisible.value = false
	console.log('确认')
}

// 弹窗状态
const dialogVisible = ref(false)

// 接收父组件传过来的参数
const show = (params) => {
	const json = JSON.parse(JSON.stringify(params))
	code.value = JSON.stringify(json, null, 2)
	dialogVisible.value = true
}

defineExpose({
	show
})
</script>
