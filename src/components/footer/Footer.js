import React from 'react';
import Link from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import green from '@material-ui/core/colors/green';

 const style = {
  textAlign: 'center'
}

 const theme = createMuiTheme({
  palette: {
   primary: green,
   secondary: {
     main: '#2e7d32',
   },
  },
 });


 const Footer = () => {
    return(
     <React.Fragment>
       <CssBaseline />
        <Paper style={style} elevation={1}>
         <MuiThemeProvider theme = {theme}>
          <h2>Copywright of CrowdDoing Medicinal Foods 2019!</h2>
            <h3>All Rights Reserved!</h3>
              <h4>Thanks For Visitng!</h4>
                <br></br>
                  <br></br>
                    <br></br>
                   </MuiThemeProvider>
                  </Paper>
                </React.Fragment>
   );
 }

 export default Footer;
