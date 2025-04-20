import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/src/assets/images/logo.png"
            alt="LegalKart Logo"
            className="h-8"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary p-2"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-5">
          <Link to="/property" className="text-primary hover:text-secondary transition duration-300">Property</Link>
          <Link to="/documentation" className="text-primary hover:text-secondary transition duration-300">Documentation</Link>
          <Link to="/startup" className="text-primary hover:text-secondary transition duration-300">Startup</Link>
          <Link to="/citation" className="text-primary hover:text-secondary transition duration-300">Citation</Link>
          <Link to="/blogs" className="text-primary hover:text-secondary transition duration-300">Blogs</Link>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="flex items-center space-x-1 text-primary hover:text-secondary transition duration-300">
            <img
              src="/src/assets/images/login-icon.png"
              alt="Login"
              className="h-5 w-5"
            />
            <span>Login</span>
          </Link>
          <button className="bg-primary text-white px-4 py-2 rounded flex items-center space-x-1 hover:bg-primary-dark transition duration-300">
            <img
              src="/src/assets/images/talk-icon.png"
              alt="Talk"
              className="h-5 w-5 filter brightness-0 invert"
            />
            <span>Talk to Lawyer</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 z-50">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/property"
                className="text-primary hover:text-secondary transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Property
              </Link>
              <Link
                to="/documentation"
                className="text-primary hover:text-secondary transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Documentation
              </Link>
              <Link
                to="/startup"
                className="text-primary hover:text-secondary transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Startup
              </Link>
              <Link
                to="/citation"
                className="text-primary hover:text-secondary transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Citation
              </Link>
              <Link
                to="/blogs"
                className="text-primary hover:text-secondary transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
              <div className="pt-2 border-t flex flex-col space-y-3">
                <Link
                  to="/login"
                  className="flex items-center space-x-1 text-primary hover:text-secondary transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <img
                    src="/src/assets/images/login-icon.png"
                    alt="Login"
                    className="h-5 w-5"
                  />
                  <span>Login</span>
                </Link>
                <button
                  className="bg-primary text-white px-4 py-2 rounded flex items-center space-x-1 hover:bg-primary-dark transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <img
                    src="/src/assets/images/talk-icon.png"
                    alt="Talk"
                    className="h-5 w-5 filter brightness-0 invert"
                  />
                  <span>Talk to Lawyer</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
