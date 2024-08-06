import React from 'react';

const User = React.memo(({user}) => {
    return(
        <li className='user'>
            <span>{user.name}</span>
        </li>
    )
});

export default User;