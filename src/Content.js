import React from 'react'

import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
function Content() {
  return (
    <div className='content'><Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
   
   </Routes> </div>
  )
}

export default Content