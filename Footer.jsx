// import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-center md:text-left">
            Ready to transform your business?
          </h2>
          <button className="rounded full border  px-8 py-2 border-white/50 l hover:bg-white hover:text-blue-700 transition">
            Get started
          </button>
        </div>
        <div className="border-t border-white/20 my-16"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">consulting</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Industry-leading consulting firm with innovative solutions
            </p>
            {/* <div className="flex gap-4">
              <Facebook size={18} />
              <Twitter size={18} />
              <Instagram size={18} />
              <Youtube size={18} />
            </div> */}
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <a className="text-white" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="text-white" href="/">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-white" href="/">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Pages</h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <a className="text-white" href="/">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-white" href="/">
                  Contact
                </a>
              </li>
              <li>
                <a className="text-white" href="/">
                  404
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-white/80">
              <li>Market research</li>
              <li>Strategic planning</li>
              <li>Financial advisory</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
