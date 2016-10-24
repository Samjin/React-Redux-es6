// This component handles the app template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header'
import Footer from './common/Footer'

class App extends React.Component {
    render() {
        // react router will pass in all children under this.prop.children
        return ( 
            <div className='container-fluid'>
                <Header />
                { this.props.children } 
                <Footer />
            </div>
        )
    }
}

// set propType.children to be 'required' component
App.propTypes =  {
    children: PropTypes.object.isRequired
};

export default App;