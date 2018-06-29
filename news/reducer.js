import {CHANGE_CURRENTPAGE,RESET_CURRENTPAGE}from './actionTypes.js';

//这里state一定要赋一个默认值或者初始值或者null，store.js中不用设置initValues
export default (state={currentPage:1},action) => {
  switch(action.type) {
    case CHANGE_CURRENTPAGE: {
      return {...state,'currentPage':action.currentPage};
    }   
    case RESET_CURRENTPAGE: {
      return {...state,'currentPage':action.currentPage};
    }   
    default: {
      return state;
    }
  }
}