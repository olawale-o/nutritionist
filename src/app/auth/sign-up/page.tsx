import { getLoggedInUser } from "@/lib/server/appwrite";
import { SignUpPage } from "@/components/Auth/Sign-Up";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await getLoggedInUser();
  if (user) redirect("/uploads");

  return <SignUpPage />;
}
