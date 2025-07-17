import styled from 'styled-components'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

const Opcoes = styled.ul`
  display: flex;
`

const Opcao = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-width: 120px;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`

function OpcoesHeader () {
    return (
        <Opcoes>
          { textoOpcoes.map( (texto) => (
            <Opcao><p>{texto}</p></Opcao>
          ) )  }
        </Opcoes>
    )
}

export default OpcoesHeader