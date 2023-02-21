<template>
	<Drawer v-model:show="drawerVisible" width="600px" :title="`${drawerProps.title}`" @confirm="handleSubmit">
		<el-form ref="menuRef" :model="drawerProps.form" :rules="rules" label-width="100px">
			<el-form-item label="上级菜单">
				<el-tree-select v-model="drawerProps.form.parentId" :data="menuOptions" check-strictly
					:props="{ value: 'menuId', label: 'menuName', children: 'children' }" value-key="menuId" placeholder="选择上级菜单"
					:render-after-expand="true" />
			</el-form-item>
			<el-form-item label="菜单类型" prop="menuType">
				<el-radio-group v-model="drawerProps.form.menuType">
					<el-radio label="M">目录</el-radio>
					<el-radio label="C">菜单</el-radio>
					<el-radio label="F">按钮</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item v-if="drawerProps.form.menuType !== 'F'" label="菜单图标" prop="icon">
				<el-input v-model="drawerProps.form.icon" placeholder="请选择图标" @focus="eventFocus" />
			</el-form-item>
			<el-form-item label="菜单名称" prop="menuName">
				<el-input v-model="drawerProps.form.menuName" placeholder="请输入菜单名称" />
			</el-form-item>
			<el-form-item label="显示排序" prop="orderNum">
				<el-input-number v-model="drawerProps.form.orderNum" controls-position="right" :min="0" />
			</el-form-item>
			<el-form-item v-if="drawerProps.form.menuType !== 'F'">
				<template #label>
					<span>
						<el-tooltip content="选择是外链则路由地址需要以`http(s)://`开头" placement="top">
							<el-icon><question-filled /></el-icon>
						</el-tooltip>是否外链
					</span>
				</template>
				<el-radio-group v-model="drawerProps.form.isFrame">
					<el-radio v-for="(item, index) in WHETHER" :key="index" :label="item.value">{{ item.label }}</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item v-if="drawerProps.form.menuType !== 'F'" prop="apiPath">
				<template #label>
					<span>
						<el-tooltip content="访问的路由地址，如：`user`，如外网地址需内链访问则以`http(s)://`开头" placement="top">
							<el-icon><question-filled /></el-icon></el-tooltip>路由地址
					</span>
				</template>
				<el-input v-model="drawerProps.form.apiPath" placeholder="请输入路由地址" />
			</el-form-item>
			<el-form-item v-if="drawerProps.form.menuType === 'C'" prop="component">
				<template #label>
					<span>
						<el-tooltip content="访问的组件路径，如：`system/user/index`，默认在`views`目录下" placement="top">
							<el-icon><question-filled /></el-icon></el-tooltip>组件路径
					</span>
				</template>
				<el-input v-model="drawerProps.form.component" placeholder="请输入组件路径" />
			</el-form-item>
			<el-form-item v-if="drawerProps.form.menuType != 'M'">
				<el-input v-model="drawerProps.form.perms" placeholder="请输入权限标识" maxlength="100" />
				<template #label>
					<span>
						<el-tooltip content="控制器中定义的权限字符，如：@PreAuthorize(`@ss.hasPermi('system:user:list')`)" placement="top">
							<el-icon><question-filled /></el-icon>
						</el-tooltip>权限字符
					</span>
				</template>
			</el-form-item>
			<el-form-item v-if="drawerProps.form.menuType == 'C'">
				<el-input v-model="drawerProps.form.apiQuery" placeholder="请输入路由参数" maxlength="255" />
				<template #label>
					<span>
						<el-tooltip content='访问路由的默认传递参数，如：`{"id": 1, "name": "ry"}`' placement="top">
							<el-icon><question-filled /></el-icon>
						</el-tooltip>路由参数
					</span>
				</template>
			</el-form-item>
			<el-form-item v-if="drawerProps.form.menuType == 'C'">
				<template #label>
					<span>
						<el-tooltip content="选择是则会被`keep-alive`缓存，需要匹配组件的`name`和地址保持一致" placement="top">
							<el-icon><question-filled /></el-icon>
						</el-tooltip>是否缓存
					</span>
				</template>
				<el-radio-group v-model="drawerProps.form.isCache">
					<el-radio v-for="(item, index) in CACHE" :key="index" :label="item.value">{{ item.label }}</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item v-if="drawerProps.form.menuType != 'F'">
				<template #label>
					<span><el-tooltip content="选择隐藏则路由将不会出现在侧边栏，但仍然可以访问" placement="top">
							<el-icon><question-filled /></el-icon>
						</el-tooltip>显示状态</span>
				</template>
				<el-radio-group v-model="drawerProps.form.showState">
					<el-radio v-for="(item, index) in SHOW_STATE" :key="index" :label="item.value">{{ item.label }}</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item v-if="drawerProps.form.menuType !== 'F'">
				<template #label>
					<span>
						<el-tooltip content="选择停用则路由将不会出现在侧边栏，也不能被访问" placement="top">
							<el-icon><question-filled /></el-icon>
						</el-tooltip>
						菜单状态
					</span>
				</template>
				<el-radio-group v-model="drawerProps.form.state">
					<el-radio v-for="(item, index) in STATE" :key="index" :label="item.value">{{ item.label }}</el-radio>
				</el-radio-group>
			</el-form-item>
		</el-form>
		<!-- icon -->
		<IconDrawer ref="iconDrawer" @change="changeIcon" />
	</Drawer>
</template>

<script setup>
import { ref, reactive } from "vue"
import Drawer from "@/components/common/Drawer.vue"
import IconDrawer from "./iconDrawer.vue"

// 菜单类型
// const MENUTYPE = ref([
// 	{ label: '目录', value: 1 },
// 	{ label: '菜单', value: 2 }
// ])
// 状态
const STATE = ref([
	{ label: '正常', value: "0" },
	{ label: '停用', value: "1" }
])
// 显示状态
const SHOW_STATE = ref([
	{ label: '显示', value: "0" },
	{ label: '隐藏', value: "1" }
])
// 是否 boolean
const WHETHER = ref([
	{ label: '是', value: "0" },
	{ label: '否', value: "1" }
])
const CACHE = ref([
	{ label: '缓存', value: "0" },
	{ label: '不缓存', value: "1" }
])

const rules = reactive({
	menuName: [{ required: true, message: "菜单名称不能为空", trigger: "blur" }],
	orderNum: [{ required: true, message: "菜单顺序不能为空", trigger: "blur" }],
	apiPath: [{ required: true, message: "路由地址不能为空", trigger: "blur" }]
})

// drawer框状态
const drawerVisible = ref(false)
const drawerProps = ref({
	form: {},
	title: "",
	getList: () => { },
	treeData: []
})

// 接收父组件传过来的参数
const acceptParams = (params) => {
	drawerProps.value = {
		...params
	}
	resetForm()
	const menu = { menuId: 0, menuName: "主类目", children: drawerProps.value.treeData }
	menuOptions.value = [menu]

	drawerVisible.value = true
}

// 提交数据（新增/编辑）
const menuRef = ref()
const handleSubmit = () => {
	menuRef.value.validate(async valid => {
		if (!valid) return
		console.log(drawerProps.value)
		// try {
		// 	await drawerProps.value.api!(drawerProps.value.rowData);
		// 	ElMessage.success({ message: `${drawerProps.value.title}用户成功！` });
		// 	drawerProps.value.getTableList!();
		// 	drawerVisible.value = false;
		// } catch (error) {
		// 	console.log(error);
		// }
	})
}

// 重置表单 / 初始值
const resetForm = () => {
	drawerProps.value.form = {
		menuId: undefined,
		parentId: 0,
		menuName: undefined,
		icon: undefined,
		menuType: "M",
		orderNum: undefined,
		isFrame: "1",
		isCache: "0",
		visible: "0",
		status: "0",
	}
}

// 选择icon
const iconDrawer = ref()
const eventFocus = () => {
	iconDrawer.value.acceptParams()
}
const changeIcon = (item) => {
	console.log(item)
	drawerProps.value.form.icon = item
}

// 菜单树
const menuOptions = ref([])

defineExpose({
	acceptParams
})
</script>
