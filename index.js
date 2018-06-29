import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter, Route } from 'react-router-dom'//react-router v4用法
//用HashRouter才能通过浏览器地址栏跳转，如果要用BroswerRouter要和服务器配合
//import { Router, Route, hashHistory} from 'react-router'，先前用法
import {Provider} from 'react-redux';
import store from './Store.js';
import TwiceLayout from './layout/layout.js';
import TwiceIntroduction from './introduction/introduction.js';
import TwiceGallery from './gallery/gallery.js';
import TwiceMusic from './music/music.js';
import TwiceVideo from './video/video.js';
import TwiceNews from './news/news.js';

//url和菜单选项匹配
var locationkey;
const location=window.location.href;
if(/introduction/.test(location))
  {locationkey='2'}
else if(/gallery/.test(location))
  {locationkey='3'}
else if(/music/.test(location))
  {locationkey='4'}
else if(/videos/.test(location))
  {locationkey='5'}
else
  {locationkey='1'}


//<TwiceLayout>是嵌套
// 根路径用exact，防止其他路径也匹配到根路径
const TwiceRoutes=()=>(
  <Provider store={store}>
  <HashRouter>
     <TwiceLayout itemSelected={locationkey}>       
        <Route path="/" exact component={TwiceNews}/>        
        <Route path="/introduction" component={TwiceIntroduction}/> 
        <Route path="/gallery" component={TwiceGallery}/>
        <Route path="/music" component={TwiceMusic}/>
        <Route path="/videos" component={TwiceVideo}/>
        <Route path="/news" component={TwiceNews}/>        
     </TwiceLayout>     
  </HashRouter>
</Provider>
  );

ReactDom.render(<TwiceRoutes/>,document.getElementById('root'));