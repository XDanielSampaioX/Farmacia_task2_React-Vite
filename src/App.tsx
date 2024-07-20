import './App.css'
import Header from './components/Cabecalho'
import DivComp from './components/DivComp'
import MontaTabela from './components/MontaTabela'

const App = () => {

  return (
    <>
      <DivComp className="container-xl p-0 bg-color">
        <Header />
        <MontaTabela />
      </DivComp >
    </>
  )
}

export default App
