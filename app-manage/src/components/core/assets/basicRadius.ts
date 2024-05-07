import { css } from "@emotion/react";

export const borderRadius = (radius: Radii) => {
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
