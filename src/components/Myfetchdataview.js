import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';


function Myfetchdataview() {
    let {id} = useParams();
    const [a,b] = useState([]);

    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((res)=>{
        return(res.json())
      })
      .then((data)=>{
        console.log(data);
       b(data);
      })
  },[])


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12 text-end'>
                <Link to="/fetchdata" className='btn btn-success'>Back</Link>
            </div>
        </div>
    <div className='row'>
      <div className='col-12'>
    <table className='table table-bordered'>
      <thead>
        <tr className='bg-dark text-white'>
          <th>#id</th>
          <th>PostId</th>
          <th>Name</th>
          <th>Email id</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
      
              <tr className='bg-info'>
                <td>{a.id}</td>
                <td>{a.postId}</td>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.body}</td>
              </tr>
      </tbody>
   
    </table>
    </div>
    </div>
  </div>
  )
}

export default Myfetchdataview