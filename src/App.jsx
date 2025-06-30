//import { useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import './App.scss'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import { CartProvider } from './context/CartContext';

function App() {
 // initializeApp(firebaseConfig);
  return (
    <BrowserRouter>
      <CartProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer saludo='Bienvenidos a Kiri Makeup! 💄' />} />
        <Route path='/category/:categoryId' element={<ItemListContainer saludo='Estas en la categoria: ' />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
