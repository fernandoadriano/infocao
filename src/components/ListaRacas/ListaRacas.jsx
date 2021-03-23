import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import RacaContext from 'src/Contexts/RacaContext';

const ListaRacaWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const RacaItem = styled.li`
    background-color: ${({ theme }) => theme.rosa};
    border: 2px solid ${({ theme }) => theme.rosaClaro};
    border-radius: 5px;
    color: ${({ theme }) => theme.branco};
    cursor: pointer;
    flex-grow: 1;
    margin: 10px;
    padding: 15px;
    text-align: center;

    &:hover {
      background-color: ${({ theme }) => theme.rosaClaro};
      color: ${({ theme }) => theme.rosa};
    }
`;

const ListaRacas = ({ racas }) => {
  const { setRacaSelecionada } = useContext(RacaContext);

  return (
    <ListaRacaWrapper>
      {
        racas.map((raca) => (
          <RacaItem
            key={raca.id}
            onClick={() => setRacaSelecionada(raca.name)}
          >
            {raca.name}
          </RacaItem>
        ))
      }
    </ListaRacaWrapper>
  );
};
ListaRacas.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  racas: PropTypes.array.isRequired,
};

export default ListaRacas;
