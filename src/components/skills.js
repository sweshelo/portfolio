import React, {useState, useEffect} from 'react';
import SkillCard from './skillCard';
import {Paper, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(()=> ({
    root: {
        margin : '20px',
        padding : '10px',
    },
    title: {
        padding : '5px',
        fontWeight : 'bold',
    }
}));

const Skills = ()=> {

    const classes = useStyles();

    const [skills, setSkills] = useState([]);
    useEffect(()=>{
        fetch('http://192.168.255.97:3000/skills.json').then(res=>res.json()).then((res)=>{
            setSkills(res.skills);
        })
    },[]);

    var skillcardComponents = skills.map(s => (
        <SkillCard imagePath={s.image} imageTitle={s.name} skillName={s.name} skillText={s.description} />
    ));

    return(
        <Paper className={classes.root}>
            <Typography className={classes.title}>My Skills</Typography>
            {skillcardComponents}
        </Paper>
    )
}

export default Skills;
