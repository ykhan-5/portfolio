import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-bold font-jakarta text-slate-900">
            Yusuf Khan
          </span>
          <div className="hidden md:flex space-x-8">
            {["About", "Experience", "Projects"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-64}
                className="text-slate-600 hover:text-sky-500 cursor-pointer transition-colors"
              >
                {item}
              </Link>
            ))}

            <a
              href="https://www.linkedin.com/in/yusufkh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-sky-500 cursor-pointer transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
