import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    const [data,setData] = useState([])
    const fetchData=()=>{
        axios.get("https://anishpdm.github.io/dummy-api-new/student.json").then(
            (response)=>{
                console.log(response.data)
                setData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
     <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">FIRSTNAME</th>
      <th scope="col">LASTNAME</th>
      <th scope="col">COLLGE</th>
      <th scope="col">DOB</th>
      <th scope="col">COURSE</th>
      <th scope="col">MOBILE</th>
      <th scope="col">EMAIL</th>
      <th scope="col">ADDRESS</th>
      </tr>
  </thead>
  <tbody>
    {
        data.map(
            (value,index)=>{
                return  <tr> 
                <th scope="row">{index}</th>
                <td>{value.firstname}</td>
                <td>{value.lastname}</td>
                <td>{value.college}</td>
                <td>{value.dob}</td>
                <td>{value.course}</td>
                <td>{value.mobile}</td>
                <td>{value.email}</td>
                <td>{value.address}</td>
              </tr>
            }
        )
    }





  </tbody>
</table>


            </div>
        </div>
     </div>



    </div>
  )
}

export default View