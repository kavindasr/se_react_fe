import {React,useState} from 'react';
import "./style.css";
import Editor from "./Editor";
import Axios from 'axios';
import {useCookies} from 'react-cookie';

function Lawyer(){
    const [cookies,setCookie] = useCookies(['loggedIn']);
    const upLoadImg = async (img)=>{
        if(!img){
            return null;
        }
        const formData = new FormData();
        formData.append('file',img);
        formData.append('upload_preset',"rycovost");

        const res = await Axios.post('https://api.cloudinary.com/v1_1/dqisgg7b2/image/upload',formData);
        console.log(res);
        return res.data.url;
    }
    const onSub = async ({title,body,author,img})=>{
        const url = await upLoadImg(img);
        const res = await fetch(process.env.REACT_APP_API_HOST+'/api/lawyer/laws',{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                author: author,
                title:title,
                article:body,
                image : url,
                lawyer_id: cookies.loggedIn.id
            })
        });
        const data = await res.json();
        console.log(data);
        if(data.msg == 'Added law'){
            alert('Submitted successfully')
        }
        else{
            alert('Somthing went wrong try again!');
        }
    }
    return (
        <>
            <div className="form-div">
                <Editor 
                    onSub = {({title,body,author,img})=>onSub({title,body,author,img})}
                />
            </div>
        </>
    );
}



export default Lawyer;