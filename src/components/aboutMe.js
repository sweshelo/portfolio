import React from 'react';
import {Card, CardMedia, CardContent, Typography, makeStyles, List, ListItem, ListItemText} from '@material-ui/core';

const useStyles = makeStyles(()=> ({
    root: {
        margin : '20px',
        display : 'flex',
    },
    image : {
        width : '150px',
        height : '150px',
        display : 'flex',
        flexDirection : 'column'
    },
    content : {
        padding : '3px',
    },
    name : {
        margin : '5px',
        fontSize : '1.0em',
    },
    description : {
        fontSize : '0.9em',
        paddingLeft : '10px',
    }
}));

const AboutMe = ()=> {
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardMedia
                className={classes.image}
                image="./elemental-sweshellation.png"
                title="作者近影"
            />
            <CardContent className={classes.content}>
                <Typography className={classes.name}>Sweshelo</Typography>
                <Typography className={classes.description}>自画像提供 : twitterのFF</Typography>
                <Typography className={classes.description}>撮影時 : 2019年</Typography>
            </CardContent>
        </Card>
    )
}

export default AboutMe;
