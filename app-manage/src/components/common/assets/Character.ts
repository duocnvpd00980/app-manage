import { TypeColor } from "./basicColor";

export type Character = {
  font?: string;
  fontSize?: number;
  fontStyle?: "light" | "regular" | "semibold" | "bold" | "black";
  leading?: number;
  kerning?: number;
  color?: TypeColor;
};