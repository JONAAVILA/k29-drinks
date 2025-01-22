import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import { Navbar } from './components'
import { Home } from './views'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
