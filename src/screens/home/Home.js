import React from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

class Home extends React.Component {
    render() {
        return(
            <React.Fragment>
       		<CssBaseline />
		{/* HEADER */}
               	<Link to="/about" className="link">Go to About</Link>
            	
		{/* FOOTER */}
	    </React.Fragment>
        );
    }
}

export default Home;
