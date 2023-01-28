import { Route, Routes } from 'react-router-dom'
import { About, Contact, Home, Work } from './pages'
import { GlobalStyle } from './styles'
import 'animate.css'

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </>
  )
}

export default App
