import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";

import { rootReducer } from "config/rootReducer";
import { rootEpic } from "config/rootEpic";

const epicMiddleware = createEpicMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);
