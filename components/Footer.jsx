import React from "react";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>&copy;2022 Kimbrell Kreations | All rights reserved.</p>
      <p className="icons">
        <Link
          href="https://www.instagram.com/kimbrellkreations/"
          target="_blank"
        >
          <AiFillInstagram />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
