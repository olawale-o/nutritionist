import { ReactNode } from "react";

const ActionButton = ({
  children,
  action,
}: {
  children: ReactNode;
  action: () => void;
}) => {
  return (
    <button type="button" onClick={action}>
      {children}
    </button>
  );
};

export { ActionButton };
