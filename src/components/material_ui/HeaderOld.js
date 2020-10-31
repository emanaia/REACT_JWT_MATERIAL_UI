import React from 'react';
import { Link } from 'react-router-dom';

const HeaderOld = () => {
    return (
        <>
            <Link to="/" > Home </Link>
            <Link to="/login" style={{ position: 'absolute', right: 0 }}> Login </Link>
            <hr />
        </>
    );
}

export default HeaderOld;
