import React from 'react';
import { Link } from 'react-router-dom';
import Footer from 'footer';




class Home extends React.Component {
    render() {
        return(
            <div>
                Home
                <br/>
                <Link to="/about" className="link">Go to About</Link>
                <Footer />
            </div>
        )
    }
}

export default Home;
