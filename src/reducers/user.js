import actionTypes from '../actions/actionTypes'
const isLogin = Boolean(window.localStorage.getItem('token')) || Boolean(window.sessionStorage.getItem('token'))
const userInfo = JSON.parse(window.localStorage.getItem('userInfo')) || Boolean(window.sessionStorage.getItem('userInfo'))
const initState = {
    ...userInfo,
    isLogin: isLogin,
    isLoading: false,
}

export default (state = initState, action) => {

    //  console.log(userInfo);
    switch (action.type) {

        case actionTypes.START_LOGIN:
            console.log("-----1111111111-----------");
            return {
                ...state,
                isLoading: true
            }
            case actionTypes.LOGIN_SUCCESS:
                console.log("-----22222222-----------");
                return {
                    ...state,
                    ...action.payload.userInfo,
                        isLoading: false,
                        isLogin: true
                }
                case actionTypes.LOGIN_FAILED:
                    console.log("-----333333-----------");
                    return {
                        id: '',
                            displayName: '',
                            avatar: '',
                            isLogin: false,
                            isLoading: false,
                    }
                    default:
                        return state
    }
}