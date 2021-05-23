import * as tp from './leftPanelType'

export const logOut = () => {
    return {
        type: tp.LOG_OUT
    }
}

export const loggedIn = () => {
    return {
        type: tp.LOGGED_IN
    }
}

export const newChat = () => {
    return {
        type: tp.NEW_CHAT
    }
}

export const newGroup = () => {
    return {
        type: tp.NEW_GROUP
    }
}

export const home = () => {
    return {
        type: tp.HOME
    }
}

export const profile = () => {
    return {
        type: tp.PROFILE
    }
}