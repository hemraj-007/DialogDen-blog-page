import { BrowserRouter,Route,Routes } from 'react-router-dom'
import {Signin} from './pages/Siginin'
import {Signup} from './pages/Signup'
import {Blog} from './pages/Blog'
import { Blogs } from './pages/Blogs'
import './App.css'

function App() {
  return(
    <>
        <BrowserRouter>
            <Routes>
              <Route path='signin' element={<Signin/>}/>
              <Route path='signup' element={<Signup/>}/>
              <Route path='blog/:id' element={<Blog/>}/>
              <Route path='/blogs' element={<Blogs/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
