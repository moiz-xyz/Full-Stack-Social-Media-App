import { Route, Routes } from "react-router-dom"
import Signup from "../Auth/Signup"
import Login from "../Auth/Login"
import Authlayout from "@/Auth/Authlayout"
import Home from "@/_root/Pages/Home"


const AppRouter = () => {
  return (
    <div className="flex-h-screen">
      <Routes>

        <Route element = {<Authlayout/>}>
        <Route path="/signup" element ={<Signup/>}/>
        <Route path="/login" element ={<Login/>}/>
        </Route>
        <Route index element ={<Home/>}/>
      </Routes>
    </div>
  )
}

export default AppRouter
