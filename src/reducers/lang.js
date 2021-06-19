import actionTypes from '../actions/actionTypes'

const initState = {
    lang: 'zh',

}

export default (state = initState, action) => {

    switch (action.type) {
        case actionTypes.CHOICE_LANG:
            return {
                ...state,
                lang: action.payload.lang
            }
            default:
                return state
    }
}