import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Form(props) {

  const {values,change, submit, errorList} = props

  return (
    <div>
        <header>
        <h1>BloomTech Eats</h1>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/pizza'>Order</NavLink>
        </nav>
        <section className='headBoard'>
          <h3>Lets get you that pizza you deserve</h3>
        </section>
        <div className='pizzaTime'>
          <form onSubmit={submit} id='pizza-form'>
            <label> Name
              <input
              placeholder='Papa John'
                type='text'
                name='name'
                id='name-input'
                value={values.name}
                onChange={change}
              /><p>{errorList.name}</p>
            </label>
            <label> Size
              <select
                type='dropdown'
                name='size'
                id='size-dropdown'
                value={values.size}
                onChange={change}
              >
                <option name='select'>--Select A Size --</option>
                <option name='8inch' >8 inch</option>
                <option name='10inch'>10 inch</option>
                <option name='12inch'>12 inch</option>
                <option name='16inch'>16 inch</option>
              </select>
            </label>
            <label className='checkboxes'> Select Toppings:
              <label> Pepperoni
              <input onChange={change} type='checkbox' name='pep' checked={values.pep} />
              </label>
              <label> Sausage 
              <input onChange={change} type='checkbox' name='saus' checked={values.saus} />
              </label>
              <label> Pineapple 
              <input onChange={change} type='checkbox' name='pin' checked={values.pin} />
              </label>
              <label> Olives
              <input onChange={change} type='checkbox' name='olive' checked={values.olive}  />
              </label>
            </label>
            <label> Special Instructions: 
              <input
              rows='12'
              type='text'
              name='special'
              id='special-text'
              placeholder='ex: Leave at door'
              />
            </label>
              <label>
            <input  className='submit' id='order-button' type='submit' value='Pizza Time' />
              </label>

          </form>


        </div>
        </header>
      
    </div>
  )
}
