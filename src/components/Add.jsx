import React, { useState } from 'react'
import Navbar from './Navbar'

export const Add = () => {


    const [data,setData] = useState({


        "firstName":"",
        "lastName":"",
        "college":"",
        "dob":"",
        "course":"",
        "mobile":"",
        "email":"",
        "address":""
    })
    const inputHandler = (event)=>{
        setData({...data,[event.target.name]:event.target.value})
        
    }
    const readValue =()=>{
        console.log(data)
    }
  return (
    <div>


<Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-4 col-l-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">firstName</label>
                            <input type="text" className="form-control" name='firstName' value={data.firstName} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-l-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="from-label">lastName</label>
                            <input type="text" className="form-control" name='lastName' value={data.lastName} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-l-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">college</label>
                            <textarea name="" id="" className="form-control" name='college' value={data.college} onChange={inputHandler}  ></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-l-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">dob</label>
                            <input type="date" name="" id="" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-l-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">course</label>
                            <select name="" id="" className="form-control" name='course' value={data.course} onChange={inputHandler}  >
                                <option value="MBA">MBA</option>
                                <option value="MSC">MSC</option>
                                <option value="MCOM">MCOM</option>
                                <option value="MCA">MCA</option>
                                <option value="MTEC">MTEC</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-l-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">mobile</label>
                            <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-l-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">email</label>
                            <input type="email" name="" id="" className="form-control" name='email' value={data.email} onChange={inputHandler}  />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-l-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">address</label>
                            <textarea name="" id="" className="form-control" name='address' value={data.address} onChange={inputHandler} ></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-l-3 col-xl-3 col-xxl-3">
                            <button className="btn btn-success" onClick={readValue} >submit</button>
                        </div>
                     </div><br></br>



                </div>
            </div>
        </div>
    </div>
  )
}
