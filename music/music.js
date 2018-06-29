import React, {Component}from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import styles from './music.css';
import { Carousel } from 'antd';
import AlbumItem from './albumitem/albumitem.js';
import AlbumContent from './albumcontent/albumcontent.js';
import albummessage from './albumMessage.json';
import albumlinkcontent from './albumLinkContent.json';//引用网络音乐链接
import {resetAlbumNumber,resetTrackNumber} from './actions.js';

class TwiceMusic extends Component{
	constructor(props){
		super(props);
	}

  componentWillUnmount(){
     this.props.resetAlbumNumber();
     this.props.resetTrackNumber();
  }
  render(){
  const trackNumber=parseInt(this.props.trackNumber);
  var url;
  //trackNumber为空时，传入一个空字符串作为url
  if(this.props.trackNumber)
  {url=albumlinkcontent.albumlinkcontent[this.props.albumNumber-1].tracklist[trackNumber-1].url} 
  else{url=this.props.trackNumber}
  const list = albummessage.albummessage.map((item)=>(
              <AlbumItem
              key={item.id}
              imgUrl={item.cover}
              albumNumber={item.id}
              title={item.title}
              date={item.date}
              />)
             );    
   return(<div>
           <h1 className={styles.title}>MUSIC</h1>
           <AlbumContent
           albumTitle={albumlinkcontent.albumlinkcontent[this.props.albumNumber-1].title}
           albumDate={albumlinkcontent.albumlinkcontent[this.props.albumNumber-1].date} 
           imgUrl={albumlinkcontent.albumlinkcontent[this.props.albumNumber-1].cover}
           tracklist={albumlinkcontent.albumlinkcontent[this.props.albumNumber-1].tracklist}
           trackNumber={this.props.trackNumber}
           trackUrl={url}
            />          
            <div className={styles.CarouselContainer}>
               <Carousel>
                 <div>{[list[11],list[10],list[9],list[8]]}</div>
                 <div>{[list[7],list[6],list[5],list[4]]}</div>
                 <div>{[list[3],list[2],list[1],list[0]]}</div>
               </Carousel>
            </div>
          </div>
    		)
    }
}

const mapStateToProps = (state) => {
  return {
   albumNumber:state.music.albumNumber,
   trackNumber:state.music.trackNumber
}}

const mapDispatchToProps = (dispatch) => {
  return {
    resetAlbumNumber: () => {
      dispatch(resetAlbumNumber());
    }, 
    resetTrackNumber:() => {
      dispatch(resetTrackNumber());
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(TwiceMusic);
