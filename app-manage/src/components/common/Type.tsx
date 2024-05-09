"use client";
import { ThemeProvider, css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { basicColor } from "./assets/basicColor";
import { rem, Character, Paragraph, TypeOptions } from ".";

interface Prop {
  children: ReactNode;
  character?: Character;
  paragraph?: Paragraph;
  typeOptions?: TypeOptions;
  as?: "h1" | "h2";
  inline?: boolean;
}
interface StyledProp {
  properties?: {
    character?: Character;
    paragraph?: Paragraph;
    typeOptions?: TypeOptions;
    inline?: boolean;
  };
  theme?: ThemeProvider;
}
const Element = styled.div(({ properties }: StyledProp) => {
  const character = properties?.character;
  const paragraph = properties?.paragraph;
  const typeOptions = properties?.typeOptions;
  const options = {
    allCaps: css`
      text-transform: uppercase;
    `,
    underline: css`
      text-decoration: underline;
    `,
    superscript: css`
      vertical-align: super;
      font-size: smaller;
    `,
    subscript: css`
      vertical-align: sub;
      font-size: smaller;
    `,
    strikethrough: css`
      text-decoration: line-through;
    `,
    italic: css`
      font-style: italic;
    `,
  };

  const fontStyle = {
    light: 200,
    regular: 400,
    semibold: 500,
    bold: 600,
    black: 900,
  };
  const textAign = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
  };
  const color = character?.color;
  return css`
    display: inline-flex;
    font-family: ${character?.font ?? "inherit"};
    font-size: ${rem(character?.fontSize ?? 14)};
    letter-spacing: ${rem(character?.kerning ?? 0)};
    line-height: ${character?.leading ?? 1.4};
    font-weight: ${fontStyle[character?.fontStyle ?? "regular"]};
    color: ${color ? basicColor(color[1])[color[0]] : "inherit"};
    justify-content: ${paragraph
      ? paragraph !== "justify" && textAign[paragraph]
      : "flex-start"};
    ${paragraph === "justify" &&
    css`
      text-justify: justify;
    `}
    ${typeOptions && options[typeOptions]}
    ${!properties?.inline &&
    css`
      flex-basis: 100%;
    `}
    h1, h2, span {
      font-size: inherit;
      font-weight: inherit;
      line-height: inherit;
      margin: 0;
      padding: 0;
    }
  `;
});
const Type = ({
  as,
  children,
  character,
  paragraph,
  typeOptions,
  inline,
}: Prop) => {
  const render = (JSXElement: JSX.Element) => (
    <Element properties={{ character, paragraph, typeOptions, inline }}>
      {JSXElement}
    </Element>
  );
  if (!as && as !== "h1" && as !== "h2") return render(<span>{children}</span>);
  if (as !== "h1") return render(<h2>{children}</h2>);
  return render(<h1>{children}</h1>);
};

export default Type;
