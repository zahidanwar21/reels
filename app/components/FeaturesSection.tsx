"use client";

import { Check } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Seamless Upload",
      description: "Upload your videos with ease using our intuitive interface.",
    },
    {
      title: "High Quality",
      description: "Enjoy high resolution and optimized video playback.",
    },
    {
      title: "Community Engagement",
      description: "Connect with like-minded creators and viewers.",
    },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold text-center text-white mb-10">
          Features
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Check className="w-8 h-8 text-green-500 mr-2" />
                <h4 className="text-2xl font-semibold text-white">
                  {feature.title}
                </h4>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
