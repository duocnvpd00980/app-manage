import { ReactNode } from "react";
import { Rectangle } from "../common";
interface Props {
  children: ReactNode;
  as: "control-left" | "control-top" | "content";
}
const Container = ({ children }: Props) => {
  return <Rectangle transform={{ w: 360 }}>{children}</Rectangle>;
};

export default Container;
