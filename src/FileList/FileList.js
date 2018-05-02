import React from 'react';
import ReactDOM from 'react-dom';

export default class FileList extends React.Component {
	render() {

		return this.props.fileList.map(
			(file) => (<li>{file}</li>)
		);
	}
}