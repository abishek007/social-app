import React, { Component } from "react"
import { reduxForm, Field } from "redux-form"
import cloneDeep from "lodash/cloneDeep"
import Container from "../container"
import renderInput from "./renderInput"
import "./styles.css"

class App extends Component {
  state = {}

  render() {
    console.log("this.props", this.props)
    const { card } = this.props
    return (
      <div className="card-container">
      {card.map(ele => (
        <div className="card">
          <div className="vote-button"></div>
          <div className="content-sec">
            <div className="info-sec">
              <p className="title">Title:</p>
              <p className="value">{ele.title}</p>
            </div>
            <div className="info-sec">
              <p className="title">SubTitle:</p>
              <p className="value">{ele.subtitle}</p>
            </div>
            <div className="info-sec">
              <p className="title">Author:</p>
              <p className="value">{ele.author}</p>
            </div>
          </div>
        </div>
        ))
      }
      </div>
    )
  }
}

export default Container(reduxForm({
  form: "SOCILA_APP",
  onSubmit: () => { },
})(App))