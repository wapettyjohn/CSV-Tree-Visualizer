import React from 'react';

export default class Form extends React.Component {
	state = {
		data: '',
	}

	onSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
	}

	render() {
		return (
			<form>
				<textarea
					placeholder='Comma separated values...'
					value={this.state.firstName}
					onChange={event => this.setState({data: event.target.value})}>
				</textarea>
				<br />
				<button onClick={(event) => this.onSubmit(event)}>Submit</button>
			</form>
		);
	}
}
