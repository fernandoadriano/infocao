import React from 'react';
import styled from 'styled-components';

const RacaNaoSelecionadaWrapper = styled.div`
  img {
    display: block;
    height: 150px;
    margin: 0 auto;
  }
`;

const RacaNaoSelecionada = () => (
  <RacaNaoSelecionadaWrapper>
    <img
      alt="Pug triste"
      src="https://www.oversodoinverso.com.br/wp-content/uploads/2015/05/pugs-tristes-2.jpg"
    />
  </RacaNaoSelecionadaWrapper>
);

export default RacaNaoSelecionada;
