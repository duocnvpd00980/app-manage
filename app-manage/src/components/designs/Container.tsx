import React, { ReactNode } from "react";
import Rectangle from "../common/Rectangle";
import { TypeVariant } from "../common/assets/TypeVariant";

interface Props {
  children: ReactNode;
}

const variant: TypeVariant = {
    init: {
        transform: {
            align: "center",
            valign: "middle",
        },

    },
};



const Container = ({ children }: Props) => {
  return <Rectangle variant={variant["init"]}>{children}</Rectangle>;
};

export default Container;
