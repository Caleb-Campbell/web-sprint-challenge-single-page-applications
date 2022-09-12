import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Error() {
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
        <h3>Oh no! There was an error! Please try again</h3>
      </section>
    </div>
  )
}
