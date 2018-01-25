import React from 'react'
import {
	NAV_PAGE_CHANGE,
} from '../actions'

import { createReducer } from './utils'

import DashboardIcon from 'material-ui-icons/Dashboard'
import AttachMoneyIcon from 'material-ui-icons/AttachMoney'
import ReceiptIcon from 'material-ui-icons/Receipt'
import PaymentIcon from 'material-ui-icons/Payment'
import AssessmentIcon from 'material-ui-icons/Assessment'
import AccountBalanceIcon from 'material-ui-icons/AccountBalance'
import ContactsIcon from 'material-ui-icons/Contacts'
import SettingsIcon from 'material-ui-icons/Settings'
import ViewModuleIcon from 'material-ui-icons/ViewModule'
import AddIcon from 'material-ui-icons/Add'
import ViewListIcon from 'material-ui-icons/ViewList'

const initialState = {
	pageTitleName: 'Dashboard',
	sideNav: [
		{
			title: 'Dashboard',
			url: '/',
			icon: <DashboardIcon />
		},
		{
			title: 'Invoice',
			icon: <AttachMoneyIcon />,
			children: [
				{
					title: 'List Invoices',
					url: '/invoice/list',
					icon: <ViewListIcon />
				},
				{
					title: 'New Invoice',
					url: '/invoice/new',
					icon: <AddIcon />
				},
				{
					title: 'Report',
					url: '/invoice/report',
				}
			]
		},
		{
			title: 'Bill',
			icon: <ReceiptIcon />,
			children: [
				{
					title: 'List Bills',
					url: '/bill/list',
					icon: <ViewListIcon />
				},
				{
					title: 'New Bill',
					url: '/bill/new',
					icon: <AddIcon />
				},
				{
					title: 'Report',
					url: '/bill/report',
				}
			]
		},
		{
			title: 'Payments',
			icon: <PaymentIcon />,
			url: '/payments'
		},
		{
			title: 'Report',
			icon: <AssessmentIcon />,
			children: [
				{
					title: 'Balance Sheet',
					url: '/report/balance-sheet',
				},
				{
					title: 'Profit Loss',
					url: '/report/profit-loss',
				},
				{
					title: 'Cash Flow',
					url: '/report/cash-flow',
				},
				{
					title: 'Trial Balance',
					url: '/report/trial-balance',
				},
			]
		},
		{
			title: 'Bank',
			icon: <AccountBalanceIcon />,
			children: [
				{
					title: 'List Banks',
					url: '/bank/list',
					icon: <ViewListIcon />
				},
				{
					title: 'New Bank',
					url: '/bank/new',
					icon: <AddIcon />
				},
			]
		},
		{
			title: 'Contact',
			icon: <ContactsIcon />,
			children: [
				{
					title: 'List Contact',
					url: '/contact/list',
					icon: <ViewListIcon />
				},
				{
					title: 'New Contact',
					url: '/contact/new',
					icon: <AddIcon />
				},
			]
		},
		{
			title: 'Inventory',
			icon: <ViewModuleIcon />,
			children: [
				{
					title: 'List Inventories',
					url: '/inventory/list',
					icon: <ViewListIcon />
				},
				{
					title: 'New Item',
					url: '/inventory/new',
					icon: <AddIcon />
				},
				{
					title: 'Adjust Inventory',
					url: '/inventory/adjust'
				},
			]
		},
		{
			title: 'Settings',
			icon: <SettingsIcon />,
			children: [
				{
					title: 'General',
					url: '/settings/general'
				},
				{
					title: 'User Management',
					url: '/settings/user-management'
				},
				{
					title: 'Profile',
					url: '/settings/profile'
				},
				{
					title: 'Lock System Date',
					url: '/settings/lock-system-date'
				},
			]
		},
	]
}

const handlers = {
	[NAV_PAGE_CHANGE]: (state, action) => ({
		...state,
		pageTitleName: action.title,
	}),
}

export default createReducer(initialState, handlers)
