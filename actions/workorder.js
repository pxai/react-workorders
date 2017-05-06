// actions for workorders
export var addWorkorder = (workorder) => {
    return {
        type: 'ADD_WORKORDER',
        workorder
    }
};
export var removeWorkorder = (id) => {
    return {
        type: 'REMOVE_WORKORDER',
        id
    }
};