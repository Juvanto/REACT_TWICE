import {CHANGE_CURRENTPAGE,RESET_CURRENTPAGE} from './actionTypes.js';

export const changeCurrentPage = (page) => ({
  type: CHANGE_CURRENTPAGE,
  currentPage:page
});

export const resetCurrentPage = () => ({
  type: RESET_CURRENTPAGE,
  currentPage:1
});

