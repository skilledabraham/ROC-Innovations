import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Posi from "./Posi.jpg";

function Home() {
  return (
    <div className="w-screen p-0 m-0 overflow-hidden">
      <Header></Header>
      <div className="text-center mt-0 py-[1em] flex justify-center items-center mt-5">
        <img src={Posi} className="border-orange-600 border-4 h-[70vh]" />
        <div className=" hover:bg-zinc-100 hover:shadow-sm rounded hover:shadow-gray-500 h-[150%] w-[30%] p-10 m-10">
          <h1 className="text-5xl font-bold text-left ml-10">Posi Bello!</h1>
          <p className="text-left mt-0 text-gray-600 ml-10 pb-[5em]">
            She is the cutest ever! <br /> She's my little angel! <br />I love
            her <br /> <i className="font-sans ">Abraham</i>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
