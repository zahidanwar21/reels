import { IKVideo } from "imagekitio-next";
import Link from "next/link";
import { IVideo } from "@/models/Video";

export default function VideoComponent({ video }: { video: IVideo }) {
  return (
    <div className="card bg-base-100 shadow hover:shadow-lg transition-all duration-300">
      <figure className="relative px-4 pt-4">
        <Link href={`/videos/${video._id}`} className="relative group w-full">
          <div
            className="rounded-xl overflow-hidden relative w-full"
            style={{ aspectRatio: "9/16" }}
          >
            <IKVideo
              path={video.videoUrl}
              transformation={[
                {
                  height: "1920",
                  width: "1080",
                },
              ]}
              controls={video.controls}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </figure>

      <div className="card-body p-4">
        <Link
          href={`/videos/${video._id}`}
          className="hover:opacity-80 transition-opacity"
        >
          <h2 className="card-title text-lg">{video.title}</h2>
        </Link>

        <p className="text-sm text-base-content/70 line-clamp-2">
          {video.description}
        </p>
      </div>
    </div>
  );
}

// import { IKVideo } from "imagekitio-next";
// import Link from "next/link";
// import { IVideo } from "@/models/Video";

// export default function VideoComponent({ video }: { video: IVideo }) {
//   return (
//     <div className="card bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 rounded-xl">
//       <figure className="relative p-4">
//         <Link href={`/videos/${video._id}`} className="relative group block">
//           <div className="rounded-xl overflow-hidden relative w-full" style={{ aspectRatio: "9/16" }}>
//             <IKVideo
//               path={video.videoUrl}
//               transformation={[{ height: "1920", width: "1080" }]}
//               controls={video.controls}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition duration-300"></div>
//           </div>
//         </Link>
//       </figure>
//       <div className="card-body p-4">
//         <Link href={`/videos/${video._id}`} className="hover:opacity-80 transition-opacity">
//           <h2 className="card-title text-xl text-white">{video.title}</h2>
//         </Link>
//         <p className="text-sm text-gray-300 line-clamp-2">
//           {video.description}
//         </p>
//       </div>
//     </div>
//   );
// }
