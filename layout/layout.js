import React, {Component}from 'react';
import ReactDom from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import styles from './layout.css';
import { BrowserRouter, Route,Link } from 'react-router-dom'
const { Header, Content, Footer, Sider } = Layout;

class TwiceLayout extends Component{
	constructor(props){
		super(props);
	}
    render(){
    	return(
    <Layout>
    <Header className={styles.header}>
      <div  className={styles.headerContent}></div>
    </Header>
    <Content className={styles.content}>     
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[this.props.itemSelected]}
            style={{ height: '100%' }}
          >            
              <Menu.Item key="1"><Link to='/news'><Icon type="smile-o" />动态</Link></Menu.Item>
              <Menu.Item key="2"><Link to='/introduction'><Icon type="user" />简介</Link></Menu.Item>
              <Menu.Item key="3"><Link to='/gallery'><Icon type="picture" />图片</Link></Menu.Item>
              <Menu.Item key="4"><Link to='/music'><Icon type="sound" />音乐</Link></Menu.Item>  
              <Menu.Item key="5"><Link to='/videos'><Icon type="video-camera" />视频</Link></Menu.Item>          
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 500 }}>
         {this.props.children}  
        </Content>
      </Layout>
    </Content>
    <Footer className={styles.footer}>
        <h1>- Welcome To TwiceLand -</h1>
    </Footer>
  </Layout> 
    		)
    }
}

export default TwiceLayout;