import React, { useEffect, useState } from 'react';
import {Form,InputGroup ,FormControl,Button,Table} from 'react-bootstrap';
import AddNew from './AddNew';
function RIC () {
  const [data,setData] =useState([]);
  const [inp,setInp] = useState('');

  useEffect(()=>{
    const run = async ()=>{
      try{
        const res = await fetch(process.env.REACT_APP_API_HOST+"/api/police/wanteds");
        const data = await res.json();
        console.log(data.wanteds);
        setData(data.wanteds);
      }
      catch(e){
        console.log("ERRRROR")
      } 
    }
    run();
  },[]);
  const handleClick = async()=>{
    var arr = []
    data.forEach(e=>{
      if(e.id != inp){
        arr.push(e);
      }
    });
    setData(arr);
    try{
      const res = await fetch(process.env.REACT_APP_API_HOST+'/api/police/wanteds/'+inp,{
        method: 'DELETE'
      });
      const data = await res.json();
      if(data.msg == "Deleted wanted"){
        alert('Deleted!');
      }
      else{
        alert("Something went wrong");
      }
    }
    catch(e){
      console.log("Error ekak ei")
    }
  }
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Type ID you want to delete"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(event)=>setInp(event.target.value)}
            />
            <InputGroup.Append>
              <Button variant="danger" onClick={handleClick}>DELETE</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>

        <Table striped bordered hover>
          <thead>
            <tr>              
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
           {data.map((row,id)=>{
            return(
              <tr>
                <td>{row.id}</td>
                <td>{row.first_name}</td>
                <td>{row.last_name}</td>
              </tr>);
            })}
          </tbody>
        </Table>


      </Form>
      <AddNew />
    </div>
    )

}

export default RIC;