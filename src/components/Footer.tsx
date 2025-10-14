import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  const links = [
    {
      id: 1,
      name: "About Us",
      href: "/about",
    },
    {
      id: 2,
      name: "Contact Us",
      href: "/contact",
    },
    {
      id: 3,
      name: "FAQs",
      href: "/faqs",
    },
    {
      id: 4,
      name: "Terms and Conditions",
      href: "/terms-conditions",
    },
    {
      id: 5,
      name: "Privacy Policy",
      href: "/privacy-policy",
    },
  ];
  return (
    <footer className="fixed left-0 bottom-0 w-full bg-white border-t border-t-gray-300">
      <div className="container mx-auto p-3">
        <ul className="flex flex-wrap justify-center gap-3 md:gap-4 text-xs text-gray-600 mb-2">
          {links?.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="underline-offset-2 hover:text-black hover:underline"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-center text-xs text-gray-600">
          All rights reserved © {new Date().getFullYear()}{" "}
          <Link
            href="/"
            className="underline underline-offset-2 hover:text-black"
          >
            Career Craft
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
