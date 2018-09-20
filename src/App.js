import React from 'react';
import Form from './Form.js';
import Tree from './Tree.js';
import Vertex from './Vertex.js';

export default class App extends React.Component {
	render() {
		return (
			<div id='App'>
				<Form />
				<Vertex />
			</div>
		);
	}
}
