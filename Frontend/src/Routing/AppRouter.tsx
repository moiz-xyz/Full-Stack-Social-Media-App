import { Route, Routes } from "react-router-dom"
import Signup from "../Auth/Signup"
import Login from "../Auth/Login"
import Authlayout from "@/Auth/Authlayout"


const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route element = {<Authlayout/>}>
        <Route path="/signup" element ={<Signup/>}/>
        <Route path="/login" element ={<Login/>}/>
        </Route>

      </Routes>
    </div>
  )
}

export default AppRouter
