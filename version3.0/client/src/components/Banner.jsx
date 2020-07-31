import React from 'react';
import styled from 'styled-components';

// this represents the notices

// the styles

const Title = styled.h1`
  color: ${(props) => props.theme.Wisteria};
  padding: 8px;
`;

const Para = styled.h3`
  color: ${(props) => props.theme.Heliotrope};
`;

const Div = styled.div`
  height: 300px;
  background: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
`;

function Banner({ children, title, subtitle }) {
  return (
    <Div>
      <div>
        <Title className="text-center">{title}</Title>
        <div>
          <Para className="text-center">{subtitle}</Para>
        </div>

        {children}
      </div>
    </Div>
  );
}

export default Banner;
