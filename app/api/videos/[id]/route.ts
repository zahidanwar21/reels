// import { NextRequest, NextResponse } from "next/server";
// import { connectToDatabase } from "@/lib/db";
// import Video, { IVideo } from "@/models/Video";

// export async function GET(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     // Ensure the database is connected
//     await connectToDatabase();

//     // Find the video by its ID and convert it to a plain object
//     const video = await Video.findById(params.id).lean();

//     // If no video is found, return a 404 response
//     if (!video) {
//       return NextResponse.json(
//         { error: "Video not found" },
//         { status: 404 }
//       );
//     }

//     // Return the video data as JSON with a 200 status code
//     return NextResponse.json(video, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching video:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch video" },
//       { status: 500 }
//     );
//   }
// }


// import { NextRequest, NextResponse } from "next/server";
// import { connectToDatabase } from "@/lib/db";
// import Video, { IVideo } from "@/models/Video";
// import { Types } from "mongoose";

// export async function GET(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     // Ensure the database connection is established
//     await connectToDatabase();

//     // Validate that the provided ID is a valid ObjectId
//     if (!Types.ObjectId.isValid(params.id)) {
//       return NextResponse.json(
//         { error: "Invalid video ID" },
//         { status: 400 }
//       );
//     }

//     // Convert the string ID to a Mongoose ObjectId and fetch the video
//     const video = await Video.findById(new Types.ObjectId(params.id)).lean();

//     // If no video is found, return a 404 response
//     if (!video) {
//       return NextResponse.json(
//         { error: "Video not found" },
//         { status: 404 }
//       );
//     }

//     // Return the video data as JSON with a 200 status code
//     return NextResponse.json(video, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching video:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch video" },
//       { status: 500 }
//     );
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Video, { IVideo } from "@/models/Video";
import { Types } from "mongoose";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    // Ensure the database connection is established
    await connectToDatabase();

    // Await the dynamic parameters before using them
    const resolvedParams = await Promise.resolve(context.params);

    // Validate that the provided ID is a valid ObjectId
    if (!Types.ObjectId.isValid(resolvedParams.id)) {
      return NextResponse.json(
        { error: "Invalid video ID" },
        { status: 400 }
      );
    }

    // Convert the string ID to a Mongoose ObjectId and fetch the video
    const video = await Video.findById(new Types.ObjectId(resolvedParams.id)).lean();

    // If no video is found, return a 404 response
    if (!video) {
      return NextResponse.json(
        { error: "Video not found" },
        { status: 404 }
      );
    }

    // Return the video data as JSON with a 200 status code
    return NextResponse.json(video, { status: 200 });
  } catch (error) {
    console.error("Error fetching video:", error);
    return NextResponse.json(
      { error: "Failed to fetch video" },
      { status: 500 }
    );
  }
}
