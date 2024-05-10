import { TypeColor } from "./basicColor";

export type Appearance = {
  fill?: TypeColor;
  stroke?: [number, string];
  radii?:
    | number
    | {
        topLeft?: number;
        topRight?: number;
        bottomLeft?: number;
        bottomRight?: number;
      };
  effects?: {
    innerShadow?: number;
    dropShadow?: number;
    backroundBlue?: number;
    cursor?: "pointer" | "none";
  };
};

export interface IAppearance extends Appearance {
  appearance?: {
    fill?: TypeColor;
    stroke?: [number, string];
    radii?:
    | number
    | {
      topLeft?: number;
      topRight?: number;
      bottomLeft?: number;
      bottomRight?: number;
    };
    effects?: {
    innerShadow?: number;
    dropShadow?: number;
    backroundBlue?: number;
    };
  };
}