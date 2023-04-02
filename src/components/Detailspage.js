import React, { Fragment,useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Detailspage() {
let {id} = useParams();
  const [singled,singlef]= useState([]);

  useEffect(()=>{   
  axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`).then((res)=>{
      console.log(res.data);
      singlef(res.data);
  })
  },[]); 

  return (
    <Fragment>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h1>ID: {singled.id}</h1>
              <h1>POsterid: {singled.postId}</h1>
              <h2>Name:{singled.name}</h2>
              <h3>Email id: {singled.email}</h3>
              <h5>Body Text: {singled.body}</h5>
            </div>
          </div>
        </div>
    

    </Fragment>
  )
}

export default Detailspage