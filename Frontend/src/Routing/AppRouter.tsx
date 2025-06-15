import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Signup from "../Auth/Signup"
import Login from "../Auth/Login"


const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/signup" element ={<Signup/>}/>
        <Route path="/login" element ={<Login/>}/>
      </Routes>
    </div>
  )
}

export default AppRouter
