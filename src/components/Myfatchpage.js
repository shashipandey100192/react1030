import React,{Fragment, useEffect,useState} from 'react';
import {Link } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";




const Myfatchpage = () => {
  const [x,y] = useState([]);

          useEffect(()=>{
            fetch("https://jsonplaceholder.typicode.com/comments")
            .then((res)=>{
              return(res.json())
            })
            .then((data)=>{
              console.log(data);
             y(data);
            })
        },[])

        return (
            <div className='container'>
              <div className='row'>
                <div className='col-12'>

             
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>#id</th>
                    <th>PostId</th>
                    <th>Name</th>
                    <th>Email id</th>
                    <th>Body</th>
                  </tr>
                </thead>
                <tbody>
                {x.map((a)=>{
                      return(
                        <tr>
                          <td>{a.id}</td>
                          <td>{a.postId}</td>
                          <td>{a.name}</td>
                          <td>{a.email}</td>
                          <td>{a.body}</td>
                          <td width="160">
                            <button className='btn btn-danger btn-sm me-2'><AiFillDelete/></button>
                            <button className='btn btn-success btn-sm me-2'>Edit</button>
                            <Link className='btn btn-warning btn-sm' to={`${a.id}`}>view</Link>
                          </td>
                        </tr>
                        )
                      })}
                </tbody>
                <tfoot></tfoot>
              </table>
              </div>
              </div>
            </div>

  )
}

export default Myfatchpage