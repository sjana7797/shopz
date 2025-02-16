import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  renderIf: boolean;
};

function Render({ children, renderIf }: Props) {
  return renderIf ? <>{children}</> : null;
}

export default Render;
