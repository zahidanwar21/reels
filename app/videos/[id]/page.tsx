        // // app/videos/[id]/page.jsx (if you are using app)


        
        // export default async function VideoPage({ params }: { params: { id: string } }) {
        //   const { id } = params;

        //   // Fetch video details based on the ID
        //   // ... your fetching logic here ...

        //   return (
        //     <div>
        //       <h1>Video ID: {id}</h1>
        //       {/* Display video details */}
        //     </div>
        //   );
        // }

        // app/videos/[id]/page.tsx
// import React from "react";

// export default async function VideoPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   // Fetch video details from your API
//   // Using no-store cache to always get the latest video data
//   const res = await fetch(`http://localhost:3000/api/videos/${params.id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-900 text-red-500">
//         <h1 className="text-2xl">Video not found</h1>
//       </div>
//     );
//   }

//   const video = await res.json();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
//       <div className="container mx-auto px-4 py-12">
//         <div className="max-w-3xl mx-auto bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-lg shadow-xl p-8">
//           <h1 className="text-4xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
//             {video.title}
//           </h1>
//           <video controls className="w-full rounded mb-6">
//             <source src={video.videoUrl} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           <p className="text-lg mb-4">{video.description}</p>
//           {video.thumbnailUrl && (
//             <img
//               src={video.thumbnailUrl}
//               alt={video.title}
//               className="w-full rounded shadow-lg"
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";

// export default async function VideoPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   // Fetch video details from your API with no-store caching to always get fresh data
//   const res = await fetch(`http://localhost:3000/api/videos/${params.id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-900 text-red-500">
//         <h1 className="text-2xl">Video not found</h1>
//       </div>
//     );
//   }

//   const video = await res.json();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
//       <div className="container mx-auto px-4 py-12">
//         <div className="max-w-3xl mx-auto bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-lg shadow-xl p-8">
//           <h1 className="text-4xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
//             {video.title}
//           </h1>
//           <video controls className="w-full rounded mb-6">
//             <source src={video.videoUrl} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           <p className="text-lg mb-4">{video.description}</p>
//           {video.thumbnailUrl && (
//             <img
//               src={video.thumbnailUrl}
//               alt={video.title}
//               className="w-full rounded shadow-lg"
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from "react";

// export default async function VideoPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   // Await the dynamic route parameters before destructuring
//   const { id } = await Promise.resolve(params);

//   // Fetch video details from your API with no-store caching to always get fresh data
//   const res = await fetch(`http://localhost:3000/api/videos/${id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-900 text-red-500">
//         <h1 className="text-2xl">Video not found</h1>
//       </div>
//     );
//   }

//   const video = await res.json();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
//       <div className="container mx-auto px-4 py-12">
//         <div className="max-w-3xl mx-auto bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-lg shadow-xl p-8">
//           <h1 className="text-4xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
//             {video.title}
//           </h1>
//           <video controls className="w-full rounded mb-6">
//             <source src={video.videoUrl} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           <p className="text-lg mb-4">{video.description}</p>
//           {video.thumbnailUrl && (
//             <Image
//               src={video.thumbnailUrl}
//               alt={video.title}
//               className="w-full rounded shadow-lg"
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



import Image from "next/image";

export default async function VideoPage({
  params,
}: {
  params: { id: string };
}) {
  // Destructure the dynamic route parameters directly
  const { id } = params;

  // Fetch video details from your API with no-store caching to always get fresh data
  const res = await fetch(`http://localhost:3000/api/videos/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-red-500">
        <h1 className="text-2xl">Video not found</h1>
      </div>
    );
  }

  const video = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            {video.title}
          </h1>
          <video controls className="w-full rounded mb-6">
            <source src={video.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-lg mb-4">{video.description}</p>
          {video.thumbnailUrl && (
            <Image
              src={video.thumbnailUrl}
              alt={video.title}
              className="w-full rounded shadow-lg"
              width={800}
              height={450}
            />
          )}
        </div>
      </div>
    </div>
  );
}

