// 获取路由
export const routes = {
	msg: "操作成功",
	code: 200,
	data: [
		{
			name: "System",
			path: "/system",
			hidden: false,
			redirect: "noRedirect",
			component: "Layout",
			alwaysShow: true,
			meta: { title: "系统管理", icon: "system", noCache: false, link: null },
			children: [
				{
					name: "User",
					path: "user",
					hidden: false,
					component: "system/user/index",
					meta: { title: "用户管理", icon: "user", noCache: false, link: null }
				},
				{
					name: "Role",
					path: "role",
					hidden: false,
					component: "system/role/index",
					meta: { title: "角色管理", icon: "peoples", noCache: false, link: null }
				},
				{
					name: "Menu",
					path: "menu",
					hidden: false,
					component: "system/menu/index",
					meta: { title: "菜单管理", icon: "tree-table", noCache: false, link: null }
				},
				{
					name: "Dict",
					path: "dict",
					hidden: false,
					component: "system/dict/index",
					meta: { title: "字典管理", icon: "dict", noCache: false, link: null }
				},
				{
					name: "Config",
					path: "config",
					hidden: false,
					component: "system/config/index",
					meta: { title: "参数设置", icon: "edit", noCache: false, link: null }
				}
			]
		}
	]
};

// 获取个人信息
export const userinfo = {
	msg: "操作成功",
	code: 200,
	data: [
		{
			name: "System",
			path: "/system",
			hidden: false,
			redirect: "noRedirect",
			component: "Layout",
			alwaysShow: true,
			meta: { title: "系统管理", icon: "system", noCache: false, link: null },
			children: [
				{
					name: "User",
					path: "user",
					hidden: false,
					component: "system/user/index",
					meta: { title: "用户管理", icon: "user", noCache: false, link: null }
				},
				{
					name: "Role",
					path: "role",
					hidden: false,
					component: "system/role/index",
					meta: { title: "角色管理", icon: "peoples", noCache: false, link: null }
				},
				{
					name: "Menu",
					path: "menu",
					hidden: false,
					component: "system/menu/index",
					meta: { title: "菜单管理", icon: "tree-table", noCache: false, link: null }
				},
				{
					name: "Dict",
					path: "dict",
					hidden: false,
					component: "system/dict/index",
					meta: { title: "字典管理", icon: "dict", noCache: false, link: null }
				},
				{
					name: "Config",
					path: "config",
					hidden: false,
					component: "system/config/index",
					meta: { title: "参数设置", icon: "edit", noCache: false, link: null }
				}
			]
		}
	]
};
