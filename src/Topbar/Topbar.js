import React from "react";
import classes from "./Topbar.module.css";
const Topbar=()=>{
    return(
      <header>
        <nav className={classes.Topbar}>
          <img src="https://d1lss44hh2trtw.cloudfront.net/assets/article/2022/02/03/amazon-logo-02_feature.jpg" alt="amazon logo"/>
        </nav>
      </header>
    );
}
export default Topbar;