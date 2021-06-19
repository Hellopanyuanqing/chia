import loadable from 'react-loadable'
import {
    Loading
} from '../components'
const importViw = (url) => {
    return loadable({
        loader: () => import(`${url}`),
        loading: Loading
    })

}
const Profit = importViw('./Profit')
const Cloud = importViw('./Cloud')
const Agent = importViw('./Agent')
const My = importViw('./My')
const Login = importViw('./Login')
const Forget = importViw('./Forget')
const Verification = importViw('./Verification')
const ResetPassword = importViw('./ResetPassword')

export default {
    Profit,
    Cloud,
    Agent,
    My,
}
export const mainView = {
    Login,
    Forget,
    Verification,
    ResetPassword,
}