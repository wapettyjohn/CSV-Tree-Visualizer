import React from 'react';

export default class Tree extends React.Component {
	renderTree(root) {
		if (root.children) {
			return (
				<div>
					<strong>{root.id}</strong>
					<ul>
						{root.children.map(child => (
							<li key={child.id}>
								{this.renderTree(child)}
							</li>
						))}
					</ul>
				</div>
			);
		}
		else {
			return <span>{root.id}</span>;
		}
	}

	render() {
		return (
			<div>
				{this.renderTree(this.props.root)}
			</div>
		);
	}
}
