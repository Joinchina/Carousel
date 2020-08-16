import React from "react";
import Carousel from './components/Carousel/index'

import air from './assets/airpods.png'
import ip from './assets/iphone.png'
import tab from './assets/tablet.png'

const imgUrl=[
  {
    img:air,
    title:'air标题',
    describe:'air描述',
    color:'#000',
    bgColor:'#f1f1f3'
  },
  {
    img:ip,
    title:'ip标题',
    describe:'ip描述',
    color:'#fff',
    bgColor:'#111111'
  },
  {
    img:tab,
    title:'tab标题',
    // describe:'tab描述',
    color:'#000',
    bgColor:'#fafafa'
  }
]
function App() {
  return <div className="App">
    <Carousel imgUrl={imgUrl}/>
  </div>;
}

export default App;
