import React, {Component} from 'react';

class SingleTodo extends Component {
	constructor(){
		super();
	}

	render(){
		return(
			<h3><li className="mt-5 list-group-item text-left">{this.props.todo} <button className="btn btn-sm btn-danger pull-right" onClick={this.props.delete}>X</button></li></h3>
		)
	}
}

export default SingleTodo;