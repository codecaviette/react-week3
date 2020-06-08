import React from 'react';

function UserComponent(props) {
    return (
        <Link to={`users/${props.users.id}`} />
    )
}

export default UserComponent