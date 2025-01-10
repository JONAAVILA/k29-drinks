import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import { Navbar } from './components'
import { Landing } from './views'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
