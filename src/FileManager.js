import React from 'react';
import ReactDOM from 'react-dom';
import FileList from './FileList/FileList';

export default class FileManager extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.state.currentDirectory = './';
		this.state.fileList = this.fileList();
	}
	fileList() {
		if (this.state.currentDirectory == './' || this.state.currentDirectory == undefined)
			return ['./', 'images', 'files'];
		if (this.state.currentDirectory == './qwe')
			return ['./', 'examples', 'code'];
	}
	render() {
		return (<div><ul><FileList fileList={this.state.fileList} parent={this} /></ul></div>);
	}
}