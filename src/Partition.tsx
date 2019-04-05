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
  getZIndex: () => number
  promoteZIndex: () => void
  restoreZIndex: () => void
}

const Partition = (props: Props) => {
  const {
    color, gridArea, label, promoteZIndex, restoreZIndex, getZIndex,
    tooltipContent, tooltipPointingDirection,
  } = props;
  const [isTooltipShown, setIsTooltipShown] = useState<boolean>(false);
  const onMouseEnter = () => {
    promoteZIndex();
    setIsTooltipShown(true);
  }
  const onMouseLeave = () => {
    setIsTooltipShown(false);
    restoreZIndex();
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
        z-index: ${getZIndex()};
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
