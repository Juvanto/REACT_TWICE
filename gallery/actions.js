import {LOAD_MORE_IMAGES,RESET_IMAGES_NUMBER,CHANGE_RENDERTITLE,RESET_RENDERTITLE,CHANGE_CURRENTPAGE,RESET_CURRENTPAGE} from './actionTypes.js';

export const loadMoreImages = () => ({
  type: LOAD_MORE_IMAGES
});

export const resetImagesLoadNumber = () => ({
  type: RESET_IMAGES_NUMBER
});

export const changeRenderTitle = (title) => ({
  type: CHANGE_RENDERTITLE,
  renderTitle:title
});

export const resetRenderTitle = () => ({
  type: RESET_RENDERTITLE,
  renderTitle:'cover'
});

export const changeCurrentPage = (page) => ({
  type: CHANGE_CURRENTPAGE,
  currentPage:page
});

export const resetCurrentPage = () => ({
  type: RESET_CURRENTPAGE,
  currentPage:1
});