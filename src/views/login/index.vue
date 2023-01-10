<template>
	<div class="login-container flx-center">
		<SwitchDark class="dark" />
		<div class="login-box">
			<div class="login-left">
				<img src="@/assets/images/login_left0.png" alt="login" />
			</div>
			<div class="login-form">
				<div class="login-logo">
					<img v-if="isDark" class="login-icon" src="@/assets/images/logo/logo_light.svg" />
					<img v-else class="login-icon" src="@/assets/images/logo/logo_dark.svg" />
					<h2 class="logo-text">{{ VITE_GLOB_APP_TITLE }}</h2>
				</div>
				<LoginForm />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="login">
import { computed } from "vue";
import SwitchDark from "@/components/SwitchDark/index.vue";
import LoginForm from "./components/LoginForm.vue";
import { GlobalStore } from "@/stores";

const globalStore = GlobalStore();
const isDark = computed(() => globalStore.themeConfig.isDark);
const VITE_GLOB_APP_TITLE = import.meta.env.VITE_GLOB_APP_TITLE
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
