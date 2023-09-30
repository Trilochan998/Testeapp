import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from "./home.module.css"
import { useEffect,useState } from 'react'
const EditUsers = () => {

    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")

    let { index } = useParams()
    console.log(index);
     let nameData=(e)=>{
        setName(e.target.value)
     }
     let salaryData=(e)=>{
            setSalary(e.target.value)
     }
     let companyData=(e)=>{
        setCompany(e.target.value)
       }

       let navigate=useNavigate()
       let formHandler=(e)=>{
        e.preventDefault()
           let reload={name,salary,company}
           axios.put(`http://localhost:3000/content/${index}`,reload)
             .then(()=>{
                 console.log("reloaded");
             })
             .catch(()=>{
                console.log("error");
             })
             navigate("/users")
       }
     
    useEffect(() => {
        axios.get(`http://localhost:3000/content/${index}`)
        .then((check)=>{
             console.log(check.data);
             setName(check.data.name)
             setSalary(check.data.salary)
             setCompany(check.data.company)
        })
    }, [])
    return (
        <div id={style.myForm}>
            <table>
                <tr><th colSpan="2"><h2>Edit-User-Details</h2></th></tr>
                <tr>
                    <td><label>Name</label></td>
                    <td>:<input type="text"  value={name} onChange={nameData}/></td>
                </tr>
                <tr>
                    <td><label>Salary</label></td>
                    <td>:<input type="text" value={salary} onChange={salaryData}/></td>
                </tr>
                <tr>
                    <td><label >Company</label></td>
                    <td>:<input type="text"  value={company} onChange={companyData}/></td>
                </tr>
                <tr>
                    <th colSpan="2"><button onClick={formHandler}>Update</button></th>
                </tr>
            </table>
        </div>
    )
}

export default EditUsers
