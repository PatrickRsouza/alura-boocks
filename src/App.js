import Header from './componentes/Header';
import styled from 'styled-components'
import Pesquisa from './componentes/Pesquisa';
import UltimosLancamento from './componentes/UltimosLancamentos';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
      <UltimosLancamento/>
    </AppContainer>
  );
}

export default App;
