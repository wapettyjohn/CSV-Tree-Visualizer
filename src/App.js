import React from 'react';
import Form from './Form.js';
import Vertex from './Vertex.js';

export default class App extends React.Component {
	state = {
		data: '',
		root: '',
	}

	onUpdate = (val) => {
    this.setState({
      data: val
    })
  };

	handleData = (data) => {
		let vertices = [];  // init array of vertices to build
		const rows = data.split('\n'); // split text into rows
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

		return vertices;
	}

	getRoot = (vertices) => {
		// root is unique element with self as child vertex (self-loop)
		return vertices.filter(
			vertex => vertex.props.children[vertex.props.id]
		)[0];
	}

	onSubmit = () => {
		const vertices = this.handleData(this.state.data);
		const root = this.getRoot(vertices);
		// recursively build tree from root

		console.log(root);
	}

	render() {
		return (
			<div id='App'>
				<Form onUpdate={this.onUpdate} onSubmit={this.onSubmit}/>
				<Vertex passedVal='foo' />
			</div>
		);
	}
}
