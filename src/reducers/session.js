import {
	SESSION_LOAD, SESSION_LOGIN, SESSION_LOGOUT
} from '../actions'
import { createReducer } from './utils'

const initialState = {}

const handlers = {
	[SESSION_LOAD]: (state, action) => action.session,
	[SESSION_LOGIN]: state => ({ state }),
	[SESSION_LOGOUT]: () => ({})
}

export default createReducer(initialState, handlers)
