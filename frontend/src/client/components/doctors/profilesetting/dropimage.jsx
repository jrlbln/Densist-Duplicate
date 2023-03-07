import React, { useState } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';

export default function Dropzone() {
	const [state, setState] = useState({
		open: false,
		files: [],
	});

	const handleClose = () => {
		setState({ ...state, open: false });
	};

	const handleSave = (files) => {
		//Saving files to state for further use and closing Modal.
		setState({
			files: files,
			open: false,
		});
	};

	const handleOpen = () => {
		setState({ ...state, open: true });
	};

	return (
		<div>
			<Button onClick={handleOpen}>Add Image</Button>
			<DropzoneDialog
				open={state.open}
				onSave={handleSave.bind(this)}
				acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
				showPreviews={true}
				maxFileSize={5000000}
				onClose={handleClose.bind(this)}
			/>
		</div>
	);
}
