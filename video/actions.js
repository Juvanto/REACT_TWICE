import {CHANGE_CURRENTPAGE,RESET_CURRENTPAGE,CHANGE_TAB,RESET_TAB} from './actionTypes.js';

export const changeCurrentPage = (page) => ({
  type: CHANGE_CURRENTPAGE,
  currentPage:page
});

export const resetCurrentPage = () => ({
  type: RESET_CURRENTPAGE,
  currentPage:1
});

export const changeTab = (key) => ({
  type: CHANGE_TAB,
  currentTab:key
});

export const resetTab = () => ({
  type:RESET_TAB,
  currentTab:'musicvideo'
});
