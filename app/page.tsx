// // "use client";

// // import React, { useEffect, useState } from "react";
// // // import VideoFeed from "./components/VideoFeed";
// // import { IVideo } from "@/models/Video";
// // import { apiClient } from "@/lib/api-client";
// // import VideoFeed from "./components/VideoFeed";

// // export default function Home() {
// //   const [videos, setVideos] = useState<IVideo[]>([]);

// //   useEffect(() => {
// //     const fetchVideos = async () => {
// //       try {
// //         const data = await apiClient.getVideos();
// //         setVideos(data);
// //       } catch (error) {
// //         console.error("Error fetching videos:", error);
// //       }
// //     };

// //     fetchVideos();
// //   }, []);

// //   return (
// //     <main className="container mx-auto px-4 py-8">
// //       <h1 className="text-3xl font-bold mb-8">ImageKit ReelsPro</h1>
// //       <VideoFeed videos={videos} />
// //     </main>
// //   );
// // }

// "use client";

// import React, { useEffect, useState } from "react";
// import { IVideo } from "@/models/Video";
// import { apiClient } from "@/lib/api-client";
// import VideoFeed from "./components/VideoFeed";

// export default function Home() {
//   const [videos, setVideos] = useState<IVideo[]>([]);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const data = await apiClient.getVideos();
//         setVideos(data);
//       } catch (error) {
//         console.error("Error fetching videos:", error);
//       }
//     };

//     fetchVideos();
//   }, []);

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
//       <div className="container mx-auto px-4 py-12">
//         <h1 className="text-4xl lg:text-5xl font-extrabold mb-10 text-center drop-shadow-lg">
//           ImageKit{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
//             ReelsPro
//           </span>
//         </h1>
//         <VideoFeed videos={videos} />
//       </div>
//     </main>
//   );
// }


"use client";

import React, { useEffect, useState } from "react";
import { IVideo } from "@/models/Video";
import { apiClient } from "@/lib/api-client";
import VideoFeed from "./components/VideoFeed";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  const [videos, setVideos] = useState<IVideo[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await apiClient.getVideos();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <HeroSection />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-10 text-center drop-shadow-lg">
          ImageKit{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            ReelsPro
          </span>
        </h1>
        <VideoFeed videos={videos} />
      </div>
      <FeaturesSection />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
