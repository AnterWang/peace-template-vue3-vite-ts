<template>
	<Drawer v-model:show="drawerVisible" width="650px" :title="`${drawerProps.title}`" @confirm="handleSubmit">
		<el-form ref="ruleFormRef" label-width="100px" label-suffix=" :" :rules="rules" :disabled="drawerProps.isView"
			:model="drawerProps.rowData" :hide-required-asterisk="drawerProps.isView">
			<el-form-item label="上级菜单" prop="parent">
				<el-tree-select v-model="drawerProps.rowData!.parent" :data="treeData" check-strictly
					:render-after-expand="false" />
			</el-form-item>
			<el-form-item label="菜单类型" prop="menuType" required>
				<el-radio-group v-model="drawerProps.rowData!.menuType">
					<el-radio v-for="item in MENUTYPE" :label="item.value" :value="item.value" :key="item.value">
						{{ item.name }}
					</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="页面地址" prop="path" required>
				<el-input v-model="drawerProps.rowData!.path" placeholder="请填写页面地址" clearable></el-input>
			</el-form-item>
			<el-form-item label="菜单名称" prop="metaTitle" required>
				<el-input v-model="drawerProps.rowData!.metaTitle" placeholder="请填写菜单名称" clearable></el-input>
			</el-form-item>
			<!-- 菜单需要填组件路径 -->
			<el-form-item v-if="drawerProps.rowData!.menuType === 2" label="组件路径" prop="component" required>
				<el-input v-model="drawerProps.rowData!.component" placeholder="请填写组件路径" clearable></el-input>
			</el-form-item>
			<el-form-item label="状态" prop="status" required>
				<el-radio-group v-model="drawerProps.rowData!.status">
					<el-radio v-for="item in STATUS" :label="item.value" :value="item.value" :key="item.value">
						{{ item.name }}
					</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="排序" prop="sort">
				<el-input-number v-model="drawerProps.rowData!.sort" :precision="0" :step="1" :min="0" />
			</el-form-item>
			<el-form-item label="图标" prop="metaIcon">
				<el-avatar shape="square" :icon="drawerProps.rowData!.metaIcon" @click="eventCheck" />
				<el-button type="primary" link @click="eventCheck">选择图标</el-button>
			</el-form-item>
			<el-form-item label="是否缓存" prop="metaIsKeepAlive">
				<el-radio-group v-model="drawerProps.rowData!.metaIsKeepAlive">
					<el-radio v-for="item in WHETHER" :label="item.value" :value="item.value" :key="item.value">
						{{ item.name }}
					</el-radio>
				</el-radio-group>
			</el-form-item>
		</el-form>
		<!-- icon -->
		<IconDrawer ref="iconDrawer" @change="changeIcon" />
	</Drawer>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { ElMessage, FormInstance } from "element-plus";
import Drawer from "@/components/common/Drawer.vue"
import IconDrawer from "./iconDrawer.vue"

// 菜单类型
const MENUTYPE = ref([
	{ name: '目录', value: 1 },
	{ name: '菜单', value: 2 }
])
// 状态
const STATUS = ref([
	{ name: '启用', value: 1 },
	{ name: '禁用', value: 0 }
])
// 是否 boolean
const WHETHER = ref([
	{ name: '是', value: true },
	{ name: '否', value: false }
])

const rules = reactive({
	menuType: [{ required: true, message: "请选择菜单类型" }],
	path: [{ required: true, message: "请填写页面地址" }],
	metaTitle: [{ required: true, message: "请填写菜单名称" }],
	component: [{ required: true, message: "请填写组件路径" }],
	status: [{ required: true, message: "请选择状态" }]
});

interface DrawerProps {
	title: string;
	isView: boolean;
	rowData?: any;
	tableData?: any;
	api?: (params: any) => Promise<any>;
	getTableList?: () => Promise<any>;
}

// drawer框状态
const drawerVisible = ref(false);
const drawerProps = ref<DrawerProps>({
	isView: false,
	title: ""
});

// 接收父组件传过来的参数
const acceptParams = (params: DrawerProps): void => {
	drawerProps.value = params;
	treeData = [
		{
			value: 0,
			label: '无上级菜单',
			children: []
		},
		...disposeRoute(drawerProps.value.tableData)
	]
	drawerVisible.value = true;
};

// 提交数据（新增/编辑）
const ruleFormRef = ref<FormInstance>();
const handleSubmit = () => {
	ruleFormRef.value!.validate(async valid => {
		if (!valid) return;
		console.log(drawerProps.value.rowData)
		// try {
		// 	await drawerProps.value.api!(drawerProps.value.rowData);
		// 	ElMessage.success({ message: `${drawerProps.value.title}用户成功！` });
		// 	drawerProps.value.getTableList!();
		// 	drawerVisible.value = false;
		// } catch (error) {
		// 	console.log(error);
		// }
	});
};

// 选择icon
const iconDrawer = ref()
const eventCheck = () => {
	iconDrawer.value.acceptParams()
}
const changeIcon = (item: any) => {
	drawerProps.value.rowData.metaIcon = item
}

// 菜单树
const disposeRoute = (list: any) => {
	return list.map((item: any) => {
		const haveChildren = Array.isArray(item.children) && item.children.length > 0;
		return {
			value: item.id,
			label: item.metaTitle,
			children: haveChildren ? disposeRoute(item.children) : [],
		}
	})
}
let treeData: any = []

defineExpose({
	acceptParams
});
</script>
