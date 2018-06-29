import React, {Component}from 'react';
import ReactDom from 'react-dom';
import styles from './album.css';
import Masonry from 'react-masonry-component';
import {connect} from 'react-redux';
import {loadMoreImages,resetImagesLoadNumber,changeRenderTitle,resetRenderTitle} from '../actions.js';
import {Button,Icon } from 'antd';
import imagesGroup from './imagesGroup.json';//图片分组数据储存在json
const masonryOptions = {
    transitionDuration: 0
};


////////
///getScrollTop()、getScrollTop()、getWindowHeight()检测滚动条是否到底
//滚动条在Y轴上的滚动距离
function getScrollTop(){
　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
　　if(document.body){
　　　　bodyScrollTop = document.body.scrollTop;
　　}
　　if(document.documentElement){
　　　　documentScrollTop = document.documentElement.scrollTop;
　　}
　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
　　return scrollTop;
}
//文档的总高度 
function getScrollHeight(){
　　var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
　　if(document.body){
　　　　bodyScrollHeight = document.body.scrollHeight;
　　}
　　if(document.documentElement){
　　　　documentScrollHeight = document.documentElement.scrollHeight;
　　}
　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
　　return scrollHeight;
}
//浏览器视口的高度
function getWindowHeight(){
　　var windowHeight = 0;
　　if(document.compatMode == "CSS1Compat"){
　　　　windowHeight = document.documentElement.clientHeight;
　　}else{
　　　　windowHeight = document.body.clientHeight;
　　}
　　return windowHeight;
}
//////


class Album extends Component{
	constructor(props){
		super(props);
    this.reachBottom = this.reachBottom.bind(this);
    this.goBack = this.goBack.bind(this);
	}

  reachBottom(){
    if(getScrollTop() + getWindowHeight() == getScrollHeight()){
　　　　this.props.loadMoreImages();
　　}}

  goBack(){    
　　　　this.props.resetRenderTitle();
　　}
  componentDidMount(){
         window.addEventListener('scroll',this.reachBottom);
  }
  componentWillUnmount(){
         window.removeEventListener('scroll', this.reachBottom);
         this.props.resetImagesLoadNumber();//组件卸载时，把ImagesLoadNumber重置为1
  }
    render(){
      const len=imagesGroup[this.props.renderTitle].length;
      const amount=this.props.imagesLoadNumber*10;//每次显示10张图片，滚动到底时自动加载下10张
      const element=len>amount?imagesGroup[this.props.renderTitle].slice(0,amount):imagesGroup[this.props.renderTitle];
      const child = element.map(function(item){
           return (
                <div className={styles.imgContainer} key={item.id}>                    
                    <a href={require(''+item.url)} target="_blank"><img src={require(''+item.url)} className={styles.img}/></a>
                </div>
            )});
      
    	return(
             <div>
                <div className={styles.button} onClick={this.goBack}><Icon type="left" />Go Back</div>
                <Masonry
                  options={masonryOptions}
                  disableImagesLoaded={false} 
                  updateOnEachImageLoad={false} 
                >
                 {child}                      
                </Masonry>            
            </div>
    		)
    
}
}

//注意:mapStateToProps一定要写state.gallery.imagesLoadNumber,不能写state.imagesLoadNumber
//因为用了comnbineReducer后一定要加上对应reducer的key

const mapStateToProps = (state) => {
  return {
   imagesLoadNumber:state.gallery.imagesLoadNumber,
   renderTitle:state.gallery.renderTitle
}}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMoreImages: () => {
      dispatch(loadMoreImages());
    }, 
    resetImagesLoadNumber:() => {
      dispatch(resetImagesLoadNumber());
    },
    resetRenderTitle:() => {
      dispatch(resetRenderTitle());
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Album);

