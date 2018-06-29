import React, {Component}from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import styles from './video.css';
import { Tabs,Row,Col,Pagination } from 'antd';
import VideoItem from './videoitem/videoitem.js';
import videoGroup from './videoGroup.json';
import {changeTab,resetTab,changeCurrentPage,resetCurrentPage} from './actions.js';

const TabPane = Tabs.TabPane;
var videoTabs=["musicvideo","live","variety","others"];
var videoObject={
    "musicvideo":[],
    "live":[],
    "variety":[],
    "others":[]
}

class TwiceVideo extends Component{
	constructor(props){
		super(props);
        this.onTabChange=this.onTabChange.bind(this);
        this.onCurrentPageChange=this.onCurrentPageChange.bind(this);
	}
componentWillUnmount(){
     this.props.resetCurrentPage();
     this.props.resetTab();
  }
onTabChange(activeKey)
{
    this.props.changeTab(activeKey);
    this.props.resetCurrentPage();
}
onCurrentPageChange(page,pageSize)
{
    this.props.changeCurrentPage(page)
}
render(){
for(let i=0;i<videoTabs.length;i++)
    {if(videoTabs[i]==this.props.currentTab)
     {let len=videoGroup[this.props.currentTab].length;  
      let tempgroup=videoGroup[this.props.currentTab].slice(0,len);
      videoObject[this.props.currentTab]=tempgroup.reverse().slice((this.props.currentPage-1)*12,this.props.currentPage*12).map(
        (item)=>(
        <Col span={6} key={item.id}>
            <VideoItem  
             title={item.title}
             cover={item.cover}
             sourceLink={item.sourcelink}
             duration={item.duration}
            />
        </Col>
            )
        )
     }
     }
   return(
    <div className={styles.videoContainer}>
    <h1 className={styles.title}>VIDEO</h1>
    <Tabs activeKey={this.props.currentTab} onChange={this.onTabChange}>
        <TabPane tab="MV" key="musicvideo">
           <Row gutter={16} type="flex">  {/*一定要加上type="flex"，不然会向右对齐，原因未知*/} 
                {videoObject.musicvideo}    
           </Row>
           <Pagination
            className={styles.pag}            
            current={this.props.currentPage}
            defaultPageSize={12}
            onChange={this.onCurrentPageChange}            
            total={videoGroup.musicvideo.length} 
            hideOnSinglePage={false}/>
        </TabPane>

        <TabPane tab="现场" key="live">
            <Row gutter={16} type="flex">  
               {videoObject.live}    
            </Row>
            <Pagination
            className={styles.pag} 
            defaultCurrent={1}
            defaultPageSize={12} 
            total={videoGroup.live.length} 
            hideOnSinglePage={false}/>
        </TabPane>

        <TabPane tab="综艺" key="variety">
            <Row gutter={16} type="flex">  
                {videoObject.variety}    
            </Row>
            <Pagination
            className={styles.pag} 
            defaultCurrent={1}
            defaultPageSize={12} 
            total={videoGroup.variety.length} 
            hideOnSinglePage={false}/>
        </TabPane>

        <TabPane tab="其他" key="others">
            <Row gutter={16} type="flex">   
               {videoObject.others}    
            </Row>
            <Pagination
            className={styles.pag} 
            defaultCurrent={1}
            defaultPageSize={12} 
            total={videoGroup.others.length} 
            hideOnSinglePage={false}/>
        </TabPane>

    </Tabs>   
    </div>
    		)
    }
}


const mapStateToProps = (state) => {
  return {
   currentPage:state.video.currentPage,
   currentTab:state.video.currentTab
}}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTab:(key) => {
      dispatch(changeTab(key));
    },
    resetTab:() => {
      dispatch(resetTab());
    }, 
    changeCurrentPage:(page) => {
      dispatch(changeCurrentPage(page));
    },
    resetCurrentPage:() => {
      dispatch(resetCurrentPage());
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(TwiceVideo);

