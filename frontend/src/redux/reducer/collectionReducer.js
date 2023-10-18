const initialState = {
    collections: [],
    currentPage: 1,
    totalPages: 1
};

const collectionReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_COLLECTIONS':
            return {
                ...state,
                collections: action.payload.collections,
                totalPages: action.payload.totalPages
            };
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload
            };
        default:
            return state;
    }
};

export default collectionReducer;
