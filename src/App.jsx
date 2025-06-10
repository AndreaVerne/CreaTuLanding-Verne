//import { useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import './App.scss'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer saludo='Bienvenidos a Kiri Makeup! 💄' />} />
        <Route path='/item' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
