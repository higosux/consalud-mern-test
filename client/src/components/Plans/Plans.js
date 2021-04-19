import React from 'react';
import { Grid, CircularProgress} from '@material-ui/core'
import {useSelector} from 'react-redux';
import Plan from './Plan/Plan';
import useStyles from './styles'
const Plans = () => {
    const plans = useSelector((state) => state.plans)
    const classes = useStyles();

    console.log(plans);
    return (
        
            !plans.length ? <CircularProgress /> : (
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {
                       plans.map((plan) => (
                           <Grid key={plan._id} item xs={12} sm={6}>
                               <Plan plan={plan}/>
                           </Grid>
                       ))     
                    }
                </Grid>
            )
        
    );
}

export default Plans;