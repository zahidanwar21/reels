// "use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";
// import { Loader2 } from "lucide-react";
// import { useNotification } from "./Notification";
// import { apiClient } from "@/lib/api-client";
// import FileUpload from "./FileUpload";

// interface VideoFormData {
//   title: string;
//   description: string;
//   videoUrl: string;
//   thumbnailUrl: string;
// }

// export default function VideoUploadForm() {
//   const [loading, setLoading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const { showNotification } = useNotification();

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm<VideoFormData>({
//     defaultValues: {
//       title: "",
//       description: "",
//       videoUrl: "",
//       thumbnailUrl: "",
//     },
//   });

//   const handleUploadSuccess = (response: IKUploadResponse) => {
//     setValue("videoUrl", response.filePath);
//     setValue("thumbnailUrl", response.thumbnailUrl || response.filePath);
//     showNotification("Video uploaded successfully!", "success");
//   };

//   const handleUploadProgress = (progress: number) => {
//     setUploadProgress(progress);
//   };

//   const onSubmit = async (data: VideoFormData) => {
//     if (!data.videoUrl) {
//       showNotification("Please upload a video first", "error");
//       return;
//     }

//     setLoading(true);
//     try {
//       await apiClient.createVideo(data);
//       showNotification("Video published successfully!", "success");

//       // Reset form after successful submission
//       setValue("title", "");
//       setValue("description", "");
//       setValue("videoUrl", "");
//       setValue("thumbnailUrl", "");
//       setUploadProgress(0);
//     } catch (error) {
//       showNotification(
//         error instanceof Error ? error.message : "Failed to publish video",
//         "error"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//       <div className="form-control">
//         <label className="label">Title</label>
//         <input
//           type="text"
//           className={`input input-bordered ${
//             errors.title ? "input-error" : ""
//           }`}
//           {...register("title", { required: "Title is required" })}
//         />
//         {errors.title && (
//           <span className="text-error text-sm mt-1">
//             {errors.title.message}
//           </span>
//         )}
//       </div>

//       <div className="form-control">
//         <label className="label">Description</label>
//         <textarea
//           className={`textarea textarea-bordered h-24 ${
//             errors.description ? "textarea-error" : ""
//           }`}
//           {...register("description", { required: "Description is required" })}
//         />
//         {errors.description && (
//           <span className="text-error text-sm mt-1">
//             {errors.description.message}
//           </span>
//         )}
//       </div>

//       <div className="form-control">
//         <label className="label">Upload Video</label>
//         <FileUpload
//           fileType="video"
//           onSuccess={handleUploadSuccess}
//           onProgress={handleUploadProgress}
//         />
//         {uploadProgress > 0 && (
//           <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
//             <div
//               className="bg-primary h-2.5 rounded-full transition-all duration-300"
//               style={{ width: `${uploadProgress}%` }}
//             />
//           </div>
//         )}
//       </div>

//       <button
//         type="submit"
//         className="btn btn-primary btn-block"
//         disabled={loading || !uploadProgress}
//       >
//         {loading ? (
//           <>
//             <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//             Publishing Video...
//           </>
//         ) : (
//           "Publish Video"
//         )}
//       </button>
//     </form>
//   );
// }

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";
import { Loader2 } from "lucide-react";
import { useNotification } from "./Notification";
import { apiClient } from "@/lib/api-client";
import FileUpload from "./FileUpload";

interface VideoFormData {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export default function VideoUploadForm() {
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { showNotification } = useNotification();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<VideoFormData>({
    defaultValues: {
      title: "",
      description: "",
      videoUrl: "",
      thumbnailUrl: "",
    },
  });

  const handleUploadSuccess = (response: IKUploadResponse) => {
    setValue("videoUrl", response.filePath);
    setValue("thumbnailUrl", response.thumbnailUrl || response.filePath);
    showNotification("Video uploaded successfully!", "success");
  };

  const handleUploadProgress = (progress: number) => {
    setUploadProgress(progress);
  };

  const onSubmit = async (data: VideoFormData) => {
    if (!data.videoUrl) {
      showNotification("Please upload a video first", "error");
      return;
    }

    setLoading(true);
    try {
      await apiClient.createVideo(data);
      showNotification("Video published successfully!", "success");

      // Reset form after successful submission
      setValue("title", "");
      setValue("description", "");
      setValue("videoUrl", "");
      setValue("thumbnailUrl", "");
      setUploadProgress(0);
    } catch (error) {
      showNotification(
        error instanceof Error ? error.message : "Failed to publish video",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-gray-900 p-6 rounded-xl shadow-xl">
      <div className="form-control">
        <label className="label text-white">Title</label>
        <input
          type="text"
          className={`input input-bordered bg-gray-800 text-white focus:border-cyan-400 transition duration-300 ${
            errors.title ? "input-error" : ""
          }`}
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && (
          <span className="text-red-500 text-sm mt-1">
            {errors.title.message}
          </span>
        )}
      </div>

      <div className="form-control">
        <label className="label text-white">Description</label>
        <textarea
          className={`textarea textarea-bordered bg-gray-800 text-white focus:border-cyan-400 transition duration-300 h-24 ${
            errors.description ? "textarea-error" : ""
          }`}
          {...register("description", { required: "Description is required" })}
        />
        {errors.description && (
          <span className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </span>
        )}
      </div>

      <div className="form-control">
        <label className="label text-white">Upload Video</label>
        <FileUpload
          fileType="video"
          onSuccess={handleUploadSuccess}
          onProgress={handleUploadProgress}
        />
        {uploadProgress > 0 && (
          <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
            <div
              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        )}
      </div>

      <button
        type="submit"
        className="btn btn-primary w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white transition duration-300 shadow-lg"
        disabled={loading || !uploadProgress}
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Publishing Video...
          </>
        ) : (
          "Publish Video"
        )}
      </button>
    </form>
  );
}
