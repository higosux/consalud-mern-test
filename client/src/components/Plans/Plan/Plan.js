import React from 'react'
import useStyles from './styles';
import {Card, CardContent, CardMedia, Button, Typography}from '@material-ui/core';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Plan = ({plan}) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={plan.selectedFile} title={plan.rut}/>
            <div className={classes.overlay}>
                <Typography variant="h6">Rut: {plan.rut}</Typography>
                <Typography variant="body2">Renta: {plan.rent}</Typography>

            </div>
            <div className={classes.overlay2}>
                <Button styles={{color: 'white'}} size="small" onClick={() => {}}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>Codigo plan: {plan.planCode}</Typography>

            </CardContent>
        </Card>
    );
}

export default Plan;