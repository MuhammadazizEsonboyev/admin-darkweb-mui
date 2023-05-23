import React from 'react'
import Menu from './components/Menu/Menu'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Order from './components/Order/Product'

export default function App () {
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
    </>
  )
}
