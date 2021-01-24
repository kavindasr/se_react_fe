import React,{useState,useEffect} from "react";
import axios from "axios"
export default function View() {
 
  const [complaints,setComplaints] = useState([]) 
  useEffect( ()=>{
    const call = async () => {
      const res = await axios.get(`https://government-and-law.herokuapp.com/api/police/complaints`)
      setComplaints(res.data.complaints)
    console.log(res.data.complaints)
    }
    call()
  },[])
  return (
    <div style={{overflowX:"auto",overflowY:"auto"}}>
      <table class="table table-striped">
        <thead>
          <td>
           complaint
          </td>
          <td>
           NIC
          </td>
          <td>
           full_name
          </td>
          <td>
           address
          </td>
          <td>
           mobile
          </td>
          <td>
           status
          </td>
        </thead>
        <tbody>

          {complaints.map(c => (
            <tr>
              <td>{c.complaint}</td>
              <td>{c.nic}</td>
              <td>{c.full_name}</td>
              <td>{c.address}</td>
              <td>{c.mobile}</td>
              <td>{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
