"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-white mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} ImageKit ReelsPro. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <Link href="/privacy" className="text-gray-400 hover:text-white transition">
           
              Privacy Policy
          
          </Link>
          <Link href="/terms" className="text-gray-400 hover:text-white transition">
              Terms of Service
          
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-white transition">
      
              Contact Us
          
          </Link>
        </div>
      </div>
    </footer>
  );
}
