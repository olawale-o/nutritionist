import { ProductPage } from "@/components/Product";

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

export default function Page() {
  const [first, second, third] = [
    new Promise((resolve) => setTimeout(() => resolve("First"), 5000)),
    new Promise((resolve) => setTimeout(() => resolve("Second"), 10000)),
    new Promise((resolve) => setTimeout(() => resolve("Thirds"), 15000)),
  ];
  return <ProductPage first={first} second={second} third={third} />;
}
