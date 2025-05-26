//import { useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import './App.css'

function App() {

  return (
    <>
    <NavBar></NavBar>
    <ItemListContainer saludo='Bienvenidos a Kiri Makeup! 💄'/>
          </>
  )
}

export default App
