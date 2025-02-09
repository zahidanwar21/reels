import ImageKit from "imagekit";
import { NextRequest, NextResponse } from "next/server";

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  privateKey: process.env.PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});

export async function GET() {
  try {
    const authenticationParameter = imagekit.getAuthenticationParameters();
    return NextResponse.json(authenticationParameter);
  } catch (error) {
    console.error("Imagekit error:", error);
    return NextResponse.json(
      { error: "Failed to get imagekit auth" },
      { status: 500 }
    );
  }
}
