import { SESSION_LOAD, SESSION_LOGIN, SESSION_LOGOUT } from '../actions'
import { firebase, authProvider, fire } from '../firebaseApp'

export const LOGIN_EMAIL = 'LOGIN_EMAIL'
export const LOGIN_GOOGLE = 'LOGIN_GOOGLE'
export const LOGIN_FACEBOOK = 'LOGIN_FACEBOOK'
export const LOGIN_TWITTER = 'LOGIN_TWITTER'

export function initialize(path) {
	return async (dispatch) => {
		await fire.auth().onAuthStateChanged(async user => {
			// The signed-in user info.
			if (user) {
				const { email, name } = await user
				dispatch({
					type: SESSION_LOAD, session: { email, name },
				})
				if (path.includes('/login')) {
					window.location = '/'
				}
			} else if (!path.includes('/login')) {
				window.location = '/login'
			}
		})
	}
}

export function login(provider = LOGIN_EMAIL, email = '', password = '') {
	// TODO Fix Login
	return (dispatch) => {
		switch (provider) {
			case LOGIN_GOOGLE:
				fire.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
					.then(() => {
						fire.auth().signInWithRedirect(authProvider.google)
					})
				break
			case LOGIN_FACEBOOK:
				fire.auth().setPersistence(fire.auth.Auth.Persistence.SESSION)
					.then(() => {
						fire.auth().signInWithRedirect(authProvider.facebook)
					})
				break
			case LOGIN_TWITTER:
				fire.auth().setPersistence(fire.auth.Auth.Persistence.SESSION)
					.then(() => {
						fire.auth().signInWithRedirect(authProvider.twitter)
					})
				break
			default:
				fire.auth().signInWithEmailAndPassword(email, password)
					.then((user) => {
						console.log(user)
					})
					.catch((error) => {
						console.log(error)
					})
				dispatch({ type: SESSION_LOGIN })
		}
	}
}

export function logout() {
	return (dispatch) => {
		fire.auth().signOut()
			.then(() => {
				dispatch({ type: SESSION_LOGOUT })
				window.location.href = '/login' // reload fully
			})
			.catch((error) => {
				console.log(error)
			})
	}
}
