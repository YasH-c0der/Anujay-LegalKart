import React, { useState } from "react";

const logo = "https://ext.same-assets.com/2687021711/1045200163.png";
const cartIcon = "https://ext.same-assets.com/2687021711/1115332733.png";
const loginIcon = "https://ext.same-assets.com/2687021711/1256548985.png";

const DROPDOWNS = {
  "Find Lawyer": [
    { label: "By City", url: "#" },
    { label: "By Speciality", url: "#" },
    { label: "Top Rated", url: "#" },
    { label: "Book Appointment", url: "#" },
  ],
  "Legal Advice": [
    { label: "Call a Lawyer", url: "#" },
    { label: "Ask a Question", url: "#" },
    { label: "24x7 Advice", url: "#" },
  ],
  Documents: [
    { label: "Document Review", url: "#" },
    { label: "Drafting Services", url: "#" },
    { label: "Templates", url: "#" },
  ],
};

const NAV_LINKS = [
  { label: "Home", url: "#" },
  { label: "Find Lawyer", url: "#", dropdown: DROPDOWNS["Find Lawyer"] },
  { label: "Legal Advice", url: "#", dropdown: DROPDOWNS["Legal Advice"] },
  { label: "Documents", url: "#", dropdown: DROPDOWNS["Documents"] },
  { label: "Pricing", url: "#" },
];

export default function LegalKartNav() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // For click toggle (accessibility/fallback)
  const handleNavClick = (
    idx: number,
    hasDropdown: boolean,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (hasDropdown) {
      e.preventDefault();
      setOpenIndex(openIndex === idx ? null : idx);
    }
  };

  return (
    <header className="w-full bg-[#FFFFFF] text-[#1B1A2B] font-poppins shadow-md z-20 relative">
      <nav className="max-w-[1340px] mx-auto flex items-center justify-between h-20 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="LegalKart Logo" className="h-9 w-auto" />
        </div>
        <div className="flex justify-evenly gap-4">
        <div className="flex items-center gap-5">
            <button className="flex items-center gap-2 py-2 px-5 bg-[#4C50E0] rounded-full font-semibold text-[#fff] tracking-tight hover:bg-[#24959c] shadow-lg transition-colors duration-200">
              <span className="pt-[1px]">Talk to Lawyer</span>
            </button>
          </div>
        
        {/* Navigation Links */}
        
          <ul className="hidden md:flex items-center gap-4 text-base font-medium tracking-tight relative">
            {NAV_LINKS.map((nav, idx) => (
              <li key={nav.label} className="relative">
                {nav.dropdown ? (
                  <div
                    className="relative flex flex-col"
                    onMouseEnter={() => setOpenIndex(idx)}
                    onMouseLeave={() => setOpenIndex(null)}
                    tabIndex={0}
                  >
                    <a
                      href={nav.url}
                      className="transition-colors duration-200 hover:text-[#30bac1] text-[15px] px-2 flex items-center gap-1 cursor-pointer"
                      onClick={(e) => handleNavClick(idx, !!nav.dropdown, e)}
                    >
                      {nav.label}
                      <svg
                        width="12"
                        height="7"
                        fill="none"
                        className="ml-1 mt-[1px]"
                      >
                        <path
                          d="M1 1.5L6 6l5-4.5"
                          stroke="#1B1A2B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </a>
                    {openIndex === idx && (
                      <div className="absolute left-0 top-full pt-1 min-w-[180px] rounded-md shadow-lg bg-white text-[#292b51] py-2 z-50 border border-[#ececf4] animate-fadeIn">
                        {nav.dropdown.map((item) => (
                          <a
                            href={item.url}
                            key={item.label}
                            className="block px-5 py-2 hover:bg-[#f9f9fa] hover:text-[#30bac1] transition-colors text-[12px] whitespace-nowrap"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={nav.url}
                    className="transition-colors duration-200 hover:text-[#30bac1] px-2"
                  >
                    {nav.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          {/* Right Actions */}
          <div className="flex items-center gap-5">
            {/* Cart Icon */}
            {/* <button className="rounded-full p-2 hover:bg-[#232447] transition-colors">
            <img src={cartIcon} alt="Cart" className="h-6 w-6" />
          </button> */}
            {/* Login Button */}
            <button className="flex items-center gap-2 py-2 px-5 rounded-full font-semibold text-[#3f43c8] tracking-tight hover:bg-[#24959c] transition-colors duration-200">
              {/* <img src={loginIcon} alt="Login" className="h-5 w-5" /> */}
              <span className="pt-[1px]">Login</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
