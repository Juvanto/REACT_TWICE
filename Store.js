import {createStore,combineReducers} from 'redux';
import GalleryReducer from './gallery/reducer.js';
import MusicReducer from './music/reducer.js';
import VideoReducer from './video/reducer.js';
import NewsReducer from './news/reducer.js';
const reducer = combineReducers({
  news:NewsReducer,
  gallery:GalleryReducer,
  music:MusicReducer,
  video:VideoReducer
});
const store = createStore(reducer, {});
export default store;


