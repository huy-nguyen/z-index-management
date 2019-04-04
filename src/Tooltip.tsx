/** @jsx jsx */

import { jsx, css,Interpolation } from '@emotion/core'
import styled from '@emotion/styled';

export enum TooltipPointingDirection {
  Up,
  Down,
  Right,
}

const Root = styled.div`
  position: absolute;
  width: 20vw;
  height: 20vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    position: absolute;
    content: '';
    background-color: inherit;
    width: 5vmin;
    height: 5vmin;
  }
`

interface Props {
  direction: TooltipPointingDirection
  content: string;
  color: string;
}

const Tooltip = (props: Props) => {
  const {direction, color, content} = props;
  let positionStyle: Interpolation;
  if (direction === TooltipPointingDirection.Up) {
    positionStyle = css`
      color: ${color};
      top: 80%;
      left: 50%;
      transform: translateX(-50%);

      &::after {
        bottom: calc(100% - 1px);
        left: 50%;
        transform: translateX(-50%);
        clip-path: polygon(50% 0, 0 100%, 100% 100%);
      }
    `
  } else if (direction === TooltipPointingDirection.Down) {
    positionStyle = css`
      color: ${color};
      bottom: 80%;
      left: 50%;
      transform: translateX(-50%);

      &::after {
        top: calc(100% - 1px);
        left: 50%;
        transform: translateX(-50%);
        clip-path: polygon(100% 0, 0 0, 50% 100%);
      }
    `
  } else {
    positionStyle = css`
      color: ${color};
      top: 50%;
      right: 80%;
      transform: translateY(-50%);

      &::after {
        top: 50%;
        left: calc(100% - 1px);
        transform: translateY(-50%);
        clip-path: polygon(0 0, 0 100%, 100% 50%);
      }
    `
  }
  return (
    <Root css={positionStyle}>
      {content}
    </Root>
  )
}

export default Tooltip;
