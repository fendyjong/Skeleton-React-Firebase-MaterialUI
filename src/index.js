import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Reboot from 'material-ui/Reboot'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import red from 'material-ui/colors/red'
import blue from 'material-ui/colors/blue'

import './index.css'
import Main from './components/Main'
import registerServiceWorker from './registerServiceWorker'

import store from './store'

const theme = createMuiTheme({
	palette: {
		primary: red, // Purple and green play nicely together.
		secondary: blue,
		white: '#FFF',
		error: red,
	},
})

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<div>
				<Reboot />
				<Main />
			</div>
		</MuiThemeProvider>
	</Provider>
	, document.getElementById('root')
)
registerServiceWorker()
