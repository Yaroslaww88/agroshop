import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import { RouteWithSubRoutes } from './utils/myRoutes'

import IndexRoutesClient from "./Client/client_IndexRoutes"
import client_MainPage from "./Client/client_Main_Page"
import client_AboutShopPage from "./Client/client_AboutShop_Page"
import client_ItemPage from "./Client/client_Item_Page"

import IndexRoutesAdmin from "./Admin/admin_IndexRoutes"
import admin_MainPage from "./Admin/admin_Main_Page"
import admin_LoginPage from "./Admin/admin_Login_Page"
import admin_EditProductPage from "./Admin/admin_EditProduct_Page"

import NotFoundPage from "./NotFoundPage";

const routes = [
	{
		path: "/admin",
		component: IndexRoutesAdmin,
		routes: [
			{
				path: "/admin/login",
				component: admin_LoginPage
			},
			{
				path: "/admin/edit/:id",
				private: true,
				redirect: "/admin/login",
				component: admin_EditProductPage
			},
			{
				path: "/admin",
				private: true,
				redirect: "/admin/login",
				component: admin_MainPage
			},
		]
	},
	{
		path: "/",
		component: IndexRoutesClient,
		routes: [
			{
				path: "/about",
				component: client_AboutShopPage
			},
			{
				path: "/products/:id",
				component: client_ItemPage
			},
			{
				path: "/",
				component: client_MainPage
			},
		]
	},
	{
		path: "*",
		component: NotFoundPage
	}
];

const App = () => {
	return (
		<CookiesProvider>
			<BrowserRouter>
				<Switch>
					{routes.map((route, i) => (
						<RouteWithSubRoutes key={i} {...route} />
					))}
				</Switch>
			</BrowserRouter>
		</CookiesProvider>
	);
}

export default App;
