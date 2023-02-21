<template>
	<Drawer v-model:show="drawerVisible" width="80%" title="分配用户" :showFooter="false">
		<ProTable ref="proTable" title="列表" :columns="columns" :requestApi="getTableList">
			<!-- 表格 header 按钮 -->
			<template #tableHeader="scope">
				<el-button type="primary" :icon="CirclePlus" @click="handleAdd">新增用户</el-button>
				<el-button type="primary" :icon="Delete" @click="handleBatchDel">批量取消授权</el-button>
			</template>
			<!-- 状态 -->
			<template #status="scope">
				<el-tag :type="scope.row.status ? 'success' : 'warning'">{{ scope.row.status ? '正常' : '停用' }}</el-tag>
			</template>
			<!-- 表格操作 -->
			<template #operation="scope">
				<el-button type="primary" link :icon="Delete" @click="handleDel(scope.row)">取消授权</el-button>
			</template>
		</ProTable>
		<!-- 新增-->
		<UserDialog ref="userDialog" />
	</Drawer>
</template>

<script setup>
import { ref, reactive, getCurrentInstance } from "vue"
import { CircleCheck, Delete, Edit, Key, CirclePlus } from "@element-plus/icons-vue"
import Drawer from '@/components/common/Drawer.vue'
import ProTable from "@/components/ProTable/index.vue"
import { delUser } from '@/api/auth/role.js'
import { getList as getUserList } from '@/api/auth/user.js'
import UserDialog from "./userDialog.vue"

const { proxy } = getCurrentInstance()

const drawerVisible = ref(false)
// 接收父组件传过来的参数
const show = (params) => {
	console.log(params) // 角色列表 {}
	drawerVisible.value = true
}

// table
const proTable = ref()
// 可扩展传入参数
const getTableList = (params) => {
	let newParams = { ...params }
	return getUserList(newParams)
}
// 表格配置项
const columns = [
	{ type: "selection", fixed: "left", width: 80 },
	{ prop: "userName", label: "登录名称" },
	{ prop: "nickName", label: "用户名称", search: { el: "input" } },
	{ prop: "email", label: "邮箱" },
	{ prop: "phonenumber", label: "手机", search: { el: "input" } },
	{ prop: "status", label: "状态" },
	{ prop: "createTime", label: "创建时间", search: { el: "date-picker", type: "daterange" } },
	{ prop: "operation", label: "操作", width: 140 }
]

// 新增、编辑
const userDialog = ref()
const handleAdd = () => {
	let params = {
		getList: proTable.value.getTableList
	}
	userDialog.value.show(params)
}

// 批量删除
const handleBatchDel = () => {
	const rows = proTable.value.element.getSelectionRows()
	if (!rows.length) return proxy.$message.error('请至少选中一行')
	console.log(rows)
	// todo.........
}

// 删除
const handleDel = (row) => {
	proxy.$message.confirm(`确认删除吗？`)
		.then(async () => {
			const res = await delUser({ id: row.id })
			// todo.....
			proTable.value.getTableList()
			proxy.$message.success("删除成功")
		})
		.catch(() => { })
}

defineExpose({
	show
})
</script>
