import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import socialAppReducer from "./socialApp"

export default combineReducers({ socialAppReducer, form: formReducer })