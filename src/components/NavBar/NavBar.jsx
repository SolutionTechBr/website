import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiX } from "react-icons/fi";
import ScrollStatus from "../scroll/ScrollStatus";


const NavBar = () => {
    const [menu, setMenu] = useState(false);
    const [colorChange, setColorchange] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 0) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };

    window.addEventListener("scroll", changeNavbarColor);

    return (
        <div className="fixed top-0 z-50 w-full">
        <div className={`w-[100%] fixed items-center justify-center ${colorChange && " bg-black transition-all delay-100 ease-in-out bg-opacity-20 backdrop-blur-md border-gray-800 shadow-lg"}`}>
            <div className="flex items-center justify-between lg:w-[80rem] md:w-[100%] px-4 md:px-3 py-5 m-auto text-lg">
                <div className="flex items-center">
                    <Link style={{ textDecoration: "none" }} to="/" className="flex items-center">
                     <img data-aos="fade-up" src="./images/logo.mini.png" className='h-[3rem] ' alt="electric" />
                        <h1
                            data-aos="zoom-in"
                            className="hidden md:block lg:block font-extrabold text-left text-transparent md:text-3xl text-xs bg-clip-text bg-gradient-to-r from-blue-300 to-sky-500 h-8"
                        >Solucions Tech
                        </h1>
                    </Link>
                </div>
                <div className="flex items-center">
                    <ul className="md:flex gap-8 hidden items-center text-lg font-extrabold">
                        <li>
                            <NavLink style={{ textDecoration: "none" }} to="/">
                                {({ isActive, isPending }) => (
                                    <span className={`hover:underline underline-offset-4 decoration-sky-500 ${isActive ? "text-sky-500 font-medium" : "text-white"} `} >Página Inicial</span>
                                )}
                            </NavLink>
                        </li>

                        <li>
                            <NavLink style={{ textDecoration: "none" }} to="/Serviços">
                                {({ isActive, isPending }) => (
                                    <span className={`hover:underline underline-offset-4 decoration-sky-500 ${isActive ? "text-sky-500 font-medium" : "text-white"}`}>Serviços</span>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink style={{ textDecoration: "none" }} to="/contato">
                                {({ isActive, isPending }) => (
                                    <span className={`hover:underline underline-offset-4 decoration-blue-500 ${isActive ? "text-sky-500 font-medium" : "text-white"}`}>Contato</span>
                                )}
                            </NavLink>
                        </li>

                    </ul>
                    <button
                        type="button"
                        onClick={() => {
                            if (menu == false) {
                                setMenu(true);
                            } else {
                                setMenu(false);
                            }
                        }}
                        className="animate-pulse md:hidden border focus:ring-[2.5px] focus:outline-none font-medium rounded-lg text-lg px-2.5 py-2.5 text-center items-center focus:ring-gray-500 bg-gray-800 border-gray-900 text-white hover:bg-gray-700 mr-2"
                    >
                        {!menu ? <HiMenuAlt3 /> : <FiX />}
                    </button>
                </div>
            </div>
            {menu && (
                <div className="md:hidden fixed top-[4rem] right-0 rounded-xl w-[12rem] py-2 mr-5 shadow-md text-white bg-gray-900 border-gray-700 border">
                    <ul>
                        <li>
                            <NavLink style={{ textDecoration: "none" }} to="/">
                                <button
                                    onClick={() => {
                                        setMenu(false);
                                        // setFocus(0);
                                    }}
                                    className="hover:underline hover:border-blue-300 border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                                >
                                   Página Inicial
                                </button>
                            </NavLink>
                        </li>
                    
                     
                        <li>
                            <Link style={{ textDecoration: "none" }} to="/Serviços">
                                <button
                                    onClick={() => {
                                        setMenu(false);

                                    }}
                                    className="hover:underline hover:border-blue-300  border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                                >
                                    Serviços
                                </button>
                            </Link>
                        </li>

               

                        <li>
                            <Link style={{ textDecoration: "none" }} to="/contato">
                                <button
                                    onClick={() => {
                                        setMenu(false);

                                    }}
                                    className="hover:underline hover:border-blue-300  border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                                >
                                    Contato
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
            <ScrollStatus/>
        </div>
        </div>
    );
};

export default NavBar;