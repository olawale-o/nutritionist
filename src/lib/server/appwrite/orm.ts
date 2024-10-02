import { Client, Databases, Query, Permission, Role, ID } from "node-appwrite";

export async function getNewsletterSubscriber(
  email: string,
  collectionId: string,
) {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT || "");
  // .setSession(''); // The user session to authenticate with

  const databases = new Databases(client);

  const promise = await databases.listDocuments(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
    collectionId,
    [Query.equal("email", email)], // queries (optional)
  );

  return promise;
}

export async function createNewsletterSubscriber(
  data: Record<string, any>,
  collectionId: string,
): Promise<any> {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT || "");

  const databases = new Databases(client);

  const promise = await databases.createDocument(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
    collectionId,
    ID.unique(),
    data,
    [
      Permission.read(Role.any()), // Anyone can view this document
    ],
  );
  return promise;
}
