import React, {Component}from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import styles from './videoitem.css';
import { Tabs,Row,Col,Icon } from 'antd';

class videoItem extends Component{
constructor(props){
		super(props);
	}
render(){ 
   return(               
           <div className={styles.container}>                  
            <a href={this.props.sourceLink} target="_blank">
            <img src={require(''+this.props.cover)} className={styles.videoCover}/>
            </a>
            <p className={styles.videoTitle}><a href={this.props.sourceLink} target="_blank">{this.props.title}</a></p>
            <p className={styles.videoTime}><Icon type='clock-circle-o'/>{this.props.duration}</p>
            </div>
    		)
    }
}


export default videoItem;
