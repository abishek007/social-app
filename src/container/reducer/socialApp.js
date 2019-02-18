import cloneDeep from "lodash/cloneDeep"
import * as actions from "../actions"

const intialState = {
  card: [
    {
      id: 1,
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      subtitle: "A Modern Introduction to Programming",
      description: "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications",
      liked: 10,
      loved: 22,
      isLiked: false,
      isLoved: false,
      voteCount: 20,
    },
    {
      id: 2,
      title: "Learning JavaScript Design Patterns",
      author: "Addy Osmani",
      subtitle: "A JavaScript and jQuery Developer's Guide",
      description: "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
      liked: 10,
      loved: 32,
      isLiked: true,
      isLoved: false,
      voteCount: 40,
    },
    {
      id: 3,
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      subtitle: "A Modern Introduction to Programming",
      description: "",
      liked: 10,
      loved: 15,
      isLiked: false,
      isLoved: true,
      voteCount: 55,
    },
  ],
  selectedData: {},
}

const socialAppReducer = (state = intialState, action) => {
  switch(action.type) {
    case actions.UP_VOTE: {
      const temp = cloneDeep(state.card)
      temp.forEach((ele, index) => {
        if(index === action.data) {
          ele.voteCount++
          return;
        }
      })
      return {...state, card: temp}
    }
    case actions.DOWN_VOTE: {
      const temp = cloneDeep(state.card)
      temp.forEach((ele, index) => {
        if(index === action.data) {
          ele.voteCount--
          return;
        }
      })
      return {...state, card: temp}
    }
    case actions.LIKE_POST: {
      const temp = cloneDeep(state.card)
      temp.forEach((ele, index) => {
        if(index === action.data) {
          ele.isLiked ? ele.liked-- : ele.liked++
          ele.isLiked = !ele.isLiked
          return;
        }
      })
      return {...state, card: temp}
    }
    case actions.LOVE_POST: {
      const temp = cloneDeep(state.card)
      temp.forEach((ele, index) => {
        if(index === action.data) {
          ele.isLoved ? ele.loved-- : ele.loved++
          ele.isLoved = !ele.isLoved
          return;
        }
      })
      return {...state, card: temp}
    }
    case actions.POST_DATA: {
      const temp = cloneDeep(state.card)
      temp.push(action.data)
      return {...state, card: temp}
    }
    case actions.SELECTED_ID: {
      return {...state, selectedData: state.card[Number(action.data)-1]}
    }
    default:
      return state
  }
}

export default socialAppReducer