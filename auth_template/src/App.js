import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import TopPicks from './components/TopPicks'
import Admin from './components/Admin'
import Login from './components/Auth/Login'
import Logout from './components/Auth/Logout'
import Signup from './components/Auth/Signup'
import {AuthProvider} from './components/Auth/AuthProvider'
import ProtectedRoutes from './components/Auth/ProtectedRoutes'
import Hotels from './components/Auth/Hotels'
import { StrictMode } from 'react'

function App() {
  return (
    <StrictMode>
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header/>
          <Navigation/>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/picks" element={<TopPicks/>}/>

            <Route path="/admin" element={<ProtectedRoutes/>}>
              <Route path="dashboard" element={<Admin/>}>
                <Route path="hotels" element={<Hotels/>}/>
              </Route>
            </Route>
           
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/logout" element={<Logout/>} />
               
              
            <Route path="/about" element={<About/>}/>
            <Route path='*' element={<Home/>} />
          </Routes>
        
        </AuthProvider>
      </BrowserRouter>
    </div>
    </StrictMode>
  );
}

export default App;
