import React from 'react';
import Node from './Node.js';

export default class Form extends React.Component {
	state = {data: ''};

	onSubmit = (event) => {
		event.preventDefault();
		const rows = this.state.data.split("\n");
		let nodes = [];
		for (let row of rows) {
			const cols = row.split(",");
			const parentId = parseInt(cols[3]);
			const newNode = new Node({
				id: parseInt(cols[0]),
				color: cols[1],
				shape: cols[2],
				children: [],
			});
			nodes.push(newNode);

			const newNodeId = newNode.props.id;
			const parent = nodes.filter(
				node => node.props.id === parentId
			)[0]; // get parent node
			const parentsChildren = parent.props.children;
			parentsChildren.push(newNodeId); // push id to array of parent's children
		}

		// root is unique element with self as child node (self-loop)
		const root = nodes.filter(node => node.props.children[node.props.id])[0];
		console.log(nodes);
	}

	render() {
		return (
			<form>
				<textarea
					placeholder='Comma separated values...'
					value={this.state.data}
					onChange={(event) => this.setState({data: event.target.value})}>
				</textarea>
				<br />
				<button onClick={(event) => this.onSubmit(event)}>Submit</button>
			</form>
		);
	}
}
