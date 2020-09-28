import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
	render() {
		return (
			<div className='habits'>
				<HabitAddForm onAdd={this.handleAdd}></HabitAddForm>

				<ul>
					{this.props.habits.map((habit) => (
						<Habit
							key={habit.id}
							habit={habit}
							onIncrement={this.handleIncrement}
							onDecrement={this.handleDecrement}
							onDelete={this.handleDelete}
						></Habit>
					))}
				</ul>
				<button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
			</div>
		);
	}
}

export default Habits;
