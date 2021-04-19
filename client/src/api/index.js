import axios from 'axios';

const url = 'https://mern-consalud.herokuapp.com/plans';

export const fetchPlans = () => axios.get(url);
export const createPlan = (newPlan) => axios.post(url, newPlan);