import React from "react";
import Icon from "../images/icons/icon.svg";
import goToProfessional from "../images/go-to-professional.svg";
import { PhoneIcon } from "@heroicons/react/20/solid";
import { Link } from "gatsby";
export default function Navbar() {
    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full h-[309px] z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="flex flex-1 justify-between sm:justify-end items-center h-[40px] bg-red-500"></div>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* second container */}
                <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <PhoneIcon className="w-6 h-6 text-red-700" />
                        <span className="self-center text-xs font-semibold whitespace-nowrap dark:text-white uppercase mr-1">
                            Teléfono fijo:
                        </span>
                        <span className="self-center text-sm  whitespace-nowrap dark:text-white uppercase text-red-500">
                            800 200 158
                        </span>
                    </a>

                    <div className="flex items-center mx-20 my-4">
                        <img src={Icon} height={10} className="" alt="Flowbite Logo" />
                        {/*   <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Flowbite
                    </span> */}
                    </div>
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src={goToProfessional} height={20} className="h-12 w+ mr-3" alt="Flowbite Logo" />
                    </a>
                </div>
                {/* third container */}
                <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                    <Link
                        to="/"
                        className="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6 uppercase"
                    >
                        Inicio
                    </Link>

                    <Link
                        to="/history"
                        className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6 uppercase"
                    >
                        Historia
                    </Link>

                    <Link
                        to="/recipes"
                        className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6 uppercase"
                    >
                        Recetas
                    </Link>

                    <Link
                        to="/contest-rules"
                        className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6 uppercase"
                    >
                        Bases concursos
                    </Link>
                    <Link
                        to="/contact"
                        className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6 uppercase"
                    >
                        Contacto
                    </Link>
                </div>
            </div>
        </nav>
    );
}
