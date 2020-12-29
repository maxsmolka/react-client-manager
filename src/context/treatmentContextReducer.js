const treatmentContextReducer = (state, action) => {
    let treatments;
    switch (action.type) {
        case 'DELETE_TREATMENT':
            treatments = state.filter((t) => t.id !== action.payload );
            return treatments;
        case 'ADD_TREATMENT':
            treatments = [action.payload, ...state];
            return treatments;
        case 'UPDATE_TREATMENT':
            // { id: 1, color: 'grey', name: 'Behandlung', amount: 0.00 }
            const treatment = action.payload;

            const updated = state.map((t) => {
                if(t.id === treatment.id) {
                    const updatedTransaction = {
                        ...t,
                        color: treatment.color,
                        // name: transaction.name,
                        amount: treatment.amount
                    }
                    return updatedTransaction;
                }
                return t;
            })
            return updated;
        default:
            break;
    }
}

export default treatmentContextReducer;