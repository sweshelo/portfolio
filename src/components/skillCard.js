import React from 'react';
import {Card, CardMedia, CardContent, Typography, Paper, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(()=> ({
    root: {
        display : 'flex',
        marginTop : '5px',
    },
    image : {
        width : '96px',
        height : '96px',
        padding : '4px',
        margin : '4px',
    },
    content : {
        padding : '3px',
        flex : '1',
    },
    skillName : {
        fontSize : '1.0em',
        fontWeight : 'bold',
        marginTop : '8px',
        marginBottom : '8px',
    }
}));


const SkillCard = (props)=> {
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <img className={classes.image} src={props.imagePath} alt={props.imageTitle} />
            <CardContent className={classes.content}>
                <Typography variant="h5" className={classes.skillName}>{props.skillName}</Typography>
                <Typography variant="body2">{props.skillText}</Typography>
            </CardContent>
        </Card>
    )
}

export default SkillCard;
