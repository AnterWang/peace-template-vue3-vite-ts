<template>
	<div class="tool-bar-ri">
		<div class="header-icon">
			<AssemblySize id="assemblySize" />
			<SearchMenu id="searchMenu" />
			<ThemeSetting id="themeSetting" />
			<Fullscreen id="fullscreen" />
		</div>
		<Avatar />
	</div>
</template>

<script setup lang="ts">
import SearchMenu from "./components/SearchMenu.vue";
import Fullscreen from "./components/Fullscreen.vue";
import ThemeSetting from "./components/ThemeSetting.vue";
import AssemblySize from "./components/AssemblySize.vue";
import Avatar from "./components/Avatar.vue";
</script>

<style scoped lang="scss">
.tool-bar-ri {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 30px;

	.header-icon {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 140px;
		margin-right: 22px;
	}
}
</style>
