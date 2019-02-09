export const LIKE_POST = "LIKE_POST"
export const UP_VOTE = "UP_VOTE"
export const DOWN_VOTE = "DOWN_VOTE"

export const likePost = () => ({
    type: LIKE_POST
})

export const upVote = () => ({
    type: UP_VOTE
})

export const downVote = () => ({
    type: DOWN_VOTE
})