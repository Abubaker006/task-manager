import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoImage from "../../assets/Logo-Light-Mode.svg";

const LandingPageHeader = () => {
    return (
      <header className="fixed top-0 left-0 w-full bg-gray-50 dark:bg-[#333] border border-gray-200 dark:border-[#333] shadow-md py-1 px-[120px] flex items-center justify-between z-50">
        <div className="relative w-[175px] h-[75px]">
          <Image src={LogoImage.src} alt="logo" fill priority />
        </div>

        <div>
          <Link href="/signIn" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer">
            Sign In
          </Link>
        </div>
      </header>
    );
};

export default LandingPageHeader;
