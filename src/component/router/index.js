import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import App from "../index"
import Comment from "../comment"

const SocialRoutes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/:id" exact component={Comment} />
      </Switch>
    </BrowserRouter>
  )
}

export default SocialRoutes