import React, {Component}from 'react';
import ReactDom from 'react-dom';
import { Layout, Menu, Icon, Row, Col, } from 'antd';
import styles from './gallery.css'
import CoverPage from './cover/cover.js';
import Album from './album/album.js'
import {connect} from 'react-redux';
import {changeRenderTitle,resetRenderTitle,resetImagesLoadNumber,resetCurrentPage} from './actions.js';

// gallery模块有imagesLoadNumber和renderTitle两种state；

// TwiceGallery组件通过判断renderTitle来决定渲染CoverPage子组件还是Album子组件
// coverPage子组件中的每一个相册封面均对应一个renderTitle状态
// 当点击该封面时，触发state的renderTitle改变，然后渲染出具有不同图片内容的Album子组件

// imagesLoadNumber属于Album组件的state，初始值为1，代表打开Album时先加载10张图片
// 当浏览器滚动条滚动到底部时，触发imagesLoadNumber+1，加载下10张图片，直至全部加载完毕

class TwiceGallery extends Component{
	constructor(props){
		super(props);
	}
componentWillUnmount(){
     this.props.resetRenderTitle();//组件卸载时，把renderTitle重置为cover
     this.props.resetImagesLoadNumber();//组件卸载时，把imagesLoadNumber重置为1
     this.props.resetCurrentPage();//组件卸载时，把resetCurrentPage重置为1
  }
    render(){
        if(this.props.renderTitle=='cover')
    	{return(
    	<div>
         <div><h2 className={styles.title}>GALLERY</h2></div>                     
           <CoverPage/>   
         </div>
    		)}
     else{
        return(
         <div>
         <div><h2 className={styles.title}>GALLERY</h2></div>                     
           <Album/>    
         </div>
            )
     }
    }
}
const mapStateToProps = (state) => {
  return {
   renderTitle:state.gallery.renderTitle
}}

const mapDispatchToProps = (dispatch) => {
  return {
    changeRenderTitle: (title) => {
      dispatch(changeRenderTitle(title));
    },
    resetRenderTitle: () => {
      dispatch(resetRenderTitle());
    },
    resetImagesLoadNumber: () => {
      dispatch(resetImagesLoadNumber());
    },
    resetCurrentPage:() => {
      dispatch(resetCurrentPage());
    }
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(TwiceGallery);