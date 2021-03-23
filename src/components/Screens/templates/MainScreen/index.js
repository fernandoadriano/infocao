import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import Raca from 'src/components/Raca';
import ListaRacas from 'src/components/ListaRacas';
import Cabecalho from 'src/components/Cabecalho';

import RacaContext from 'src/Contexts/RacaContext';

import { buscaSobreRacas, buscaImagemPorRaca, buscaTodasRacas } from 'src/api';

const MainScreenStyled = styled.div`
  padding: 30px;
  margin: 0 auto;
`;

const MainScreen = () => {
  const [status, setStatus] = useState('Você ainda não selecionou nenhum cachorro :(');
  const [racas, setRacas] = useState([]);
  const [racaSelecionada, setRacaSelecionada] = useState({});
  const selectionarRaca = async (raca) => {
    const infoSelecionada = racas.filter((r) => r.name === raca);

    try {
      const imagem = await buscaImagemPorRaca(raca);
      setRacaSelecionada({ ...infoSelecionada[0], imagem });
      setStatus('A imagem sempre será diferente, pode clicar quantas vezes quiser!');
    } catch (erro) {
      const eh404 = erro.status === 404;
      const mensagem = eh404 ? 'Não encontramos essa raça :(' : 'Oops, algo deu errado. Pode tentar novamente?';
      setStatus(mensagem);
    }
  };

  useEffect(async () => {
    try {
      const dadosRacas = await buscaSobreRacas();
      const listaRacasFotos = await buscaTodasRacas();

      setRacas(dadosRacas.filter((dado) => listaRacasFotos.includes(dado.name.toLowerCase())));
    } catch {
      setStatus('Oops, algo deu errado no carregamento da página. Pode tentar novamente?');
    }
  }, []);

  return (
    <RacaContext.Provider value={{
      setRacaSelecionada: selectionarRaca,
    }}
    >
      <MainScreenStyled>
        <Cabecalho status={status} />
        <Raca raca={racaSelecionada} />
        <ListaRacas racas={racas} />
      </MainScreenStyled>
    </RacaContext.Provider>
  );
};

export default MainScreen;
