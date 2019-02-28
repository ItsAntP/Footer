import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';


 const Footer = () => {
    return(
     <React.Fragment>
       <CssBaseline />
        <Paper elevation={1}>
         <h3>Test for Display!</h3>
        </Paper>
       </React.Fragment>
   );
 }

 export default Footer;
