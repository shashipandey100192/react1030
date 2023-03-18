import React, { Fragment } from 'react';
import {BsAlarm} from 'react-icons/bs';
import { FcBinoculars,FcSms } from "react-icons/fc";
import {useForm} from "react-hook-form";

function Landingpage() {

  // const { register, handleSubmit } = useForm();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const xys = data => console.log(data);

  return (
    <Fragment>
    <div>Landingpage</div>
    <h1>react icon</h1>
    <BsAlarm></BsAlarm>
    <FcBinoculars/>
    <FcSms/>
      <div className='container border p-5'>
        <div className='row justify-content-md-center'>
          <div className='col-6'>
          <form className='bg-info p-5 shadow' onSubmit={handleSubmit(xys)}>
              <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input type="email" className="form-control" {...register("myemail",{ required: true })} />
                {errors.myemail && <span style={{color:'red'}}>This field is required</span>}
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" {...register("mypass",{ required: true })}/>
                {errors.mypass && <span style={{color:'red'}}>This field is required</span>}
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" {...register("mycheck")}/>
                <label className="form-check-label">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>


    </Fragment>
  )
}

export default Landingpage