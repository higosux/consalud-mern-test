import React, {useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux'

import { getPlans } from './actions/plans';
import consalud from './images/consalud.png';
import Plans from './components/Plans/Plans';
import Plan from './components/Plans/Plan/Plan';
import Form from './components/Form/Form';
import useStyles from './styles'

const App = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getPlans());
    }, [dispatch]);
    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <img className={classes.image} src={consalud} alt="consalud" height="60" width="200"/>
                <Typography className={classes.heading} variant="h2" align="center">Gestor de planes</Typography>
            </AppBar>

                <Grow in>
                    <Container>
                        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={4}>
                                <Form />
                            </Grid>
                            <Grid item xs={12} sm={7}>
                                <Plans />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            
        </Container>
    );
};

export default App;