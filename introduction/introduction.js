import React, {Component}from 'react';
import ReactDom from 'react-dom';
import { Layout, Menu, Icon, Row, Col, Table} from 'antd';
import styles from './introduction.css';
import {HashRouter, Route,Switch } from 'react-router-dom';


//子组件
class IntroCell extends Component{
	constructor(props){
		super(props);
	}
    render(){
    return(    
             <div className={styles.container}>	       
               <Row gutter={16}>
                  <Col span={10} className={styles.leftCol}>
                      <img src={require(''+this.props.introImage)} className={styles.introImage}/>
                  </Col>
                  <Col span={14}>
                     <Table columns={this.props.inforCol} 
                            dataSource={this.props.inforData} 
                            showHeader={false}
                            pagination={false}
                            className={styles.table}                           
                      />
                  </Col>
               </Row>
             </div>   
    		)
    }
}


const columns = [{
  title: 'Item',
  dataIndex: 'item',
  key: 'item',
  className:styles.inforItem},
  {
  title: 'Content',
  dataIndex: 'content',
  key: 'content',
  className:styles.inforContent}
  ];

const group={id:'0',
	         image:"./images/all.jpg",
	         columns:columns,
	         infor:[{key:'1',item:'团名',content:'TWICE'},
                    {key:'2',item:'国籍',content:'韩国、日本、中国'},
                    {key:'3',item:'经纪公司',content:'JYP Entertainment'},
                    {key:'4',item:'韩国唱片公司',content:'iRiver'},
                    {key:'5',item:'日本唱片公司',content:'华纳音乐'},
                    {key:'6',item:'韩国出道日期',content:'2015年10月20日'},
                    {key:'7',item:'日本出道日期',content:'2017年6月28日'},
                    {key:'8',item:'粉丝名',content:'ONCE'}]
             };
const member1={id:'1',
	           image:"./images/nayeon.jpg",
	           columns:columns,
	           infor:[{key:'1',item:'中文名',content:'林娜琏'},
                      {key:'2',item:'外文名',content:'임나연,Lim NaYeon'},
                      {key:'3',item:'国籍',content:'韩国'},
                      {key:'4',item:'出生地',content:'首尔特别市江东区'},
                      {key:'5',item:'出生日期',content:'1995年9月22日'},
                      {key:'6',item:'血型',content:'A型'},
                      {key:'7',item:'星座',content:'处女座'},
                      {key:'8',item:'身高',content:'165cm'},
                      {key:'9',item:'体重',content:'45kg'},
                      {key:'10',item:'队内担当',content:'主唱、形象担当'}]
             };             
const member2={id:'2',
	           image:"./images/jeongyeon.jpg",
	           columns:columns,
	           infor:[{key:'1',item:'中文名',content:'俞定延'},
                      {key:'2',item:'外文名',content:'유정연,Yoo JungYeon'},
                      {key:'3',item:'国籍',content:'韩国'},
                      {key:'4',item:'出生地',content:'韩国水原市'},
                      {key:'5',item:'出生日期',content:'1996年11月1日'},
                      {key:'6',item:'血型',content:'O型'},
                      {key:'7',item:'星座',content:'天蝎座'},
                      {key:'8',item:'身高',content:'167cm'},
                      {key:'9',item:'体重',content:'45kg'},
                      {key:'10',item:'队内担当',content:'第三主唱'}]
             };  
const member3={id:'3',
	           image:"./images/momo.jpg",
	           columns:columns,
	           infor:[{key:'1',item:'中文名',content:'平井桃'},
                      {key:'2',item:'外文名',content:'ひらい もも,히라이 모모,Hirai Momo'},
                      {key:'3',item:'国籍',content:'日本'},
                      {key:'4',item:'出生地',content:'日本京都市'},
                      {key:'5',item:'出生日期',content:'1996年11月9日'},
                      {key:'6',item:'血型',content:'B型'},
                      {key:'7',item:'星座',content:'天蝎座'},
                      {key:'8',item:'身高',content:'164cm'},
                      {key:'9',item:'体重',content:'46kg'},
                      {key:'10',item:'队内担当',content:'主领舞'}]
             }; 
const member4={id:'4',
	           image:"./images/sana.jpg",
	           columns:columns,
	           infor:[{key:'1',item:'中文名',content:'凑崎纱夏'},
                      {key:'2',item:'外文名',content:'みなとざき さな,미나토자키 사나,Minatozaki Sana'},
                      {key:'3',item:'国籍',content:'日本'},
                      {key:'4',item:'出生地',content:'日本大阪市'},
                      {key:'5',item:'出生日期',content:'1996年12月29日'},
                      {key:'6',item:'血型',content:'B型'},
                      {key:'7',item:'星座',content:'摩羯座'},
                      {key:'8',item:'身高',content:'166cm'},
                      {key:'9',item:'体重',content:'48kg'},
                      {key:'10',item:'队内担当',content:'副主唱'}]
             };              
const member5={id:'5',
	           image:"./images/jihyo.jpg",
	           columns:columns,
	           infor:[{key:'1',item:'中文名',content:'朴志效'},
                      {key:'2',item:'外文名',content:'박지효,Park JiHyo'},
                      {key:'3',item:'国籍',content:'韩国'},
                      {key:'4',item:'出生地',content:'韩国京畿道'},
                      {key:'5',item:'出生日期',content:'1997年2月1日'},
                      {key:'6',item:'血型',content:'O型'},
                      {key:'7',item:'星座',content:'水瓶座'},
                      {key:'8',item:'身高',content:'163cm'},
                      {key:'9',item:'体重',content:'48kg'},
                      {key:'10',item:'队内担当',content:'队长,主唱'}]
             };
const member6={id:'6',
	           image:"./images/mina.jpg",
	           columns:columns,
	           infor:[{key:'1',item:'中文名',content:'名井南'},
                      {key:'2',item:'外文名',content:'みょうい みな,묘이 미나,Myoi Mina'},
                      {key:'3',item:'国籍',content:'日本'},
                      {key:'4',item:'出生地',content:'美国德州圣安东尼奥'},
                      {key:'5',item:'出生日期',content:'1997年3月24日'},
                      {key:'6',item:'血型',content:'A型'},
                      {key:'7',item:'星座',content:'白羊座'},
                      {key:'8',item:'身高',content:'165cm'},
                      {key:'9',item:'体重',content:'45kg'},
                      {key:'10',item:'队内担当',content:'领舞,副主唱'}]
             };
const member7={id:'7',
	           image:"./images/dahyun.jpg",
	           columns:columns,
	           infor:[{key:'1',item:'中文名',content:'金多贤'},
                      {key:'2',item:'外文名',content:'김다현,Kim DaHyun'},
                      {key:'3',item:'国籍',content:'韩国'},
                      {key:'4',item:'出生地',content:'韩国京畿道'},
                      {key:'5',item:'出生日期',content:'1998年5月28日'},
                      {key:'6',item:'血型',content:'O型'},
                      {key:'7',item:'星座',content:'双子座'},
                      {key:'8',item:'身高',content:'162cm'},
                      {key:'9',item:'体重',content:'43kg'},
                      {key:'10',item:'队内担当',content:'副Rapper'}]
             };
const member8={id:'8',
	           image:"./images/chaeyoung.jpg",
	           columns:columns,
	           infor:[{key:'1',item:'中文名',content:'孙彩瑛'},
                      {key:'2',item:'外文名',content:'손채영,Son ChaeYoung'},
                      {key:'3',item:'国籍',content:'韩国'},
                      {key:'4',item:'出生地',content:'首尔特别市江东区'},
                      {key:'5',item:'出生日期',content:'1999年4月23日'},
                      {key:'6',item:'血型',content:'B型'},
                      {key:'7',item:'星座',content:'金牛座'},
                      {key:'8',item:'身高',content:'162cm'},
                      {key:'9',item:'体重',content:'42kg'},
                      {key:'10',item:'队内担当',content:'主Rapper,忙内'}]
             };
const member9={id:'9',
	           image:"./images/tzuyu.jpg",
	           columns:columns,
	           infor:[{key:'1',item:'中文名',content:'周子瑜'},
                      {key:'2',item:'外文名',content:'쯔위,Tzuyu'},
                      {key:'3',item:'国籍',content:'中国'},
                      {key:'4',item:'出生地',content:'台湾省台南市'},
                      {key:'5',item:'出生日期',content:'1999年6月14日'},
                      {key:'6',item:'血型',content:'A型'},
                      {key:'7',item:'星座',content:'双子座'},
                      {key:'8',item:'身高',content:'172cm'},
                      {key:'9',item:'体重',content:'50kg'},
                      {key:'10',item:'队内担当',content:'门面,忙内,副主唱,身高担当'}]
             };   

const data=[group,member1,member2,member3,member4,member5,member6,member7,member8,member9];

class TwiceIntroduction extends Component{
	constructor(props){
		super(props);
	}
  render(){
      let list=data.map(
            (item)=>(
            <IntroCell key={item.id}
                       introImage={item.image}
                       inforCol={item.columns}
                       inforData={item.infor}/>
            )
          )
      
   return(
         <div>
           <h1 className={styles.title}>PROFILE</h1>
              {list}
         </div>
    		)
    }
}

export default TwiceIntroduction;


