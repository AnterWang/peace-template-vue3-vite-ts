<template>
	<div class="table-box">
		<ProTable v-if="refreshTable" ref="proTable" title="系统列表" :columns="columns" row-key="menuId" :requestApi="getList"
			:pagination="false" :default-expand-all="isExpandAll" :requestCallback="requestCallback">
			<!-- 表格 header 按钮 -->
			<template #tableHeader="scope">
				<el-button type="primary" :icon="CirclePlus" @click="eventExpand">新增</el-button>
				<el-button type="primary" :icon="Sort" @click="eventExpand">展开/折叠</el-button>
				<!-- <el-button type="primary" plain @click="eventLook">查看数据</el-button> -->
			</template>
			<!-- 图标 -->
			<template #icon="scope">
				<!-- <el-icon v-if="scope.row.icon && !scope.row.icon.include('#')" size="18">
					<component :is="scope.row.icon"></component>
				</el-icon> tode ........ -->
				<span>{{ scope.row.icon }}</span>
			</template>
			<!-- 状态 -->
			<template #state="scope">
				<el-tag :type="scope.row.state ? 'success' : 'danger'">{{ scope.row.state ? "启用" : "停用" }}</el-tag>
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

<script setup>
import { computed, ref, nextTick, h } from "vue"
import { CirclePlus, Delete, EditPen, Download, Upload, View, Sort } from "@element-plus/icons-vue"
import { handleTree } from '@/utils/handleTree'
// 组件
import ProTable from "@/components/ProTable/index.vue"
import AddDrawer from "./components/addDrawer.vue"
import MesDialog from "./components/mesDialog.vue"
// api
import { getList } from '@/api/auth/menu.js'

const proTable = ref()
let treeData = []
const requestCallback = (data) => {
	const tree = handleTree(data.data, "menuId")
	treeData = tree
	return {
		code: data.code,
		msg: data.msg,
		rows: tree,
		total: 0
	}
}
// 表格配置项
const columns = [
	{ prop: "menuName", label: "菜单名称", align: 'left', width: 200 },
	{ prop: "icon", label: "图标" },
	{ prop: "path", label: "页面地址", align: 'left' },
	{ prop: "orderNum", label: "排序" },
	{ prop: "perms", label: "权限标识" },
	{ prop: "component", label: "组件路径" },
	{ prop: "state", label: "状态", width: 80 },
	{ prop: "createTime", label: "创建时间" },
	{ prop: "operation", label: "操作", width: 240 }
]

// 展开/折叠
const refreshTable = ref(true)
const isExpandAll = ref(false)
const eventExpand = () => {
	refreshTable.value = false
	isExpandAll.value = !isExpandAll.value
	nextTick(() => {
		refreshTable.value = true
	})
}

// 打开 drawer(新增、编辑)
const addDrawer = ref()
const openDrawer = (title, rowData) => {
	let params = {
		title,
		treeData: treeData,
		getList: proTable.value.getTableList,
		rowData: { ...rowData },
	}
	addDrawer.value.acceptParams(params)
}

// 删除
const eventDel = async (row) => {
	// await useHandleData(editChangeStatus, { id: row.id }, `确认删除吗？`);
	proTable.value.getTableList()
}

// 查看数据
const mesDialog = ref()
const eventLook = () => {
	mesDialog.value.show(proTable.value.tableData)
}

</script>

<style scoped lang="scss">

</style>
