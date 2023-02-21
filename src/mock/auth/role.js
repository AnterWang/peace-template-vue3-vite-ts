// 列表
export const list = {
	total: 3,
	rows: [
		{
			searchValue: null,
			createBy: null,
			createTime: "2022-01-21 10:20:58",
			updateBy: null,
			updateTime: null,
			remark: "超级管理员",
			params: {},
			roleId: 1,
			roleName: "超级管理员",
			roleKey: "admin",
			roleSort: "1",
			dataScope: "1",
			menuCheckStrictly: true,
			state: "0",
			delFlag: "0",
			flag: false,
			menuIds: null,
			deptIds: null,
			admin: true
		},
		{
			searchValue: null,
			createBy: null,
			createTime: "2022-06-15 10:27:08",
			updateBy: null,
			updateTime: null,
			remark: "222",
			params: {},
			roleId: 105,
			roleName: "超级大权限",
			roleKey: "1",
			roleSort: "1",
			dataScope: "1",
			menuCheckStrictly: false,
			state: "0",
			delFlag: "0",
			flag: false,
			menuIds: null,
			deptIds: null,
			admin: false
		},
		{
			searchValue: null,
			createBy: null,
			createTime: "2022-06-14 09:04:36",
			updateBy: null,
			updateTime: null,
			remark: "111",
			params: {},
			roleId: 103,
			roleName: "交易员",
			roleKey: "trade",
			roleSort: "10",
			dataScope: "1",
			menuCheckStrictly: true,
			state: "0",
			delFlag: "0",
			flag: false,
			menuIds: null,
			deptIds: null,
			admin: false
		}
	],
	code: 200,
	msg: "查询成功"
};

// 新增
export const addAndEdit = {
	code: 200,
	msg: "成功"
};

// 获取权限树和已勾选
export const roleTreeEdit = {
	msg: "操作成功",
	code: 200,
	menus: [
		{
			id: 1,
			label: "系统管理",
			children: [
				{
					id: 100,
					label: "用户管理",
					children: [
						{ id: 1001, label: "用户查询" },
						{ id: 1002, label: "用户新增" },
						{ id: 1003, label: "用户修改" },
						{ id: 1004, label: "用户删除" },
						{ id: 1005, label: "用户导出" },
						{ id: 1006, label: "用户导入" },
						{ id: 1007, label: "重置密码" }
					]
				},
				{
					id: 101,
					label: "角色管理",
					children: [
						{ id: 1008, label: "角色查询" },
						{ id: 1009, label: "角色新增" },
						{ id: 1010, label: "角色修改" },
						{ id: 1011, label: "角色删除" },
						{ id: 1012, label: "角色导出" }
					]
				},
				{
					id: 102,
					label: "菜单管理",
					children: [
						{ id: 1013, label: "菜单查询" },
						{ id: 1014, label: "菜单新增" },
						{ id: 1015, label: "菜单修改" },
						{ id: 1016, label: "菜单删除" }
					]
				},
				{
					id: 105,
					label: "字典管理",
					children: [
						{ id: 1026, label: "字典查询" },
						{ id: 1027, label: "字典新增" },
						{ id: 1028, label: "字典修改" },
						{ id: 1029, label: "字典删除" },
						{ id: 1030, label: "字典导出" }
					]
				},
				{
					id: 106,
					label: "参数设置",
					children: [
						{ id: 1031, label: "参数查询" },
						{ id: 1032, label: "参数新增" },
						{ id: 1033, label: "参数修改" },
						{ id: 1034, label: "参数删除" },
						{ id: 1035, label: "参数导出" }
					]
				}
			]
		},
		{
			id: 2,
			label: "系统监控",
			children: [
				{
					id: 109,
					label: "在线用户",
					children: [
						{ id: 1046, label: "在线查询" },
						{ id: 1047, label: "批量强退" },
						{ id: 1048, label: "单条强退" }
					]
				},
				{ id: 112, label: "服务监控" },
				{
					id: 108,
					label: "日志管理",
					children: [
						{
							id: 500,
							label: "操作日志",
							children: [
								{ id: 1040, label: "操作查询" },
								{ id: 1041, label: "操作删除" },
								{ id: 1042, label: "日志导出" }
							]
						},
						{
							id: 501,
							label: "登录日志",
							children: [
								{ id: 1043, label: "登录查询" },
								{ id: 1044, label: "登录删除" },
								{ id: 1045, label: "日志导出" }
							]
						}
					]
				}
			]
		},
		{
			id: 2000,
			label: "市值管理",
			children: [
				{ id: 2078, label: "任务管理" },
				{
					id: 2079,
					label: "关联任务",
					children: [
						{ id: 2081, label: "新增" },
						{ id: 2082, label: "修改" },
						{ id: 2083, label: "删除" },
						{ id: 2084, label: "快速检测" }
					]
				},
				{ id: 2087, label: "策略快照归档" },
				{
					id: 2001,
					label: "配置管理",
					children: [
						{ id: 2070, label: "任务配置" },
						{ id: 2012, label: "新增配置" },
						{ id: 2013, label: "删除配置" },
						{ id: 2014, label: "停用/启用配置" },
						{ id: 2015, label: "编辑配置" },
						{ id: 2037, label: "导入" },
						{ id: 2038, label: "导出" }
					]
				},
				{ id: 2029, label: "新增配置" },
				{ id: 2099, label: "账户交易对", children: [{ id: 2101, label: "新增币对" }] },
				{ id: 2106, label: "账户管理" },
				{
					id: 2003,
					label: "账号管理",
					children: [
						{ id: 2035, label: "新增账号" },
						{ id: 2036, label: "修改状态" },
						{ id: 2039, label: "查看走势" },
						{ id: 2040, label: "下单" }
					]
				},
				{
					id: 2019,
					label: "订单管理",
					children: [
						{ id: 2043, label: "买入/卖出" },
						{ id: 2044, label: "撤单" }
					]
				},
				{
					id: 2085,
					label: "策略快照",
					children: [
						{ id: 2088, label: "列表" },
						{ id: 2089, label: "新增" },
						{ id: 2090, label: "编辑" },
						{ id: 2091, label: "删除" }
					]
				},
				{ id: 2092, label: "Abs账号管理" },
				{
					id: 2094,
					label: "成本分析",
					children: [
						{ id: 2095, label: "当日成本汇总" },
						{ id: 2096, label: "当日成本明细" },
						{ id: 2097, label: "历史成本" },
						{ id: 2100, label: "余额快照", children: [{ id: 2107, label: "查询" }] },
						{ id: 2102, label: "币种余额" },
						{ id: 2103, label: "历史余额" },
						{ id: 2105, label: "apikey余额比较" },
						{ id: 2104, label: "余额比较" }
					]
				},
				{ id: 2093, label: "币对配置" },
				{ id: 2108, label: "模板管理" }
			]
		},
		{
			id: 2007,
			label: "dex-making",
			children: [
				{
					id: 2020,
					label: "Dex管理",
					children: [
						{ id: 2045, label: "新增" },
						{ id: 2046, label: "修改" },
						{ id: 2047, label: "删除" }
					]
				},
				{
					id: 2021,
					label: "币种管理",
					children: [
						{ id: 2048, label: "新增" },
						{ id: 2049, label: "修改" },
						{ id: 2050, label: "删除" }
					]
				},
				{
					id: 2022,
					label: "币对管理",
					children: [
						{ id: 2051, label: "新增" },
						{ id: 2052, label: "修改" },
						{ id: 2053, label: "删除" }
					]
				},
				{
					id: 2023,
					label: "地址管理",
					children: [
						{ id: 2054, label: "新增" },
						{ id: 2055, label: "删除" }
					]
				},
				{
					id: 2028,
					label: "策略管理",
					children: [
						{ id: 2056, label: "新增" },
						{ id: 2057, label: "修改" },
						{ id: 2058, label: "删除" },
						{ id: 2059, label: "配置" },
						{ id: 2060, label: "地址管理" },
						{ id: 2098, label: "手动执行" }
					]
				},
				{ id: 2067, label: "Swap" },
				{ id: 2068, label: "Transfer" },
				{ id: 2069, label: "CoinWrapper" },
				{ id: 2024, label: "策略配置管理" },
				{ id: 2025, label: "策略地址管理" },
				{ id: 2026, label: "交易记录" },
				{ id: 2027, label: "地址余额" },
				{
					id: 2071,
					label: "风控",
					children: [
						{ id: 2072, label: "新增" },
						{ id: 2073, label: "修改" },
						{ id: 2074, label: "删除" }
					]
				},
				{ id: 2080, label: "multiTransfer" }
			]
		}
	],
	checkedKeys: []
};
