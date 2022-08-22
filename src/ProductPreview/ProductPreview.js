import React from "react";
import classes from "./ProductPreview.module.css";

const ProductPreview=(props)=>{
    return(
        <div className={classes.ProductPreview}>
        <img src={props.currentPreviewImage} alt="Product Preview"/>
        {
            props.currentSelectedFeature===1?
            <div className={classes.HeartBeatSection}>
              <i className="fas fa-heartbeat"></i>
              <p>78</p>
            </div>
            :
            <div className={classes.TimeSection}>
                <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
            </div>
        }  
    </div>
    );
}
export default ProductPreview;