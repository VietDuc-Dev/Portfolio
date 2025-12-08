import { APP_CONFIG } from "@/config";
import { Webhook } from "svix";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import type { WebhookEvent } from "@clerk/nextjs/server";
import slugify from "slugify";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const WEBHOOK_SECRET = APP_CONFIG.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  const headerPayload = await headers();

  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return Response.json(
      { success: false, message: "Error occurred -- no svix headers" },
      {
        status: 400,
      }
    );
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (error) {
    console.error("Error verifying webhook:", error);
    return Response.json(
      { success: false, message: "Error occurred" },
      {
        status: 400,
      }
    );
  }

  /* ---------------- USER CREATED ---------------- */
  if (evt.type === "user.created") {
    try {
      const { id, email_addresses, first_name, last_name, image_url } =
        evt.data;

      const primaryEmail = email_addresses[0]?.email_address;

      if (!primaryEmail) {
        console.error("No primary email found");
        return Response.json(
          { success: false, message: "No primary email found" },
          { status: 400 }
        );
      }

      const name =
        `${first_name ?? ""} ${last_name ?? ""}`.trim() ||
        primaryEmail.split("@")[0] ||
        "User";

      const slug = slugify(`${name}-${id.slice(-6)}`, {
        lower: true,
        strict: true,
      });

      await prisma.user.upsert({
        where: { email: primaryEmail },
        update: {
          name,
          profileImageUrl: image_url,
        },
        create: {
          id,
          email: primaryEmail,
          name,
          slug,
          profileImageUrl: image_url,
          role: "USER",
        },
      });
    } catch (error) {
      console.log("Error creating user in database:", error);
      return NextResponse.json(
        { success: false, message: "Error creating user" },
        { status: 500 }
      );
    }
  }

  return NextResponse.json(
    { success: true, message: "Webhook received successfully" },
    { status: 200 }
  );
}
