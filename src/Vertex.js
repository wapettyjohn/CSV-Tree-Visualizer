import React from 'react';

export default class Vertex extends React.Component {
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

	render() {
		return (
			<div className="vertex"></div>
		);
	}
}
