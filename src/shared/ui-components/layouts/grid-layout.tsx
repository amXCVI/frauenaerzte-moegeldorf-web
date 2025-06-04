import { ReactNode } from "react";

const GridLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="flex flex-col md:grid grid-cols-2 h-dvh">{children}</div>
  );
};

export { GridLayout };
