const CHANGE_SEARCH_RESULT = "CHANGE_SEARCH_RESULT";

const initialState = {
    users: [],
    message: "Enter A userName to search"
}

const searchReducer = (state=initialState, action) => {
    switch(action.type){
        case CHANGE_SEARCH_RESULT: return {
            users: action.payload,
            message: (action.payload.length==0) ? "No user Found" : ""
        }

        default:    
            return state;
    }
}

export default searchReducer;