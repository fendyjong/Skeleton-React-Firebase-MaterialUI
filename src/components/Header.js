import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

class Header extends Component {
	render() {
		return (
			<div>
				<AppBar position='static'>
					<Toolbar>
						<IconButton>
							<MenuIcon />
						</IconButton>
						<Typography type='title' className='flex'>Title</Typography>
						<Button>User</Button>
					</Toolbar>
				</AppBar>
			</div>
		)
	}
}

Header.props = {
	history: PropTypes.object.isRequired
}

export default withRouter(connect()(Header))
