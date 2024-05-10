import { ReactNode } from "react";
import { Rectangle } from "../common";
import { TypeVariant } from "../common/assets/TypeVariant";

interface Props {
  children: ReactNode;
}

const variant: TypeVariant = {
    init:{
        transform:{
            w: 180,
            h: 550,
        },
    }
}

const Sidebar = ({ children }: Props) => {
  return <Rectangle inline variant={variant["init"]}>{children}</Rectangle>;
};

export default Sidebar;
