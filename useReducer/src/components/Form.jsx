import React, { useReducer, useState } from 'react'
import {
  UPDATE_FORM,
  onInputChange,
  onFocusOut,
  validateInput,
} from './lib/utl'

const initialState = {
  name: { value: '', touched: false, hasError: true, error: '' },
  email: { value: '', touched: false, hasError: true, error: '' },
  password: { value: '', touched: false, hasError: true, error: '' },

  isFormValid: false,
}
function formsReducer(state, action) {
  return {
    ...state,
    [action.type]: action.payload,
  }
}

const Form = () => {
  const [formState, dispatch] = useReducer(formsReducer, initialState)

  const [showError, setShowError] = useState(false)

  const formSubmitHandler = (e) => {
    e.preventDefault() 

    let isFormValid = true

    for (const name in formState) {
      const item = formState[name]
      const { value } = item
      const { hasError, error } = validateInput(name, value)
      if (hasError) {
        isFormValid = false
      }
      if (name) {
        dispatch({
          type: UPDATE_FORM,
          data: {
            name,
            value,
            hasError,
            error,
            touched: true,
            isFormValid,
          },
        })
      }
    }
    if (!isFormValid) {
      setShowError(true)
    } else {
      //Logic to submit the form to backend
    }

    // Hide the error message after 5 seconds
    setTimeout(() => {
      setShowError(false)
    }, 5000)
  }
  return (
    <div>
      <form>
        <div className="input_wrapper">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formState.name.value}
            onChange={(e) => {
              onInputChange('name', e.target.value, dispatch, formState)
            }}
            onBlur={(e) => {
              onFocusOut('name', e.target.value, dispatch, formState)
            }}
          />
          {formState.name.touched && formState.name.hasError && (
            <div className="error">{formState.name.error}</div>
          )}
        </div>
        <div className="input_wrapper">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formState.email.value}
            onChange={(e) => {
              onInputChange('email', e.target.value, dispatch, formState)
            }}
            onBlur={(e) => {
              onFocusOut('email', e.target.value, dispatch, formState)
            }}
          />
          {formState.email.touched && formState.email.hasError && (
            <div className="error">{formState.email.error}</div>
          )}
        </div>
        <div className="input_wrapper">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formState.password.value}
            onChange={(e) => {
              onInputChange('password', e.target.value, dispatch, formState)
            }}
            onBlur={(e) => {
              onFocusOut('password', e.target.value, dispatch, formState)
            }}
          />
          {formState.password.touched && formState.password.hasError && (
            <div className="error">{formState.password.error}</div>
          )}
        </div>

        <div className="input_wrapper">
          <input className="submit_btn" type="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  )
}

export default Form
