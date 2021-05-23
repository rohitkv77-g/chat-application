import {CHAT_AREA_DISABLED, CHAT_AREA_LOADING, CHAT_AREA_LOADED} from './chatAreaType'

// const initialState = {
    // disabled: true,
    // loading: false,
    // userName: "",
    // messages: []
// }

export const chatAreaDisabled = () => {
    return {
        type: CHAT_AREA_DISABLED
    }
}

export const chatAreaLoading = (data) => {
    return {
        type: CHAT_AREA_LOADING,
        payload: data
    }
}

export const chatAreaLoaded = (data) => {
    return {
        type: CHAT_AREA_LOADED,
        payload: data
    }
}