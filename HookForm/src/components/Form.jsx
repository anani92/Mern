import React, { useState } from 'react'

const Form = () => {
  let [fname, setFname] = useState('')
  let [lname, setLname] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [confirmPassword, setConfirmPassword] = useState('')

  return (
    <div>
      <form action="" className="form form-group">
        <label htmlFor="fname">First name</label>
        <input
          className="form-control"
          type="text"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <label htmlFor="name">Last name</label>

        <input
          className="form-control"
          type="text"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <label htmlFor="email">email</label>

        <input
          type="email"
          value={email}
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">password</label>

        <input
          type="password"
          value={password}
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="confirmPassword">confirm password</label>

        <input
          type="password"
          name="confirm"
          value={confirmPassword}
          className="form-control"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
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
