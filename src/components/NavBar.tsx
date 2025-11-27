import { FaMoon, FaSun } from "react-icons/fa";
import { Theme, ThemeContext } from "../context/theme-context";
import React, { useContext, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router";
import { FaComputer } from "react-icons/fa6";

interface NavLink {
  link: string;
  name: string;
  icon: React.ReactNode;
}

interface NavBarProps {
  navLinks: NavLink[];
  onContactClick: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ navLinks, onContactClick }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  // Handle navigation with smooth scroll for hash links
  const handleNavClick = (link: string) => {
    if (link.startsWith("/")) {
      // External route like /blog
      navigate(link);
    } else if (link.startsWith("#")) {
      // Hash link - first navigate to home if not there
      const currentPath = window.location.pathname;

      if (currentPath !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(link);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.querySelector(link);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
      {/* Top Navbar */}
      {!scrolled && (
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 border-y-2 border-dotted border-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
            <button
              onClick={() => handleNavClick("#hero")}
              className="font-bold text-lg ml-4 sm:text-xl text-text no-underline bg-none border-none cursor-pointer"
            >
              Sahil Shrestha
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center">
              <ul className="flex space-x-6">
                {navLinks.map(({ link, name }) => (
                  <li key={name} className="group">
                    <button
                      onClick={() => handleNavClick(link)}
                      className="flex flex-col items-center text-text hover:text-[#93DA97] transition-colors duration-300 bg-none border-none cursor-pointer"
                    >
                      <span>{name}</span>
                      <span className="underline w-0 group-hover:w-full transition-all duration-300 h-0.5 bg-[#93DA97]" />
                    </button>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  const nextTheme: Theme =
                    theme === "light"
                      ? "dark"
                      : theme === "dark"
                      ? "system"
                      : "light";
                  setTheme(nextTheme);
                }}
                className="ml-4 px-3 py-2 cursor-pointer text-sm font-semibold text-white bg-[#5E936C] hover:bg-[#93DA97] rounded-lg transition"
                aria-label="Toggle theme"
              >
                {theme === "light" && <FaSun />}
                {theme === "dark" && <FaMoon />}
                {theme === "system" && <FaComputer />}
              </button>
              {/* Contact Button */}
              <button
                onClick={onContactClick}
                className="ml-6 px-4 py-2 text-sm  cursor-pointer font-semibold text-white bg-[#5E936C] hover:bg-[#93DA97] rounded-lg transition"
              >
                Contact
              </button>
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
          <header className="lg:hidden fixed top-2 left-4 right-4 z-50  rounded-full shadow-lg p-3 flex justify-between items-center">
            <button
              onClick={() => handleNavClick("#hero")}
              className="font-bold text-lg text-text no-underline bg-none border-none cursor-pointer"
            >
              SS
            </button>
            <button
              className="p-2 rounded-md text-text hover:bg-gray-200 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <GiHamburgerMenu size={24} className="text-text" />
            </button>
          </header>

          {/* Desktop Sidebar */}
          <aside className="hidden w-15 lg:flex fixed top-1/2 left-4 transform -translate-y-1/2 z-50  rounded-2xl shadow-lg p-4 flex-col items-center space-y-6">
            <button
              onClick={() => handleNavClick("#hero")}
              className="font-bold text-xl text-[#5E936C] no-underline bg-none border-none cursor-pointer"
            >
              SS
            </button>
            <nav>
              <ul className="space-y-6">
                {navLinks.map(({ link, icon }) => (
                  <li key={link} className="group flex justify-center">
                    <button
                      onClick={() => handleNavClick(link)}
                      className="text-lg text-center text-[#5E936C] hover:text-[#93DA97] transition-colors duration-300 bg-none border-none cursor-pointer"
                    >
                      {icon}
                      <span className="block underline w-0 group-hover:w-full transition-all duration-300 h-0.5 bg-[#93DA97]" />
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Theme Toggle Button */}
            <button
              onClick={() => {
                const nextTheme: Theme =
                  theme === "light"
                    ? "dark"
                    : theme === "dark"
                    ? "system"
                    : "light";
                setTheme(nextTheme);
              }}
              className="mt-4 px-3 py-2 cursor-pointer text-sm font-semibold text-white bg-[#5E936C] hover:bg-[#93DA97] rounded-lg transition"
              aria-label="Toggle theme"
            >
              {theme === "light" && <FaSun />}
              {theme === "dark" && <FaMoon />}
              {theme === "system" && <FaComputer />}
            </button>
            {/* Contact Button */}
            <button
              onClick={onContactClick}
              className="mt-4 px-3 py-2 bg-[#5E936C] cursor-pointer text-white rounded-full text-sm hover:bg-[#93DA97] transition"
              aria-label="Open contact form"
            >
              <MdEmail />
            </button>
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
                  <button
                    onClick={() => {
                      handleNavClick(link);
                      setMobileMenuOpen(false);
                    }}
                    className="text-xl text-[#5E936C] font-medium bg-none border-none cursor-pointer"
                  >
                    {name}
                  </button>
                </li>
              ))}
              {/* Contact Button for Mobile */}
              <li>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="inline-block cursor-pointer mt-4 px-4 py-2 text-lg text-white bg-[#5E936C] hover:bg-[#93DA97] rounded-lg transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavBar;
