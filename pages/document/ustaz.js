import React from 'react'
import Navbar from '../components/Navbar'

function Ustaz() {
  return (
    <div>
        <Navbar/>
        <iframe src="/documents/ustaz.pdf" frameborder="0" className='w-full h-[100vh]'></iframe>
    </div>
  )
}

export default Ustaz