import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return(
            <div>
                Home
                <br/>
                <Link to="/about" className="link">Go to About</Link>
            </div>
        )
    }
}

export default Home;