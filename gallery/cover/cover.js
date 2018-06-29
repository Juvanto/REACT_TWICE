import React, {Component}from 'react';
import ReactDom from 'react-dom';
import {Row, Col,Pagination} from 'antd';
import styles from './cover.css';
import {changeRenderTitle,changeCurrentPage,resetCurrentPage} from '../actions.js';
import {connect} from 'react-redux';
import coverGroup from './coverGroup.json';//相册封面数据储存在json

class Cover extends Component{
	constructor(props){
		super(props);
    this.enterAlbum = this.enterAlbum.bind(this);
    this.onCurrentPageChange=this.onCurrentPageChange.bind(this);
	}
  enterAlbum(title){
   this.props.changeRenderTitle(title);
  }

  onCurrentPageChange(page,pageSize)
   {
    this.props.changeCurrentPage(page)
   }
  render(){
   let pageSize=12;//每页显示12个相册;
   let len=coverGroup.cover.length;
   let listdata=coverGroup.cover.slice((this.props.currentPage-1)*pageSize,this.props.currentPage*pageSize);
   let list=listdata.map(
            (item)=>(        
            <Col span={6} key={item.id}>
            <div className={styles.cover}> 
                <div className={styles.coverImg} 
                     style={{backgroundImage: "url('"+require(''+item.image)+"')"}}
                     onClick={this.enterAlbum.bind(this,item.title)}>{/* <=用这种方法获取当前点击的dom元素 */}
                </div>
                <div className={styles.title}>{item.title}</div>
            </div>    
            </Col>
              )
             )
    	return(
    	  <div className={styles.coverContainer}>         
            <Row gutter={16}>
              	{list}
            </Row>
            <Pagination
            className={styles.pag}                       
            defaultPageSize={pageSize}
            current={this.props.currentPage}
            onChange={this.onCurrentPageChange}
            total={len} 
            />            
        </div>
    		)
    }
}

const mapStateToProps = (state) => {
  return {
   currentPage:state.gallery.currentPage
}}


const mapDispatchToProps = (dispatch) => {
  return {
    changeRenderTitle: (title) => {
      dispatch(changeRenderTitle(title));
    },
    changeCurrentPage:(page) => {
      dispatch(changeCurrentPage(page));
    },
    resetCurrentPage:() => {
      dispatch(resetCurrentPage());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cover);