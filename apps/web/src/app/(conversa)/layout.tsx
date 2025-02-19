import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function ConversaLayout({ children }: Props) {
  return <div>{children}</div>;
}

export default ConversaLayout;
