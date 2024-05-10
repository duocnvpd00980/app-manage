import { Appearance } from "./Appearance";
import { Transform } from "./Transform";

export interface TypeVariant {
  [x: string]: {
    transform?: Transform;
    appearance?: Appearance;
  };
}
