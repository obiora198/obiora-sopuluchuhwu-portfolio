import { NextResponse } from "next/server";
import getProjects from "../../../firebase/firestore/getProjects";

export async function GET() {
  try {
    const data = await getProjects();
    return NextResponse.json({ data: data, status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 401 }
    );
  }
}
