import React from 'react';
import Node from './Node.js';

export default class Form extends React.Component {
	state = {data: ''};

	onSubmit = (event) => {
		event.preventDefault();
		const rows = this.state.data.split("\n");
		let nodes = [];
		for (const row of rows) {
			const cols = row.split(",");
			const parentId = parseInt(cols[3]);
			const newNode = new Node({
				id: parseInt(cols[0]),
				color: cols[1],
				shape: cols[2],
				children: [],
			});
			/*
			 * we need to push the newNode onto the nodes array before setting its
			 * parent in case it's the root, in which case it will be its own parent
			 */
			nodes.push(newNode);

			const newNodeId = newNode.props.id;
			/*
			 * now that the newNode instance has been added to the nodes array,
			 * we can safely look the the newNode's parent
			 */
			const parent = nodes.filter(
				node => node.props.id === parentId
			)[0]; // get parent node
			const siblings = parent.props.children; // you can be your own sibling
			siblings.push(newNodeId); // push id to array of siblings
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
