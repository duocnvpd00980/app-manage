import { Line, Rectangle, Type } from "../common";
import { TypeVariant } from "../common/assets/TypeVariant";

const variants: TypeVariant = {
  columns: {
    transform: {
      w: 500,
    },
  },
  column: {
    transform: {
      w: 100,
      align: "center",
    },
  },
};

const Caption = () => (
  <Rectangle variant={variants["columns"]}>
    <Rectangle inline variant={variants["column"]}>
      <Type>name</Type>
    </Rectangle>
    <Rectangle inline variant={variants["column"]}>
      <Type>address</Type>
    </Rectangle>
    <Rectangle inline variant={variants["column"]}>
      <Type>time</Type>
    </Rectangle>
    <Line at={{ h: 10 }} />
  </Rectangle>
);

export default Caption;
