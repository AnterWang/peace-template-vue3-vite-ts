<template>
	<div class="tool-bar-lf">
		<CollapseIcon id="collapseIcon" />
		<el-radio-group v-model="mainType" size="default" class="type">
			<el-radio-button :label="1">现 货</el-radio-button>
			<el-radio-button :label="2">合 约</el-radio-button>
		</el-radio-group>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { GlobalStore } from "@/stores";
import CollapseIcon from "./components/CollapseIcon.vue";

const globalStore = GlobalStore();
const themeConfig = computed(() => globalStore.themeConfig);
const mainType = ref(1)
</script>

<style scoped lang="scss">
.tool-bar-lf {
	display: flex;
	align-items: center;
	justify-content: center;
}

.type {
	::v-deep(.el-radio-button__inner) {
		padding: 8px 28px;
	}
}
</style>
