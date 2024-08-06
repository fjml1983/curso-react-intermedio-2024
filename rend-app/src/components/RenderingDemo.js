import React from 'react';
import UserList from './UserList';

const RenderingDemo=()=>{
    const[showUsers, setShowUsers] = React.useState(true);

    return(
        <div>
            <h1>Demo de técnicas de rendering</h1>
            <button onClick={()=> setShowUsers(!showUsers)}>{
                showUsers? "Ocultar usuarios" : "Mostrar usuarios"
                }</button>
            {showUsers && <UserList/>}
        </div>
    )
};

export default RenderingDemo;
