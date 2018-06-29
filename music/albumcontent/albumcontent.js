import React, {Component}from 'react';
import ReactDom from 'react-dom';
import styles from './albumcontent.css';
import {connect} from 'react-redux';
import {Row, Col, Table,Icon} from 'antd';
import {changeTrackNumber,resetTrackNumber} from '../actions.js';


class AlbumContent extends Component{
	constructor(props){
		super(props);
		this.changeTrack=this.changeTrack.bind(this);
	}
  changeTrack(number){
  this.props.changeTrackNumber(number);
  }
  render(){
   const len=this.props.tracklist.length;
   var group=this.props.tracklist;
   var list=[];
   var url;
   var temp;
   for (let i=0;i<len;i++)
   {//为选中的track应用不同的样式
    if(this.props.trackNumber==group[i].tracknumber)
    {temp=<li key={group[i].tracknumber} 
              onDoubleClick={this.changeTrack.bind(this,group[i].tracknumber)}
              className={styles.played}>
          <span><Icon type="sound"/></span>{group[i].tracktitle}
          </li>}
      else{temp=<li key={group[i].tracknumber} 
                    onDoubleClick={this.changeTrack.bind(this,group[i].tracknumber)}>
                <span>{group[i].tracknumber}</span>{group[i].tracktitle}
                </li>}
    list.push(temp);//生成track列表  
    }
   return(
    	  <div>
    	   <Row gutter={20} className={styles.row}>
    	      <Col span={6} className={styles.leftCol}>
    	  	     <img src={require(''+this.props.imgUrl)} className={styles.cover}/>
    	  	     <p className={styles.p}>{this.props.albumTitle}</p>
    	         <p className={styles.p}>{this.props.albumDate}</p>
    	  	  </Col>
    	  	  <Col span={18} className={styles.rightCol}>
    	  	    <p className={styles.header}>TRACKLIST</p>
    	  	    <ul className={styles.tracklist}>
    	  	    {list}
    	  	    </ul>
    	  	    <audio src={this.props.trackUrl} 
    	  	           controls="controls" 
    	  	           className={styles.audio}   	  	          
    	  	           autoPlay="autoplay"></audio>
    	  	  </Col>
    	  	</Row>
    	  </div>
          )
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeTrackNumber: (number) => {
      dispatch(changeTrackNumber(number));
    },
    resetTrackNumber: () => {
      dispatch(resetTrackNumber());
    }
  };
};

export default connect(null,mapDispatchToProps)(AlbumContent);
