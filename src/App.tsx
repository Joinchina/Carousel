import React from "react";
import Carousel from './components/Carousel/index'

import air from './assets/airpods.png'
import ip from './assets/iphone.png'
import tab from './assets/tablet.png'

const imgUrl=[air,ip,tab]
function App() {
  return <div className="App">
    <Carousel imgUrl={imgUrl}/>
  </div>;
}

export default App;
