import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { likePost, upVote, downVote } from "./actions"

function mapStateToProps(state) {
	console.log("state", state)
	const { card } = state.socialAppReducer || []
  return { card }
}
  
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		likePost,
		upVote,
		downVote,
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)
