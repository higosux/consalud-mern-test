export default (plans = [],action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            
            return action.payload;            
            
        case 'CREATE':
            
            return [...plans, action.payload];
    
        default:
            return plans;
    }
}