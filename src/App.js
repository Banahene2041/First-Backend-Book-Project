import React from 'react'
//  react router dom
import { Routes, Route } from 'react-router-dom'
// pages
import Home from "./pages/Home"
import About from "./pages/About"
import SingleBook from "./pages/SingleBook"
import CreateBook from "./pages/CreateBook"
import DeleteBook from "./pages/DeleteBook"
import UpdateBook from "./pages/UpdateBook"
import ErrorPage from "./pages/ErrorPage"

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/singlebook/:id' element={<SingleBook />}/>
      <Route path='/deletebook/:id' element={<DeleteBook />}/>
      <Route path='/updatebook/:id' element={<UpdateBook />}/>
      <Route path='/createbook' element={<CreateBook />}/>
      <Route path='*' element={<ErrorPage />}/>
    </Routes>
  )
}

export default App
