import React from 'react';
import axios from 'axios';
import FileList from './FileList/index.js';
import File from './File/File.js';

export default class FileManager extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			files: []
		};
		this.getFiles();
	}

	getFiles() {
		axios.get('/FileManager/public/api/directory?path=./')
		.then((response) => this.setState({files: response.data.map((data) => new File(data))}))
		.catch(function (error) {
			console.log(error);
		});
	}

	render() {
		return <FileList files={this.state.files}/>;
	}
}