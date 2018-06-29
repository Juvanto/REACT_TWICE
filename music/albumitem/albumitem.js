import React, {Component}from 'react';
import ReactDom from 'react-dom';
import styles from './albumitem.css';
import {connect} from 'react-redux';
import {changeAlbumNumber,resetAlbumNumber,resetTrackNumber} from '../actions.js';
class AlbumCover extends Component{
	constructor(props){
		super(props);
    this.showAlbum=this.showAlbum.bind(this);
	}   
  showAlbum(){
  this.props.resetTrackNumber();
  this.props.changeAlbumNumber();
  }
  render(){    
   return(
    	  <div className={styles.imgSlideContainer}>
              <img src={require(''+this.props.imgUrl)} className={styles.imgSlide} onClick={this.showAlbum}/>
              <p className={styles.pSlide1}>{this.props.title}</p>
              <p className={styles.pSlide2}>{this.props.date}</p>
        </div> 	
          )
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    changeAlbumNumber: () => {
      dispatch(changeAlbumNumber(ownProps.albumNumber));
    }, 
    resetAlbumNumber:() => {
      dispatch(resetAlbumNumber());
    },
    resetTrackNumber:() => {
      dispatch(resetTrackNumber());
    },
  };
};
export default connect(null, mapDispatchToProps)(AlbumCover);