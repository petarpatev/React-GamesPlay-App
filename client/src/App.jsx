import { useState } from 'react'
import './App.css'

import Navigation from './components/navigation/Navigation'
import HomePage from './components/home-page/HomePage'
import LoginPage from './components/login-page/LoginPage'
import RegisterPage from './components/register-page/RegisterPage'
import CreatePage from './components/create-page/CreatePage'
import EditPage from './components/edit-page/EditPage'
import DetailsPage from './components/details-page/DetailsPage'
import CatalogPage from './components/catalog-page/CatalogPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="box">
        <Navigation />

        <main id="main-content"></main>

        <HomePage />

        <LoginPage />

        <RegisterPage />

        <CreatePage />

        <EditPage />

        <DetailsPage />

        <CatalogPage />
        
      </div>

    </>
  )
}

export default App
