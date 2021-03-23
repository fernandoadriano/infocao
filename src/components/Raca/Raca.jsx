/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import RacaSelecionada from '../RacaSelecionada';
import RacaNaoSelecionada from '../RacaNaoSelecionada';

const Raca = ({ raca, ...props }) => {
  const racaFoiSelecionada = Boolean(raca.name);

  return (
    racaFoiSelecionada
      ? <RacaSelecionada raca={raca} {...props} />
      : <RacaNaoSelecionada />
  );
};

Raca.propTypes = {
  raca: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default Raca;
