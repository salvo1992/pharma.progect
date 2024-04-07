import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import NotFound from './components/NotFound';
import BookDetails from './components/BookDetails';
import UserPage from './components/Userpage';
import CartPage from './components/CartPage';
import ContactList from './ContactList';
import CommentPage from './CommentPage';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);

  // Funzione per aggiungere un libro al carrello
  const addToCart = (book) => {
    setCartItems([...cartItems, book]);
  };

  return (
    <BrowserRouter>
      <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Container>
        <Welcome />
        <Routes>
          <Route
            path="/"
            element={<AllTheBooks searchQuery={searchQuery} addToCart={addToCart} />} // Passa la funzione addToCart al componente AllTheBooks
          />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/CartPage" element={<CartPage cartItems={cartItems} />} />
          <Route path="/ContactList" element={<ContactList />} />
          <Route path="/CommentPage" element={<CommentPage />} />
          <Route path="/details/:asin" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;


