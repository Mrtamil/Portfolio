"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

   
           
      <div className="fixed top-0 left-0 w-full border-b-2 border-black text-lg font-bold p-6  text-center rounded-b-full hidden md:flex justify-center space-x-10">
        <Link className="p-2 text-white hover:text-gray-300" href="/">Home_</Link>
        <Link className="p-2 text-white hover:text-gray-300" href="/About">Bio_</Link>
        <Link className="p-2 text-white hover:text-gray-300" href="/Skills">Skills_</Link>
        <Link className="p-2 text-white hover:text-gray-300" href="/Projects">Projects_</Link>
      </div>

     
      <div className="md:hidden p-4 flex justify-between items-center bg-blue-600">
      
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-blue-600 text-center shadow-md absolute top-14 left-0 w-full">
          <ul className="flex flex-col space-y-4 p-4">
            <li><Link className="text-white hover:text-gray-300" href="/" onClick={() => setMenuOpen(false)}>Home_</Link></li>
            <li><Link className="text-white hover:text-gray-300" href="/About" onClick={() => setMenuOpen(false)}>Bio_</Link></li>
            <li><Link className="text-white hover:text-gray-300" href="/Skills" onClick={() => setMenuOpen(false)}>Skills_</Link></li>
            <li><Link className="text-white hover:text-gray-300" href="/Projects" onClick={() => setMenuOpen(false)}>Projects_</Link></li>
          </ul>
        </div>
      )}

         <div className="p-4 mt-25"> 
        {children}
        </div>
       
        <div className="fixed bottom-0 left-0 w-full border-t-2 border-black flex gap-5 justify-center items-center p-4">

        <a href="https://www.linkedin.com/in/v-thillai-kavidhasu-b1a1bb2a3" target="_blank" rel="noopener noreferrer"
          className="flex items-center space-x-2  text-white  rounded-lg hover:text-gray-600 transition">
           <FaLinkedin size={20} />
        </a>
       <a href="https://github.com/Mrtamil" target="_blank" rel="noopener noreferrer" 
         className="flex items-center space-x-2 text-white  px-0.3 py-0.3 rounded-lg hover:text-gray-600 transition">
         <FaGithub size={20}/>
      </a>
      <a href="mailto:thillaikavidhasu@gmail.com"
        className="text-white hover:text-gray-600 transition ">
        <FaEnvelope size={20}/>
      </a>
      </div>
      
      </body>
    </html>
  );
}
