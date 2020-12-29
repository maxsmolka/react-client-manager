const patientContextReducer = (state, action) => {
    let patients;
    switch (action.type) {
        case 'DELETE_PATIENT':
            patients = state.filter((p) => p.id !== action.payload );
            return patients;
        case 'ADD_PATIENT':
            patients = [action.payload, ...state];
            return patients;
        case 'UPDATE_PATIENT':
            // { id: 1, color: 'grey', name: 'Behandlung', amount: 0.00 }
            
            // const treatment = action.payload;
            // console.log(treatment)
            // const updated = state.map((t) => {
            //     if(t.id === treatment.id) {
            //         const updatedTransaction = {
            //             ...t,
            //             color: treatment.color,
            //             // name: transaction.name,
            //             amount: treatment.amount
            //         }
            //         return updatedTransaction;
            //     }
            //     return t;
            // })
            // return updated;
            break;
        default:
            break;
    }
}

export default patientContextReducer;