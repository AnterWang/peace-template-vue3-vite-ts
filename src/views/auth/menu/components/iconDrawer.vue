<template>
	<Drawer v-model:show="drawerVisible" width="660px" title="图标库" :showFooter="false">
		<el-input v-model="input" placeholder="输入名称检索" class="input" clearable @change="eventChange">
			<template #append>
				<el-button :icon="Search" />
			</template>
		</el-input>
		<div class="icon-list">
			<div v-for="(item, index) in iconsData" :key="index" class="icon-item" @click="handleSubmit(item)">
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
import { Search } from '@element-plus/icons-vue'
import Drawer from "@/components/common/Drawer.vue"

// 搜索
const initIcon = Object.keys(Icons) // 原始图标数组
const iconsData: any = ref([])
const input = ref('')
const eventChange = (val: string | number) => {
	const result = initIcon.filter((item: string) => {
		const key = item.toLowerCase()
		const value = val.toString().toLowerCase()
		return key.search(value) > -1
	})
	iconsData.value = result
}

// drawer框状态
const drawerVisible = ref(false);
// 接收父组件传过来的参数
const acceptParams = (): void => {
	iconsData.value = initIcon
	input.value = ''

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

.input {
	margin-bottom: 10px;
}
</style>
