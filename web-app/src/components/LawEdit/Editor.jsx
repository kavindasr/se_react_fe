import {React,useState} from 'react';
import {Form,Button} from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const setConfig = {
    toolbar: {
        items: [
            'bold',
            'italic',
            '|',
            'bulletedList',
            'numberedList',
            'indent',
            'outdent',
            '|',
            'heading',
            '|',
            'undo',
            'redo'
        ]
    }
}

function Editor({onSub}){
    const [body, setBody] = useState('')

    ClassicEditor.defaultConfig = setConfig

    const handleSubmit = (e) => {
        e.preventDefault()
        onSub({ body })
    }
    return (
        <Form onSubmit={handleSubmit}>
                <Form.Label>New article</Form.Label>
                <CKEditor
                    editor={ClassicEditor}
                    onChange={(event, editor) => {
                        const data = editor.getData()
                        setBody(data)
                    }}
                />
                <br/>
                <Form.Label>Upload image :</Form.Label>
                <input type={'file'} />
                <br/>
                <Button variant={'primary'} type='submit'>Submit</Button>
            </Form>
    );
}

export default Editor;