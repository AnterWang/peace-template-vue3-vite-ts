<template>
	<div class="checkbox-list">
		<el-checkbox v-model="menuExpand" @change="handleCheckedTreeExpand($event)">展开/折叠</el-checkbox>
		<el-checkbox v-model="menuNodeAll" @change="handleCheckedTreeNodeAll($event)">全选/全不选</el-checkbox>
		<el-checkbox v-model="strictly" @change="handleCheckedTreeConnect($event)">父子联动</el-checkbox>
	</div>
	<div class="treebox">
		<el-tree class="tree-border" :data="menuOptions" show-checkbox ref="menuRef" node-key="id"
			:check-strictly="!strictly" empty-text="加载中，请稍候" :props="{ label: 'label', children: 'children' }"></el-tree>
	</div>
</template>

<script setup>
import { ref, computed, getCurrentInstance } from "vue"

const { proxy } = getCurrentInstance()

const props = defineProps({
	treeData: {
		type: Array,
		default: () => []
	},
	// 是否父子联动
	checkStrictly: {
		type: Boolean,
		default: true
	}
})
const emits = defineEmits(['update:checkStrictly'])

// tree []
const menuOptions = computed({
	get: () => {
		return props.treeData
	},
	set: (val) => {
		return val
	}
})

const strictly = computed({
	get: () => {
		return props.checkStrictly
	},
	set: (val) => {
		return val
	}
})

const menuRef = ref()
const menuExpand = ref(false)
const menuNodeAll = ref(false)

// 展开/折叠
const handleCheckedTreeExpand = (value, type) => {
	let treeList = menuOptions.value
	setExpandFlag(treeList, value)
}
const setExpandFlag = (data, value) => {
	for (let i = 0; i < data.length; i++) {
		menuRef.value.store.nodesMap[data[i].id].expanded = value
		if (data[i].children && data[i].children.length > 0) {
			setExpandFlag(data[i].children, value)
		}
	}
}
// 全选/全不选
const handleCheckedTreeNodeAll = (value, type) => {
	menuRef.value.setCheckedNodes(value ? menuOptions.value : [])
}
// 父子联动
const handleCheckedTreeConnect = (value, type) => {
	emits('update:checkStrictly', value ? true : false)
}

</script>

<style scoped lang="scss">
.checkbox-list {
	width: 100%;
}

.treebox {
	width: 100%;
	margin-top: 5px;
	border: 1px solid #e5e6e7;
	border-radius: 4px;
}
</style>
