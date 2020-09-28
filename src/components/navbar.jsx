import React, { Component } from 'react';

class NavBar extends Component {
	render() {
		const { totalCount } = this.props;
		return (
			<nav>
        <i className="fas fa-leaf"></i>
				<span>Habit Tracker</span>
				<span>{totalCount}</span>
			</nav>
		);
	}
}

export default NavBar;
