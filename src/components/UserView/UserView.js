import React from 'react';
import { Link } from 'react-router-dom';

// Destructuring ES6
// export const UserView = ({match}) => {
//     return (
//         <div>
//             <div>Selected user: <strong>{match.params.userId}</strong></div>
//             <Link to='/users'>Go back to user list</Link>
//         </div>
//     )
// }

export const UserView = (props) => {
    return (
        <div>
            <div>Selected user: <strong>{props.match.params.userId}</strong></div>
            <Link to='/users'>Go back to user list</Link>
        </div>
    )
}
