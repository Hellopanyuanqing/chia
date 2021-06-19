import actionTypes from './actionTypes'
import {
    login as loginRequest
} from '../requests'

const startLogin = () => {
    return {
        type: actionTypes.START_LOGIN
    }
}
const loginSuccess = (userInfo) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: {
            userInfo
        }
    }
}
const loginFailed = () => {
    window.localStorage.removeItem('token')
    window.sessionStorage.removeItem('token')
    window.localStorage.removeItem('userInfo')
    window.sessionStorage.removeItem('userInfo')
    return {
        type: actionTypes.LOGIN_FAILED
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(loginFailed())
    }
}

export const login = (userInfo) => {
    return dispatch => {
        dispatch(startLogin())
        loginRequest(userInfo).then(res => {

            if (res.code === 1) {

                const userinfo = res.data.userinfo
                const token = res.data.userinfo.token
                window.localStorage.setItem('token', token)
                window.localStorage.setItem('userInfo', JSON.stringify(userinfo))
                dispatch(loginSuccess(
                    res.data.userinfo
                ))
            } else {
                console.log("444444444");
                dispatch(loginFailed())
            }
        })

    }
}