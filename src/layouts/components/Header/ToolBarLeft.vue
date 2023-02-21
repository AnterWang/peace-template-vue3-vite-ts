<template>
	<div class="tool-bar-lf">
		<CollapseIcon id="collapseIcon" />
		<!-- 菜单 -->
		<el-menu :default-active="activeIndex" class="header-menu" :class="layout" mode="horizontal" @select="handleSelect"
			:ellipsis="false">
			<el-menu-item index="1">现货</el-menu-item>
			<el-sub-menu index="2">
				<template #title>合约</template>
				<el-menu-item index="2-1">item one</el-menu-item>
				<el-menu-item index="2-2">item two</el-menu-item>
				<el-menu-item index="2-3">item three</el-menu-item>
			</el-sub-menu>
			<el-menu-item index="3">系统管理</el-menu-item>
			<el-menu-item index="4">Orders</el-menu-item>
		</el-menu>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { GlobalStore } from "@/stores";
import CollapseIcon from "./components/CollapseIcon.vue";

const store = GlobalStore();
const layout = computed(() => {
	return store.themeConfig.layout
});

// 菜单
const activeIndex = ref("1")
const handleSelect = () => {
	console.log(layout)
}
</script>

<style scoped lang="scss">
.tool-bar-lf {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* 菜单 */
.header-menu {
	height: 53px;
	background-color: rgb(0 0 0 / 0%) !important;
	border-bottom: 0 !important;
}

.classic.header-menu {
	::v-deep(.el-menu-item.is-active) {
		color: #ffffff !important;
		background-color: var(--el-color-primary-dark-2) !important;
	}

	::v-deep(.el-menu-item) {
		color: #ffffff;
	}

	::v-deep(.el-sub-menu__title) {
		color: #ffffff;
	}

	// ::v-deep(.el-sub-menu.is-active .el-sub-menu__title) {
	// 	background-color: var(--el-color-primary-dark-2) !important;
	// }

	::v-deep(.el-sub-menu__title:hover) {
		background-color: rgb(0 0 0 / 0%) !important;
	}
}

.vertical.header-menu {
	::v-deep(.el-menu-item.is-active) {
		background-color: rgb(0 0 0 / 0%) !important;
	}
}
</style>
