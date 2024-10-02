import {
  createNewsletterSubscriber,
  getNewsletterSubscriber,
} from "@/lib/server/appwrite/orm";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { event, body: "Hello, World!" };
  },
);

export const newsletterCampaign = inngest.createFunction(
  { id: "newsletter" },
  { event: "app/newsletter.confirm" },
  async ({ event, step }) => {
    const { user } = event.data;
    const { email, collectionId } = user;
    const response = await step.run("confirm-user-in-newsletter", async () => {
      return await getNewsletterSubscriber(email, collectionId);
    });
    // if (response.total < 1) {
    await step.sleep("wait-a-moment", "60s");
    const subscribeToNewsletter = await step.run(
      "subscribe-user-for-newsletter",
      async () => await createNewsletterSubscriber({ email }, collectionId),
    );
    console.log(subscribeToNewsletter);
    // } else {
    //   console.log("User is subscribed");
    // }
  },
);
