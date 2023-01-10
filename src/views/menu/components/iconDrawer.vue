<template>
	<Drawer v-model:show="drawerVisible" width="660px" title="图标库" :showFooter="false">
		<div class="icon-list">
			<div v-for="(item, index) in Object.keys(Icons)" :key="index" class="icon-item" @click="handleSubmit(item)">
				<el-icon size="20">
					<component :is="item"></component>
				</el-icon>
				<div class="title">{{ `${item}` }}</div>
			</div>
		</div>
	</Drawer>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import * as Icons from '@element-plus/icons-vue'
import Drawer from "@/components/common/Drawer.vue"

// drawer框状态
const drawerVisible = ref(false);

// 接收父组件传过来的参数
const acceptParams = (): void => {
	drawerVisible.value = true;
};

const emits = defineEmits(['change']);
// 提交
const handleSubmit = (item: string) => {
	emits('change', item)
	drawerVisible.value = false;
};

defineExpose({
	acceptParams
});
</script>

<style lang="scss" scoped>
.icon-list {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	width: 100%;
	padding: 0 !important;
	overflow: hidden;
	list-style: none;
	border-top: 1px solid #dcdfe6;
	border-left: 1px solid #dcdfe6;
	border-radius: 4px;
}

.icon-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 120px;
	height: 90px;
	font-size: 12px;
	color: #606266;
	cursor: pointer;
	border-right: 1px solid #dcdfe6;
	border-bottom: 1px solid #dcdfe6;
	transition: all 0.3s;

	.title {
		margin-top: 8px;
		font-size: 12px;
	}
}

.icon-item:hover {
	background-color: #e6f1fc;
}
</style>
