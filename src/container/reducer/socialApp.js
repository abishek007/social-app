import * as actions from "../actions"

const intialState = {
  card: [
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      subtitle: "A Modern Introduction to Programming",
      description: "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications",
      liked: 10,
    },
    {
      title: "Learning JavaScript Design Patterns",
      author: "Addy Osmani",
      subtitle: "A JavaScript and jQuery Developer's Guide",
      description: "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
      liked: 10,
    },
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      subtitle: "A Modern Introduction to Programming",
      description: "",
      liked: 10,
    },
  ],
}

const socialAppReducer = (state = intialState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default socialAppReducer