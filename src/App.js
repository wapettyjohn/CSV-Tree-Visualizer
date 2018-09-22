import React from 'react';
import Form from './Form.js';
import Tree from './Tree.js';

export default class App extends React.Component {
	state = {
		data: '',
		root: { children:[] },
		sidebarDisplay: 'hidden',
	}

	/**
	* @param {string} data
	* @return {Array}
	*/
	parseData = (data) => {
		// init array of vertices to build
		let vertices = [];
		// trim whitewspace and split text into rows
		const rows = data.trim().split('\n');
		for (const row of rows) {
			// split each row into columns
			const cols = row.split(',');
			const newVertex = {
				id: parseInt(cols[0]),
				color: cols[1],
				shape: cols[2],
				children: [],
			};
			/*
			 * push newVertex onto vertices array before setting its parent
			 * since it might be the root, in which case it will be its own parent
			 */
			vertices.push(newVertex);
			/*
			 * now that newVertex instance is added to vertices array
			 * we can safely look for the newVertex's parent
			 */

			// get parent vertex
			const parent = vertices.filter(
				// find parent by id
				vertex => vertex.id === parseInt(cols[3])
			)[0];
			if (newVertex != parent) {
				// push newVertex to parent's children (add newVertex as a sibling)
				parent.children	.push(newVertex);
			}
		}

		return vertices;
	}

	/**
	* @param {Array} vertices
	* @return {Object}
	*/
	getRoot = (vertices) => {
		return vertices.filter(
			vertex => vertex.children[vertex.id]
		)[0];
	}

	onUpdate = (val) => { this.setState({ data: val }) };

	onSubmit = () => {
		const root = this.getRoot(this.parseData(this.state.data));
		this.setState({
			root: root,
			sidebarDisplay: 'displayed',
		});
	}

	hideSidebar = () => this.setState({ sidebarDisplay: 'hidden' });;

	render() {
		return (
			<div className='app' id='App'>
				<div className='formWrapper'>
					<Form onUpdate={this.onUpdate} onSubmit={this.onSubmit}/>
				</div>

				<div className='sampleData'>
					<h2 className='dataHeading'>Sample Data</h2>

					<div className='dataWrapper'>
						<pre className='sample'>
							1,#2FAE57,square,1<br />
							2,#2FAE57,circle,1<br />
							3,#2FAE57,circle,1<br />
							4,#4A90E2,circle,1<br />
							5,#4A90E2,square,2<br />
							6,#4A90E2,circle,2<br />
							7,#4A90E2,circle,5<br />
							8,#9FCF6F,square,5<br />
							9,#9FCF6F,circle,3<br />
						</pre>

						<pre className='sample'>
							0,#9FCF6F,square,0<br />
							1,#BA9D03,circle,0<br />
							2,#BA9D03,square,1<br />
							3,#BA9D03,circle,1<br />
							4,#BA9D03,square,1<br />
							5,#BA9D03,circle,1<br />
							6,#BA9D03,square,1<br />
							7,#BA9D03,circle,1<br />
							8,#BA9D03,square,1<br />
							9,#BA9D03,circle,1<br />
							10,#BA9D03,square,1<br />
							11,#BA9D03,circle,1<br />
							12,#B796D9,square,0<br />
							13,#B796D9,circle,12<br />
							14,#B796D9,square,12<br />
							15,#B796D9,circle,12<br />
							16,#B796D9,square,12<br />
							17,#B796D9,circle,12<br />
							18,#B796D9,square,12<br />
							19,#B456AB,circle,0<br />
							20,#B456AB,square,19<br />
							21,#B456AB,circle,19<br />
							22,#B456AB,square,19<br />
							23,#B456AB,circle,19<br />
							24,#D1BB6D,square,0<br />
							25,#D1BB6D,circle,24<br />
							26,#D1BB6D,square,25<br />
							27,#D1BB6D,circle,26<br />
							28,#D1BB6D,square,26<br />
							29,#D1BB6D,circle,26<br />
							30,#D1BB6D,square,26<br />
							31,#D1BB6D,circle,25<br />
							32,#D1BB6D,square,31<br />
							33,#D1BB6D,circle,31<br />
							34,#D1BB6D,square,31<br />
							35,#D1BB6D,circle,31<br />
							36,#D1BB6D,square,24<br />
							37,#D1BB6D,circle,36<br />
							38,#D1BB6D,square,37<br />
							39,#D1BB6D,circle,37<br />
							40,#D1BB6D,square,37<br />
							41,#D1BB6D,circle,37<br />
							42,#D1BB6D,square,36<br />
							43,#D1BB6D,circle,42<br />
							44,#D1BB6D,square,42<br />
							45,#D1BB6D,circle,42<br />
							46,#D1BB6D,square,42<br />
							47,#D1BB6D,circle,24<br />
							48,#D1BB6D,square,47<br />
							49,#D1BB6D,circle,48<br />
							50,#D1BB6D,square,48<br />
							51,#D1BB6D,circle,48<br />
							52,#D1BB6D,square,48<br />
							53,#D1BB6D,circle,47<br />
							54,#D1BB6D,square,53<br />
							55,#D1BB6D,circle,53<br />
							56,#D1BB6D,square,53<br />
							57,#D1BB6D,circle,53<br />
							58,#D1BB6D,square,24<br />
							59,#D1BB6D,circle,58<br />
							60,#D1BB6D,square,59<br />
							61,#D1BB6D,circle,59<br />
							62,#D1BB6D,square,59<br />
							63,#D1BB6D,circle,59<br />
							64,#D1BB6D,square,58<br />
							65,#D1BB6D,circle,64<br />
							66,#D1BB6D,square,64<br />
							67,#D1BB6D,circle,64<br />
							68,#D1BB6D,square,64<br />
							69,#D1BB6D,circle,24<br />
							70,#D1BB6D,square,69<br />
							71,#D1BB6D,circle,69<br />
							72,#D1BB6D,square,69<br />
							73,#D1BB6D,circle,69<br />
							74,#D1BB6D,square,69<br />
							75,#D1BB6D,circle,24<br />
							76,#D1BB6D,square,75<br />
							77,#D1BB6D,circle,75<br />
							78,#D1BB6D,square,75<br />
							79,#D1BB6D,circle,75<br />
							80,#D1BB6D,square,75<br />
						</pre>
					</div>
				</div>
				
				<div className={`treeWrapper ${ this.state.sidebarDisplay}`}>
					<div className='backArrowWrapper'>
						<span onClick={this.hideSidebar} className='backArrow'>
							&rarr;
						</span>
					</div>
					<Tree root={this.state.root} />
				</div>
			</div>
		);
	}
}
