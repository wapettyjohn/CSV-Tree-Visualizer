import React from 'react';
import Vertex from './Vertex.js';

export default class Form extends React.Component {
	state = {
		data: ''
	};

	onSubmit = (event) => {
		event.preventDefault();
		let vertices = [];  // init array of vertices to build
		const rows = this.state.data.split('\n'); // split text into rows
		for (const row of rows) {
			const cols = row.split(','); // split each row into columns
			const newVertex = new Vertex({
				id: parseInt(cols[0]),
				color: cols[1],
				shape: cols[2],
				children: [],
			});
			/*
			 * push newVertex onto vertices array before setting its parent
			 * in case it's the root, when it will be its own parent
			 */
			vertices.push(newVertex);

			/*
			 * now that newVertex instance is added to vertices array
			 * we can safely look for the newVertex's parent
			 */
			const parent = vertices.filter(
				vertex => vertex.props.id === parseInt(cols[3]) // find parent by id
			)[0]; // get parent vertex
			const siblings = parent.props.children; // you can be your own sibling
			siblings.push(newVertex); // push newVertex to array of siblings
		}

		// root is unique element with self as child vertex (self-loop)
		const root = vertices.filter(
			vertex => vertex.props.children[vertex.props.id]
		)[0];

		/*
		const recursivelyBuildTree = (vertex) => {
			// if vertex is root then recur on children sans self
			if (vertex.props.children.includes(vertex)) {
				const properChildren = vertex.props.children.filter(child => child != vertex);
				return {
					id: vertex.props.id,
					children: properChildren.map(child => recursivelyBuildTree(child))
				};
			}
			// if vertex is without children, i.e. is a leaf
			else if (vertex.props.children.length === 0) {
				return {
					id: vertex.props.id
				};
			}
			else {
				return {
					id: vertex.props.id,
					children: vertex.props.children.map(child => recursivelyBuildTree(child))
				};
			}
		}
		*/

		//console.log(recursivelyBuildTree(root));
		console.log(root);
	}

	render() {
		return (
			<form>
				<textarea
					placeholder='Comma separated values...'
					value={this.state.data}
					onChange={(event) => this.setState({
						data: event.target.value
					})}>
				</textarea>
				<br />
				<button onClick={(event) => this.onSubmit(event)}>Submit</button>
			</form>
		);
	}
}
