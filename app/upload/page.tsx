// "use client";

// import VideoUploadForm from "../components/VideoUploadForm";

// export default function VideoUploadPage() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-3xl font-bold mb-8">Upload New Reel</h1>
//         <VideoUploadForm />
//       </div>
//     </div>
//   );
// }

"use client";

import VideoUploadForm from "../components/VideoUploadForm";

export default function VideoUploadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Upload New Reel
          </h1>
          <VideoUploadForm />
        </div>
      </div>
    </div>
  );
}
