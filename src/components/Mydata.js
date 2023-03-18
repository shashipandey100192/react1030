import React, { Fragment } from 'react'

function Mydata() {
const mycustomdata =[
{
    name:'kumar',
    age:20,
    photo:'https://mobimg.b-cdn.net/v3/fetch/83/83b001d629f121eea6797b62cdcb4c68.jpeg',
    phone:'245214552',
    dob:'10-may-2020',
    email:'kumar@gmail.com',
    address:'noida up'
},
{
    name:'kumar',
    age:20,
    photo:'https://mobimg.b-cdn.net/v3/fetch/83/83b001d629f121eea6797b62cdcb4c68.jpeg',
    phone:'245214552',
    dob:'10-may-2020',
    email:'kumar@gmail.com',
    address:'noida up'
},
{
    name:'kumar',
    age:20,
    photo:'https://mobimg.b-cdn.net/v3/fetch/83/83b001d629f121eea6797b62cdcb4c68.jpeg',
    phone:'245214552',
    dob:'10-may-2020',
    email:'kumar@gmail.com',
    address:'noida up'
},
{
    name:'kumar',
    age:20,
    photo:'https://mobimg.b-cdn.net/v3/fetch/83/83b001d629f121eea6797b62cdcb4c68.jpeg',
    phone:'245214552',
    dob:'10-may-2020',
    email:'kumar@gmail.com',
    address:'noida up'
},
{
    name:'kumar',
    age:20,
    photo:'https://mobimg.b-cdn.net/v3/fetch/83/83b001d629f121eea6797b62cdcb4c68.jpeg',
    phone:'245214552',
    dob:'10-may-2020',
    email:'kumar@gmail.com',
    address:'noida up'
},
{
    name:'kumar',
    age:20,
    photo:'https://mobimg.b-cdn.net/v3/fetch/83/83b001d629f121eea6797b62cdcb4c68.jpeg',
    phone:'245214552',
    dob:'10-may-2020',
    email:'kumar@gmail.com',
    address:'noida up'
},
{
    name:'kumar',
    age:20,
    photo:'https://mobimg.b-cdn.net/v3/fetch/83/83b001d629f121eea6797b62cdcb4c68.jpeg',
    phone:'245214552',
    dob:'10-may-2020',
    email:'kumar@gmail.com',
    address:'noida up'
},
{
    name:'kumar',
    age:20,
    photo:'https://mobimg.b-cdn.net/v3/fetch/83/83b001d629f121eea6797b62cdcb4c68.jpeg',
    phone:'245214552',
    dob:'10-may-2020',
    email:'kumar@gmail.com',
    address:'noida up'
},
{
    name:'kumar',
    age:20,
    photo:'https://mobimg.b-cdn.net/v3/fetch/83/83b001d629f121eea6797b62cdcb4c68.jpeg',
    phone:'245214552',
    dob:'10-may-2020',
    email:'kumar@gmail.com',
    address:'noida up'
},
{
    name:'kumar',
    age:20,
    photo:'https://mobimg.b-cdn.net/v3/fetch/83/83b001d629f121eea6797b62cdcb4c68.jpeg',
    phone:'245214552',
    dob:'10-may-2020',
    email:'kumar@gmail.com',
    address:'noida up'
},
{
    name:'kumar',
    age:20,
    photo:'https://mobimg.b-cdn.net/v3/fetch/83/83b001d629f121eea6797b62cdcb4c68.jpeg',
    phone:'245214552',
    dob:'10-may-2020',
    email:'kumar@gmail.com',
    address:'noida up'
},
{
    name:'kumar',
    age:20,
    photo:'https://mobimg.b-cdn.net/v3/fetch/83/83b001d629f121eea6797b62cdcb4c68.jpeg',
    phone:'245214552',
    dob:'10-may-2020',
    email:'kumar@gmail.com',
    address:'noida up'
}
];
console.log(mycustomdata);

  return (
    <Fragment>
    <div>Mydata</div>
        {/* {mycustomdata.map((a)=>{
            return(
                <h1>{a.name}</h1>
            ) 
        })} */}

<table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">age</th>
      <th scope="col">Photo</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Address</th>
      <th scope="col">DOB</th>
    </tr>
  </thead>
  <tbody>
   {mycustomdata.map((a)=>{
    return(
        <>
         <tr>
            <th scope="row">{a.name}</th>
            <td>{a.age}</td>
            <td><img src={a.photo} width="100"/></td>
            <td>{a.email}</td>
            <td>{a.phone}</td>
            <td>{a.address}</td>
            <td>{a.dob}</td>
        </tr>
        
        </>
    )
   })}
  </tbody>
</table>


    </Fragment>
  )
}

export default Mydata