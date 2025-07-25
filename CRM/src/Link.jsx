// import { useState } from "react";
// import { Link } from "react-router-dom"

// function Linked(){
//     let [show,setshow]=useState(false)
//     return (
//         <div>
//         <div className="hidden sm:flex sm:flex-col sm:gap-10 sm:bg-gray-100 sm:h-[100vh] sm:w-36 sm:items-center sm:justify-center sm:font-bold sm:text-xl ">
// <Link to="/" className="sm:hover:text-2xl sm:transition-all sm:duration-1000   ">Home</Link>
// <Link to="/Leads" className="sm:hover:text-2xl sm:transition-all sm:duration-500 ">Leads</Link>
//     </div>
//     <button className=" bg-blue-500 text-white p-2 rounded mt-5" onClick={() => setshow(!show)}>show</button>

// {show &&
//         <div className="z-0 flex flex-col gap-10 bg-gray-100 h-[100vh] w-36 items-center justify-center font-bold text-xl ">
// <Link to="/" className="hover:text-2xl transition-all duration-1000   ">Home</Link>
// <Link to="/Leads" className="hover:text-2xl transition-all duration-500 ">Leads</Link>
//     </div>

// }

//     </div>
//     )
// }
// export default Linked;
import { useState } from "react";
import { Link } from "react-router-dom";

function Linked() {
  const [show, setShow] = useState(false);

  return (
    <div>
      {/* Desktop Sidebar */}
      <div className="hidden sm:flex flex-col gap-8 bg-gray-100 h-screen w-40 items-center justify-center font-bold text-xl shadow-md">
        <Link to="/" className="hover:text-blue-600 transition-all duration-300">Home</Link>
        <Link to="/Leads" className="hover:text-blue-600 transition-all duration-300">Leads</Link>
      </div>

      {/* Mobile Toggle Button */}
      <div className="sm:hidden flex justify-start p-4 size-16">
        <button
          onClick={() => setShow(!show)} >
          <img src="src\burger.webp" alt="Menu" className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {show && (
        <div className="sm:hidden absolute top-16 left-0 bg-gray-100 w-40 h-[80vh] flex flex-col justify-center items-center gap-8 font-bold text-xl shadow-md z-10 transition-all duration-1000  ">
      
          <Link
            to="/"
            className="hover:text-blue-600 transition-all duration-300"
            onClick={() => setShow(false)} // auto close
          >
            Home
          </Link>
          <Link
            to="/Leads"
            className="hover:text-blue-600 transition-all duration-300"
            onClick={() => setShow(false)} // auto close
          >
            Leads
          </Link>
        </div>
      )}
    </div>
  );
}

export default Linked;
