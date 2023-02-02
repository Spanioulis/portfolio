import { Route, Routes } from 'react-router-dom'
import AOS from 'aos'
import { About, Contact, Home, Work } from './pages'
import { GlobalStyle } from './styles'
import 'animate.css'
import 'aos/dist/aos.css'

AOS.init()

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
