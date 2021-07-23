import React from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Typography, makeStyles} from "@material-ui/core";

const Navbar = ()=> {
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography>sweshelo.jp</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
