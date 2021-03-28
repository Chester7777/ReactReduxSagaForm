import {CREATE_POST} from "./types";
import {showAlertAC} from "./actions";


const forbidden = ["fuck", "spam", "php"];

export function forbiddenWordsMiddleware({dispatch}) {
    return function (next) {
        return function (action) {
            if (action.type === CREATE_POST) {
                const found = forbidden.filter(w => action.payload.title.includes(w))
                if (found.length) {
                    return dispatch(showAlertAC("Вы спамер. Идите домой."))
                }
            }
            return next(action)
        }
    }
}