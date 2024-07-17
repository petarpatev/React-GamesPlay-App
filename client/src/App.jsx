
import './App.css'

import { createContext, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navigation from './components/navigation/Navigation'
import HomePage from './components/home-page/HomePage'
import LoginPage from './components/login-page/LoginPage'
import RegisterPage from './components/register-page/RegisterPage'
import CreatePage from './components/create-page/CreatePage'
import CatalogPage from './components/catalog-page/CatalogPage'
import LogoutPage from './components/logout-page/LogoutPage'
import DetailsPage from './components/details-page/DetailsPage'
import { clearUserData, getUserData, setUserData } from './utils'
import EditPage from './components/edit-page/EditPage'

export const UserContext = createContext(null);

function App() {

  const [user, setUser] = useState(() => {
    const savedUser = getUserData();
    return savedUser ? savedUser : null
  });



  useEffect(() => {
    if (user) {
      setUserData(user);
    } else {
      clearUserData()
    }
  }, [user])

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>

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
              <Route path='/details/:gameId' element={<DetailsPage />} />
              <Route path='/edit/:gameId' element={<EditPage />} />
            </Routes>
          </main>

        </div>

      </UserContext.Provider>


    </>
  )
}

export default App
