import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 !p-6 !mt-10">
      <div className="container mx-auto px-6 !md:px-12 flex flex-col md:flex-row justify-between items-center">
        {/* Quick Links */}
        <nav className="!mb-4 !md:mb-0">
          <ul className="flex !space-x-6">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#work" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </nav>
        
        {/* Social Media Links */}
        <div className="flex !space-x-4 !mb-4 !md:mb-0">
          <a href="#footer" className="text-gray-400 hover:text-white"><FaFacebook size={20} /></a>
          <a href="#footer" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
          <a href="#footer" className="text-gray-400 hover:text-white"><FaLinkedin size={20} /></a>
          <a href="#footer" className="text-gray-400 hover:text-white"><FaGithub size={20} /></a>
        </div>
        
        {/* Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
