import React, { use } from 'react'

const Friends = ({ friendsPromise }) => {
    const count = use (friendsPromise).length;
    
    return <div className='card'>Friends:{count}</div>;
};

export default Friends