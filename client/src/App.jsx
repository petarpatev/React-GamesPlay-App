
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { UserProvider } from './contexts/user'

import Navigation from './components/navigation/Navigation'
import HomePage from './components/home-page/HomePage'
import LoginPage from './components/login-page/LoginPage'
import RegisterPage from './components/register-page/RegisterPage'
import CreatePage from './components/create-page/CreatePage'
import CatalogPage from './components/catalog-page/CatalogPage'
import LogoutPage from './components/logout-page/LogoutPage'
import DetailsPage from './components/details-page/DetailsPage'
import EditPage from './components/edit-page/EditPage'

function App() {

  return (
    <>
      <UserProvider>

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

      </UserProvider>


    </>
  )
}

export default App
