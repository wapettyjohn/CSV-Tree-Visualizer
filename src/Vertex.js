import React from 'react';

export default class Vertex extends React.Component {
	render() {
		return (
			<div className="vertex">{this.props.children}</div>
		);
	}
}
