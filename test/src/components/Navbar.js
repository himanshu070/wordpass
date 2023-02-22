// import * as React from "react";
// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = ({ darkTheme, setDarkTheme }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <>
//       <nav className="shadow-sm bg-white p-5 w-full">
//         <div className="flex items-center md:mx-20  justify-between">
//           <div className="flex-shrink-0 ">
//             <img
//               src="https://i.imgur.com/ZaIrNrv.png"
//               width={180}
//               height={35}
//             />
//           </div>
//           <div className="ml-10 hidden md:flex items-baseline space-x-8">
//             <div className="cursor-pointer hover:text-blue-500 font-semibold py-2 text-md">
//               <NavLink href="/">Documentation</NavLink>
//             </div>
//             <div className="cursor-pointer hover:text-blue-500 font-semibold py-2 text-md">
//               <NavLink href="/">Pricing</NavLink>
//             </div>
//             <div className="cursor-pointer hover:text-blue-500 font-semibold py-2 text-md">
//               <NavLink href="/">FAQ</NavLink>
//             </div>
//             <div className="cursor-pointer hover:text-blue-500 font-semibold py-2 text-md">
//               <NavLink href="/">Contact</NavLink>
//             </div>
//           </div>
//           <div className="md:hidden ">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {!isOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>

//         {isOpen && (
//           <div className="md:hidden" id="mobile-menu">
//             <div className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               <div className="cursor-pointer hover:bg-blue-600 mt-2 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//                 <NavLink href="/">Documentation</NavLink>
//               </div>
//               <div className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//                 <NavLink href="/">Pricing</NavLink>
//               </div>
//               <div className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//                 <NavLink href="/">FAQ</NavLink>
//               </div>
//               <div className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//                 <NavLink href="/">Contact</NavLink>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;



import React from 'react'

const Navbar = () => {
  return (
    <>
      <div>Navbar</div>
      <font className="text-3xl font-bold underline text-red-200">Hello world!</font>
      <p className="text-red-200">Oppp</p>
    </>
  );
}

export default Navbar
