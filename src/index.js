import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import SocialRoutes from "./component/router"
import store from "./container/store"

ReactDOM.render(
  <Provider store={store}>
    <SocialRoutes />
  </Provider>,
   document.getElementById("root")
 );
