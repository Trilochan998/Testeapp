import { useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const CreateUser = () => {
   let [name, setName] = useState("")
   let [salary, setSalary] = useState("")
   let [company, setCompany] = useState("")
   let navigate = useNavigate()


   let nameData = (e) => {
      setName(e.target.value)
   }
   let salaryData = (e) => {
      setSalary(e.target.value)
   }
   let companyData = (e) => {
      setCompany(e.target.value)
   }
   let formHandler = (e) => {
      e.preventDefault()
      let payload = { name, salary, company }
      axios.post("http://localhost:3000/content", payload)
         .then(() => {
            console.log("data is added");
         })
         .catch(() => {
            console.log("Somthing is wrong");
         })
      navigate("/users")
   }
   return (
      <div id={style.myForm}>
         <table>
            <tr><th colSpan="2"><h2>User-Details</h2></th></tr>
            <tr>
               <td><label>Name</label></td>
               <td>:<input type="text" value={name} onChange={nameData} /></td>
            </tr>
            <tr>
               <td><label>Salary</label></td>
               <td>:<input type="text" value={salary} onChange={salaryData} /></td>
            </tr>
            <tr>
               <td><label >Company</label></td>
               <td>:<input type="text" value={company} onChange={companyData} /></td>
            </tr>
            <tr>
               <th colSpan="2"><button onClick={formHandler}>Submit</button></th>
            </tr>
         </table>
      </div>
   )
}
export default CreateUser