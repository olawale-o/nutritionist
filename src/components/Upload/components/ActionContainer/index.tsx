import { ReactNode } from "react";

const ActionContainer = ({ children }: { children: ReactNode }) => {
  return <div className="self-end flex space-x-2">{children}</div>;
};

export { ActionContainer };
