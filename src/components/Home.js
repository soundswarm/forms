import React from 'react';
import {Link} from 'react-router'

export default ()=>(
   <div>
     <h1>CVSTOM</h1>
    <Link to={'/personal'}> 
      <button className="btn btn-primary">Join</button>
    </Link>
  </div>
)

