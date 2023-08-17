import React from "react";
import { preLoaderAnim } from "../assets/animations";
import "./Splash.css";

const Splash = () => {
  React.useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>bus</span>
        <span>tracking.</span>
      </div>
    </div>
  );
};

export default Splash;
