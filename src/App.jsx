import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import { Landing } from './views'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App