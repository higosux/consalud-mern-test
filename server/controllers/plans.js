import PlanMessage from "../models/plansMessage.js";

export const getPlans = async (req, res) => {
    try{

        const plansMessage = await PlanMessage.find();

        console.log(plansMessage);


        res.status(200).json(plansMessage);
    }catch(err){
        res.status(404).json( {message: err.message });
    }
};


export const createPlan = async(req, res) => {
    const plan = req.body;

    const newPlan = new PlanMessage(plan);

    try {
        await newPlan.save();    

        res.status(201).json(newPlan);
    } catch (error) {
        res.status(409).json( {message: error.message});
    }
}