<template>
	<el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
		<el-form-item prop="username">
			<el-input v-model="loginForm.username" placeholder="用户名：admin / user">
				<template #prefix>
					<el-icon class="el-input__icon">
						<user />
					</el-icon>
				</template>
			</el-input>
		</el-form-item>
		<el-form-item prop="password">
			<el-input type="password" v-model="loginForm.password" placeholder="密码：123456" show-password
				autocomplete="new-password">
				<template #prefix>
					<el-icon class="el-input__icon">
						<lock />
					</el-icon>
				</template>
			</el-input>
		</el-form-item>
	</el-form>
	<div class="login-btn">
		<el-button :icon="CircleClose" round @click="resetForm" size="large">重置</el-button>
		<el-button :icon="UserFilled" round @click="login" size="large" type="primary" :loading="loading">登录</el-button>
	</div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue"
import { useRouter } from "vue-router"
import { ElNotification } from "element-plus"
import { loginApi } from "@/api/login"
import { GlobalStore } from "@/stores"
import { TabsStore } from "@/stores/modules/tabs"
import { getTimeState } from "@/utils/util"
import { HOME_URL } from "@/enums/config"
import { initDynamicRouter } from "@/routers/modules/dynamicRouter"
import { CircleClose, UserFilled } from "@element-plus/icons-vue"
import md5 from "js-md5"

const router = useRouter()
const tabsStore = TabsStore()
const globalStore = GlobalStore()

const loginForm = reactive({ username: "", password: "" })
const loginRules = reactive({
	username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
	password: [{ required: true, message: "请输入密码", trigger: "blur" }]
})

const loading = ref(false)
const loginFormRef = ref()

const login = () => {
	loginFormRef.value?.validate(async valid => {
		if (!valid) return
		loading.value = true
		try {
			// 1.执行登录接口
			const { data } = await loginApi({ ...loginForm, password: md5(loginForm.password) })
			globalStore.setToken(data.access_token)

			// 2.添加动态路由
			await initDynamicRouter()

			// 3.清除上个账号的 tab 信息
			tabsStore.closeMultipleTab()

			// 4.跳转到首页
			router.push(HOME_URL)
			ElNotification({
				title: getTimeState(),
				message: `欢迎登录 ${import.meta.env.VITE_GLOB_APP_TITLE}`,
				type: "success",
				duration: 3000
			})
		} finally {
			loading.value = false
		}
	})
}

// resetForm
const resetForm = () => {
	if (!loginFormRef) return
	loginFormRef.value?.resetFields()
}
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
