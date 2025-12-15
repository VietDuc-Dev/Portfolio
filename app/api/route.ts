import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ message: "Hello" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error system" }, { status: 500 });
  }
}
