const initialState = {
    collections: [],
    currentPage: 1,
    totalPages: 1
};

const collection_reducer = (state = initialState, action) => {
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

export default collection_reducer;
