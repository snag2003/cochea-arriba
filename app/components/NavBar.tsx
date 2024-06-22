"use client"

import Image from "next/image";
import Logo from "../../public/logo.png";
import LogoW from "../../public/logoW.png";
import Menu from "../../public/menu.svg";
import CloseButton from "../../public/close.svg";
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-2 md:py-3 md:block">
              {/* LOGOS */}
              <Link href="/">
                <div className="flex items-center">
                  <Image src={LogoW} width={60} height={60} alt="Wonder" />
                  <Image src={Logo} width={60} height={60} alt="JuventudAgro" />
                </div>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src={CloseButton} width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src={Menu} width={30} height={30} alt="logo" className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="text-l py-2 px-6 text-center border-b-2 md:border-b-0  hover:bg-green-900  border-green-900  md:hover:text-green-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    Nosotros
                  </Link>
                </li>
                <li className="text-l py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-green-600  border-green-900  md:hover:text-green-600 md:hover:bg-transparent">
                  <Link href="#Weather" onClick={() => setNavbar(!navbar)}>
                    Clima
                  </Link>
                </li>
                <li className="text-l py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-green-600  border-green-900  md:hover:text-green-600 md:hover:bg-transparent">
                  <Link href="#Irrigation" onClick={() => setNavbar(!navbar)}>
                    Irrigación
                  </Link>
                </li>
                <li className="text-l py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-green-600  border-green-900  md:hover:text-green-600 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contáctanos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;