/** @jsx jsx */

import { jsx } from '@emotion/core'
import styled from '@emotion/styled';
import Partition, {
} from './Partition';
import {
  TooltipPointingDirection,
} from './Tooltip';
import usePromotableZIndex from './usePromotableZIndex';

export enum GridArea {
  A = 'A',
  B = 'B',
  C = 'C',
}

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2vmin;
  grid-template-areas:
    "${GridArea.A} ${GridArea.A} ${GridArea.B}"
    "${GridArea.C} ${GridArea.C} ${GridArea.B}";
`;

const App = () => {
  const zIndices = {
    A: 10,
    B: 20,
    C: 30,
  }
  const {getZIndex, promoteZIndex, restoreZIndex} = usePromotableZIndex({
    normalZIndices: zIndices,
    promotedZIndex: 100,
  })
  return (
    <Root>
      <Partition
        color='#1b9e77'
        label='A'
        tooltipContent={'A'}
        gridArea={GridArea.A}
        tooltipPointingDirection={TooltipPointingDirection.Up}
        getZIndex={() => getZIndex('A')}
        promoteZIndex={() => promoteZIndex('A')}
        restoreZIndex={restoreZIndex}
      />
      <Partition
        color='#d95f02'
        label='B'
        tooltipContent={'B'}
        gridArea={GridArea.B}
        tooltipPointingDirection={TooltipPointingDirection.Right}
        getZIndex={() => getZIndex('B')}
        promoteZIndex={() => promoteZIndex('B')}
        restoreZIndex={restoreZIndex}
      />
      <Partition
        color='#7570b3'
        label='C'
        tooltipContent={'C'}
        gridArea={GridArea.C}
        tooltipPointingDirection={TooltipPointingDirection.Down}
        getZIndex={() => getZIndex('C')}
        promoteZIndex={() => promoteZIndex('C')}
        restoreZIndex={restoreZIndex}
      />
    </Root>
  );
}

export default App;
