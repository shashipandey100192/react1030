import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Link} from 'react-router-dom';

function Axiosapidata() { 
const [mydata,mydatafunction]= useState([]);

useEffect(()=>{   
axios.get('https://jsonplaceholder.typicode.com/comments').then((res)=>{
    console.log(res.data);
    mydatafunction(res.data);
})
},[]); 


  return (
    <div className='container'>
        <div className='row'>

            {mydata.map((x)=>{
                return(
                    <Fragment>
            <div className='col-md-3 mt-3'>
            <div class="card shadow bg-info text-white">
                <div class="card-body">
                    <h1 className='bg-danger'>Id: {x.id}</h1>
                    <h3>{x.name}</h3>
                    <h5 class="card-title">{x.email}</h5>
                    <p class="card-text">{x.body}</p>
                    <Link to="#" class="btn btn-primary">{x.postId}</Link>
                    
                    <p>{x.userId}</p>
                    
                    <Link className='btn btn-warning btn-sm' to={`${x.id}`}>show details{x.id}</Link>
                </div>
                </div>
            </div>
            </Fragment>
                )
            })}

        </div>
    </div>
  )
}

export default Axiosapidata