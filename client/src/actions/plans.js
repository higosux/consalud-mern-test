import * as api from '../api';

// Action creators
export const getPlans = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPlans();

        
    dispatch({type:'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}


export const createPlan = (plan) => async (dispatch) => {
    try {
        const { data } = await api.createPlan(plan);

        dispatch({type:'CREATE', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}
