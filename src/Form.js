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
				adjacencyList: {parentId: 1}, // initialize adjacencyList with parent's id
			});
			nodes.push(newNode);
			const parent = nodes.filter(
				node => node.props.id === parentId
			)[0]; // get parent node
			let foo = parent.props.adjacencyList;
			let bar = newNode.props.id;
			foo[bar] ? foo[bar] += 1 : foo[bar] = 1; // add id to parent's adjacency list
		}

		const root = nodes.filter(node => node.props.adjacencyList[node.props.id])[0];
		console.log(root);
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
