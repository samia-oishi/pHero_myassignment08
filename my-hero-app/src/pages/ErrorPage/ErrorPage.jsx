import React from 'react'
import error404 from "../../assets/error404.png";  
import Navbar from '../../components/Header/Navbar';
import { Footer } from '../../components/Footer/Footer';

export const ErrorPage = () => {
  return (
    <>
    <div>
      <Navbar></Navbar>
    <div className="flex flex-col justify-center items-center my-10">
          <img src={error404} alt="App Not Found" className="w-64 h-64 mb-5" />
          <h2 className="text-gray-600 font-semibold text-lg">
            Page Not Found
          </h2>
          <a href="/" className="btn bg-gradient-to-br from-purple-700 via-purple-400 to-purple-500 outline-0 border-0 hover:bg-gradient-to-tl">
          Go Back</a>
    </div>
    <Footer></Footer>
    </div>
    </>
  )
}
