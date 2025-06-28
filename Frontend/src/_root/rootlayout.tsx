import BottaBar from "@/components/shared/bottombar"
import SideBar from "@/components/shared/SideBar"
import Topbar from "@/components/shared/Topbar"
import { Outlet } from "react-router-dom"

const rootlayout = () => {
  return (
    <div className='w-full md:flex'>
        <Topbar/>
        <SideBar/>

        <section className="flex flex-1 h-full">
          <Outlet/>
        </section>
        
          <BottaBar/>
    </div>
  )
}

export default rootlayout
