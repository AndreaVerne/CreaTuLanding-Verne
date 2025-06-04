//import { useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer saludo='Bienvenidos a Kiri Makeup! 💄' />
      <ItemDetailContainer />
    </>
  )
}

export default App
