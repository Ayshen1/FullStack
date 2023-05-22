import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
 <ul>
    <li><Link to= '/'>Home</Link></li>
    <li><Link to='/Authors'>Authors</Link></li>
    <li><Link to='/AddAuthor'>AddAuthor</Link></li>
    <li><Link to='/AuthorDetail'>AuthorDetail</Link></li>
    <li><Link to='/EditAuthor '>EditAuthor </Link></li>
 </ul>
  )
}

export default Navbar
