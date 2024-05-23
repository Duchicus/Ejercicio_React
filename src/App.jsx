import './App.css'
import Home from './components/Home/Home'
import Reserve from './components/Reserve/Reserve'
import Header from './components/Header/Header'
import Suprise from './components/Suprise/Suprise'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const dishes = [
    {
      id: 1,
      name: 'plato 1',
      description: 'Este es el plato 1',
      price: 10
    },
    {
      id: 2,
      name: 'plato 2',
      description: 'Este es el plato 2',
      price: 20
    },
    {
      id: 3,
      name: 'plato 3',
      description: 'Este es el plato 3',
      price: 15
    }
  ]
  const printDish = dishes.map((dish) => <Home dish={dish} />)

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/home" element={<Reserve />} />
        <Route path="/plates" element={printDish} />
        <Route path="/suprise" element={<Suprise/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
