<!-- 经典布局 -->
<template>
	<el-container class="layout">
		<el-header>
			<div class="header-lf">
				<div class="logo flx-center">
					<img src="@/assets/images/logo/logo_light.svg" alt="logo" />
					<span>{{ VITE_GLOB_APP_TITLE }}</span>
				</div>
				<ToolBarLeft />
			</div>
			<ToolBarRight />
		</el-header>
		<el-container class="classic-content">
			<el-aside>
				<div class="menu" :style="{ width: isCollapse ? '65px' : '210px' }">
					<el-scrollbar>
						<el-menu :default-active="activeMenu" :router="false" :collapse="isCollapse" :collapse-transition="false"
							:unique-opened="true" background-color="#ffffff" text-color="#303133">
							<SubMenu :menuList="menuList" />
						</el-menu>
					</el-scrollbar>
				</div>
			</el-aside>
			<el-container class="classic-main">
				<Main />
			</el-container>
		</el-container>
	</el-container>
</template>

<script setup lang="ts" name="layoutClassic">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { GlobalStore } from "@/stores";
import { AuthStore } from "@/stores/modules/auth";
import Main from "@/layouts/components/Main/index.vue";
import SubMenu from "@/layouts/components/Menu/SubMenu.vue";
import ToolBarLeft from "@/layouts/components/Header/ToolBarLeft.vue";
import ToolBarRight from "@/layouts/components/Header/ToolBarRight.vue";

const route = useRoute();
const authStore = AuthStore();
const globalStore = GlobalStore();
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path));
const menuList = computed(() => authStore.showMenuListGet);
const isCollapse = computed(() => globalStore.themeConfig.isCollapse);
const VITE_GLOB_APP_TITLE = import.meta.env.VITE_GLOB_APP_TITLE
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>

<style lang="scss">
.classic {
	.classic-content {
		height: calc(100% - 55px); // 减去头部高度

		/* stylelint-disable-next-line rule-empty-line-before */
		.classic-main {
			display: flex;
			flex-direction: column;
		}
	}

	.el-menu,
	.el-menu--popup {
		.el-menu-item {
			&.is-active {
				background: var(--el-color-primary-light-8);
			}
		}

		.el-menu-item:not(.is-active):hover {
			color: var(--el-color-primary) !important;
			background-color: transparent !important;
		}
	}

	// guide
	#driver-highlighted-element-stage {
		background-color: #606266 !important;
	}
}
</style>
