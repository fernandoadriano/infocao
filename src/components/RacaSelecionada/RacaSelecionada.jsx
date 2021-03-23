import React from 'react';
import styled from 'styled-components';

import Text from 'src/components/Text';

const Image = styled.img`
  max-width: 100%;
  min-width: 300px;
  max-height: 300px;
  object-fit: cover;
  flex-grow: 1;
`;

const RacaSelecionadaWrapper = styled.div`
  width: 300px;
  margin: 0 auto;
  border: 4px solid ${({ theme }) => theme.colors.rosa};
  border-radius: 5px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.rosa};
  display: flex;
  flex-direction: column;

  &.invisivel {
    display: none;
  }
`;

const RacaSelecionada = ({ raca }) => (
  <RacaSelecionadaWrapper>
    <Text as="h2" variant="racaSelecionadaNome">
      {raca.name}
    </Text>
    <Text as="p" variant="racaSelecionadaInfo">
      <Text as="span" variant="racaSelecionadaInfoDescricao">
        Tempo de vida:
      </Text>
      {raca.life_span}
    </Text>
    <Image
      alt="Imagem de raca"
      src={raca.imagem}
    />
  </RacaSelecionadaWrapper>
);

export default RacaSelecionada;
