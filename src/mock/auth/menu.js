// 列表
export const list = {
	code: 200,
	data: [
		{
			id: 1,
			sort: 1,
			path: "/home/index",
			component: "/home/index",
			time: "2022-05-31 17:26:07",
			status: 1,
			parent: 0,
			menuType: 2,
			metaTitle: "首页",
			metaIcon: "HomeFilled",
			metaIsKeepAlive: true
		},
		{
			id: 2,
			sort: 1,
			path: "/menu/index",
			component: "/auth/menu/index",
			time: "2022-05-31 17:26:07",
			status: 1,
			parent: 0,
			menuType: 2,
			metaTitle: "菜单管理",
			metaIcon: "HomeFilled",
			metaIsKeepAlive: true
		},
		{
			id: 3,
			sort: 1,
			path: "/user/index",
			component: "/auth/user/index",
			time: "2022-05-31 17:26:07",
			status: 1,
			parent: 0,
			menuType: 1,
			metaTitle: "用户管理",
			metaIcon: "HomeFilled",
			metaIsKeepAlive: true
		},
		{
			id: 4,
			sort: 1,
			path: "/role/index",
			component: "/auth/role/index",
			time: "2022-05-31 17:26:07",
			status: 1,
			parent: 0,
			menuType: 1,
			metaTitle: "角色管理",
			metaIcon: "HomeFilled",
			metaIsKeepAlive: true
		}
	],
	msg: "成功"
};

// tree data
export const tree = {
	msg: "操作成功",
	code: 200,
	data: [
		{
			searchValue: null,
			createBy: null,
			createTime: "2022-05-31 17:26:07",
			updateBy: null,
			updateTime: null,
			remark: null,
			params: {},
			menuId: 1,
			menuName: "系统管理",
			parentName: null,
			parentId: 0,
			orderNum: 1,
			apiPath: "system",
			component: null,
			apiQuery: "",
			isFrame: "1",
			isCache: "0",
			menuType: "M",
			showState: "0",
			state: "0",
			perms: "",
			icon: "system",
			children: []
		},
		{
			searchValue: null,
			createBy: null,
			createTime: "2022-05-31 17:26:07",
			updateBy: null,
			updateTime: null,
			remark: null,
			params: {},
			menuId: 2,
			menuName: "系统监控",
			parentName: null,
			parentId: 0,
			orderNum: 2,
			apiPath: "monitor",
			component: null,
			apiQuery: "",
			isFrame: "1",
			isCache: "0",
			menuType: "M",
			showState: "0",
			state: "0",
			perms: "",
			icon: "monitor",
			children: []
		},
		{
			searchValue: null,
			createBy: null,
			createTime: "2022-06-07 00:03:36",
			updateBy: null,
			updateTime: null,
			remark: null,
			params: {},
			menuId: 2000,
			menuName: "市值管理",
			parentName: null,
			parentId: 0,
			orderNum: 3,
			apiPath: "making",
			component: null,
			apiQuery: null,
			isFrame: "1",
			isCache: "0",
			menuType: "M",
			showState: "0",
			state: "0",
			perms: "",
			icon: "example",
			children: []
		},
		{
			searchValue: null,
			createBy: null,
			createTime: "2022-06-13 11:01:38",
			updateBy: null,
			updateTime: null,
			remark: null,
			params: {},
			menuId: 2007,
			menuName: "dex-making",
			parentName: null,
			parentId: 0,
			orderNum: 4,
			apiPath: "dex-manage",
			component: null,
			apiQuery: null,
			isFrame: "1",
			isCache: "0",
			menuType: "M",
			showState: "0",
			state: "0",
			perms: "",
			icon: "checkbox",
			children: []
		},
		{
			searchValue: null,
			createBy: null,
			createTime: "2022-05-31 17:26:07",
			updateBy: null,
			updateTime: null,
			remark: null,
			params: {},
			menuId: 100,
			menuName: "用户管理",
			parentName: null,
			parentId: 1,
			orderNum: 1,
			apiPath: "user",
			component: "system/user/index",
			apiQuery: "",
			isFrame: "1",
			isCache: "0",
			menuType: "C",
			showState: "0",
			state: "0",
			perms: "system:user:list",
			icon: "user",
			children: []
		},
		{
			searchValue: null,
			createBy: null,
			createTime: "2022-05-31 17:26:07",
			updateBy: null,
			updateTime: null,
			remark: null,
			params: {},
			menuId: 101,
			menuName: "角色管理",
			parentName: null,
			parentId: 1,
			orderNum: 2,
			apiPath: "role",
			component: "system/role/index",
			apiQuery: "",
			isFrame: "1",
			isCache: "0",
			menuType: "C",
			showState: "0",
			state: "0",
			perms: "system:role:list",
			icon: "peoples",
			children: []
		},
		{
			searchValue: null,
			createBy: null,
			createTime: "2022-05-31 17:26:07",
			updateBy: null,
			updateTime: null,
			remark: null,
			params: {},
			menuId: 102,
			menuName: "菜单管理",
			parentName: null,
			parentId: 1,
			orderNum: 3,
			apiPath: "menu",
			component: "system/menu/index",
			apiQuery: "",
			isFrame: "1",
			isCache: "0",
			menuType: "C",
			showState: "0",
			state: "0",
			perms: "system:menu:list",
			icon: "tree-table",
			children: []
		},
		{
			searchValue: null,
			createBy: null,
			createTime: "2022-05-31 17:26:07",
			updateBy: null,
			updateTime: null,
			remark: null,
			params: {},
			menuId: 105,
			menuName: "字典管理",
			parentName: null,
			parentId: 1,
			orderNum: 6,
			apiPath: "dict",
			component: "system/dict/index",
			apiQuery: "",
			isFrame: "1",
			isCache: "0",
			menuType: "C",
			showState: "0",
			state: "0",
			perms: "system:dict:list",
			icon: "dict",
			children: []
		},
		{
			searchValue: null,
			createBy: null,
			createTime: "2022-05-31 17:26:07",
			updateBy: null,
			updateTime: null,
			remark: null,
			params: {},
			menuId: 106,
			menuName: "参数设置",
			parentName: null,
			parentId: 1,
			orderNum: 7,
			apiPath: "config",
			component: "system/config/index",
			apiQuery: "",
			isFrame: "1",
			isCache: "0",
			menuType: "C",
			showState: "0",
			state: "0",
			perms: "system:config:list",
			icon: "edit",
			children: []
		},
		{
			searchValue: null,
			createBy: null,
			createTime: "2022-05-31 17:26:07",
			updateBy: null,
			updateTime: null,
			remark: null,
			params: {},
			menuId: 109,
			menuName: "在线用户",
			parentName: null,
			parentId: 2,
			orderNum: 1,
			apiPath: "online",
			component: "monitor/online/index",
			apiQuery: "",
			isFrame: "1",
			isCache: "0",
			menuType: "C",
			showState: "0",
			state: "1",
			perms: "monitor:online:list",
			icon: "online",
			children: []
		},
		{
			searchValue: null,
			createBy: null,
			createTime: "2022-05-31 17:26:07",
			updateBy: null,
			updateTime: null,
			remark: null,
			params: {},
			menuId: 112,
			menuName: "服务监控",
			parentName: null,
			parentId: 2,
			orderNum: 4,
			apiPath: "server",
			component: "monitor/server/index",
			apiQuery: "",
			isFrame: "1",
			isCache: "0",
			menuType: "C",
			showState: "0",
			state: "0",
			perms: "monitor:server:list",
			icon: "server",
			children: []
		},
		{
			searchValue: null,
			createBy: null,
			createTime: "2022-05-31 17:26:07",
			updateBy: null,
			updateTime: null,
			remark: null,
			params: {},
			menuId: 108,
			menuName: "日志管理",
			parentName: null,
			parentId: 2,
			orderNum: 9,
			apiPath: "log",
			component: "",
			apiQuery: "",
			isFrame: "1",
			isCache: "0",
			menuType: "M",
			showState: "0",
			state: "0",
			perms: "",
			icon: "log",
			children: []
		},
		{
			searchValue: null,
			createBy: null,
			createTime: "2022-05-31 17:26:08",
			updateBy: null,
			updateTime: null,
			remark: null,
			params: {},
			menuId: 1001,
			menuName: "用户查询",
			parentName: null,
			parentId: 100,
			orderNum: 1,
			apiPath: "",
			component: "",
			apiQuery: "",
			isFrame: "1",
			isCache: "0",
			menuType: "F",
			showState: "0",
			state: "0",
			perms: "system:user:query",
			icon: "#",
			children: []
		},
		{
			searchValue: null,
			createBy: null,
			createTime: "2022-05-31 17:26:08",
			updateBy: null,
			updateTime: null,
			remark: null,
			params: {},
			menuId: 1002,
			menuName: "用户新增",
			parentName: null,
			parentId: 100,
			orderNum: 2,
			apiPath: "",
			component: "",
			apiQuery: "",
			isFrame: "1",
			isCache: "0",
			menuType: "F",
			showState: "0",
			state: "0",
			perms: "system:user:add",
			icon: "#",
			children: []
		},
		{
			searchValue: null,
			createBy: null,
			createTime: "2022-05-31 17:26:08",
			updateBy: null,
			updateTime: null,
			remark: null,
			params: {},
			menuId: 1003,
			menuName: "用户修改",
			parentName: null,
			parentId: 100,
			orderNum: 3,
			apiPath: "",
			component: "",
			apiQuery: "",
			isFrame: "1",
			isCache: "0",
			menuType: "F",
			showState: "0",
			state: "0",
			perms: "system:user:edit",
			icon: "#",
			children: []
		},
		{
			searchValue: null,
			createBy: null,
			createTime: "2022-05-31 17:26:08",
			updateBy: null,
			updateTime: null,
			remark: null,
			params: {},
			menuId: 1004,
			menuName: "用户删除",
			parentName: null,
			parentId: 100,
			orderNum: 4,
			apiPath: "",
			component: "",
			apiQuery: "",
			isFrame: "1",
			isCache: "0",
			menuType: "F",
			showState: "0",
			state: "0",
			perms: "system:user:remove",
			icon: "#",
			children: []
		},
		{
			searchValue: null,
			createBy: null,
			createTime: "2022-05-31 17:26:08",
			updateBy: null,
			updateTime: null,
			remark: null,
			params: {},
			menuId: 1005,
			menuName: "用户导出",
			parentName: null,
			parentId: 100,
			orderNum: 5,
			apiPath: "",
			component: "",
			apiQuery: "",
			isFrame: "1",
			isCache: "0",
			menuType: "F",
			showState: "0",
			state: "0",
			perms: "system:user:export",
			icon: "#",
			children: []
		},
		{
			searchValue: null,
			createBy: null,
			createTime: "2022-05-31 17:26:08",
			updateBy: null,
			updateTime: null,
			remark: null,
			params: {},
			menuId: 1006,
			menuName: "用户导入",
			parentName: null,
			parentId: 100,
			orderNum: 6,
			apiPath: "",
			component: "",
			apiQuery: "",
			isFrame: "1",
			isCache: "0",
			menuType: "F",
			showState: "0",
			state: "0",
			perms: "system:user:import",
			icon: "#",
			children: []
		}
	]
};
