import React, { Component, Fragment } from "react"
import { reduxForm, Field } from "redux-form"
import classNames from "classnames"
import Container from "../container"
import renderInput from "./renderInput"
import "./styles.css"

class App extends Component {
  state = {
    isModalOpen: false,
  }

  handleModal = () => {
    this.setState(preState => ({isModalOpen: !preState.isModalOpen}))
  }

  formValue = value => {
    const { postData, card } = this.props
    const cardData = {
      ...value,
      liked: 0,
      loved: 0,
      isLiked: false,
      isLoved: false,
      voteCount: 0,
      id: card.length,
    }
    postData(cardData)
    this.handleModal()
  }

  redirFun = (id) => {
    window.location.href = `/${id}`
  }

  render() {
    console.log("this.props", this.props)
    const {
      card,
      upVote,
      downVote,
      likePost,
      lovePost,
      handleSubmit,
    } = this.props
    const { isModalOpen } = this.state
    return (
      <Fragment>
        <div className="header">
          <p className="title-sec">Top Posts</p>
          <button onClick={this.handleModal}>Create Post</button>
        </div>
        <div className="card-container">
        {card.map((ele , index) => (
          <div className="card">
            <div className="vote-button">
              <span onClick={() => upVote(index)}>
                <i className="fa fa-caret-up"></i>
              </span>
              <p className="count">{ele.voteCount}</p>
              <span onClick={() => downVote(index)}>
                <i className="fa fa-caret-down"></i>
              </span>
            </div>
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
              <div className="like-sec">
                <div className="thumbs-sec" onClick={() => likePost(index)}>
                  <i className={classNames("fa fa-thumbs-up", {"like": ele.isLiked})}></i>
                  <span className="like-count">{ele.liked}</span>
                </div>
                <div onClick={() => lovePost(index)}>
                  <i className={classNames("material-icons", {"love": ele.isLoved})}>favorite</i>
                  <span className="love-count">{ele.loved}</span>
                </div>
                <div className="button-sec">
                  <button onClick={() => this.redirFun(ele.id)}>Comment</button>
                </div>
              </div>
            </div>
          </div>
          ))
        }
        </div>
        {isModalOpen &&
        <div className="modal">
          <div className="content">
            <div className="modal-header">
              <p className="title">Create Post</p>
              <span onClick={this.handleModal}><i className="fa fa-close"></i></span>
            </div>
            <form onSubmit={handleSubmit(this.formValue)}>
              <div className="feild-sec">
                <Field
                  name="title"
                  component={renderInput}
                  placeholder="Title"
                />
              </div>
              <div className="feild-sec">
                <Field
                  name="subtitle"
                  component={renderInput}
                  placeholder="SubTitle"
                />
              </div>
              <div className="feild-sec">
                <Field
                  name="author"
                  component={renderInput}
                  placeholder="Author"
                />
              </div>
              <div className="feild-sec">
                <Field
                  name="description"
                  component="textarea"
                  placeholder="Description"
                />
              </div>
              <div className="feild-sec">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
        }
      </Fragment>
    )
  }
}

export default Container(reduxForm({
  form: "SOCIAL_APP",
})(App))