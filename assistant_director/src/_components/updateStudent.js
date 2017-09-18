import React, {Component} from 'react';


class UpdateStudent extends Component {
	constructor() {
		super();
		this.state = {
			value: " ",
		}
	}
	onInputChange(event){
		console.log('edit todo input has changed');
		this.setState({
			value: event.target.value,
		});
	}

	onFormSubmit(event) {
        event.preventDefault();
        console.log(this.props.student.firstName)
        console.log(this.state.value);
		console.log('edit submitted');
		this.props.onMoveStudent(this.state.value, this.props.student.pin);
		this.setState({
			value: '',
		});

	}
	render() {
		return(
			<div className="UpdateStudent">
				<form onSubmit={event => this.onFormSubmit(event)}>
                    <div>
                        <input
                            onChange={event => this.onInputChange(event)}
                            placeholder={this.props.student.location}
                            type="number"
                            value={this.state.value}
                            />
                        <button type="submit">update</button>
                    </div>
				</form>
			</div>
		)
	}
}

export default UpdateStudent;
