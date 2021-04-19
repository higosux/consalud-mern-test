import mongoose from 'mongoose';

const planSchema = mongoose.Schema({
    rut: {
           type: String, 
           required: true },
    rent : {type: Number, 
             required: () => {
                 return this > 500000 && this < 1000000
                } },
    planCode: {type: String, Required: true},
    selectedFile: String
});

const PlanMessage = mongoose.model('PlanMessage', planSchema);

export default PlanMessage;