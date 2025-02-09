// "use client";

// export default function Testimonials() {
//   const testimonials = [
//     {
//       name: "Jane Doe",
//       feedback: "ImageKit ReelsPro transformed my video sharing experience!",
//     },
//     {
//       name: "John Smith",
//       feedback: "The platform is sleek, fast, and so user-friendly.",
//     },
//     {
//       name: "Alex Johnson",
//       feedback: "A truly revolutionary way to engage with video content.",
//     },
//   ];

//   return (
//     <section className="py-16 bg-gradient-to-r from-purple-800 to-blue-900">
//       <div className="container mx-auto px-4">
//         <h3 className="text-4xl font-bold text-center text-white mb-10">
//           What Our Users Say
//         </h3>
//         <div className="flex flex-wrap justify-center gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="max-w-md bg-gray-800 p-8 rounded-lg shadow-xl"
//             >
//               <p className="text-gray-200 italic mb-4">
//                 "{testimonial.feedback}"
//               </p>
//               <p className="text-white font-bold text-right">
//                 - {testimonial.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jane Doe",
      feedback: "ImageKit ReelsPro transformed my video sharing experience!",
    },
    {
      name: "John Smith",
      feedback: "The platform is sleek, fast, and so user-friendly.",
    },
    {
      name: "Alex Johnson",
      feedback: "A truly revolutionary way to engage with video content.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-800 to-blue-900">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold text-center text-white mb-10">
          What Our Users Say
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="max-w-md bg-gray-800 p-8 rounded-lg shadow-xl"
            >
              <p className="text-gray-200 italic mb-4">
                &quot;{testimonial.feedback}&quot;
              </p>
              <p className="text-white font-bold text-right">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
