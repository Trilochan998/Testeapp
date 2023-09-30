import axios from "axios"
import { useEffect,useState } from "react"
import style from "./home.module.css"
import {Link} from "react-router-dom"
const User=()=>{
    let[fetchData,setFetchData]=useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/content")
        .then((response)=>{
             console.log(response);
            setFetchData(response.data)
        })
        .catch(()=>{
            console.log("Data not found");
        })
    }, [])

    let deleteData=(id)=>{
        axios.delete(`http://localhost:3000/content/${id}`)
        window.location.assign("/users")

    }
    return(
        <div id={style.myUser}>
            {fetchData.map((fetch)=>{
                return(
                    <div id={style.cards}>
                         <table>
                            <tr>
                                <th colSpan="2"><h3>Employee {fetch.id}</h3></th>
                            </tr>
                             <tr>
                               <td>Name:</td>
                               <td>{fetch.name}</td>
                             </tr>
                             <tr>
                                 <td>Salary:</td>
                                 <td>{fetch.salary}</td>
                             </tr>
                             <tr>
                                <td>Company:</td>
                                <td>{fetch.company}</td>
                             </tr>
                             <tr>
                                  <td><button><Link to={`/edit/${fetch.id}`}>Edit</Link></button></td>
                                  <td><button onClick={()=>{deleteData(fetch.id)}}>Delete</button></td>
                             </tr>
                         </table>

                    </div>
                )
            })}
        </div>
    )
}
export default User