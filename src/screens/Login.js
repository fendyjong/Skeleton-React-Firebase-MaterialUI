import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { login, LOGIN_FACEBOOK, LOGIN_GOOGLE, LOGIN_TWITTER } from '../actions/session'

import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: ''
		}
	}

	render() {
		const { login } = this.props

		return (
			<div className='login'>
				<Grid
					container
					alignItems='center'
					direction='column'
					justify='center'>
					<Grid item xs={12}>
						<div className='logo-container'>
							<img className='logo' src='/images/logo-white-flat-bg-none-120.png' alt='zeven.io logo' />
							<Typography type='headline'>Business</Typography>
						</div>
						<Paper>
							<Grid
								container
								direction='column'
								className='form-container'>
								<Button
									raised
									color='primary'
									onClick={() => login(LOGIN_GOOGLE)}>
									Sign In with Google
								</Button>
								<Button
									raised
									color='primary'
									className='spacing-8'
									onClick={() => login(LOGIN_FACEBOOK)}>
									Sign In with Facebook
								</Button>
								<Button
									raised
									color='primary'
									className='spacing-8'
									onClick={() => login(LOGIN_TWITTER)}>
									Sign In with Twitter
								</Button>
							</Grid>
							<Divider />
							<Grid
								container
								direction='column'
								className='form-container'>
								<TextField
									label='Email'
									type='email' />
								<TextField
									label='Password'
									type='password'
									className='form-fields spacing-8' />
								<Button
									raised
									color='primary'
									className='spacing-24'>
									Sign In
								</Button>
							</Grid>
						</Paper>
					</Grid>
				</Grid>
			</div>
		)
	}
}

Login.propTypes = {
	login: PropTypes.func.isRequired
}

export default connect(
	null,
	{
		login
	}
)(Login)
