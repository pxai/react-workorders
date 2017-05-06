// Workorder reducer
var workorderId = 1;

// checck it out!! Now it changes only its own state
export var workordersReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_WORKORDER':
            return [
                ...state,
                {
                    id: workorderId++,
                    workorder: action.workorder
                }
            ];
        case 'REMOVE_WORKORDER':
            return state.filter((workorder) => workorder.id !== workorder.id)
        default:
            return state;
    }
};