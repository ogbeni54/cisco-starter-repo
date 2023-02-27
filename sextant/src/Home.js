import React from 'react'
import Info from './components/Info'
import './Home.css'

export default function Home() {
  return (
    <div className='home'>
      <h2 className='head1'>
        Network Info Base
      </h2>
      <div className='info_base'>
        <div className='info_content'>
          <Info/>
        </div>
      </div>
    </div>
  )
}
