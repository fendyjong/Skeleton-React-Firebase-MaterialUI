import {
	NAV_PAGE_CHANGE,
} from './index'

export function navPageChange(title) {
	return { type: NAV_PAGE_CHANGE, title }
}
