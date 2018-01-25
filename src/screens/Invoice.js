import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { navPageChange } from '../actions/nav'

class Invoice extends Component {
	constructor(props) {
		super(props)
		this.props.navPageChange('Invoice')
	}

	render() {
		return (
			<div>Invoice</div>
		)
	}
}

Invoice.propTypes = {
	navPageChange: PropTypes.func.isRequired
}

export default connect(null, { navPageChange })(Invoice)
