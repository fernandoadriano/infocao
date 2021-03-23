import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from 'src/components/Text';
import Status from '../Status';

const CabecalhoWrapper = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.rosa};  
`;

const Cabecalho = ({ status }) => (
  <CabecalhoWrapper>
    <Text variant="titulo">Seja bem-vindo ao InfoCão</Text>

    <Text as="p" variant="paragraph">
      Clique em um nome e te daremos informações úteis sobre a raça e uma imagem bem bonita.
    </Text>

    <Status status={status} />
  </CabecalhoWrapper>
);

Cabecalho.propTypes = {
  status: PropTypes.string.isRequired,
};
export default Cabecalho;
