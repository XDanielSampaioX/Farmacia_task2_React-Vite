import './App.css'
import Header from './components/Cabecalho'
import Container from './components/Container'
import MontaTabela from './components/MontaTabela'

const App = () => {

  return (
    <>
      <Container className="container-xl p-0 bg-color">
        <Header />
        <MontaTabela />
      </Container >
    </>
  )
}

export default App
