import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import ItemListContainer from './containers/itemListContainer/itemListContainer'

function App() {
  const [categoria, setCategoria] = useState ('all')
    return (
  <>
    <Navbar handleCategoria = {setCategoria} />
    <ItemListContainer categoria = {categoria} />
    </>
  )
}

export default App
