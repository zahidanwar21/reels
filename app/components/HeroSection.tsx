"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-white drop-shadow-lg">
          Welcome to ImageKit ReelsPro
        </h2>
        <p className="mt-4 text-xl text-gray-200">
          Discover, share, and engage with stunning video content.
        </p>
        <div className="mt-8">
          <Link href="/upload" className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:from-cyan-500 hover:to-blue-600 transition">
           
              Upload Your Video

          </Link>
        </div>
      </div>
    </section>
  );
}
