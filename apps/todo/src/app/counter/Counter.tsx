import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CounterProps {}

const StyledCounter = styled.div`
  color: pink;
`;

export const Counter = (props: CounterProps) => {
  return (
    <StyledCounter>
      <h1 data-cy="counter">Welcome to Counter!</h1>
    </StyledCounter>
  );
};

export default Counter;
