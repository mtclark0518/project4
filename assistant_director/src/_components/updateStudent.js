import React, {Component} from 'react';


class UpdateStudent extends Component {
	constructor() {
		super();
		this.state = {
			value: " ",
		}
	}
	
	componentWillReceiveProps(newProps) {
  		if (this.state.name !== newProps.name) {
    	this.setState({name: newProps.name});
  		}
	}
	onInputChange(event){
		console.log('input has changed');
		this.setState({
			value: event.target.value,
		});
	}

	onFormSubmit(event) {
        event.preventDefault();
		console.log('edit submitted');
		console.log(this.props.updating)
		this.props.onMoveStudent(this.state.value, this.props.student.id);
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
