import React, { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { ThemeProvider, css } from "@emotion/react";
import { basicColor } from "./assets/basicColor";
import { Appearance, Transform, rem } from ".";
import { IAppearance } from "./assets/Appearance";
import { ITransform } from "./assets/Transform";

interface Prop extends IAppearance, ITransform, HTMLAttributes<T> {
  children: ReactNode;
  inline?: boolean;
}

interface StyledProp extends HTMLAttributes<T>{
  properties?: {
    transform?: Transform;
    appearance?: Appearance;
    inline?: boolean;
  };
  theme?: ThemeProvider;
}
type Radii =
  | number
  | {
      topLeft?: number;
      topRight?: number;
      bottomLeft?: number;
      bottomRight?: number;
    };
const Element = styled.div(({ properties }: StyledProp) => {
  const appearance = properties?.appearance;
  const transform = properties?.transform;
  const horizontal = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
  };
  const vertical = {
    top: "flex-start",
    middle: "center",
    bottom: "flex-end",
  };
  const borderRadius = (radius: Radii) => {
    if (typeof radius !== "number") {
      return css`
        ${radius.topLeft &&
        css`
          border-top-left-radius: ${rem(radius.topLeft)};
        `}
        ${radius.topRight &&
        css`
          border-top-right-radius: ${rem(radius.topRight)};
        `}
        ${radius.bottomLeft &&
        css`
          border-bottom-left-radius: ${rem(radius.bottomLeft)};
        `}
        ${radius.bottomRight &&
        css`
          border-bottom-right-radius: ${rem(radius.bottomRight)};
        `}
      `;
    }
    return css`
      border-radius: ${rem(radius)};
    `;
  };
  const fill = appearance?.fill;
  const effects = appearance?.effects;
  return css`
    display: flex;
    flex-wrap: wrap;
    border: 0 solid black;
    justify-content: ${horizontal[transform?.align ?? "left"]};
    align-content: ${vertical[transform?.valign ?? "top"]};
    align-items: ${vertical[transform?.valign ?? "top"]};
    ${properties?.inline &&
    css`
      flex-basis: ${rem(transform?.w ?? 0)};
    `}
    ${!properties?.inline &&
    css`
      max-width: ${rem(transform?.w ?? "100%")};
    `}
    min-height: ${rem(transform?.h ?? "100%")};
    margin-top: ${rem(transform?.y ?? 0)};
    margin-left: ${rem(transform?.x ?? 0)};
    background-color: ${fill ? basicColor(fill[1])[fill[0]] : "transparent"};
    ${borderRadius(appearance?.radii ?? 0)};
    border-width: ${appearance?.stroke && rem(appearance?.stroke[0])};
    border-color: ${appearance?.stroke && appearance?.stroke[1]};
    ${!properties?.inline &&
    css`
      flex-basis: 100%;
    `}
  `;
});
const Rectangle = ({ children, transform, appearance, inline, ...props }: Prop) => {
  return (
    <Element properties={{ transform, appearance, inline }} {...props}>{children}</Element>
  );
};

export default Rectangle;
