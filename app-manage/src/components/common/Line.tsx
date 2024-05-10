import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { TypeColor, rem } from "./assets/basicColor";

interface Props {
  at: {
    w?: number;
    h?: number;
    x?: number;
    y?: number;
    fill?: TypeColor;
    stroke?: [number, string];
  };
}

const StyledLine = styled.hr(({ at }: Props) => {
  return css`
    border: 0;
    border-top: 1px solid transparent;
    min-width: 100%;
    display: block;
    max-width: ${rem(at?.w ?? "100%")};
    min-height: ${rem(at?.h ?? "100%")};
    margin-top: ${rem(at?.y ?? 0)};
    margin-left: ${rem(at?.x ?? 0)};
    border-width: ${at?.stroke && rem(at?.stroke[0])};
    border-color: ${at?.stroke && at?.stroke[1]};
  `;
});

const Line = ({ at }: Props) => <StyledLine at={at} />;

export default Line;
