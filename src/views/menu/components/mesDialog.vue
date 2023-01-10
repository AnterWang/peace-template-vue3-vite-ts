<template>
	<Dialog v-model:show="dialogVisible" width="70%" title="json" @confirm="confirm" :showFooter="false">
		<MonacoEditor v-model="value" :language="language" :hight-change="hightChange" :read-only="readOnly" width="100%"
			height="100%" style="min-height: 65vh" @editor-mounted="editorMounted" />
	</Dialog>
</template>

<script setup lang="tsx">
import { ref, reactive } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { CirclePlus } from "@element-plus/icons-vue";
import MonacoEditor from '@/components/MonacoEditor/index.vue'
import Dialog from '@/components/common/Dialog.vue'

// monaco
let value: string = '-- select * from infrastructure;'
const language = ref('json')
const hightChange = ref<any>(false)
let readOnly = false
// 实例加载完毕
const editorMounted = (editor: any) => {
	// 格式化
	editor.trigger('', 'editor.action.formatDocument')
	// 强制刷新一次
	setTimeout(() => {
		editor.setValue(editor.getValue())
	}, 500)
}

// 确定
const confirm = () => {
	dialogVisible.value = false;
	console.log('确认')
}

// 弹窗状态
const dialogVisible = ref(false);

// 接收父组件传过来的参数
const show = (params: object): void => {
	console.log(params)
	value = JSON.stringify(params)
	dialogVisible.value = true;
};

defineExpose({
	show
});
</script>
