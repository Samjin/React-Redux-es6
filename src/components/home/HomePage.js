import React from 'react';
import {Link} from 'react-router'; //import link component from react-router

// class is used because hot reloading feature requires top level component to be class
// class is not stateless component
class HomePage extends React.Component {
    render() {
        return (
            <div className='jumbotron'>
                <h1>Administration</h1>
                <p>This application uses React, Redux, React router and ES6</p>
                <Link to='about' className='btn btn-primary btn-lg'>Learn More</Link>
            </div>
        );
    }
}

export default HomePage;
