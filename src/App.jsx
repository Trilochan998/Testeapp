import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import CreateUser from './Components/CreateUser'
import User from './Components/User'
import EditUsers from './Components/EditUsers'
const App = () => {
  return (
    <div>
       <BrowserRouter>
              <HomePage></HomePage>
               <Routes>
                   <Route path='/' element={<CreateUser></CreateUser>}></Route>
                   <Route path='/users' element={<User></User>}></Route>
                   <Route path='/edit/:index' element={<EditUsers></EditUsers>}/>
               </Routes>
           </BrowserRouter>
    </div>
  )
}

export default App
