import React, {Component}from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import styles from './news.css';
import {List,Pagination} from 'antd';
import {changeCurrentPage,resetCurrentPage} from './actions.js';
import newsGroup from './newsGroup.json';

class TwiceNews extends Component{
	constructor(props){
		super(props); 
		this.onCurrentPageChange=this.onCurrentPageChange.bind(this);     
	}
	componentWillUnmount(){
     this.props.resetCurrentPage();
  }
    onCurrentPageChange(page,pageSize)
   {
    this.props.changeCurrentPage(page)
   }
  render(){
  	window.scrollTo(0,0)//每次渲染都回到顶部
  	const pageSize=5;
  	const len=newsGroup.news.length;
  	const news=newsGroup.news.slice(0,len);
  	var temp=news.reverse().slice((this.props.currentPage-1)*pageSize,this.props.currentPage*pageSize);
  	//截减新闻内容字数，限制到160字
    for(let i=0;i<temp.length;i++)
    {
    	if(temp[i].content.length>160)
    	{temp[i].content=temp[i].content.substring(0,160)+'...'}	
    }
  	const listdata=temp;
    return(
    	<div className={styles.newsContainer}>
    	<div><h2 className={styles.title}>NEWS</h2></div>
        <List
        itemLayout="vertical"
        size="default"
        dataSource={listdata}
        renderItem={item=>(
        	<List.Item
             key={item.id}
             extra={<div className={styles.img} style={{backgroundImage: "url("+require(""+item.images)+")"}}></div>}
        	>
        	<List.Item.Meta
        	title={<a href={item.href} target='_blank'>{item.title}</a>}
        	description={item.date}
        	/>
        	<div className={styles.newsContent}>{item.content}</div>
            </List.Item>
        	)} 
        />
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
   currentPage:state.news.currentPage
}}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentPage:(page) => {
      dispatch(changeCurrentPage(page));
    },
    resetCurrentPage:() => {
      dispatch(resetCurrentPage());
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(TwiceNews);


