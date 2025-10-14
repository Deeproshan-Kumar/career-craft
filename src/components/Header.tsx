import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-b-gray-300 z-50">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Logo />
            <ul className="flex items-center gap-10">
              <li>
                <Link href="/" className="text-sm text-gray-600 font-medium hover:text-black">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-gray-600 font-medium hover:text-black">
                  <span>About</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex items-center gap-4">
              <li>
                <Link href="/login" className="text-sm text-gray-600 font-medium hover:text-black">
                  Sign In
                </Link>
              </li>
              <li>
                <span className="text-gray-600 font-light">|</span>
              </li>
              <li>
                <Link href="/login" className="text-sm text-gray-600 font-medium hover:text-black">
                  Employers / Post Job
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
