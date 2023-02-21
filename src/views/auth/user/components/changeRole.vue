<template>
	<Drawer v-model:show="drawerVisible" width="60%" title="分配角色" @confirm="confirm">
		<ProTable ref="proTable" title="列表" :columns="columns" :requestApi="getTableList" :tool-button="false">
			<!-- 状态 -->
			<template #state="scope">
				<el-tag :type="scope.row.state ? 'success' : 'warning'">{{ scope.row.state ? '正常' : '停用' }}</el-tag>
			</template>
		</ProTable>
	</Drawer>
</template>

<script setup>
import { ref, reactive, getCurrentInstance } from "vue"
import { CircleCheck, Delete, Edit, Key, CirclePlus } from "@element-plus/icons-vue"
import Drawer from '@/components/common/Drawer.vue'
import ProTable from "@/components/ProTable/index.vue"
import { delUser } from '@/api/auth/user.js'
import { getList as getUserList } from '@/api/auth/role.js'

const { proxy } = getCurrentInstance()

const drawerVisible = ref(false)
// 接收父组件传过来的参数
const show = (params) => {
	console.log(params) // 用户列表 {}
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
	{ prop: "roleId", label: "角色编号" },
	{ prop: "roleName", label: "角色名称" },
	{ prop: "roleKey", label: "权限字符" },
	{ prop: "roleSort", label: "显示顺序" },
	{ prop: "state", label: "状态" },
	{ prop: "createTime", label: "创建时间" },
]

// 提交
const confirm = () => {
	const rows = proTable.value.element.getSelectionRows()
	if (!rows.length) return proxy.$message.error('请至少选中一行')
	console.log(rows)
	// todo.........
}

defineExpose({
	show
})
</script>
