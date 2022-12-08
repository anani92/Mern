import React, { useState } from 'react'

const Form = () => {
  let [fname, setFname] = useState('')
  let [lname, setLname] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [confirmPassword, setConfirmPassword] = useState('')
  let [firstNameError, setFirstNameError] = useState('')
  let [lastNameError, setLastNameError] = useState('')
  let [emailError, setEmailError] = useState('')
  let [passError, setPassError] = useState('')
  let [confirmError, setConfirmError] = useState('')

  const firstNameValidation = (e) => {
    setFname(e.target.value)

    if (e.target.value.length < 3 && e.target.value.length > 1) {
      setFirstNameError('first name should be at least 3 charachters')
    } else {
      setFirstNameError('')
    }
  }

  const lastNameValidation = (e) => {
    setLname(e.target.value)

    if (e.target.value.length < 3 && e.target.value.length > 1) {
      setLastNameError('last name should be at least 3 charachters')
    } else {
      setLastNameError('')
    }
  }
  const emailValidation = (e) => {
    setEmail(e.target.value)

    if (e.target.value.length < 5 && e.target.value.length > 1) {
      setEmailError('email should be at least 5 charachters')
    } else {
      setEmailError('')
    }
  }

  const passValidation = (e) => {
    setPassword(e.target.value)

    if (e.target.value.length < 8 && e.target.value.length > 1) {
      setPassError('password should  be at least 8 charachters')
    } else {
      setPassError('')
    }
  }

  const confirmValidation = (e) => {
    setConfirmPassword(e.target.value)

    if (e.target.value !== password && e.target.value.length > 1) {
      setConfirmError('password does not match')
    } else {
      setConfirmError('')
    }
  }
  return (
    <div>
      <form action="" className="form form-group">
        <label htmlFor="fname">First name</label>
        <input
          className="form-control"
          type="text"
          value={fname}
          onChange={firstNameValidation}
        />
        {firstNameError ? firstNameError : ''}
        <label htmlFor="name">Last name</label>

        <input
          className="form-control"
          type="text"
          value={lname}
          onChange={lastNameValidation}
        />
        <p>{lastNameError ? lastNameError : ''}</p>

        <label htmlFor="email">email</label>

        <input
          type="email"
          value={email}
          className="form-control"
          onChange={emailValidation}
        />
        <p>{emailError ? emailError : ''}</p>

        <label htmlFor="password">password</label>

        <input
          type="password"
          value={password}
          className="form-control"
          onChange={passValidation}
        />
        <p>{passError ? passError : ''}</p>

        <label htmlFor="confirmPassword">confirm password</label>

        <input
          type="password"
          name="confirm"
          value={confirmPassword}
          className="form-control"
          onChange={confirmValidation}
        />
        <p>{confirmError ? confirmError : ''}</p>
        <input type="submit" value="submit" />
      </form>
      <h3>Your Data</h3>
      <ul>
        <li>{fname}</li>
        <li>{lname}</li>
        <li>{email}</li>
        <li>{password}</li>
      </ul>
    </div>
  )
}

export default Form
