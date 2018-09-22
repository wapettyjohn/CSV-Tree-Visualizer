import React from 'react';

export default class Form extends React.Component {
	state = {
		data: '',
	};

	update = (e) => {
    this.props.onUpdate(e.target.value);
    this.setState({data: e.target.value});
  };

	submit = (e) => {
		e.preventDefault();
		this.props.onSubmit();
	}

	render() {
		return (
			<form className="form">
				<textarea className="textarea"
					placeholder='Enter comma-separated values...'
					value={this.state.data}
					onChange={this.update}>
				</textarea>

				<button onClick={this.submit}>Submit</button>
			</form>
		);
	}
}
