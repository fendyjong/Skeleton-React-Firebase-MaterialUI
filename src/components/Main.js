import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { initialize } from '../actions/session'
import store from '../store'

import Header from './Header'
import SideNav from './SideNav'

import Login from '../screens/Login'
import Invoice from '../screens/Invoice'

store.dispatch(initialize(window.location.pathname))

class Main extends Component {
	render() {
		const { session } = this.props
		const { pathname } = window.location

		const showNav = !pathname.includes('/login') && session.email

		return (
			<BrowserRouter>
				<div>
					{showNav ? <Header /> : ''}
					<div className='content-flex'>
						{showNav ? <SideNav /> : ''}
						<div className={showNav ? 'content' : ''}>
							<Switch>
								<Route exact path='/' />
								<Route path='/invoice/list' component={Invoice} />
								<Route path='/invoice/new' />
								<Route path='/invoice/update/:key' />
								<Route path='/bill/list' />
								<Route path='/bill/new' />
								<Route path='/bill/update' />
								<Route path='/payment' />
								<Route path='/report' />
								<Route path='/report/balance-sheet' />
								<Route path='/report/profit-loss' />
								<Route path='/report/cash-flow' />
								<Route path='/report/trial-balance' />
								<Route path='/bank/list' />
								<Route path='/bank/new' />
								<Route path='/bank/update' />
								<Route path='/contact/list' />
								<Route path='/contact/new' />
								<Route path='/contact/update' />
								<Route path='/inventory/list' />
								<Route path='/inventory/new' />
								<Route path='/inventory/update' />
								<Route path='/inventory/adjust' />
								<Route path='/settings/general' />
								<Route path='/settings/user-management' />
								<Route path='/settings/profile' />
								<Route path='/settings/lock-system-date' />
								<Route exact path='/login' component={Login} />
							</Switch>
						</div>
					</div>
				</div>
			</BrowserRouter>
		)
	}
}

Main.propTypes = {
	session: PropTypes.shape({
		email: PropTypes.string,
		name: PropTypes.string,
	}).isRequired
}

const mapStateToProps = ({ session }) => ({ session })

export default connect(mapStateToProps)(Main)
