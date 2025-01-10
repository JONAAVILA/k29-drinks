import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import { Landing } from './views'
import './App.css'
import Navbar from './components/navbar/Navbar'

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
