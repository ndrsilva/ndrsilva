const initialState = {
    name:'',
    level:'', // beginner, intermediate, advanced
    workoutDays:[], // 1-0
    myWorkout:[],
    lastWorkout:'', // ID
    dailyProgress:['2021-07-01', '2021-07-02']
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_NAME':
            return {...state, name:action.payload.name};
            break;
    }

    return state;
}