import actionTypes from './actionTypes'

export const choiceLang = (lang) => {
    return {
        type: actionTypes.CHOICE_LANG,
        payload: {
            lang
        }
    }

}