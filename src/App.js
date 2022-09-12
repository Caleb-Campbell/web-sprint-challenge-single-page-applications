import React, {useState, useEffect} from "react";
import { Route, NavLink, useHistory} from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import Confirmation from "./components/Confirmation";
import "../src/App.css"
import pizzaSchema from "./validation";
import * as yup from 'yup'
import axios from "axios";
import Error from "./components/Error";

const App = () => {
  //APPPPP//

  // STATE SLICES ARE DEFINED //

  const [values, setValues] = useState({
    name: '',
    size: '',
    pep: false,
    saus: false,
    pin: false,
    olive: false,
    special: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    size: '',
    pep: '',
    saus: '',
    pin: '',
    olive: '',
    special: ''
  })

  const valid = (name, value) =>{
    yup
    .reach(pizzaSchema, name)
    .validate(value)
    .then(() => {
      setErrors({
        ...errors, [name]: ''
      })
    })
    .catch(err => {
      setErrors({
        ...errors, [name]: err.errors[0]
      })
    })
  }

  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    const newOrder = { 
      name: values.name.trim(),
      size: values.size,
      pep: values.pep,
      saus: values.saus,
      pin: values.pin,
      olive: values.olive,
      special: values.special

    }
    axios
    .post('https://reqres.in/api/orders', newOrder)
    .then(res => {
      history.push('/confirmation')
    })
    .catch(err => {
      history.push('/error')
    })

}

  const handleChange = (event) => {
    const {type, name, checked, value} = event.target
    const valueToUse = event.target.type === 'checkbox' ? checked : value
    setValues({...values, [name]: valueToUse})
    valid(name, valueToUse)
  }

  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pizza">
        <Form values={values} errorList={errors} change={handleChange} submit={handleSubmit}/>
      </Route>
      <Route path="/confirmation">
        <Confirmation />
      </Route>
      <Route path="/error">
        <Error />
      </Route>
    </div>
  );
};
export default App;
