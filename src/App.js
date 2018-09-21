import React from 'react';
import Form from './Form.js';
import Tree from './Tree.js';

export default class App extends React.Component {
	state = {
		data: '',
		root: {children:[]}
	}

	onUpdate = (val) => {
    this.setState({
      data: val
    })
  };

	handleData = (data) => {
		console.log('Handling data...');
		let vertices = [];  // init array of vertices to build
		const rows = data.split('\n'); // split text into rows
		for (const row of rows) {
			const cols = row.split(','); // split each row into columns
			const newVertex = {
				id: parseInt(cols[0]),
				color: cols[1],
				shape: cols[2],
				children: [],
			};
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
				vertex => vertex.id === parseInt(cols[3]) // find parent by id
			)[0]; // get parent vertex
			if (newVertex != parent) {
				parent.children	.push(newVertex); // push newVertex to array of siblings
			}
		}

		return vertices;
	}

	getRoot = (vertices) => {
		console.log('Getting root vertex...');
		// root is the unique element with itself as a child vertex (self-loop)
		return vertices.filter(
			vertex => vertex.children[vertex.id]
		)[0];
	}

	onSubmit = () => {
		console.log('Data submitted...');
		const vertices = this.handleData(this.state.data);
		const root = this.getRoot(vertices);
		this.setState({root: root});
	}

	render() {
		return (
			<div id='App'>
				<Form onUpdate={this.onUpdate} onSubmit={this.onSubmit}/>
				<Tree root={this.state.root} />
			</div>
		);
	}
}
