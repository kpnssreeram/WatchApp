import React from 'react';
import classes from './ProductDetails.module.css';
const ProductDetails=(props)=>{
  const colorOptions=props.data.colorOptions.map((item,pos)=>{
    const classArr=[classes.ProductImage]
    if(pos===props.currentPreviewImagePos){
      classArr.push(classes.SelectedProductImage);
    }
    return(
      <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} 
      onClick={()=>props.oncolr(pos)} />
    );
  })
  const featureList=props.data.featureList.map((item,pos)=>{
    const classArr=[classes.FeatureItem];
    if(pos===1&&props.currentSelectedFeature){
      classArr.push(classes.SelectedFeatureItem);
    }
    return(
      <button onClick={()=>props.onFeatureItemClick(pos)} key={pos} className={classArr.join(' ')}>{item}</button>
    )
  })
    return (
        <div className={classes.ProductDetails}>
          <h1 className={classes.ProductTitle}>{props.data.title}</h1>
          <p className={classes.ProductDescription}>{props.data.description}</p>
          <h3 className={classes.SectionHeading}>Select color</h3>
          <div>
            {colorOptions}
          </div>
          <h3 className={classes.SectionHeading}>Features</h3>
          <div>{featureList}</div>
        <a href="https://www.google.com/"><button className={classes.PrimaryButton}>Buy Now</button></a>
      </div>
    );

}
export default ProductDetails;