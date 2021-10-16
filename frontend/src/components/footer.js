//Tech Imports
import React from 'react';
//Styling Imports
import "../styling/footer.scss";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
//Comp Imports
import footerBarIcon1 from "../images/footerBar.png";
import footerBarIcon2 from "../images/footerBar2.png";
import footerBarIcon3 from "../images/footerBar3.png";

export default function FooterCommandLine(){

        return (
            <div className="footerContainer">
            <React.Fragment>
              <AppBar className="footerAppBar" position="fixed" sx={{ top: 'auto', bottom: 0 }} style={{backgroundColor: "#32CD32"}}>
              <div className="footerIconContainer">
                <Toolbar> 
                  <IconButton className="iconButton" color="inherit" aria-label="open drawer">
                  <img src={footerBarIcon1} alt="telephone"/>
                  </IconButton>
                  <Box sx={{ flexGrow: 1 }} />
                  <IconButton className="iconButton" color="inherit">
                    <img src={footerBarIcon2} alt="Dial Pad" />
                  </IconButton>
                  <IconButton className="iconButton" color="inherit">
                  <img src={footerBarIcon3} alt="Address Book" />
                  </IconButton>
                </Toolbar>
                </div>
              </AppBar>
            </React.Fragment>
            </div>
          );
}