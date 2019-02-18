import React, { Component, Fragment } from "react"
import { reduxForm, Field } from "redux-form"
import Container from "../container"

class Comment extends Component {
  componentDidMount() {
    console.log(this.props)
    const { match, selectedId } = this.props
    selectedId(match.params.id)
  }

  render() {
    console.log("hello",this.props)
    const { title, subtitle, author, description } = this.props.selectedData
    return (
      <Fragment>
        <div className="card-container">
          <div className="card">
            <div className="content-sec">
              <div className="info-sec">
                <p className="title">Title:</p>
                <p className="value">{title}</p>
              </div>
              <div className="info-sec">
                <p className="title">SubTitle:</p>
                <p className="value">{subtitle}</p>
              </div>
              <div className="info-sec">
                <p className="title">Author:</p>
                <p className="value">{author}</p>
              </div>
              <div className="info-sec">
                <p className="title">Description:</p>
                <p className="value">{description}</p>
              </div>
              <div className="info-sec">
                <p className="title">Comment:</p>
                <span className="comment">
                  <Field
                    name="description"
                    component="textarea"
                    placeholder="Leave a message..."
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="tip tip-left"></span>
        </div>
      </Fragment>
    )
  }
}

export default Container(reduxForm({
  form: "SOCIAL_APP",
})(Comment))