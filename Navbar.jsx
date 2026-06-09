import React from "react";
const Navbar = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://framerusercontent.com/images/a27czPfQpRbb7irqRTDpBX19pLw.jpg?width=5402&height=3602')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex justify-center pt-6 px-4">
          <div className="w-full max-w-6xl bg-white/10 backdrop-blur-md rounded-full border border-white/10 px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 text-white font-semibold">
              <div className="w-3 h-3 bg-blue-500"></div>
              <span>consulting</span>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8 text-white">
              <li className="hover:text-gray-300 cursor-pointer">Home</li>
              <li className="hover:text-gray-300 cursor-pointer">About</li>
              <li className="hover:text-gray-300 cursor-pointer">Services</li>
              <li className="hover:text-gray-300 cursor-pointer">Blog</li>
            </ul>

            {/* Contact Button */}
            <button className="hidden md:block border border-white/40 text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
              Contact
            </button>

            {/* Mobile Menu Icon */}
            <button className="md:hidden text-white text-2xl">☰</button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex items-center justify-center min-h-[80vh]">
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold">
            Services
          </h1>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
