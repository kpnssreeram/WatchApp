import React,{Component} from 'react';
import classes from './App.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';
import ProductData from './utils/ProductData';
class App extends Component {
  state={
    productData: ProductData,
    currentPreviewImagePos:0,
    currentSelectedFeature:0
  }

  oncolr=(pos)=>{
    const update=this.state.productData.colorOptions[pos].imageUrl
    console.log(update)
    this.setState({currentPreviewImagePos:pos})
  }
  onFeatureItemClick=(pos)=>{
    
    this.setState({currentSelectedFeature:pos})
  }

  render() {
    return (
    <div className="App">
        <Topbar/>
        {/* custom components */}
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl}
            currentSelectedFeature={this.state.currentSelectedFeature}  />
      </div>
      <div className={classes.ProductData}>
        <ProductDetails data={this.state.productData} oncolr={this.oncolr} currentPreviewImagePos={this.state.currentPreviewImagePos} 
        onFeatureItemClick={this.onFeatureItemClick}
        currentSelectedFeature={this.state.currentSelectedFeature}/>
      </div>
    </div>
    </div>
  );
}
}
export default App;
