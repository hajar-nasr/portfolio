import { useState } from "react";
import ConnectLink from "./core/ConnectLink";
import NavbarIcon from "./core/NavbarIcon";
import NabbarMobileMenu from "./core/NabbarMobileMenu";

const NAVBAR_LINKS = [
  {
    id: "home",
    text: "Home",
    href: "/",
  },
  {
    id: "about",
    text: "About",
    href: "#about",
  },
  {
    id: "projects",
    text: "Projects",
    href: "#projects",
  },
  {
    id: "contact",
    text: "Contact",
    href: "#contact",
  },
];
const Logo = () => (
  <a
    href="/"
    className="text-3xl font-serif text-teal-400 font-bold hover:text-teal-300 transition-colors"
  >
    hajarNasr
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />
          <div className="hidden md:flex space-x-10">
            {NAVBAR_LINKS.map(({ id, text, href }) => {
              return (
                <a
                  href={href}
                  key={id}
                  className="text-gray-200 hover:text-teal-400 transition-colors tracking-wide relative after:content-[''] after:absolute after:bg-teal-400 after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {text}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex">
            <ConnectLink showIcon={false} />
          </div>

          <NavbarIcon isOpen={isOpen} onClick={toggleMenu} />
        </div>
      </div>
      <NabbarMobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        links={NAVBAR_LINKS}
      />
    </nav>
  );
};

export default Navbar;
