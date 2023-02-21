<template>
	<Dialog v-model:show="dialogVisible" width="800px" title="选择用户" @confirm="confirm">
		<ProTable ref="proTable" title="列表" :columns="columns" :requestApi="getTableList" :toolButton="false">
			<!-- 状态 -->
			<template #status="scope">
				<el-tag :type="scope.row.status ? 'success' : 'warning'">{{ scope.row.status ? '正常' : '停用' }}</el-tag>
			</template>
		</ProTable>
	</Dialog>
</template>

<script setup>
import { ref, reactive, getCurrentInstance } from "vue"
import { CircleCheck, Delete, Edit, Key, CirclePlus } from "@element-plus/icons-vue"
import Dialog from '@/components/common/Dialog.vue'
import ProTable from "@/components/ProTable/index.vue"
import { getList as getUserList } from '@/api/auth/user.js'

const { proxy } = getCurrentInstance()

const dialogVisible = ref(false)
// 接收父组件传过来的参数
const show = (params) => {
	// todo ....  params
	dialogVisible.value = true
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
