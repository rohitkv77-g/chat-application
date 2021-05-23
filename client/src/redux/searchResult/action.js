const CHANGE_SEARCH_RESULT = "CHANGE_SEARCH_RESULT";

export const searchResult = (data) => {
    return {
        type: CHANGE_SEARCH_RESULT,
        payload: data
    }
}
