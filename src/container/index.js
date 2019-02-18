import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { likePost, upVote, downVote, lovePost, postData, selectedId } from "./actions"

function mapStateToProps(state) {
  console.log("state", state)
  const { card, selectedData } = state.socialAppReducer || {}
  return { card, selectedData }
}
  
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    likePost,
    upVote,
    downVote,
    lovePost,
    postData,
    selectedId,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)
