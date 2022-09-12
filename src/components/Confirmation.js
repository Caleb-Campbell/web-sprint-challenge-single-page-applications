import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


export default function Confirmation(props) {
  return (
    <div>
        <header>
        <h1>BloomTech Eats</h1>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/pizza'>Order</NavLink>
        </nav>
      </header>
      <section className='headBoard'>
        <h3>Next Stop: Your Mouth!</h3>
      </section>
    </div>
  )
}
