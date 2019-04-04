/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled';
import {
  GridArea,
} from './App';
import { useState } from 'react';
import Tooltip, {
  TooltipPointingDirection,
} from './Tooltip';


const Root = styled.div`
  position: relative;
  color: white;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`


interface Props {
  color: string
  label: string
  tooltipContent: string
  tooltipPointingDirection: TooltipPointingDirection
  gridArea: GridArea
  zIndex: number
}

const Partition = (props: Props) => {
  const {
    color, gridArea, label, zIndex,
    tooltipContent, tooltipPointingDirection,
  } = props;
  const [isTooltipShown, setIsTooltipShown] = useState<boolean>(false);
  const onMouseEnter = () => {
    setIsTooltipShown(true);
  }
  const onMouseLeave = () => {
    setIsTooltipShown(false);
  }
  let tooltip: React.ReactElement<any> | null;
  if (isTooltipShown === true) {
    tooltip = (
      <Tooltip
        content={tooltipContent}
        direction={tooltipPointingDirection}
        color={color}
      />
    );
  } else {
    tooltip = null;
  }
  return (
    <Root
      css={css`
        background-color: ${color};
        grid-area: ${gridArea};
        z-index: ${zIndex};
      `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {tooltip}
      {label}
    </Root>
  )
}

export default Partition;
