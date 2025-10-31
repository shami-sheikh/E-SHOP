import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-gray-400 font-serif">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 lg:px-20 py-12">
        <div>
          <Link
            to="/"
            className="text-2xl text-red-600 font-semibold block mb-3"
          >
            E-Shop
          </Link>
          <p className="text-sm leading-relaxed">
            Your one-stop shop for all your needs. Shop with us and experience
            the best online shopping.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-xl text-red-600 font-semibold mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-green-500 hover:underline transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="hover:text-green-500 hover:underline transition"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-green-500 hover:underline transition"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-green-500 hover:underline transition"
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h2 className="text-xl text-red-600 font-semibold mb-3">Follow Us</h2>
          <div className="flex gap-4 text-2xl mb-4">
            <a
              href="https://www.Facebook.com/sami_sheikh0075/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="hover:text-pink-500 cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/sami_sheikh0075/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareInstagram className="hover:text-pink-500 cursor-pointer" />
            </a>
               <a
              href="https://github.com/shami-sheikh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-pink-500 cursor-pointer" />
            </a>
            <FaTwitter className="hover:text-sky-400 cursor-pointer" />
          </div>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-l-lg outline-none bg-transparent border border-gray-600 text-gray-200 placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-red-500 px-4 rounded-r-lg text-white hover:bg-red-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center px-6 lg:px-20">
        <p>© 2025 E-Shop. All rights reserved.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <Link to="/privacy" className="hover:text-green-500 hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-green-500 hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
