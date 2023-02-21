<template>
	<Drawer v-model:show="drawerVisible" width="550px" :title="`${drawerProps.title}`" @confirm="handleSubmit">
		<el-form ref="roleRef" :model="drawerProps.form" :rules="rules" label-width="100px">
			<el-form-item label="角色名称" prop="roleName">
				<el-input v-model="drawerProps.form.roleName" placeholder="请输入角色名称" />
			</el-form-item>
			<el-form-item prop="roleKey">
				<template #label>
					<span>
						<el-tooltip content="控制器中定义的权限字符，如：@PreAuthorize(`@ss.hasRole('admin')`)" placement="top">
							<el-icon>
								<question-filled />
							</el-icon>
						</el-tooltip>
						权限字符
					</span>
				</template>
				<el-input v-model="drawerProps.form.roleKey" placeholder="请输入权限字符" />
			</el-form-item>
			<el-form-item label="角色顺序" prop="roleSort">
				<el-input-number v-model="drawerProps.form.roleSort" controls-position="right" :min="0" />
			</el-form-item>
			<el-form-item label="状态">
				<el-radio-group v-model="drawerProps.form.state">
					<el-radio v-for="dict in STATE_ARR" :key="dict.value" :label="dict.value">{{ dict.label }}
					</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="菜单权限">
				<TreeBox :treeData="menuOptions" v-model:checkStrictly="drawerProps.form.menuCheckStrictly" />
			</el-form-item>
			<el-form-item label="备注">
				<el-input v-model="drawerProps.form.remark" type="textarea" placeholder="请输入内容"></el-input>
			</el-form-item>
		</el-form>
	</Drawer>
</template>

<script setup>
import { ref, reactive } from "vue"
import { ElMessage } from "element-plus"
import Drawer from "@/components/common/Drawer.vue"
import { STATE_ARR, SEX_ARR } from "@/enums/select"
import { getRoleTreeEdit } from '@/api/auth/role.js'
import TreeBox from './treeBox.vue'

const rules = reactive({
	roleName: [
		{ required: true, message: "角色名称不能为空", trigger: "blur" },
	],
	roleKey: [{ required: true, message: "权限字符不能为空", trigger: "blur" }],
	roleSort: [
		{ required: true, message: "角色顺序不能为空", trigger: "blur" },
	],
})

// drawer框状态
const drawerVisible = ref(false)
const drawerProps = ref({
	form: {
		menuCheckStrictly: true,
	},
	title: "",
	getList: () => { }
})

// 接收父组件传过来的参数
const acceptParams = (params) => {
	drawerProps.value.title = params.title
	drawerProps.value.getList = params.getList

	// if (params.title === '编辑') {
	// 	drawerProps.value.form = params.form
	// }

	// 获取权限树
	getRoleTreeEdit().then((response) => {
		menuOptions.value = response.menus
	})

	drawerVisible.value = true
}

// 提交数据（新增/编辑）
const roleRef = ref()
const handleSubmit = () => {
	roleRef.value?.validate(async valid => {
		if (!valid) return
		console.log(drawerProps.value.form)
		// const data = drawerProps.value.form
		// const { code, msg } = await updateEdit({ ...data })

		// if (code === 200) {
		// 	ElMessage.success({ message: `${drawerProps.value.title}成功！` })
		// 	drawerProps.value.getList() // 刷新

		// 	drawerVisible.value = false
		// }
	})
}

/** --- 权限树 --- */
const menuOptions = ref([])

defineExpose({
	acceptParams
})
</script>
