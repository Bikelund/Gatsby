import React from "react"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `blue` }}>
    <Link to="/contact/">Contact</Link>
    <h1>Hello there!</h1>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="Random" />
  </div>
)