import React from 'react'

import {Route,Routes } from "react-router-dom"
import { JournalPage } from '../pages/JournalPage'
import { LoginPage } from '../../auth/pages'

export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path='login' element={<LoginPage/>}/>
        
        <Route path='/*' element={<JournalPage/>}/>
    </Routes>
  )
}
