import React from 'react';

import styled from 'styled-components';

const Content = styled.div`
  width: 100%;
`;
const Name = styled.h3`
  text-align: center;
`;
const Icon = styled.div`
  width: 100%;
`;

const Technology = (props) => {
  return (
    <Content>
      <Name>{props.name}</Name>
    </Content>
  );
};

export default Technology;
