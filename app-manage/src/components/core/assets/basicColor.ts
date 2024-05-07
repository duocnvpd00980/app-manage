
export type TypeColor = [
  "red" | "orange" | "yellow" | "green" | "blue" | "purple",
  "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" 
]
export const basicColor = (light: string) => {
  return {
    red: `hsl(0, 100%, ${light}%)`,
    orange: `hsl(39, 100%, ${light}%)`,
    yellow: `hsl(60, 100%, ${light}%)`,
    green: `hsl(120, 100%, ${light}%)`,
    blue: `hsl(240, 100%, ${light}%)`,
    purple: `hsl(300, 100%, ${light}%)`,
  };
};

export const rem = (px: number | string) => {
  if (typeof px !== "number") {
    return px;
  }
  return px / 16 + "rem";
};