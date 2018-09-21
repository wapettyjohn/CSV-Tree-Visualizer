import React from 'react';

export default class Form extends React.Component {
	state = {
		data: '',
		sidebarDisplay: 'hidden'
	};

	update = (event) => {
    this.props.onUpdate(event.target.value);
    this.setState({data: event.target.value});
  };

	submit = (event) => {
		event.preventDefault();
		this.props.onSubmit();
	}

	render() {
		return (
			<form className="form">
				<textarea className="textarea"
					placeholder='Comma separated values...'
					value={this.state.data}
					onChange={this.update}
				>
				</textarea>
				<button onClick={this.submit}>Submit</button>
			</form>
		);
	}
}
