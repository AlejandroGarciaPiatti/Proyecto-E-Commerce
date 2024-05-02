import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import "./App.css"

function App() {
  

  return (
    <>
      <div className="App">
      <NavBar />
      <ItemListContainer greeting={"...Sitio en construcción"}/>
      </div>
    </>
  )
}

export default App
