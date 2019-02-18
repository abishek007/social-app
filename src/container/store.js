import { createStore, applyMiddleware, compose } from "redux"
import { createLogger } from 'redux-logger'
//import { loadDataFromSessionStorage } from "./actions"
import reducers from "./reducer/index"

const loadStore = () => {
  const storeData = sessionStorage && sessionStorage.getItem("redux")
  return !!storeData ? JSON.parse(storeData) : undefined
}

const saveStore = () => (sessionStorage && sessionStorage.setItem("redux", JSON.stringify(store.getState())))

const logger = createLogger({
  level: "info",
  collapsed: true,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const preLoadedState = loadStore()

const store = createStore(
  reducers,
  preLoadedState,
  composeEnhancers(
    applyMiddleware(logger),
  )
)

store.subscribe(() => {
  saveStore()
})
//const stateInSession = sessionStorage ? sessionStorage.getItem("redux") : null
//store.dispatch(loadDataFromSessionStorage(JSON.parse(stateInSession)))

export default store