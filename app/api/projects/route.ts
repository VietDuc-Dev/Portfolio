import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextResponse) {
  try {
    const projects = await prisma.project.findUnique({
      where: { slug: "teams-project-management-app" },
      include: {
        images: true,
        skills: {
          include: { skill: true },
        },
        features: true,
      },
    });

    return NextResponse.json(
      { success: true, message: "successfully", projects },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "" }, { status: 500 });
  }
}
