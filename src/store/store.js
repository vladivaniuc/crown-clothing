import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { loggerMiddleware } from "./middleware/logger";
import thunk from "redux-thunk";
// import createSagaMiddleware from "redux-saga";
// import { rootSaga } from "./root-saga";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['cart'],
};

// const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  // sagaMiddleware
  thunk,
].filter(Boolean);
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);
// sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
