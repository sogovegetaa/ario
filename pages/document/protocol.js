import React from 'react'
import Navbar from '../components/Navbar'

function Protocol() {
  return (
    <div>
        <Navbar/>
        <iframe src="/documents/protocol.pdf" frameborder="0" className='w-full h-[100vh]'></iframe>
    </div>
  )
}

export default Protocol