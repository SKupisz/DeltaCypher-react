import React from 'react';
import Letters from "./loading/js/components/firstAnimation.jsx";
import SecondSlide from "./loading/js/components/secondSlide.jsx";
import MainSite from "./loading/js/components/finalSite.jsx";
import "./loading/css/main.scss";
import "./loading/css/secondStage.scss";
import "./loading/css/final.scss";
function App() {
  return (
    <div className="App">
      <Letters/>
      <SecondSlide/>
      <MainSite/>
    </div>
  );
}
export default App;
