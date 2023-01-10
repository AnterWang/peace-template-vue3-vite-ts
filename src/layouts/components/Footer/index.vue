<template>
	<div class="footer flx-center">
		<a href="https://github.com/HalseySpicy" target="_blank"> 2022 © {{ VITE_GLOB_APP_TITLE }}. </a>
	</div>
</template>

<script setup lang="ts">
const VITE_GLOB_APP_TITLE = import.meta.env.VITE_GLOB_APP_TITLE
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
