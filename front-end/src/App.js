
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'
import { Container } from 'react-bootstrap'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import BookDetails from './components/BookDetails'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <BrowserRouter>
      <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Container>
        <Welcome />
        <Routes>
          <Route path="/" element={<AllTheBooks searchQuery={searchQuery} />} />
          <Route path="/details/:asin" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <MyFooter />
    </BrowserRouter>
  )
}

export default App