import { redirect } from "next/navigation";
import { ProductPage } from "@/components/Product";
import { getLoggedInUser } from "@/lib/server/appwrite";
import {
  createNewsletterSubscriber,
  getNewsletterSubscriber,
} from "@/lib/server/appwrite/orm";
import { ErrorBoundaryWithFallback } from "@/components/Error";
import { Suspense } from "react";

function unsafe_createSequentialProcesses<T extends any[], R>(
  ...processes: [
    (arg?: any) => Promise<T[0]>,
    ...((arg: any) => Promise<any>)[],
  ]
): Promise<R>[] {
  return processes.reduce((acc, process, index) => {
    if (index === 0) {
      return [process(undefined)];
    }
    return [...acc, acc[acc.length - 1].then(process)];
  }, [] as Promise<any>[]);
}

export default async function Page() {
  // const [first, third] = [
  //   new Promise((resolve) => setTimeout(() => resolve("First"), 5000)),
  //   new Promise((resolve) => setTimeout(() => resolve("Second"), 10000)),
  //   new Promise((resolve) => setTimeout(() => resolve("Thirds"), 15000)),
  // ];

  const user = await getLoggedInUser();

  if (!user) redirect("/auth/sign-in");
  // const first = getNewsletterSubscriber(
  //   user.email,
  //   process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID || "",
  // );
  // const second = createNewsletterSubscriber(
  //   { email: user.email },
  //   process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID || "",
  // );

  // return <ProductPage second={second} />;
  //
  return (
    <ErrorBoundaryWithFallback>
      <Suspense fallback={<div>Loading</div>}>
        <ProductPage />
      </Suspense>
    </ErrorBoundaryWithFallback>
  );
}
