<template>
	<Drawer v-model:show="drawerVisible" width="650px" :title="`${drawerProps.title}`" @confirm="handleSubmit">
		<el-form ref="formRef" :model="drawerProps.form" :rules="rules" label-width="100px">
			<el-form-item label="用户名称" prop="nickName">
				<el-input v-model="drawerProps.form.nickName" placeholder="请输入用户名称" maxlength="30" />
			</el-form-item>
			<el-form-item label="手机号码" prop="phonenumber">
				<el-input v-model="drawerProps.form.phonenumber" placeholder="请输入手机号码" maxlength="11" />
			</el-form-item>
			<el-form-item label="邮箱" prop="email">
				<el-input v-model="drawerProps.form.email" placeholder="请输入邮箱" maxlength="50" />
			</el-form-item>
			<el-form-item label="用户性别" prop="sex">
				<el-radio-group v-model="drawerProps.form.sex">
					<el-radio v-for="dict in SEX_ARR" :key="dict.value" :label="dict.value">{{ dict.label }}
					</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="登录账号" prop="userName">
				<el-input :disabled="drawerProps.form.userId" v-model="drawerProps.form.userName" placeholder="请输入登录账号"
					maxlength="30" autocomplete="off" />
			</el-form-item>
			<el-form-item label="登录密码" prop="pwd">
				<el-input v-model="drawerProps.form.pwd" placeholder="请输入用户密码" type="password" maxlength="20" show-password
					autocomplete="off" />
			</el-form-item>
			<el-form-item label="状态">
				<el-radio-group v-model="drawerProps.form.state">
					<el-radio v-for="dict in STATE_ARR" :key="dict.value" :label="dict.value">{{ dict.label }}
					</el-radio>
				</el-radio-group>
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
import { updateEdit } from '@/api/auth/user.js'

const rules = reactive({
	nickName: [
		{ required: true, message: "用户名称不能为空", trigger: "blur" },
		{
			min: 2,
			max: 20,
			message: "用户名称长度必须介于 2 和 20 之间",
			trigger: "blur",
		},
	],
	userName: [
		{ required: true, message: "登录名称不能为空", trigger: "blur" },
	],
	pwd: [
		{ required: true, message: "用户密码不能为空", trigger: "blur" },
		{
			min: 5,
			max: 20,
			message: "用户密码长度必须介于 5 和 20 之间",
			trigger: "blur",
		},
	],
	email: [
		{
			type: "email",
			message: "请输入正确的邮箱地址",
			trigger: ["blur", "change"],
		},
	],
	phonenumber: [
		{
			pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
			message: "请输入正确的手机号码",
			trigger: "blur",
		},
	],
})

// drawer框状态
const drawerVisible = ref(false)
const drawerProps = ref({
	form: {
		userId: undefined,
		deptId: undefined,
		userName: undefined,
		loginName: undefined,
		pwd: undefined,
		phonenumber: undefined,
		email: undefined,
		sex: undefined,
		state: 1,
		remark: undefined,
		role: undefined,
	},
	title: "",
	getList: () => { }
})

// 接收父组件传过来的参数
const acceptParams = (params) => {
	drawerProps.value.title = params.title
	drawerProps.value.getList = params.getList

	if (params.title === '编辑') {
		drawerProps.value.form = params.form
	}

	drawerVisible.value = true
}

// 提交数据（新增/编辑）
const formRef = ref()
const handleSubmit = () => {
	formRef.value?.validate(async valid => {
		if (!valid) return
		console.log(drawerProps.value.form)
		const data = drawerProps.value.form
		const { code, msg } = await updateEdit({ ...data })

		if (code === 200) {
			ElMessage.success({ message: `${drawerProps.value.title}成功！` })
			drawerProps.value.getList() // 刷新

			drawerVisible.value = false
		}
	})
}

defineExpose({
	acceptParams
})
</script>
