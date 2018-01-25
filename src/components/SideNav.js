import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import shortid from 'shortid'

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Collapse from 'material-ui/transitions/Collapse'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'

import ExpandLessIcon from 'material-ui-icons/ExpandLess'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'

class SideNav extends Component {
	constructor(props) {
		super(props)
		this.state = {
			expandInvoice: false,
			expandBill: false,
			expandReport: false,
			expandBank: false,
			expandContact: false,
			expandInventory: false,
			expandSettings: false,
		}
	}

	render() {
		const { sideNav } = this.props

		let renderNav = []
		for (const z of sideNav) {
			if (z.url) {
				renderNav.push(
					<ListItem key={shortid.generate()}
										button
										component={Link}
										to={z.url}>
						<ListItemIcon>{z.icon}</ListItemIcon>
						<ListItemText inset primary={z.title} />
					</ListItem>
				)
			} else {
				renderNav.push(
					<ListItem key={shortid.generate()}
										button
										onClick={() => this.setState({ ['expand' + z.title]: !this.state['expand' + z.title] })}>
						<ListItemIcon>{z.icon}</ListItemIcon>
						<ListItemText inset primary={z.title} />
						{this.state['expand' + z.title] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
					</ListItem>
				)
				renderNav.push(
					<Collapse key={shortid.generate()}
										component='li'
										in={this.state['expand' + z.title]}
										timeout='auto'
										unmountOnExit>
						<List disablePadding>
							{z.children.map(y => (
								<ListItem key={shortid.generate()}
													button
													className='nested'
													component={Link}
													to={y.url}>
									<ListItemText inset primary={y.title} />
									{y.icon}
								</ListItem>
							))}
							<Divider />
						</List>
					</Collapse>
				)
			}
		}

		return (
			<Paper className='side-nav'>
				<List>
					{renderNav}
				</List>
			</Paper>
		)
	}
}

SideNav.propTypes = {
	history: PropTypes.object.isRequired,
	sideNav: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			url: PropTypes.string,
			icon: PropTypes.element.isRequired,
			children: PropTypes.arrayOf(
				PropTypes.shape({
					title: PropTypes.string.isRequired,
					url: PropTypes.string.isRequired,
					icon: PropTypes.element
				}))
		}))
}

const mapStateToProps = ({ nav: { sideNav } }) => ({
	sideNav
})


export default withRouter(connect(mapStateToProps)(SideNav))
