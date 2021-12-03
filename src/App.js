import React, { Component } from 'react'
import Main from './template/Main'
import Dashboard from './page/Dashboard'

export default class App extends Component {
	render() {	

		console.log(Dashboard);

		return (
			<Main page={'Dashboard'} />
		)
	}
}
