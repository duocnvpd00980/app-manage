import { ReactNode } from "react";
import { Rectangle } from "../common";
import { TypeVariant } from "../common/assets/TypeVariant";

interface Props {
  children: ReactNode;
}

const variant: TypeVariant = {
    init:{
        transform:{
            h: 320,
        },
    }
}

const NavBar = ({ children }: Props) => {
  return <Rectangle variant={variant["init"]}>{children}</Rectangle>;
};

export default NavBar;
