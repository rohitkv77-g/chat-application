import {CHAT_AREA_DISABLED, CHAT_AREA_LOADING, CHAT_AREA_LOADED} from './chatAreaType'

const initialState = {
    disabled: true,
    loading: false,
    userName: "",
    messages: []
}

const chatAreaReducer = (state=initialState, action) => {
    switch(action.type){
        case CHAT_AREA_DISABLED: return initialState

        case CHAT_AREA_LOADING: return {
            loading: true,
            disabled: false,
            userName: action.payload.userName,
            messages: []
        }
        case CHAT_AREA_LOADED: return {
            loading: true,
            disabled: false,
            userName: action.payload.userName,
            messages: action.payload.messages
        }
        default: return state;
    }
}

export default chatAreaReducer;