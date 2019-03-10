import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';




class Home extends React.Component {
    render() {
        return(
            <React.Fragment>
                Home
                <br/>
                <Link to="/about" className="link">Go to About</Link>
                <Footer />
            </React.Fragment>

         );
    }
}

export default Home;
