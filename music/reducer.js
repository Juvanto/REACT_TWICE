import {CHANGE_ALBUMNUMBER,RESET_ALBUMNUMBER,CHANGE_TRACKNUMBER,RESET_TRACKNUMBER}from './actionTypes.js';

//这里state一定要赋一个默认值或者初始值或者null，store.js中不用设置initValues
export default (state={'albumNumber':12,'trackNumber':''},action) => {
  switch(action.type) {
    case CHANGE_ALBUMNUMBER: {
      return {...state,'albumNumber':action.albumNumber};
    }   
    case RESET_ALBUMNUMBER: {
      return {...state,'albumNumber':12};
    }
    case CHANGE_TRACKNUMBER: {
      return {...state,'trackNumber':action.trackNumber};
    }
    case RESET_TRACKNUMBER: {
      return {...state,'trackNumber':''};
    }   
    default: {
      return state;
    }
  }
}