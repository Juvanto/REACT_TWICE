import {LOAD_MORE_IMAGES,RESET_IMAGES_NUMBER,CHANGE_RENDERTITLE,RESET_RENDERTITLE,CHANGE_CURRENTPAGE,RESET_CURRENTPAGE}from './actionTypes.js';

//这里state一定要赋一个默认值或者初始值或者null，store.js中不用设置initValues
export default (state={'imagesLoadNumber':1,'renderTitle':'cover',currentPage:1},action) => {
  switch(action.type) {
    case LOAD_MORE_IMAGES: {
      return {...state,'imagesLoadNumber':state['imagesLoadNumber']+1};
    }   
    case RESET_IMAGES_NUMBER: {
      return {...state,'imagesLoadNumber':1};
    }
    case CHANGE_RENDERTITLE: {
      return {...state,'renderTitle':action.renderTitle};
    } 
    case RESET_RENDERTITLE: {
      return {...state,'renderTitle':action.renderTitle};
    }
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