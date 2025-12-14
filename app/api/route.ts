import { NextResponse } from "next/server";
import React from "react";

export async function GET(req: NextResponse) {
  try {
    return NextResponse.json({ message: "Hello" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "" }, { status: 500 });
  }
}

export async function POST(req: NextResponse) {
  const { firstName, lastName, email, password } = await req.json();

  //   await dbConnect();

  try {
    // const user = await User.findOne({email});
    // LOGIC ...
    return NextResponse.json({ message: "" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "" }, { status: 500 });
  }
}
