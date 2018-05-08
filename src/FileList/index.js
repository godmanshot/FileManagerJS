import React from 'react';

export default class FileList extends React.Component {
  render() {
    return (<ul>{this.props.files.map((file) => (<li>{file.name}</li>))}</ul>);
  }
}