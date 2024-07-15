
import './App.css'

import { createContext, useState, useEffect } from 'react'

import { Routes, Route } from 'react-router-dom'

import { getUserData } from './utils'

import Navigation from './components/navigation/Navigation'
import HomePage from './components/home-page/HomePage'
import LoginPage from './components/login-page/LoginPage'
import RegisterPage from './components/register-page/RegisterPage'
import CreatePage from './components/create-page/CreatePage'
import CatalogPage from './components/catalog-page/CatalogPage'
import LogoutPage from './components/logout-page/LogoutPage'

export const UserContext = createContext(null);

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(user)
  })

  return (
    <>
      <UserContext.Provider value={[user, setUser]}>

        <div id="box">

          <Navigation />

          <main id="main-content">
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/catalog' element={<CatalogPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/logout' element={<LogoutPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/create' element={<CreatePage />} />
            </Routes>
          </main>

        </div>

      </UserContext.Provider>


    </>
  )
}

export default App
