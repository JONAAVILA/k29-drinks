import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import { Navbar } from './components'
import { Home } from './views'
import Login from './views/login/Login'
import Signin from './views/signin/Signin'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signin' element={<Signin/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
