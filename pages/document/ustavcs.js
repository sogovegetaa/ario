import React from 'react'
import Navbar from '../components/Navbar'

function Ustav() {
  return (
    <div>
        <Navbar/>
        <iframe src="/documents/polojenie.pdf" frameborder="0" className='w-full h-[100vh]'></iframe>
    </div>
  )
}

export default Ustav