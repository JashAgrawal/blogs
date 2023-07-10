"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { HiMenu } from "react-icons/hi";
import logo from "@/assets/logo.png";
import Image from "next/image";
const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const HeaderOptions = [
    { title: "Home", route: "/" },
    { title: "New Blog", route: "/CreateBlog" },
    { title: "My Drafts", route: "/Drafts" },
  ];
  return (
    <header className="text-accent navborder">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 lg:h-20">
          <div className="flex-shrink-0">
            <Link
              href="/"
              title=""
              className="flex cursor-pointer bg-white  rounded-full"
            >
              <Image
                className="w-auto h-14  p-1 z-10 rounded-full"
                src={logo}
                alt="assa"
              />
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex p-2  transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={() => setIsMenuVisible(!isMenuVisible)}
          >
            <HiMenu size={24} />
          </button>

          <div className="hidden w-full lg:flex lg:items-center lg:justify-center lg:space-x-10">
            {HeaderOptions.map((item) => (
              <Link
                key={`Hnavigation-${item.title}`}
                href={item.route}
                title={item.title}
                className="text-base relative one"
              >
                <span className="font-bold">{item.title}</span>
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-secondaryColor" />
              </Link>
            ))}
          </div>

          {/* <a
            href="#"
            title=""
            className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-primaryColor hover: focus: focus:bg-primaryColor font-semibold text-white bg-black rounded-full"
            role="button"
          >
            Join Now
          </a> */}
        </div>
      </div>
      <div
        className="navbar-menu relative z-50"
        style={{ display: isMenuVisible ? "" : "none" }}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-backgroundColor border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link className="mr-auto text-3xl font-bold leading-none" href="/">
              <Image
                className="w-auto h-10 rounded-full"
                src={logo}
                alt="assa"
              />
            </Link>
            <button
              className="navbar-close"
              onClick={() => setIsMenuVisible(false)}
            >
              <RxCross1 size={24} />
            </button>
          </div>
          <div>
            <ul>
              {HeaderOptions.map((item) => (
                <li className="mb-1" key={`Hnavigation-${item.title}`}>
                  <Link
                    className="block p-4 text-sm font-semibold text-gray-500 hover:bg-indigo-50 hover:text-quadraColor rounded"
                    href={item.route}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="mt-auto">
            {!authState?.isLogin ? (
              <div className="pt-6">
                <Link
                  className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-gray-50 hover:bg-gray-100 rounded-xl"
                  href="/login"
                >
                  Sign in
                </Link>
                <Link
                  className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-primaryColor hover:bg-indigo-700  rounded-xl"
                  href="/signup"
                >
                  Sign Up
                </Link>
              </div>
            ) : null}
          </div> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
