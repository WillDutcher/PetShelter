import React from 'react';
import { Link } from '@reach/router';

const PageNotFound = (props) => {

    return (
        <div>
            <p>Are you lost? Let's get you back home!</p>
            <Link to={ '/' }>Home</Link>
        </div>
    );
};

export default PageNotFound;