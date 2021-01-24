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
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [uploadImg,setUploadImg] = useState('');

    ClassicEditor.defaultConfig = setConfig

    const handleSubmit = (e) => {
        e.preventDefault()
        onSub({ title:title,body:body,author:author,img:uploadImg });
        setBody('');
        setTitle('');
        setAuthor('');
    }
    return (
        <Form onSubmit={handleSubmit}>
                <Form.Label><h1>New article</h1></Form.Label>
                <br/>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={title} placeholder="Title" onChange={(event)=>setTitle(event.target.value)}/>
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" value={author} placeholder="Author's name" onChange={(event)=>setAuthor(event.target.value)}/>
                <br />
                <CKEditor
                    editor={ClassicEditor}
                    onChange={(event, editor) => {
                        const data = editor.getData()
                        setBody(data)
                    }}
                />
                <br/>
                <Form.Label>Upload image :</Form.Label>
                <input type={'file'} onChange={(event)=>setUploadImg(event.target.files[0])} />
                <br/>
                <Button variant={'primary'} type='submit'>Submit</Button>
            </Form>
    );
}

export default Editor;