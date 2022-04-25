import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  articlesListReducer,
  articleReducer,
  articlesListByCategoryReducer,
  articlesListByRegionReducer,
} from "./reducers/articleReducer";

import { categoryReducer, categoryWithArticlesReducer } from "./reducers/categoryReducer";

import { regionReducer } from "./reducers/regionReducer";

const reducer = combineReducers({
  articleList: articlesListReducer,
  articleListByCategory: articlesListByCategoryReducer,
  articleRegionByCategory: articlesListByRegionReducer,
  articleDetails: articleReducer,

  category: categoryReducer,
  categoryWithArticles: categoryWithArticlesReducer,

  regionDetails: regionReducer,
});

const middleware = [thunk];

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
