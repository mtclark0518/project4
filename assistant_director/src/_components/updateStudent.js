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
		console.log(event)
        event.preventDefault();
		console.log('edit submitted');
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
						{/* <button 
							onClick={event => this.onFormSubmit(event)}
							className="" type="submit" value='1'>G</button>
						<button className="" type="submit" value='2'>S</button>
						<button className="" type="submit" value='3'>H</button>
						<button className="" type="submit" value='4'>R</button> */}

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
