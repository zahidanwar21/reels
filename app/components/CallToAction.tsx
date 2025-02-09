"use client";

import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-4xl font-bold text-white mb-4">
          Ready to Share Your Vision?
        </h3>
        <p className="text-gray-300 mb-8">
          Join our community of creators and make your mark today.
        </p>
        <Link href="/signup" className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-cyan-500 hover:to-blue-600 transition">
            Get Started
         
        </Link>
      </div>
    </section>
  );
}
