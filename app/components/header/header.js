"use client";
import Image from "next/image";
import Link from "next/link";
import {RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const Header = () => {
    const [navExpanded, setNavExpanded] = useState(false);
    return (
        <header className="w-full h-20 flex items-center justify-center z-50">
            <div className="relative bg-background text-muted shadow-sm w-full h-full flex justify-between items-center font-medium text-base z-50 px-5 sm:px-10 lg:px-20">
                <Link className="h-full w-auto flex items-center" href="/">
                    <Image className="h-15 w-15 lg:w-20 lg:h-20" src="/logo.png" alt="Kithima Kirithiria" width={45} height={45} priority />
                </Link>
                <div className={`gap-16 lg:gap-0 flex-col bg-background flex lg:p-0 lg:flex-row lg:right-0 lg:top-0 lg:h-full lg:bg-dark-blue justify-between ${navExpanded ? "absolute  h-auto py-10 px-5 sm:p-10 top-full -right-0 w-full": "hidden lg:flex"}`}>
                    <div className="h-full  flex flex-col text-2xl gap-5  lg:flex-row lg:items-center lg:gap-14 lg:text-base  font-medium tracking-wide ">
                        <Link className="font-semibold text-lg" href="/members">Members</Link>
                        <Link className="font-semibold text-lg" href="/events">Events</Link>
                        <Link className="font-semibold text-lg" href="/login">Login</Link>
                    </div>
                </div>
                <div className="h-full flex items-center text-primary lg:hidden">
                    {
                        navExpanded ? <AiOutlineClose size={30} onClick={() => {setNavExpanded(false)}}  /> :
                        <RxHamburgerMenu size={30}  onClick={() => {setNavExpanded(true)}} />
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;