import { getLoggedInUser } from "@/lib/server/appwrite";
import { redirect } from "next/navigation";
import { UploadPage } from "@/components/Upload";

export default async function Page() {
  const user = await getLoggedInUser();

  if (!user) redirect("/auth/sign-in");

  return <UploadPage />;
}
