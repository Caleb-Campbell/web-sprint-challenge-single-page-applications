import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {Router, useHistory} from 'react-router-dom'


export default function Home(props) {

const history = useHistory()

const handleClick = () => {
history.push('/pizza')
}

  return (
    <div>
      <header>
        <h1>BloomTech Eats</h1>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink id='order-pizza' to='/pizza'>Order</NavLink>
        </nav>
      </header>
    <section className='headBoard'>
      <h3>Your favorite food, delivered while coding</h3>
      <button onClick={handleClick} className='ButtonRegular'>Pizza?</button>
    </section>
    </div>
  )
}
