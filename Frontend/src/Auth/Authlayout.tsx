import { Outlet , Navigate } from "react-router-dom"
const Authlayout = () => {

 const isAuthenticte = false ;

  return (
    <>
      {isAuthenticte ? ( <Navigate to="/"/>) : 
      (
        <>
        <section className="flex flex1 justify-center items-center flex-col py-10">
            <Outlet/>   
        </section>

        <img src="/public/image.png" alt="images" className=" block sm:hidden screen w-1/2 object-cover bg-no-repeat" />
        </>
      )
      }
    </>
  )
}

export default Authlayout
