import React from 'react';
import Form from './Form.js';
import Tree from './Tree.js';

export default class App extends React.Component {
	state = {
		data: '',
		root: {children:[]},
		sidebarDisplay: 'hidden',
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

		// root is the unique element with itself as a child vertex (self-loop)
		const root = vertices.filter(
			vertex => vertex.children[vertex.id]
		)[0];

		return root;
	}

	onSubmit = () => {
		const root = this.handleData(this.state.data);
		this.setState({
			root: root,
			sidebarDisplay: 'displayed',
		});
	}

	render() {
		return (
			<div className='app' id='App'>
				<div className='formWrapper'>
					<Form onUpdate={this.onUpdate} onSubmit={this.onSubmit}/>
				</div>
				<div className={`treeWrapper ${this.state.sidebarDisplay}`}>
					<Tree root={this.state.root} />
				</div>
			</div>
		);
	}
}
