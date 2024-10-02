import { inngest } from "@/inngest/client";
import { SendEventOutput } from "inngest/types";
import { NextResponse } from "next/server"; // Import our client

// Opt out of caching; every request should send a new event
export const dynamic = "force-dynamic";

async function getRuns(eventId: string) {
  const response = await fetch(
    `https://api.inngest.com/v1/events/${eventId}/runs`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_INNGEST_SIGNING_KEY}`,
      },
    },
  );
  const json = await response.json();
  return json.data;
}

async function getRunOutput(eventId: string) {
  let runs = await getRuns(eventId);
  // while (runs[0].status !== "Completed") {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  //   runs = await getRuns(eventId);
  //   if (runs[0].status === "Failed" || runs[0].status === "Cancelled") {
  //     throw new Error(`Function run ${runs[0].status}`);
  //   }
  // }
  // return runs[0];
  return runs;
}

// Create a simple async Next.js API route handler
export async function GET() {
  // Send your event payload to Inngest
  const { ids } = await inngest.send({
    name: "app/newsletter.confirm",
    data: {
      user: {
        email: "omoogunolawale@gmail.com",
        collectionId: "66fae88e0030b1416466",
      },
    },
  });

  const run = await getRunOutput(ids[0]);
  console.log(run);

  return NextResponse.json({ name: "User already subscribed" });
}
