import type { ReactNode } from "react";

type Props = { children: ReactNode; condition: boolean };

function Render({ children, condition }: Props) {
  return condition ? children : null;
}

export default Render;
