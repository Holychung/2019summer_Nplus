import React from 'react';

import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render(){
    return(
      <div className="container p-3">
      	<div className="row justify-content-center">
	        <Link to='/' className="mx-3">Home</Link>
	        <Link to='/search'>Search</Link>
      	</div>
      </div>
    )
  }
}

export default NavBar;