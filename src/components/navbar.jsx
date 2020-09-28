import React, { Component } from 'react';

class NavBar extends Component {
	render() {
		const { totalCount } = this.props;
		return (
			<nav className='navbar'>
				<i className='navbar-logo fas fa-leaf'></i>
				<span>Habit Tracker</span>
				<span className='navbar-count'>{totalCount}</span>
			</nav>
		);
	}
}

export default NavBar;
