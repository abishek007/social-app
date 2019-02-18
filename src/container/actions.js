export const LIKE_POST = "LIKE_POST"
export const LOVE_POST = "LOVE_POST"
export const UP_VOTE = "UP_VOTE"
export const DOWN_VOTE = "DOWN_VOTE"
export const POST_DATA = "POST_DATA"
export const SELECTED_ID = "SELECTED_ID"
export const LOAD_STATE = "LOAD_STATE"

export const likePost = (data) => ({
    type: LIKE_POST,
    data
})

export const lovePost = (data) => ({
    type: LOVE_POST,
    data
})

export const upVote = (data) => ({
    type: UP_VOTE,
    data
})

export const downVote = (data) => ({
    type: DOWN_VOTE,
    data
})

export const postData = (data) => ({
  type: POST_DATA,
  data
})

export const selectedId = (data) => ({
    type: SELECTED_ID,
    data
})

export const loadDataFromSessionStorage = (data) => ({
    type: LOAD_STATE,
    data,
  })