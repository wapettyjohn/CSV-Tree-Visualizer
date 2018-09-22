import React from 'react';

const Tree = (props) => {
	const recurse = (vertex) => {
		if (vertex.children) {
			return (
				<React.Fragment>
					<span
						className={`vertexId ${vertex.shape}`}
						style={{backgroundColor: vertex.color}}>{vertex.id}
					</span>

					<ul className='tree'>
						{vertex.children.map(child => (
							<li className='vertex' key={child.id}>
								{recurse(child)}
							</li>
						))}
					</ul>
				</React.Fragment>
			);
		} else {
			return <span className='vertexId'>{vertex.id}</span>;
		}
	}

	return (
		<div className="treeContainer">
			{recurse(props.root)}
		</div>
	);
}

export default Tree;
