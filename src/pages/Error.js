import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>oops! you are at dead end.</h1>
        <Link to="/" className="btn">
          back to home
        </Link>
      </div>

    </section>
  )
}

export default Error
