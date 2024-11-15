import './App.css'
import  { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Pnf from './pages/Pnf'
import Auth from './pages/Auth'
import Footer from './components/Footer'

function App() {

  return (
    <>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path='/login' element={<Auth/>}/>
  <Route path='/register' element={<Auth insideRegister={true}/>}/>
  <Route path='/*' element={<Pnf/>}/>
  </Routes>
  <Footer/>
    </>
  )
}

export default App
