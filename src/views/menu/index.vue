<template>
	<div class="table-box">
		<ProTable ref="proTable" title="系统列表" :columns="columns" row-key="id" :requestApi="getTableList" :pagination="false"
			:default-expand-all="expand">
			<!-- 表格 header 按钮 -->
			<template #tableHeader="scope">
				<!-- <el-button type="primary" :icon="CirclePlus" @click="eventExpand">展开/折叠</el-button> -->
				<el-button type="primary" plain @click="eventLook">查看数据</el-button>
			</template>
			<!-- 图标 -->
			<template #expand="scope">
				<el-icon size="18">
					<component :is="scope.row.metaIcon"></component>
				</el-icon>
			</template>
			<!-- 表格操作 -->
			<template #operation="scope">
				<el-button type="primary" link :icon="CirclePlus" @click="openDrawer('新增子级', {})">新增子级</el-button>
				<el-button type="primary" link :icon="EditPen" @click="openDrawer('编辑', scope.row)">编辑</el-button>
				<el-button type="primary" link :icon="Delete" @click="eventDel(scope.row)">删除</el-button>
			</template>
		</ProTable>
		<!-- 新增drawer -->
		<AddDrawer ref="addDrawer" />
		<!-- 数据 -->
		<MesDialog ref="mesDialog" />
	</div>
</template>

<script setup lang="tsx">
import { computed, ref, defineAsyncComponent } from "vue";
import { CirclePlus, Delete, EditPen, Download, Upload, View, Refresh } from "@element-plus/icons-vue";
import { useHandleData } from "@/hooks/useHandleData";
// 组件
import { ColumnProps } from "@/components/ProTable/interface";
import ProTable from "@/components/ProTable/index.vue";
import AddDrawer from "./components/addDrawer.vue";
import MesDialog from "./components/mesDialog.vue"
// api
import { getList } from '@/api/modules/menu'

const proTable = ref();
// 默认不做操作就直接在 ProTable 组件上绑定	:requestApi="getUserList"
const getTableList = (params: any) => {
	let newParams = { ...params };
	return getList(newParams);
};
// 表格配置项
const columns: ColumnProps[] = [
	{ prop: "metaTitle", label: "菜单名称", align: 'left', width: 200 },
	{ prop: "path", label: "页面地址", align: 'left' },
	{
		prop: "expand",
		label: "图标",
	},
	{ prop: "sort", label: "排序" },
	{
		prop: "component",
		label: "状态",
		render: scope => {
			return (
				<el-tag type={scope.row.status ? "success" : "danger"}>{scope.row.status ? "启用" : "停用"}</el-tag>
			);
		}
	},
	{ prop: "time", label: "创建时间" },
	{ prop: "operation", label: "操作", width: 300 }
];

// // 展开/折叠
let expand: boolean = true
// const eventExpand = () => {
// 	expand = !expand
// 	proTable.value.getTableList
// }

// 打开 drawer(新增、查看、编辑)
const addDrawer = ref();
const openDrawer = (title: string, rowData: object = {}) => {
	let params = {
		title,
		rowData: { ...rowData },
		tableData: proTable.value.tableData,
		isView: false,
		// api: title === "新增" ? addUser : title === "编辑" ? editUser : "",
		getTableList: proTable.value.getTableList
	};
	addDrawer.value.acceptParams(params);
};

// 删除
const eventDel = async (row: any) => {
	// await useHandleData(editChangeStatus, { id: row.id }, `确认删除吗？`);
	proTable.value.getTableList();
};

// 查看数据
const mesDialog = ref()
const eventLook = () => {
	mesDialog.value.show(proTable.value.tableData)
}

</script>

<style scoped lang="scss">

</style>
