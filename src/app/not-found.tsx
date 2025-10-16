"use client";

import { ChevronsRight } from "lucide-react";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <section className="h-full w-full">
      <div className="container mx-auto px-3">
        <div className="min-h-screen flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            <h6 className="text-lg font-medium text-gray-400">404</h6>
            <h1 className="text-7xl font-extrabold  mb-4">
              <span>O</span>
              <span>o</span>
              <span>o</span>
              <span>p</span>
              <span>s</span>
              <span>!</span>
              <span>!</span>
            </h1>

            <h4 className="text-3xl leading-relaxed mb-6">
              Sorry, it appears the page you were looking for doesn't exist
              anymore or might have been moved.
            </h4>

            <p className="font-medium text-gray-400 mb-4">
              Here are some helpful links instead:
            </p>

            <ul className="flex flex-wrap items-center gap-4">
              <li>
                <Link
                  href="/"
                  className="font-sm text-gray-800 underline underline-offset-4"
                >
                  Home
                </Link>
              </li>
              <li>
                <span>
                  <ChevronsRight size={14} />
                </span>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-sm text-gray-800 underline underline-offset-4"
                >
                  About Us
                </Link>
              </li>
              <li>
                <span>
                  <ChevronsRight size={14} />
                </span>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-sm text-gray-800 underline underline-offset-4"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <span>
                  <ChevronsRight size={14} />
                </span>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="font-sm text-gray-800 underline underline-offset-4"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <span>
                  <ChevronsRight size={14} />
                </span>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="font-sm text-gray-800 underline underline-offset-4"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <span>
                  <ChevronsRight size={14} />
                </span>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="underline underline-offset-4"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
