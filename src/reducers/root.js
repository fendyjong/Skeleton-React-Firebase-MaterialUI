import { combineReducers } from 'redux'

import session from './session'
import nav from './nav'

export default combineReducers({
	session,
	nav,
})
