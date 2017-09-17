import React, {Component} from 'react';


class UpdateStudent extends Component {
	constructor() {
		super();
		this.state = {
			updatedStudentLocation: '',
		}
	}
	onInputChange(event){
		console.log('edit todo input has changed');
		this.setState({
			updatedStudentLocation: event.target.value,
		});
	}

	onFormSubmit(event) {
		event.preventDefault();
		console.log(this.state);
		console.log('edit submitted');
		this.props.onMoveStudent(this.state.updatedStudentLocation, this.props.student.id);
		this.setState({
			updatedStudentLocation: '',
		});

	}
	render() {
		return(
			<div className="UpdateStudent">
				<form
					onSubmit={event => this.onFormSubmit(event)}>
					<input
						onChange={event => this.onInputChange(event)}
						placeholder="update location"
						type="number"
						value={this.state.updatedStudentLocation}
						/>
					<button type="submit">update</button>
				</form>
			</div>
		)
	}
}

export default UpdateStudent;
