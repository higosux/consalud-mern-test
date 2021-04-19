import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper, RadioGroup, FormControlLabel, FormLabel, Radio, FormControl  } from '@material-ui/core';


import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPlan } from '../../actions/plans';


const Form  = () => {
    const url = 'https://f3ec8e44-0529-430b-8433-d492dba0797c.mock.pstmn.io/planes';
    const [savedPlans, setSavedPlans] = useState();
    const [activePlans, setActivePlans] = useState();
 
    const fetchApi = async () => {
        const response = await fetch(url);        
        const responseJSON = await response.json();
        setSavedPlans(responseJSON);        
    }
    
    useEffect(() => {
        fetchApi();
    }, []);

    const [planData, setPlanData] = useState({
        rut: '',
        rent: '',
        planCode: '',
        selectedFile: '',
    });

    const [disabled, setDisabled] = useState(true)

    const classes = useStyles();
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPlan(planData));
    }
    const handlePlanClick = (e) => {
        let planCode = e.target.value;
        setPlanData({ ...planData, planCode });
        setDisabled(false) ;
    }
    const handleInputChange = (e) => {
        let rent = e.target.value;
        setPlanData({ ...planData, rent })
        rent = parseInt(rent);
        if(rent >= 500000 && rent <= 1000000){
            
                setActivePlans( savedPlans.filter( plans => {
                return plans.precio >= rent-(rent*0.15) && plans.precio <= rent+(rent*0.15) }                 
                ));

            console.log(activePlans)

        }

    }
    const clear = () => {
        setDisabled(true);
    }

    return (
        <>
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={` ${classes.root} , ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">Ingrese datos</Typography>

            <TextField 
                    name="rut" 
                    variant="outlined" 
                    label="Rut" 
                    fullWidth
                    value={planData.rut}
                    onChange={ (e) => setPlanData({ ...planData, rut: e.target.value })}
            />

            <TextField 
                    name="rent" 
                    variant="outlined" 
                    label="Renta" 
                    fullWidth
                    value={planData.rent}
                    onChange={handleInputChange }
            />
            <FormControl component="fieldset">

            <FormLabel component="legend">Plan</FormLabel>
            <RadioGroup aria-label="plan" name="plan" >
    
            { activePlans &&
                
               
               activePlans.map( (plan, i) => {
                    
                    return <FormControlLabel value={plan.CodigoPlan} 
                                             key={plan.CodigoPlan} 
                                             control={<Radio />} 
                                             label={plan.Nombre +' / $'+ plan.precio}
                                             onClick={handlePlanClick} />
                        

               })
 
            }
            </RadioGroup>
            </FormControl>
            <TextField 
                    name="planCode" 
                    variant="filled" 
                    label="Código de Plan"
                    InputProps={{
                        readOnly: true,
                      }}
                    fullWidth
                    value={planData.planCode}
                    onChange={ (e) => setPlanData({ ...planData, planCode: e.target.value })}
            />

            <div className={classes.fileInput}>
                <FormLabel component="legend">Foto afiliado</FormLabel>

                <FileBase
                    type="file"
                    multiple={false}
                    onDone={({base64}) => setPlanData({ ...planData, selectedFile: base64 })} 
                />

            </div>
            <Button className={classes.buttonSubmit} disabled={disabled} color="primary" variant="contained" size="large" type="submit" fullWidth>Agregar</Button>
            <Button variant="contained" size="small" color="secondary" onClick={clear} fullWidth>Limpiar</Button>

            </form>
        </Paper>
        </>
    );
}

export default Form;