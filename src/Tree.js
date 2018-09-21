import React from 'react';

export default class Tree extends React.Component {
	renderTree(root) {
		if (root.children) {
			return (
				<React.Fragment>
					<span className={`rootId ${root.shape}`} style={{backgroundColor: root.color}}>{root.id}</span>
					<ul className='tree'>
						{root.children.map(child => (
							<li className='vertex' key={child.id}>
								{this.renderTree(child)}
							</li>
						))}
					</ul>
				</React.Fragment>
			);
		}
		else {
			return <span className='rootId'>{root.id}</span>;
		}
	}

	render() {
		return (
			<div className="treeContainer">
				{this.renderTree(this.props.root)}
			</div>
		);
	}
}
