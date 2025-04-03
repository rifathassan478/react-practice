import React, { use } from 'react'
import Friend from './Friend';

const Friends = ({ friendsPromise }) => {
    const friends = use(friendsPromise);
    const count = friends.length;
    
    return <div className='card'>
        Friends:{count}
        <br />
        {friends.map((friend) => (
            <Friend key={friend.id} friend={friend} />
        ))}
        
        </div>;
};

export default Friends