import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [legalAdviceOpen, setLegalAdviceOpen] = useState(false);
  const [documentsOpen, setDocumentsOpen] = useState(false);
  const { pathname } = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Reset menus when route changes
  useEffect(() => {
    setIsOpen(false);
    setLegalAdviceOpen(false);
    setDocumentsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Reset submenu states when closing main menu
    if (isOpen) {
      setLegalAdviceOpen(false);
      setDocumentsOpen(false);
    }
  };

  // Toggle submenu for Legal Advice
  const toggleLegalAdvice = () => {
    setLegalAdviceOpen(!legalAdviceOpen);
    // Close other submenu when opening this one
    if (!legalAdviceOpen) {
      setDocumentsOpen(false);
    }
  };

  // Toggle submenu for Documents
  const toggleDocuments = () => {
    setDocumentsOpen(!documentsOpen);
    // Close other submenu when opening this one
    if (!documentsOpen) {
      setLegalAdviceOpen(false);
    }
  };

  // Active style for NavLink
  const activeStyle = "text-secondary";
  const navLinkClasses = ({ isActive }: { isActive: boolean }) => `
    hover:text-secondary font-medium transition-colors
    ${isActive ? activeStyle : isScrolled ? "text-[#2b2b50]" : "text-white"}
  `;

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300
          
          ${isScrolled ? "bg-white shadow-md" : "bg-[#07070d]"}
          `}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="LegalKart Logo"
                  className="h-8"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {/* <NavLink to="/" end className={navLinkClasses}>
                Home
              </NavLink>
              <NavLink to="/find-lawyer" className={navLinkClasses}>
                Find Lawyer
              </NavLink> */}
              <div className="relative group">
                <button
                  className={`hover:text-secondary font-medium flex items-center ${isScrolled ? "text-[#2b2b50]" : "text-white"}`}
                >
                  Property
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <Link
                      to="/family-law"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Family Law
                    </Link>
                    <Link
                      to="/property-law"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Property Law
                    </Link>
                    <Link
                      to="/criminal-law"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Criminal Law
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button
                  className={`hover:text-secondary font-medium flex items-center ${isScrolled ? "text-[#2b2b50]" : "text-white"}`}
                >
                  Documents
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <Link
                      to="/agreements"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Agreements
                    </Link>
                    <Link
                      to="/wills"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Wills
                    </Link>
                    <Link
                      to="/trademarks"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Trademarks
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button
                  className={`hover:text-secondary font-medium flex items-center ${isScrolled ? "text-[#2b2b50]" : "text-white"}`}
                >
                  Startup
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <Link
                      to="/agreements"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Agreements
                    </Link>
                    <Link
                      to="/wills"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Wills
                    </Link>
                    <Link
                      to="/trademarks"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Trademarks
                    </Link>
                  </div>
                </div>
              </div>
              <NavLink to="/pricing" className={navLinkClasses}>
                Challan
              </NavLink>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/talk-to-lawyer"
                className="bg-secondary text-black px-4 py-2 rounded-md transition-colors"
              >
                Talk to Lawyer
              </Link>
              <Link
                to="/login"
                className={`hover:text-secondary ${isScrolled ? "text-[#2b2b50]" : "text-white"}`}
              >
                Login
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center z-50">
              <button
                onClick={toggleMenu}
                className={`focus:outline-none ${isScrolled && !isOpen ? "text-[#2b2b50]" : "text-white"}`}
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
          onClick={toggleMenu}
        />

        {/* Mobile Menu */}
        <div
          className={`fixed top-[72px] left-0 right-0 bottom-0 md:hidden overflow-y-auto transition-transform duration-300 ease-in-out z-40 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="bg-white shadow-lg h-full">
            <nav className="flex flex-col">
              {/* <Link
                to="/"
                className="text-gray-800 hover:text-[#33b5bb] font-medium py-3 px-4 border-b border-gray-200"
              >
                Home
              </Link>
              <Link
                to="/find-lawyer"
                className="text-gray-800 hover:text-[#33b5bb] font-medium py-3 px-4 border-b border-gray-200"
              >
                Find Lawyer
              </Link> */}

              <div className="border-b border-gray-200">
                <button
                  onClick={toggleLegalAdvice}
                  className="w-full flex justify-between items-center text-gray-800 hover:text-[#33b5bb] font-medium py-3 px-4"
                >
                  <span>Property</span>
                  <svg
                    className={`w-4 h-4 text-gray-500 transform transition-transform duration-300 ${legalAdviceOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    legalAdviceOpen
                      ? "max-h-40 opacity-100 visible bg-gray-50"
                      : "max-h-0 opacity-0 invisible"
                  }`}
                >
                  <div className="py-2 px-8">
                    <Link
                      to="/family-law"
                      className="block py-2 text-sm text-gray-700 hover:text-[#33b5bb]"
                    >
                      Family Law
                    </Link>
                    <Link
                      to="/property-law"
                      className="block py-2 text-sm text-gray-700 hover:text-[#33b5bb]"
                    >
                      Property Law
                    </Link>
                    <Link
                      to="/criminal-law"
                      className="block py-2 text-sm text-gray-700 hover:text-[#33b5bb]"
                    >
                      Criminal Law
                    </Link>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200">
                <button
                  onClick={toggleDocuments}
                  className="w-full flex justify-between items-center text-gray-800 hover:text-[#33b5bb] font-medium py-3 px-4"
                >
                  <span>Documents</span>
                  <svg
                    className={`w-4 h-4 text-gray-500 transform transition-transform duration-300 ${documentsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    documentsOpen
                      ? "max-h-40 opacity-100 visible bg-gray-50"
                      : "max-h-0 opacity-0 invisible"
                  }`}
                >
                  <div className="py-2 px-8">
                    <Link
                      to="/agreements"
                      className="block py-2 text-sm text-gray-700 hover:text-[#33b5bb]"
                    >
                      Agreements
                    </Link>
                    <Link
                      to="/wills"
                      className="block py-2 text-sm text-gray-700 hover:text-[#33b5bb]"
                    >
                      Wills
                    </Link>
                    <Link
                      to="/trademarks"
                      className="block py-2 text-sm text-gray-700 hover:text-[#33b5bb]"
                    >
                      Trademarks
                    </Link>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200">
                <button
                  onClick={toggleDocuments}
                  className="w-full flex justify-between items-center text-gray-800 hover:text-[#33b5bb] font-medium py-3 px-4"
                >
                  <span>Startup</span>
                  <svg
                    className={`w-4 h-4 text-gray-500 transform transition-transform duration-300 ${documentsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    documentsOpen
                      ? "max-h-40 opacity-100 visible bg-gray-50"
                      : "max-h-0 opacity-0 invisible"
                  }`}
                >
                  <div className="py-2 px-8">
                    <Link
                      to="/agreements"
                      className="block py-2 text-sm text-gray-700 hover:text-[#33b5bb]"
                    >
                      Agreements
                    </Link>
                    <Link
                      to="/wills"
                      className="block py-2 text-sm text-gray-700 hover:text-[#33b5bb]"
                    >
                      Wills
                    </Link>
                    <Link
                      to="/trademarks"
                      className="block py-2 text-sm text-gray-700 hover:text-[#33b5bb]"
                    >
                      Trademarks
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                to="/pricing"
                className="text-gray-800 hover:text-[#33b5bb] font-medium py-3 px-4 border-b border-gray-200"
              >
                Challan
              </Link>

              <div className="flex flex-col space-y-3 p-4">
                <Link
                  to="/talk-to-lawyer"
                  className="bg-secondary text-black py-3 rounded-md text-center transition-colors"
                >
                  Talk to Lawyer
                </Link>
                <Link
                  to="/login"
                  className="border border-[#33b5bb] text-[#33b5bb] py-3 rounded-md text-center hover:bg-[#f0fbfc] transition-colors"
                >
                  Login
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* Spacer div to prevent content from being hidden under fixed navbar */}
      <div className="h-[72px]" />
    </>
  );
};

export default Navbar;
