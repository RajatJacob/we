import React from 'react';
import {
	EditorState
} from 'draft-js';
import {
	Editor
} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class TextEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editorState: EditorState.createEmpty(),
		};
	}

	onEditorStateChange: Function = (editorState) => {
		this.setState({
			editorState,
		});
	};

	render() {
		const {
			editorState
		} = this.state;
		return ( <
			Editor toolbar editorState = {
				editorState
			}
			toolbarClassName = "toolbarClassName"
			wrapperClassName = "wrapperClassName"
			editorClassName = "editorClassName"
			onEditorStateChange = {
				this.onEditorStateChange
			}
			toolbar = {
				{
					inline: {
						inDropdown: true
					},
					list: {
						inDropdown: true
					},
					textAlign: {
						inDropdown: true
					},
					link: {
						inDropdown: true
					},
					history: {
						inDropdown: true
					},
				}
			}
			/>  



		)
	}
}