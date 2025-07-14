import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface NavLink {
  link: string;
  name: string;
  icon: React.ReactNode;
}

interface NavBarProps {
  navLinks: NavLink[];
}

const NavBar: React.FC<NavBarProps> = ({ navLinks }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Navbar */}
      {!scrolled && (
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 border-y-2 border-dotted border-green-600">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
            <a
              href="#hero"
              className="font-bold text-lg sm:text-xl text-gray-900 no-underline"
            >
              Sahil Shrestha
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex">
              <ul className="flex space-x-6">
                {navLinks.map(({ link, name }) => (
                  <li key={name} className="group">
                    <a
                      href={link}
                      className="flex flex-col items-center text-gray-900 hover:text-blue-600 transition-colors duration-300"
                    >
                      <span>{name}</span>
                      <span className="underline w-0 group-hover:w-full transition-all duration-300 h-0.5 bg-blue-500" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-900 hover:bg-gray-100 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <GiHamburgerMenu size={24} />
            </button>
          </div>
        </header>
      )}

      {/* Floating Nav - Scrolled */}
      {scrolled && (
        <>
          {/* Mobile Top Bar */}
          <header className="lg:hidden fixed top-2 left-4 right-4 z-50 bg-white rounded-full shadow-lg p-3 flex justify-between items-center">
            <a
              href="#hero"
              className="font-bold text-lg text-gray-900 no-underline"
            >
              SS
            </a>
            <button
              className="p-2 rounded-md text-gray-900 hover:bg-gray-200 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <GiHamburgerMenu size={24} />
            </button>
          </header>

          {/* Desktop Sidebar */}
          <aside className="hidden w-15 lg:flex fixed top-1/2 left-4 transform -translate-y-1/2 z-50 bg-white rounded-2xl shadow-lg p-4 flex-col items-center space-y-6">
            <a
              href="#hero"
              className="font-bold text-xl text-gray-900 no-underline"
            >
              SS
            </a>
            <nav>
              <ul className="space-y-6">
                {navLinks.map(({ link, icon }) => (
                  <li key={link} className="group flex justify-center">
                    <a
                      href={link}
                      className="text-lg text-center text-green-400 hover:text-blue-600 transition-colors duration-300"
                    >
                      {icon}
                      <span className="block underline w-0 group-hover:w-full transition-all duration-300 h-0.5 bg-blue-500" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </>
      )}

      {/* Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-white bg-opacity-95 z-40 flex flex-col items-center justify-center px-6"
          onClick={() => setMobileMenuOpen(false)}
          role="presentation"
        >
          <nav>
            <ul className="space-y-6 text-center">
              {navLinks.map(({ link, name }) => (
                <li key={name}>
                  <a
                    href={link}
                    className="text-xl text-gray-900 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavBar;
