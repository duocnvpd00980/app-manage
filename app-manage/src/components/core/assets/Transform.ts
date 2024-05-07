export type Transform = {
  w?: number;
  h?: number;
  x?: number;
  y?: number;
  align?: "left" | "center" | "right";
  valign?: "top" | "middle" | "bottom";
};

export interface ITransform {
  transform?: {
    w?: number;
    h?: number;
    x?: number;
    y?: number;
    align?: "left" | "center" | "right";
    valign?: "top" | "middle" | "bottom";
  };
}
