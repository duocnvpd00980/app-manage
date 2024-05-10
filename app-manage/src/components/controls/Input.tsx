import { Line, Rectangle } from "../common";
import { TypeVariant } from "../common/assets/TypeVariant";

interface Prop {
  onChange: (e: string) => void;
}

const variant: TypeVariant = {
  init: {
    transform: {
      w: 480,
    },
  },
};

const Input = ({ onChange }: Prop) => {
  return (
    <>
      <Rectangle variant={variant["init"]}>
        <input
          style={{ width: "100%" }}
          type="text"
          onChange={(e) => onChange(e.target.value)}
          placeholder="Name skill"
        />
      </Rectangle>
      <Line at={{ y: 24, h: 20, stroke: [1, "#736c6c"] }} />
    </>
  );
};

export default Input;
