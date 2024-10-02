import { SignInPage } from "@/components/Auth/Sign-In";
import { getLoggedInUser } from "@/lib/server/appwrite";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await getLoggedInUser();
  if (user) redirect("/uploads");
  return <SignInPage />;
}
