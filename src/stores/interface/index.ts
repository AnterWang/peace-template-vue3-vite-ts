/* themeConfigProp */
export interface ThemeConfigProps {
	layout: string;
	primary: string;
	isDark: boolean;
	isGrey: boolean;
	isCollapse: boolean;
	isWeak: boolean;
	tabs: boolean;
	tabsIcon: boolean;
	footer: boolean;
	maximize: boolean;
}

/* GlobalState */
export interface GlobalState {
	token: string;
	userInfo: any;
	assemblySize: string;
	themeConfig: ThemeConfigProps;
}

/* tabsMenuProps */
export interface TabsMenuProps {
	icon: string;
	title: string;
	path: string;
	name: string | undefined;
	close: boolean;
}

/* TabsState */
export interface TabsState {
	tabsMenuList: TabsMenuProps[];
}

/* AuthState */
export interface AuthState {
	routeName: string;
	authButtonList: {
		[key: string]: string[];
	};
	authMenuList: Menu.MenuOptions[];
}

/* keepAliveState */
export interface keepAliveState {
	keepLiveName: string[];
}
