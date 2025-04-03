import React from 'react'

const Friend = ({friend}) => {
  return (
      <div className='card'>
          <p>Name: {friend.name}</p>
          <p>Name: {friend.email}</p>
          <p>Name: {friend.phone}</p>
      </div>
  );
}

export default Friend