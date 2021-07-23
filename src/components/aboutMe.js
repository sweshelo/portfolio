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
        fontSize : '1.5em',
    },
    history : {
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
                <div className={classes.history}>
                <Typography className={classes.history}>2021/09/07 生</Typography>
                <Typography className={classes.history}>独立行政法人 都城工業高等専門学校 電気情報工学科 中退</Typography>
                <Typography className={classes.history}>基本情報技術者</Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default AboutMe;
