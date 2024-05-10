import { ReactNode } from "react";
import Rectangle from "../common/Rectangle";
import { TypeVariant } from "../common/assets/TypeVariant";

interface Props {
  children: ReactNode;
}

const variant: TypeVariant = {
    init: {
        transform: {
            w: 756,
            h: 550,
        },
    },
};

const Content = ({ children }: Props) => {
  return <Rectangle inline variant={variant["init"]}>{children}</Rectangle>;
};

export default Content;
