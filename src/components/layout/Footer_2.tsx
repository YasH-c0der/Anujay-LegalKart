import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ width: "100%", padding: "0.5rem 0", background: "#fff", margin: "20px 0px" }}>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 24,
            marginBottom: 6,
          }}
        >
          <a href="#" style={{ color: "#14153A", fontSize: 18 }} aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" style={{ color: "#14153A", fontSize: 18 }} aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" style={{ color: "#14153A", fontSize: 18 }} aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
        <div style={{ fontSize: 11, color: "#14153A" }}>
          © 2024 JT it Back Office Technologies Pvt. Ltd. | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
