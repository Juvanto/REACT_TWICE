import {CHANGE_ALBUMNUMBER,RESET_ALBUMNUMBER,CHANGE_TRACKNUMBER,RESET_TRACKNUMBER} from './actionTypes.js';

export const changeAlbumNumber = (number) => ({
  type: CHANGE_ALBUMNUMBER,
  albumNumber:number
});

export const resetAlbumNumber = () => ({
  type: RESET_ALBUMNUMBER
});

export const changeTrackNumber = (number) => ({
  type: CHANGE_TRACKNUMBER,
  trackNumber:number
});

export const resetTrackNumber = () => ({
  type:RESET_TRACKNUMBER
});
