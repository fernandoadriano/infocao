const colors = {
  azul: '#8AC6FD',
  azulClaro: '#f0ffff',
  verdeAgua: '#7bffff',
  branco: '#fff',
  rosa: '#ffa5ae',
  rosaClaro: '#ffd7df',
  cinzaClaro: '#efefef',
  laranja: '#fe5f55',
  marrom: '#311e10',
};

const variants = {
  titulo: {
    marginBottom: 0,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  paragraph: {
    margin: '0',
  },
  status: {
    backgroundColor: colors.branco,
    padding: '10px',
    display: 'inline-block',
    fontWeight: 'bold',
    boxShadow: `0 0 8px rgba(${colors.rosaClaro}, .5)`,
  },
  racaSelecionadaNome: {
    margin: 0,
    backgroundColor: colors.rosa,
    color: colors.branco,
    paddingCop: '10px',
    fontSize: '18px',
    fontWeight: 'normal',
  },
  racaSelecionadaInfo: {
    backgroundColor: colors.rosa,
    margin: 0,
    color: colors.branco,
    padding: '5px',
    fontSize: '14px',
  },
  racaSelecionadaInfoDescricao: {
    fontWeight: 'bold',
  },
};

export default {
  colors,
  fontePadrao: '\'Open Sans\', sans-serif',
  variants,

};
