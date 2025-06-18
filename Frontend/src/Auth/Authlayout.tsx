import { Outlet, Navigate } from "react-router-dom";

const Authlayout = () => {
  const isAuthenticte = false;

  return (
    <>
    {isAuthenticte ? (
      <Navigate to="/" />
    ) : (
      <>
      <section className="flex-10 flex flex-row justify-center items-center  py-3 ml-8">
            <Outlet />
          <img
            src="/image.png"
            alt="images"
            className="hidden md:block h-screen w-1/2 object-cover bg-no-repeat"
            />
            </section>
          </>
      )}
    </>
  );
};

export default Authlayout;
