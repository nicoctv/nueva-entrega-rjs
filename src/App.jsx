import './App.css'
import ItemListContainer from './components/containers/ItemListContainers/ItemListContainer'
import Navbar from './components/navbar/navbar'
import { Button } from 'antd';

function App() {
  return (
    <Navbar />
   <ItemListContainer greeting={'Bienvenido'}/>
  )
}

export default App
