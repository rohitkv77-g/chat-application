import * as tp from './leftPanelType'

const initialState = {
    home: false,
    loggedIn: false,
    logOut: false,
    newChat: false,
    newGroup: false,
    profile: false,
}

const leftPanelReducer = (state = initialState, action) => {
    switch (action.type) {
        case tp.NEW_CHAT: return {
            ...state,
            home: false,
            logOut: false,
            newChat: true,
            newGroup: false,
            profile: false
        }

        case tp.NEW_GROUP: return {
            ...state,
            home: false,
            logOut: false,
            newChat: false,
            newGroup: true,
            profile: false,
        }

        case tp.PROFILE: return {
            ...state,
            home: false,
            logOut: false,
            newChat: false,
            newGroup: false,
            profile: true,
        }

        case tp.LOG_OUT: return {
            ...state,
            home: false,
            loggedIn: false,
            logOut: true,
            newChat: false,
            newGroup: false,
            profile: false,
        }

        case tp.LOGGED_IN: return {
            ...state,
            home: true,
            loggedIn: true,
            logOut: false,
            newChat: false,
            newGroup: false,
            profile: false,
        }

        case tp.HOME: return {
            ...state,
            home: true,
            loggedIn: true,
            logOut: false,
            newChat: false,
            newGroup: false,
            profile: false,
        }

        default: return state
    }
}

export default leftPanelReducer;