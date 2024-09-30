import { createAdminClient } from "@/lib/server/appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function signInWithEmail(formData: FormData) {
  "use server";

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { account } = await createAdminClient();

  const session = await account.createEmailPasswordSession(email, password);

  cookies().set("user-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

  redirect("/uploads");
}

export { signInWithEmail };
