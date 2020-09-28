import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
	formRef = React.createRef();
	inputRef = React.createRef();

	onSubmit = (event) => {
		event.preventDefault();
		const name = this.inputRef.current.value;
		name && this.props.onAdd(name);
		this.formRef.current.reset();
	};

	render() {
		return (
			<form ref={this.formRef} className='add-form' onSubmit={this.onSubmit}>
				<input
					ref={this.inputRef}
					className='add-input'
					type='text'
					placeholder='new Habit'
				></input>
				<button className='add-button'>ADD</button>
			</form>
		);
	}
}

export default HabitAddForm;
